/**
 * Hotmart Checkout Widget Helper
 * Loads Hotmart's official widget script and styles dynamically
 * to allow opening modal popup checkouts (checkoutMode=2) or triggering the widget directly.
 */

let isScriptLoaded = false;
let isScriptLoading = false;
const loadCallbacks: Array<() => void> = [];

export function initHotmartWidget(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    // If already loaded and initialized
    if (isScriptLoaded || (window as any).HotmartCheckout || (window as any).hotmart) {
      resolve();
      return;
    }

    loadCallbacks.push(resolve);

    if (isScriptLoading) {
      return;
    }

    isScriptLoading = true;

    // 1. Inject Stylesheet if not present
    if (!document.querySelector('link[href*="hotmart-fb.min.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
      document.head.appendChild(link);
    }

    // 2. Inject Script if not present
    if (!document.querySelector('script[src*="checkout/widget.min.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://static.hotmart.com/checkout/widget.min.js';
      script.async = true;
      script.onload = () => {
        isScriptLoaded = true;
        isScriptLoading = false;
        loadCallbacks.forEach((cb) => cb());
        loadCallbacks.length = 0;
      };
      script.onerror = () => {
        isScriptLoading = false;
        loadCallbacks.forEach((cb) => cb());
        loadCallbacks.length = 0;
      };
      document.head.appendChild(script);
    } else {
      isScriptLoaded = true;
      isScriptLoading = false;
      loadCallbacks.forEach((cb) => cb());
      loadCallbacks.length = 0;
    }
  });
}

/**
 * Triggers Hotmart Checkout Modal (or fallback to new tab).
 * Matches user's exact widget configuration:
 * URL: https://pay.hotmart.com/V102119673D?checkoutMode=2
 */
export function triggerHotmartCheckout(
  checkoutBaseUrl: string = 'https://pay.hotmart.com/V102119673D',
  params: { src?: string; utm_source?: string } = {}
): void {
  // Ensure the widget scripts are injected
  initHotmartWidget();

  // Parse URL and enforce checkoutMode=2 for the official Hotmart modal widget
  let finalUrl = checkoutBaseUrl;
  try {
    const url = new URL(checkoutBaseUrl);
    url.searchParams.set('checkoutMode', '2');
    if (params.src) {
      url.searchParams.set('src', params.src);
    }
    if (params.utm_source) {
      url.searchParams.set('utm_source', params.utm_source);
    }
    finalUrl = url.toString();
  } catch {
    const separator = checkoutBaseUrl.includes('?') ? '&' : '?';
    const srcParam = params.src ? `&src=${encodeURIComponent(params.src)}` : '';
    finalUrl = `${checkoutBaseUrl}${separator}checkoutMode=2${srcParam}`;
  }

  // Find or create the official Hotmart anchor element with class "hotmart-fb hotmart__button-checkout"
  let anchor = document.getElementById('hotmart-hidden-widget-trigger') as HTMLAnchorElement | null;
  if (!anchor) {
    anchor = document.createElement('a');
    anchor.id = 'hotmart-hidden-widget-trigger';
    anchor.className = 'hotmart-fb hotmart__button-checkout';
    anchor.style.position = 'fixed';
    anchor.style.left = '-9999px';
    anchor.style.top = '-9999px';
    anchor.style.opacity = '0';
    anchor.style.pointerEvents = 'none';
    anchor.setAttribute('onclick', 'return false;');
    document.body.appendChild(anchor);
  }

  anchor.href = finalUrl;

  // Simulate click on the official widget anchor
  setTimeout(() => {
    if (anchor) {
      anchor.click();
    }
  }, 50);
}

const rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

const msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

const supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function cssFunction(node, property) {
  let css = '';
  let transforms = '';
  if (typeof property === 'string') {
    return (
      node.style.getPropertyValue(hyphenateStyleName(property)) ||
      getComputedStyle(node).getPropertyValue(hyphenateStyleName(property))
    );
  }
  Object.keys(property).forEach(key => {
    const value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += `${key}(${value}) `;
    } else {
      css += `${hyphenateStyleName(key)}: ${value};`;
    }
  });
  if (transforms) {
    css += `transform: ${transforms};`;
  }
  node.style.cssText += `;${css}`;
}

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

let optionsSupported = false;
let onceSupported = false;
try {
  const options = {
    get passive() {
      return (optionsSupported = true);
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return (onceSupported = optionsSupported = true);
    }
  };
  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    const { once, capture } = options;
    let wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler =
        handler.__once ||
        function onceHandler(event) {
          this.removeEventListener(eventName, onceHandler, capture);
          handler.call(this, event);
        };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(
      eventName,
      wrappedHandler,
      optionsSupported ? options : capture
    );
  }
  node.addEventListener(eventName, handler, options);
}

function removeEventListener(node, eventName, handler, options) {
  const capture =
    options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return () => {
    removeEventListener(node, eventName, handler, options);
  };
}

function triggerEvent(node, eventName, bubbles = false, cancelable = true) {
  if (node) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDurationFromTransitionEnd(node) {
  const str = cssFunction(node, 'transitionDuration') || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding = 5) {
  let called = false;
  const handle = setTimeout(() => {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  const remove = listen(
    element,
    'transitionend',
    () => {
      called = true;
    },
    {
      once: true
    }
  );
  return () => {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDurationFromTransitionEnd(element) || 0;
  const removeEmulate = emulateTransitionEnd(element, duration, padding);
  const remove = listen(element, 'transitionend', handler);
  return () => {
    removeEmulate();
    remove();
  };
}

function parseDuration(node, property) {
  const str = node.style.getPropertyValue(property);
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

export default function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transition-duration');
  const delay = parseDuration(element, 'transition-delay');
  const remove = transitionEnd(
    element,
    e => {
      if (e.target === element) {
        remove();
        handler(e);
      }
    },
    duration + delay
  );
}

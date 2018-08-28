/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

;/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});
;// https://d3js.org/d3-color/ v1.2.3 Copyright 2018 Mike Bostock
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.d3=t.d3||{})}(this,function(t){"use strict";function e(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function n(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function i(){}var r="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",h="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3})$/,o=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[r,r,r]+"\\)$"),u=new RegExp("^rgb\\("+[h,h,h]+"\\)$"),c=new RegExp("^rgba\\("+[r,r,r,a]+"\\)$"),g=new RegExp("^rgba\\("+[h,h,h,a]+"\\)$"),d=new RegExp("^hsl\\("+[a,h,h]+"\\)$"),p=new RegExp("^hsla\\("+[a,h,h,a]+"\\)$"),f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(t){var e;return t=(t+"").trim().toLowerCase(),(e=s.exec(t))?new N((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=o.exec(t))?y(parseInt(e[1],16)):(e=l.exec(t))?new N(e[1],e[2],e[3],1):(e=u.exec(t))?new N(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=c.exec(t))?w(e[1],e[2],e[3],e[4]):(e=g.exec(t))?w(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=d.exec(t))?v(e[1],e[2]/100,e[3]/100,1):(e=p.exec(t))?v(e[1],e[2]/100,e[3]/100,e[4]):f.hasOwnProperty(t)?y(f[t]):"transparent"===t?new N(NaN,NaN,NaN,0):null}function y(t){return new N(t>>16&255,t>>8&255,255&t,1)}function w(t,e,n,i){return i<=0&&(t=e=n=NaN),new N(t,e,n,i)}function m(t){return t instanceof i||(t=b(t)),t?new N((t=t.rgb()).r,t.g,t.b,t.opacity):new N}function k(t,e,n,i){return 1===arguments.length?m(t):new N(t,e,n,null==i?1:i)}function N(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function M(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function v(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new q(t,e,n,i)}function x(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof q)return new q(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=b(t)),!t)return new q;if(t instanceof q)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),h=Math.max(e,n,r),s=NaN,o=h-a,l=(h+a)/2;return o?(s=e===h?(n-r)/o+6*(n<r):n===h?(r-e)/o+2:(e-n)/o+4,o/=l<.5?h+a:2-h-a,s*=60):o=l>0&&l<1?0:s,new q(s,o,l,t.opacity)}(t):new q(t,e,n,null==r?1:r)}function q(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function E(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}e(i,b,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),e(N,k,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new N(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new N(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+M(this.r)+M(this.g)+M(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),e(q,x,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new q(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new q(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new N(E(t>=240?t-240:t+120,r,i),E(t,r,i),E(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var $=Math.PI/180,R=180/Math.PI,j=.96422,I=1,P=.82521,O=4/29,S=6/29,_=3*S*S,z=S*S*S;function C(t){if(t instanceof A)return new A(t.l,t.a,t.b,t.opacity);if(t instanceof K){if(isNaN(t.h))return new A(t.l,0,0,t.opacity);var e=t.h*$;return new A(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof N||(t=m(t));var n,i,r=G(t.r),a=G(t.g),h=G(t.b),s=B((.2225045*r+.7168786*a+.0606169*h)/I);return r===a&&a===h?n=i=s:(n=B((.4360747*r+.3850649*a+.1430804*h)/j),i=B((.0139322*r+.0971045*a+.7141733*h)/P)),new A(116*s-16,500*(n-s),200*(s-i),t.opacity)}function L(t,e,n,i){return 1===arguments.length?C(t):new A(t,e,n,null==i?1:i)}function A(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}function B(t){return t>z?Math.pow(t,1/3):t/_+O}function D(t){return t>S?t*t*t:_*(t-O)}function F(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function G(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function H(t){if(t instanceof K)return new K(t.h,t.c,t.l,t.opacity);if(t instanceof A||(t=C(t)),0===t.a&&0===t.b)return new K(NaN,0,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*R;return new K(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function J(t,e,n,i){return 1===arguments.length?H(t):new K(t,e,n,null==i?1:i)}function K(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}e(A,L,n(i,{brighter:function(t){return new A(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new A(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new N(F(3.1338561*(e=j*D(e))-1.6168667*(t=I*D(t))-.4906146*(n=P*D(n))),F(-.9787684*e+1.9161415*t+.033454*n),F(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),e(K,J,n(i,{brighter:function(t){return new K(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new K(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return C(this).rgb()}}));var Q=-.14861,T=1.78277,U=-.29227,V=-.90649,W=1.97294,X=W*V,Y=W*T,Z=T*U-V*Q;function tt(t,e,n,i){return 1===arguments.length?function(t){if(t instanceof et)return new et(t.h,t.s,t.l,t.opacity);t instanceof N||(t=m(t));var e=t.r/255,n=t.g/255,i=t.b/255,r=(Z*i+X*e-Y*n)/(Z+X-Y),a=i-r,h=(W*(n-r)-U*a)/V,s=Math.sqrt(h*h+a*a)/(W*r*(1-r)),o=s?Math.atan2(h,a)*R-120:NaN;return new et(o<0?o+360:o,s,r,t.opacity)}(t):new et(t,e,n,null==i?1:i)}function et(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}e(et,tt,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new et(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new et(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*$,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),i=Math.cos(t),r=Math.sin(t);return new N(255*(e+n*(Q*i+T*r)),255*(e+n*(U*i+V*r)),255*(e+n*(W*i)),this.opacity)}})),t.color=b,t.rgb=k,t.hsl=x,t.lab=L,t.hcl=J,t.lch=function(t,e,n,i){return 1===arguments.length?H(t):new K(n,e,t,null==i?1:i)},t.gray=function(t,e){return new A(t,0,0,null==e?1:e)},t.cubehelix=tt,Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-dispatch/ v1.0.5 Copyright 2018 Mike Bostock
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.d3=n.d3||{})}(this,function(n){"use strict";var e={value:function(){}};function t(){for(var n,e=0,t=arguments.length,o={};e<t;++e){if(!(n=arguments[e]+"")||n in o)throw new Error("illegal type: "+n);o[n]=[]}return new r(o)}function r(n){this._=n}function o(n,e){for(var t,r=0,o=n.length;r<o;++r)if((t=n[r]).name===e)return t.value}function i(n,t,r){for(var o=0,i=n.length;o<i;++o)if(n[o].name===t){n[o]=e,n=n.slice(0,o).concat(n.slice(o+1));break}return null!=r&&n.push({name:t,value:r}),n}r.prototype=t.prototype={constructor:r,on:function(n,e){var t,r,f=this._,l=(r=f,(n+"").trim().split(/^|\s+/).map(function(n){var e="",t=n.indexOf(".");if(t>=0&&(e=n.slice(t+1),n=n.slice(0,t)),n&&!r.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:e}})),a=-1,u=l.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<u;)if(t=(n=l[a]).type)f[t]=i(f[t],n.name,e);else if(null==e)for(t in f)f[t]=i(f[t],n.name,null);return this}for(;++a<u;)if((t=(n=l[a]).type)&&(t=o(f[t],n.name)))return t},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new r(n)},call:function(n,e){if((t=arguments.length-2)>0)for(var t,r,o=new Array(t),i=0;i<t;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(i=0,t=(r=this._[n]).length;i<t;++i)r[i].value.apply(e,o)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,i=r.length;o<i;++o)r[o].value.apply(e,t)}},n.dispatch=t,Object.defineProperty(n,"__esModule",{value:!0})});

;// https://d3js.org/d3-ease/ v1.0.5 Copyright 2018 Mike Bostock
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.d3=n.d3||{})}(this,function(n){"use strict";function t(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function e(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var u=function n(t){function e(n){return Math.pow(n,t)}return t=+t,e.exponent=n,e}(3),r=function n(t){function e(n){return 1-Math.pow(1-n,t)}return t=+t,e.exponent=n,e}(3),a=function n(t){function e(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}return t=+t,e.exponent=n,e}(3),o=Math.PI,i=o/2;function c(n){return(1-Math.cos(o*n))/2}function s(n){return((n*=2)<=1?Math.pow(2,10*n-10):2-Math.pow(2,10-10*n))/2}function f(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}var h=4/11,p=6/11,M=8/11,d=.75,I=9/11,O=10/11,l=.9375,x=21/22,w=63/64,v=1/h/h;function m(n){return(n=+n)<h?v*n*n:n<M?v*(n-=p)*n+d:n<O?v*(n-=I)*n+l:v*(n-=x)*n+w}var y=function n(t){function e(n){return n*n*((t+1)*n-t)}return t=+t,e.overshoot=n,e}(1.70158),B=function n(t){function e(n){return--n*n*((t+1)*n+t)+1}return t=+t,e.overshoot=n,e}(1.70158),C=function n(t){function e(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}return t=+t,e.overshoot=n,e}(1.70158),E=2*Math.PI,P=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return t*Math.pow(2,10*--n)*Math.sin((u-n)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),b=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return 1-t*Math.pow(2,-10*(n=+n))*Math.sin((n+u)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),k=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return((n=2*n-1)<0?t*Math.pow(2,10*n)*Math.sin((u-n)/e):2-t*Math.pow(2,-10*n)*Math.sin((u+n)/e))/2}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3);n.easeLinear=function(n){return+n},n.easeQuad=t,n.easeQuadIn=function(n){return n*n},n.easeQuadOut=function(n){return n*(2-n)},n.easeQuadInOut=t,n.easeCubic=e,n.easeCubicIn=function(n){return n*n*n},n.easeCubicOut=function(n){return--n*n*n+1},n.easeCubicInOut=e,n.easePoly=a,n.easePolyIn=u,n.easePolyOut=r,n.easePolyInOut=a,n.easeSin=c,n.easeSinIn=function(n){return 1-Math.cos(n*i)},n.easeSinOut=function(n){return Math.sin(n*i)},n.easeSinInOut=c,n.easeExp=s,n.easeExpIn=function(n){return Math.pow(2,10*n-10)},n.easeExpOut=function(n){return 1-Math.pow(2,-10*n)},n.easeExpInOut=s,n.easeCircle=f,n.easeCircleIn=function(n){return 1-Math.sqrt(1-n*n)},n.easeCircleOut=function(n){return Math.sqrt(1- --n*n)},n.easeCircleInOut=f,n.easeBounce=m,n.easeBounceIn=function(n){return 1-m(1-n)},n.easeBounceOut=m,n.easeBounceInOut=function(n){return((n*=2)<=1?1-m(1-n):m(n-1)+1)/2},n.easeBack=C,n.easeBackIn=y,n.easeBackOut=B,n.easeBackInOut=C,n.easeElastic=b,n.easeElasticIn=P,n.easeElasticOut=b,n.easeElasticInOut=k,Object.defineProperty(n,"__esModule",{value:!0})});

;// https://d3js.org/d3-interpolate/ v1.3.2 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-color"],n):n(t.d3=t.d3||{},t.d3)}(this,function(t,n){"use strict";function r(t,n,r,e,o){var a=t*t,u=a*t;return((1-3*t+3*a-u)*n+(4-6*a+3*u)*r+(1+3*t+3*a-3*u)*e+u*o)/6}function e(t){var n=t.length-1;return function(e){var o=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),a=t[o],u=t[o+1],i=o>0?t[o-1]:2*a-u,l=o<n-1?t[o+2]:2*u-a;return r((e-o/n)*n,i,a,u,l)}}function o(t){var n=t.length;return function(e){var o=Math.floor(((e%=1)<0?++e:e)*n),a=t[(o+n-1)%n],u=t[o%n],i=t[(o+1)%n],l=t[(o+2)%n];return r((e-o/n)*n,a,u,i,l)}}function a(t){return function(){return t}}function u(t,n){return function(r){return t+r*n}}function i(t,n){var r=n-t;return r?u(t,r>180||r<-180?r-360*Math.round(r/360):r):a(isNaN(t)?n:t)}function l(t){return 1==(t=+t)?c:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):a(isNaN(n)?r:n)}}function c(t,n){var r=n-t;return r?u(t,r):a(isNaN(t)?n:t)}var f=function t(r){var e=l(r);function o(t,r){var o=e((t=n.rgb(t)).r,(r=n.rgb(r)).r),a=e(t.g,r.g),u=e(t.b,r.b),i=c(t.opacity,r.opacity);return function(n){return t.r=o(n),t.g=a(n),t.b=u(n),t.opacity=i(n),t+""}}return o.gamma=t,o}(1);function s(t){return function(r){var e,o,a=r.length,u=new Array(a),i=new Array(a),l=new Array(a);for(e=0;e<a;++e)o=n.rgb(r[e]),u[e]=o.r||0,i[e]=o.g||0,l[e]=o.b||0;return u=t(u),i=t(i),l=t(l),o.opacity=1,function(t){return o.r=u(t),o.g=i(t),o.b=l(t),o+""}}}var p=s(e),h=s(o);function v(t,n){var r,e=n?n.length:0,o=t?Math.min(e,t.length):0,a=new Array(o),u=new Array(e);for(r=0;r<o;++r)a[r]=m(t[r],n[r]);for(;r<e;++r)u[r]=n[r];return function(t){for(r=0;r<o;++r)u[r]=a[r](t);return u}}function g(t,n){var r=new Date;return n-=t=+t,function(e){return r.setTime(t+n*e),r}}function d(t,n){return n-=t=+t,function(r){return t+n*r}}function y(t,n){var r,e={},o={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=m(t[r],n[r]):o[r]=n[r];return function(t){for(r in e)o[r]=e[r](t);return o}}var x=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,M=new RegExp(x.source,"g");function b(t,n){var r,e,o,a=x.lastIndex=M.lastIndex=0,u=-1,i=[],l=[];for(t+="",n+="";(r=x.exec(t))&&(e=M.exec(n));)(o=e.index)>a&&(o=n.slice(a,o),i[u]?i[u]+=o:i[++u]=o),(r=r[0])===(e=e[0])?i[u]?i[u]+=e:i[++u]=e:(i[++u]=null,l.push({i:u,x:d(r,e)})),a=M.lastIndex;return a<n.length&&(o=n.slice(a),i[u]?i[u]+=o:i[++u]=o),i.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)i[(r=l[e]).i]=r.x(t);return i.join("")})}function m(t,r){var e,o=typeof r;return null==r||"boolean"===o?a(r):("number"===o?d:"string"===o?(e=n.color(r))?(r=e,f):b:r instanceof n.color?f:r instanceof Date?g:Array.isArray(r)?v:"function"!=typeof r.valueOf&&"function"!=typeof r.toString||isNaN(r)?y:d)(t,r)}var w,X,A,N,C=180/Math.PI,Y={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function j(t,n,r,e,o,a){var u,i,l;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(i=Math.sqrt(r*r+e*e))&&(r/=i,e/=i,l/=i),t*e<n*r&&(t=-t,n=-n,l=-l,u=-u),{translateX:o,translateY:a,rotate:Math.atan2(n,t)*C,skewX:Math.atan(l)*C,scaleX:u,scaleY:i}}function q(t,n,r,e){function o(t){return t.length?t.pop()+" ":""}return function(a,u){var i=[],l=[];return a=t(a),u=t(u),function(t,e,o,a,u,i){if(t!==o||e!==a){var l=u.push("translate(",null,n,null,r);i.push({i:l-4,x:d(t,o)},{i:l-2,x:d(e,a)})}else(o||a)&&u.push("translate("+o+n+a+r)}(a.translateX,a.translateY,u.translateX,u.translateY,i,l),function(t,n,r,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:r.push(o(r)+"rotate(",null,e)-2,x:d(t,n)})):n&&r.push(o(r)+"rotate("+n+e)}(a.rotate,u.rotate,i,l),function(t,n,r,a){t!==n?a.push({i:r.push(o(r)+"skewX(",null,e)-2,x:d(t,n)}):n&&r.push(o(r)+"skewX("+n+e)}(a.skewX,u.skewX,i,l),function(t,n,r,e,a,u){if(t!==r||n!==e){var i=a.push(o(a)+"scale(",null,",",null,")");u.push({i:i-4,x:d(t,r)},{i:i-2,x:d(n,e)})}else 1===r&&1===e||a.push(o(a)+"scale("+r+","+e+")")}(a.scaleX,a.scaleY,u.scaleX,u.scaleY,i,l),a=u=null,function(t){for(var n,r=-1,e=l.length;++r<e;)i[(n=l[r]).i]=n.x(t);return i.join("")}}}var k=q(function(t){return"none"===t?Y:(w||(w=document.createElement("DIV"),X=document.documentElement,A=document.defaultView),w.style.transform=t,t=A.getComputedStyle(X.appendChild(w),null).getPropertyValue("transform"),X.removeChild(w),j(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),R=q(function(t){return null==t?Y:(N||(N=document.createElementNS("http://www.w3.org/2000/svg","g")),N.setAttribute("transform",t),(t=N.transform.baseVal.consolidate())?j((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Y)},", ",")",")"),S=Math.SQRT2,D=2,E=4,H=1e-12;function I(t){return((t=Math.exp(t))+1/t)/2}function B(t){return function(r,e){var o=t((r=n.hsl(r)).h,(e=n.hsl(e)).h),a=c(r.s,e.s),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=o(t),r.s=a(t),r.l=u(t),r.opacity=i(t),r+""}}}var L=B(i),T=B(c);function V(t){return function(r,e){var o=t((r=n.hcl(r)).h,(e=n.hcl(e)).h),a=c(r.c,e.c),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=o(t),r.c=a(t),r.l=u(t),r.opacity=i(t),r+""}}}var O=V(i),P=V(c);function _(t){return function r(e){function o(r,o){var a=t((r=n.cubehelix(r)).h,(o=n.cubehelix(o)).h),u=c(r.s,o.s),i=c(r.l,o.l),l=c(r.opacity,o.opacity);return function(t){return r.h=a(t),r.s=u(t),r.l=i(Math.pow(t,e)),r.opacity=l(t),r+""}}return e=+e,o.gamma=r,o}(1)}var z=_(i),Q=_(c);t.interpolate=m,t.interpolateArray=v,t.interpolateBasis=e,t.interpolateBasisClosed=o,t.interpolateDate=g,t.interpolateDiscrete=function(t){var n=t.length;return function(r){return t[Math.max(0,Math.min(n-1,Math.floor(r*n)))]}},t.interpolateHue=function(t,n){var r=i(+t,+n);return function(t){var n=r(t);return n-360*Math.floor(n/360)}},t.interpolateNumber=d,t.interpolateObject=y,t.interpolateRound=function(t,n){return n-=t=+t,function(r){return Math.round(t+n*r)}},t.interpolateString=b,t.interpolateTransformCss=k,t.interpolateTransformSvg=R,t.interpolateZoom=function(t,n){var r,e,o=t[0],a=t[1],u=t[2],i=n[0],l=n[1],c=n[2],f=i-o,s=l-a,p=f*f+s*s;if(p<H)e=Math.log(c/u)/S,r=function(t){return[o+t*f,a+t*s,u*Math.exp(S*t*e)]};else{var h=Math.sqrt(p),v=(c*c-u*u+E*p)/(2*u*D*h),g=(c*c-u*u-E*p)/(2*c*D*h),d=Math.log(Math.sqrt(v*v+1)-v),y=Math.log(Math.sqrt(g*g+1)-g);e=(y-d)/S,r=function(t){var n,r=t*e,i=I(d),l=u/(D*h)*(i*(n=S*r+d,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(d));return[o+l*f,a+l*s,u*i/I(S*r+d)]}}return r.duration=1e3*e,r},t.interpolateRgb=f,t.interpolateRgbBasis=p,t.interpolateRgbBasisClosed=h,t.interpolateHsl=L,t.interpolateHslLong=T,t.interpolateLab=function(t,r){var e=c((t=n.lab(t)).l,(r=n.lab(r)).l),o=c(t.a,r.a),a=c(t.b,r.b),u=c(t.opacity,r.opacity);return function(n){return t.l=e(n),t.a=o(n),t.b=a(n),t.opacity=u(n),t+""}},t.interpolateHcl=O,t.interpolateHclLong=P,t.interpolateCubehelix=z,t.interpolateCubehelixLong=Q,t.piecewise=function(t,n){for(var r=0,e=n.length-1,o=n[0],a=new Array(e<0?0:e);r<e;)a[r]=t(o,o=n[++r]);return function(t){var n=Math.max(0,Math.min(e-1,Math.floor(t*=e)));return a[n](t-n)}},t.quantize=function(t,n){for(var r=new Array(n),e=0;e<n;++e)r[e]=t(e/(n-1));return r},Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-selection/ v1.3.2 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";var n="http://www.w3.org/1999/xhtml",e={svg:"http://www.w3.org/2000/svg",xhtml:n,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function r(t){var n=t+="",r=n.indexOf(":");return r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1)),e.hasOwnProperty(n)?{space:e[n],local:t}:t}function i(t){var e=r(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===n&&e.documentElement.namespaceURI===n?e.createElement(t):e.createElementNS(r,t)}})(e)}function o(){}function u(t){return null==t?o:function(){return this.querySelector(t)}}function c(){return[]}function s(t){return null==t?c:function(){return this.querySelectorAll(t)}}var a=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var l=document.documentElement;if(!l.matches){var f=l.webkitMatchesSelector||l.msMatchesSelector||l.mozMatchesSelector||l.oMatchesSelector;a=function(t){return function(){return f.call(this,t)}}}}var h=a;function p(t){return new Array(t.length)}function _(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}_.prototype={constructor:_,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var d="$";function v(t,n,e,r,i,o){for(var u,c=0,s=n.length,a=o.length;c<a;++c)(u=n[c])?(u.__data__=o[c],r[c]=u):e[c]=new _(t,o[c]);for(;c<s;++c)(u=n[c])&&(i[c]=u)}function m(t,n,e,r,i,o,u){var c,s,a,l={},f=n.length,h=o.length,p=new Array(f);for(c=0;c<f;++c)(s=n[c])&&(p[c]=a=d+u.call(s,s.__data__,c,n),a in l?i[c]=s:l[a]=s);for(c=0;c<h;++c)(s=l[a=d+u.call(t,o[c],c,o)])?(r[c]=s,s.__data__=o[c],l[a]=null):e[c]=new _(t,o[c]);for(c=0;c<f;++c)(s=n[c])&&l[p[c]]===s&&(i[c]=s)}function y(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function g(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function w(t,n){return t.style.getPropertyValue(n)||g(t).getComputedStyle(t,null).getPropertyValue(n)}function A(t){return t.trim().split(/^|\s+/)}function x(t){return t.classList||new S(t)}function S(t){this._node=t,this._names=A(t.getAttribute("class")||"")}function b(t,n){for(var e=x(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function E(t,n){for(var e=x(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function N(){this.textContent=""}function C(){this.innerHTML=""}function P(){this.nextSibling&&this.parentNode.appendChild(this)}function M(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function L(){return null}function T(){var t=this.parentNode;t&&t.removeChild(this)}function B(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function q(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}S.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var O={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(O={mouseenter:"mouseover",mouseleave:"mouseout"}));function D(t,n,e){return t=V(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function V(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function R(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function j(t,n,e){var r=O.hasOwnProperty(t.type)?D:V;return function(i,o,u){var c,s=this.__on,a=r(n,o,u);if(s)for(var l=0,f=s.length;l<f;++l)if((c=s[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=a,c.capture=e),void(c.value=n);this.addEventListener(t.type,a,e),c={type:t.type,name:t.name,value:n,listener:a,capture:e},s?s.push(c):this.__on=[c]}}function z(t,n,e){var r=g(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var H=[null];function I(t,n){this._groups=t,this._parents=n}function U(){return new I([[document.documentElement]],H)}function k(t){return"string"==typeof t?new I([[document.querySelector(t)]],[document.documentElement]):new I([[t]],H)}I.prototype=U.prototype={constructor:I,select:function(t){"function"!=typeof t&&(t=u(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,c,s=n[i],a=s.length,l=r[i]=new Array(a),f=0;f<a;++f)(o=s[f])&&(c=t.call(o,o.__data__,f,s))&&("__data__"in o&&(c.__data__=o.__data__),l[f]=c);return new I(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,c=n[o],a=c.length,l=0;l<a;++l)(u=c[l])&&(r.push(t.call(u,u.__data__,l,c)),i.push(u));return new I(r,i)},filter:function(t){"function"!=typeof t&&(t=h(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,s=r[i]=[],a=0;a<c;++a)(o=u[a])&&t.call(o,o.__data__,a,u)&&s.push(o);return new I(r,this._parents)},data:function(t,n){if(!t)return _=new Array(this.size()),l=-1,this.each(function(t){_[++l]=t}),_;var e,r=n?m:v,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,c=new Array(u),s=new Array(u),a=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],p=h.length,_=t.call(f,f&&f.__data__,l,i),d=_.length,y=s[l]=new Array(d),g=c[l]=new Array(d);r(f,h,y,g,a[l]=new Array(p),_,n);for(var w,A,x=0,S=0;x<d;++x)if(w=y[x]){for(x>=S&&(S=x+1);!(A=g[S])&&++S<d;);w._next=A||null}}return(c=new I(c,i))._enter=s,c._exit=a,c},enter:function(){return new I(this._enter||this._groups.map(p),this._parents)},exit:function(){return new I(this._exit||this._groups.map(p),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),c=0;c<o;++c)for(var s,a=n[c],l=e[c],f=a.length,h=u[c]=new Array(f),p=0;p<f;++p)(s=a[p]||l[p])&&(h[p]=s);for(;c<r;++c)u[c]=n[c];return new I(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=y);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,c=e[o],s=c.length,a=i[o]=new Array(s),l=0;l<s;++l)(u=c[l])&&(a[l]=u);a.sort(n)}return new I(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,c=o.length;u<c;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=r(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):w(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=A(t+"");if(arguments.length<2){for(var r=x(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?b:E)(this,t)}}:n?function(t){return function(){b(this,t)}}:function(t){return function(){E(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?N:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?C:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(P)},lower:function(){return this.each(M)},append:function(t){var n="function"==typeof t?t:i(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:i(t),r=null==n?L:"function"==typeof n?n:u(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(T)},clone:function(t){return this.select(t?q:B)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(c=n?j:R,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var s,a=0,l=c.length;a<l;++a)for(r=0,s=c[a];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return z(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return z(this,t,n)}})(t,n))}};var G=0;function X(){return new Y}function Y(){this._="@"+(++G).toString(36)}function $(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function F(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}Y.prototype=X.prototype={constructor:Y,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},t.create=function(t){return k(i(t).call(document.documentElement))},t.creator=i,t.local=X,t.matcher=h,t.mouse=function(t){var n=$();return n.changedTouches&&(n=n.changedTouches[0]),F(t,n)},t.namespace=r,t.namespaces=e,t.clientPoint=F,t.select=k,t.selectAll=function(t){return"string"==typeof t?new I([document.querySelectorAll(t)],[document.documentElement]):new I([null==t?[]:t],H)},t.selection=U,t.selector=u,t.selectorAll=s,t.style=w,t.touch=function(t,n,e){arguments.length<3&&(e=n,n=$().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return F(t,r);return null},t.touches=function(t,n){null==n&&(n=$().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=F(t,n[e]);return i},t.window=g,t.customEvent=function(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}},Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-timer/ v1.0.9 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";var n,e,o=0,i=0,r=0,u=1e3,l=0,c=0,a=0,f="object"==typeof performance&&performance.now?performance:Date,s="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function _(){return c||(s(m),c=f.now()+a)}function m(){c=0}function p(){this._call=this._time=this._next=null}function w(t,n,e){var o=new p;return o.restart(t,n,e),o}function d(){_(),++o;for(var t,e=n;e;)(t=c-e._time)>=0&&e._call.call(null,t),e=e._next;--o}function h(){c=(l=f.now())+a,o=i=0;try{d()}finally{o=0,function(){var t,o,i=n,r=1/0;for(;i;)i._call?(r>i._time&&(r=i._time),t=i,i=i._next):(o=i._next,i._next=null,i=t?t._next=o:n=o);e=t,v(r)}(),c=0}}function y(){var t=f.now(),n=t-l;n>u&&(a-=n,l=t)}function v(t){o||(i&&(i=clearTimeout(i)),t-c>24?(t<1/0&&(i=setTimeout(h,t-f.now()-a)),r&&(r=clearInterval(r))):(r||(l=f.now(),r=setInterval(y,u)),o=1,s(h)))}p.prototype=w.prototype={constructor:p,restart:function(t,o,i){if("function"!=typeof t)throw new TypeError("callback is not a function");i=(null==i?_():+i)+(null==o?0:+o),this._next||e===this||(e?e._next=this:n=this,e=this),this._call=t,this._time=i,v()},stop:function(){this._call&&(this._call=null,this._time=1/0,v())}},t.now=_,t.timer=w,t.timerFlush=d,t.timeout=function(t,n,e){var o=new p;return n=null==n?0:+n,o.restart(function(e){o.stop(),t(e+n)},n,e),o},t.interval=function(t,n,e){var o=new p,i=n;return null==n?(o.restart(t,n,e),o):(n=+n,e=null==e?_():+e,o.restart(function r(u){u+=i,o.restart(r,i+=n,e),t(u)},n,e),o)},Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-transition/ v1.1.3 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-dispatch"),require("d3-timer"),require("d3-color"),require("d3-interpolate"),require("d3-selection"),require("d3-ease")):"function"==typeof define&&define.amd?define(["exports","d3-dispatch","d3-timer","d3-color","d3-interpolate","d3-selection","d3-ease"],n):n(t.d3=t.d3||{},t.d3,t.d3,t.d3,t.d3,t.d3,t.d3)}(this,function(t,n,e,r,i,o,a){"use strict";var u=n.dispatch("start","end","interrupt"),s=[],l=0,f=1,c=2,h=3,d=4,_=5,p=6;function v(t,n,r,i,o,a){var v=t.__transition;if(v){if(r in v)return}else t.__transition={};!function(t,n,r){var i,o=t.__transition;function a(l){var _,v,y,m;if(r.state!==f)return s();for(_ in o)if((m=o[_]).name===r.name){if(m.state===h)return e.timeout(a);m.state===d?(m.state=p,m.timer.stop(),m.on.call("interrupt",t,t.__data__,m.index,m.group),delete o[_]):+_<n&&(m.state=p,m.timer.stop(),delete o[_])}if(e.timeout(function(){r.state===h&&(r.state=d,r.timer.restart(u,r.delay,r.time),u(l))}),r.state=c,r.on.call("start",t,t.__data__,r.index,r.group),r.state===c){for(r.state=h,i=new Array(y=r.tween.length),_=0,v=-1;_<y;++_)(m=r.tween[_].value.call(t,t.__data__,r.index,r.group))&&(i[++v]=m);i.length=v+1}}function u(n){for(var e=n<r.duration?r.ease.call(null,n/r.duration):(r.timer.restart(s),r.state=_,1),o=-1,a=i.length;++o<a;)i[o].call(null,e);r.state===_&&(r.on.call("end",t,t.__data__,r.index,r.group),s())}function s(){for(var e in r.state=p,r.timer.stop(),delete o[n],o)return;delete t.__transition}o[n]=r,r.timer=e.timer(function(t){r.state=f,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)},0,r.time)}(t,r,{name:n,index:i,group:o,on:u,tween:s,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:l})}function y(t,n){var e=w(t,n);if(e.state>l)throw new Error("too late; already scheduled");return e}function m(t,n){var e=w(t,n);if(e.state>c)throw new Error("too late; already started");return e}function w(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function g(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>c&&e.state<_,e.state=p,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function b(t,n,e){var r=t._id;return t.each(function(){var t=m(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return w(t,r).value[n]}}function A(t,n){var e;return("number"==typeof n?i.interpolateNumber:n instanceof r.color?i.interpolateRgb:(e=r.color(n))?(n=e,i.interpolateRgb):i.interpolateString)(t,n)}var x=o.selection.prototype.constructor;var E=0;function N(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function S(t){return o.selection().transition(t)}function T(){return++E}var q=o.selection.prototype;N.prototype=S.prototype={constructor:N,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=o.selector(t));for(var r=this._groups,i=r.length,a=new Array(i),u=0;u<i;++u)for(var s,l,f=r[u],c=f.length,h=a[u]=new Array(c),d=0;d<c;++d)(s=f[d])&&(l=t.call(s,s.__data__,d,f))&&("__data__"in s&&(l.__data__=s.__data__),h[d]=l,v(h[d],n,e,d,h,w(s,e)));return new N(a,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=o.selectorAll(t));for(var r=this._groups,i=r.length,a=[],u=[],s=0;s<i;++s)for(var l,f=r[s],c=f.length,h=0;h<c;++h)if(l=f[h]){for(var d,_=t.call(l,l.__data__,h,f),p=w(l,e),y=0,m=_.length;y<m;++y)(d=_[y])&&v(d,n,e,y,_,p);a.push(_),u.push(l)}return new N(a,u,n,e)},filter:function(t){"function"!=typeof t&&(t=o.matcher(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,u=n[i],s=u.length,l=r[i]=[],f=0;f<s;++f)(a=u[f])&&t.call(a,a.__data__,f,u)&&l.push(a);return new N(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,l=n[u],f=e[u],c=l.length,h=a[u]=new Array(c),d=0;d<c;++d)(s=l[d]||f[d])&&(h[d]=s);for(;u<r;++u)a[u]=n[u];return new N(a,this._parents,this._name,this._id)},selection:function(){return new x(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=T(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)if(a=u[l]){var f=w(a,n);v(a,t,e,l,u,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new N(r,this._parents,t,e)},call:q.call,nodes:q.nodes,node:q.node,size:q.size,empty:q.empty,each:q.each,on:function(t,n){var e=this._id;return arguments.length<2?w(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?y:m;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=o.namespace(t),r="transform"===e?i.interpolateTransformSvg:A;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttributeNS(t.space,t.local))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttribute(t))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttribute(t)}})(e,r,b(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=o.namespace(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?i.interpolateTransformCss:A;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var a=o.style(this,t),u=(this.style.removeProperty(t),o.style(this,t));return a===u?null:a===e&&u===r?i:i=n(e=a,r=u)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,a;return function(){var u=o.style(this,t),s=e(this);return null==s&&(this.style.removeProperty(t),s=o.style(this,t)),u===s?null:u===r&&s===i?a:a=n(r=u,i=s)}}(t,r,b(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var a=o.style(this,t);return a===e?null:a===r?i:i=n(r=a,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(b(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=w(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=m(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=m(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=u;break}s===l&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){y(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){y(this,t).delay=n}})(n,t)):w(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){m(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){m(this,t).duration=n}})(n,t)):w(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){m(this,t).ease=n}}(n,t)):w(this.node(),n).ease}};var C={time:null,delay:0,duration:250,ease:a.easeCubicInOut};function P(t,n){for(var r;!(r=t.__transition)||!(r=r[n]);)if(!(t=t.parentNode))return C.time=e.now(),C;return r}o.selection.prototype.interrupt=function(t){return this.each(function(){g(this,t)})},o.selection.prototype.transition=function(t){var n,r;t instanceof N?(n=t._id,t=t._name):(n=T(),(r=C).time=e.now(),t=null==t?null:t+"");for(var i=this._groups,o=i.length,a=0;a<o;++a)for(var u,s=i[a],l=s.length,f=0;f<l;++f)(u=s[f])&&v(u,t,n,f,s,r||P(u,n));return new N(i,this._parents,t,n)};var O=[null];t.transition=S,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>f&&e.name===n)return new N([[t]],O,n,+r);return null},t.interrupt=g,Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-drag/ v1.2.3 Copyright 2018 Mike Bostock
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("d3-selection"),require("d3-dispatch")):"function"==typeof define&&define.amd?define(["exports","d3-selection","d3-dispatch"],e):e(t.d3=t.d3||{},t.d3,t.d3)}(this,function(t,e,n){"use strict";function o(){e.event.stopImmediatePropagation()}function i(){e.event.preventDefault(),e.event.stopImmediatePropagation()}function r(t){var n=t.document.documentElement,o=e.select(t).on("dragstart.drag",i,!0);"onselectstart"in n?o.on("selectstart.drag",i,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function c(t,n){var o=t.document.documentElement,r=e.select(t).on("dragstart.drag",null);n&&(r.on("click.drag",i,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in o?r.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}function u(t){return function(){return t}}function s(t,e,n,o,i,r,c,u,s,a){this.target=t,this.type=e,this.subject=n,this.identifier=o,this.active=i,this.x=r,this.y=c,this.dx=u,this.dy=s,this._=a}function a(){return!e.event.button}function l(){return this.parentNode}function d(t){return null==t?{x:e.event.x,y:e.event.y}:t}function f(){return"ontouchstart"in this}s.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t},t.drag=function(){var t,h,p,v,g=a,m=l,y=d,b=f,_={},w=n.dispatch("start","drag","end"),x=0,T=0;function j(t){t.on("mousedown.drag",k).filter(b).on("touchstart.drag",q).on("touchmove.drag",z).on("touchend.drag touchcancel.drag",D).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function k(){if(!v&&g.apply(this,arguments)){var n=P("mouse",m.apply(this,arguments),e.mouse,this,arguments);n&&(e.select(e.event.view).on("mousemove.drag",E,!0).on("mouseup.drag",M,!0),r(e.event.view),o(),p=!1,t=e.event.clientX,h=e.event.clientY,n("start"))}}function E(){if(i(),!p){var n=e.event.clientX-t,o=e.event.clientY-h;p=n*n+o*o>T}_.mouse("drag")}function M(){e.select(e.event.view).on("mousemove.drag mouseup.drag",null),c(e.event.view,p),i(),_.mouse("end")}function q(){if(g.apply(this,arguments)){var t,n,i=e.event.changedTouches,r=m.apply(this,arguments),c=i.length;for(t=0;t<c;++t)(n=P(i[t].identifier,r,e.touch,this,arguments))&&(o(),n("start"))}}function z(){var t,n,o=e.event.changedTouches,r=o.length;for(t=0;t<r;++t)(n=_[o[t].identifier])&&(i(),n("drag"))}function D(){var t,n,i=e.event.changedTouches,r=i.length;for(v&&clearTimeout(v),v=setTimeout(function(){v=null},500),t=0;t<r;++t)(n=_[i[t].identifier])&&(o(),n("end"))}function P(t,n,o,i,r){var c,u,a,l=o(n,t),d=w.copy();if(e.customEvent(new s(j,"beforestart",c,t,x,l[0],l[1],0,0,d),function(){return null!=(e.event.subject=c=y.apply(i,r))&&(u=c.x-l[0]||0,a=c.y-l[1]||0,!0)}))return function f(h){var p,v=l;switch(h){case"start":_[t]=f,p=x++;break;case"end":delete _[t],--x;case"drag":l=o(n,t),p=x}e.customEvent(new s(j,h,c,t,p,l[0]+u,l[1]+a,l[0]-v[0],l[1]-v[1],d),d.apply,d,[h,i,r])}}return j.filter=function(t){return arguments.length?(g="function"==typeof t?t:u(!!t),j):g},j.container=function(t){return arguments.length?(m="function"==typeof t?t:u(t),j):m},j.subject=function(t){return arguments.length?(y="function"==typeof t?t:u(t),j):y},j.touchable=function(t){return arguments.length?(b="function"==typeof t?t:u(!!t),j):b},j.on=function(){var t=w.on.apply(w,arguments);return t===w?j:t},j.clickDistance=function(t){return arguments.length?(T=(t=+t)*t,j):Math.sqrt(T)},j},t.dragDisable=r,t.dragEnable=c,Object.defineProperty(t,"__esModule",{value:!0})});

;// https://d3js.org/d3-zoom/ v1.7.3 Copyright 2018 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-selection"),require("d3-dispatch"),require("d3-drag"),require("d3-interpolate"),require("d3-transition")):"function"==typeof define&&define.amd?define(["exports","d3-selection","d3-dispatch","d3-drag","d3-interpolate","d3-transition"],n):n(t.d3=t.d3||{},t.d3,t.d3,t.d3,t.d3,t.d3)}(this,function(t,n,e,o,i,r){"use strict";function u(t){return function(){return t}}function h(t,n,e){this.target=t,this.type=n,this.transform=e}function s(t,n,e){this.k=t,this.x=n,this.y=e}s.prototype={constructor:s,scale:function(t){return 1===t?this:new s(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new s(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var c=new s(1,0,0);function a(t){return t.__zoom||c}function f(){n.event.stopImmediatePropagation()}function l(){n.event.preventDefault(),n.event.stopImmediatePropagation()}function m(){return!n.event.button}function p(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function d(){return this.__zoom||c}function v(){return-n.event.deltaY*(n.event.deltaMode?120:1)/500}function y(){return"ontouchstart"in this}function z(t,n,e){var o=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],r=t.invertY(n[0][1])-e[0][1],u=t.invertY(n[1][1])-e[1][1];return t.translate(i>o?(o+i)/2:Math.min(0,o)||Math.max(0,i),u>r?(r+u)/2:Math.min(0,r)||Math.max(0,u))}a.prototype=s.prototype,t.zoom=function(){var t,a,_=m,g=p,k=z,x=v,w=y,M=[0,1/0],T=[[-1/0,-1/0],[1/0,1/0]],b=250,Y=i.interpolateZoom,X=[],q=e.dispatch("start","zoom","end"),E=500,D=150,V=0;function I(t){t.property("__zoom",d).on("wheel.zoom",K).on("mousedown.zoom",O).on("dblclick.zoom",W).filter(w).on("touchstart.zoom",Z).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",C).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function P(t,n){return(n=Math.max(M[0],Math.min(M[1],n)))===t.k?t:new s(n,t.x,t.y)}function S(t,n,e){var o=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return o===t.x&&i===t.y?t:new s(t.k,o,i)}function j(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function B(t,n,e){t.on("start.zoom",function(){G(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){G(this,arguments).end()}).tween("zoom",function(){var t=arguments,o=G(this,t),i=g.apply(this,t),r=e||j(i),u=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1]),h=this.__zoom,c="function"==typeof n?n.apply(this,t):n,a=Y(h.invert(r).concat(u/h.k),c.invert(r).concat(u/c.k));return function(t){if(1===t)t=c;else{var n=a(t),e=u/n[2];t=new s(e,r[0]-n[0]*e,r[1]-n[1]*e)}o.zoom(null,t)}})}function G(t,n){for(var e,o=0,i=X.length;o<i;++o)if((e=X[o]).that===t)return e;return new H(t,n)}function H(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=g.apply(t,n)}function K(){if(_.apply(this,arguments)){var t=G(this,arguments),e=this.__zoom,o=Math.max(M[0],Math.min(M[1],e.k*Math.pow(2,x.apply(this,arguments)))),i=n.mouse(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=e.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(e.k===o)return;t.mouse=[i,e.invert(i)],r.interrupt(this),t.start()}l(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},D),t.zoom("mouse",k(S(P(e,o),t.mouse[0],t.mouse[1]),t.extent,T))}}function O(){if(!a&&_.apply(this,arguments)){var t=G(this,arguments),e=n.select(n.event.view).on("mousemove.zoom",function(){if(l(),!t.moved){var e=n.event.clientX-u,o=n.event.clientY-h;t.moved=e*e+o*o>V}t.zoom("mouse",k(S(t.that.__zoom,t.mouse[0]=n.mouse(t.that),t.mouse[1]),t.extent,T))},!0).on("mouseup.zoom",function(){e.on("mousemove.zoom mouseup.zoom",null),o.dragEnable(n.event.view,t.moved),l(),t.end()},!0),i=n.mouse(this),u=n.event.clientX,h=n.event.clientY;o.dragDisable(n.event.view),f(),t.mouse=[i,this.__zoom.invert(i)],r.interrupt(this),t.start()}}function W(){if(_.apply(this,arguments)){var t=this.__zoom,e=n.mouse(this),o=t.invert(e),i=t.k*(n.event.shiftKey?.5:2),r=k(S(P(t,i),e,o),g.apply(this,arguments),T);l(),b>0?n.select(this).transition().duration(b).call(B,r,e):n.select(this).call(I.transform,r)}}function Z(){if(_.apply(this,arguments)){var e,o,i,u,h=G(this,arguments),s=n.event.changedTouches,c=s.length;for(f(),o=0;o<c;++o)i=s[o],u=[u=n.touch(this,s,i.identifier),this.__zoom.invert(u),i.identifier],h.touch0?h.touch1||(h.touch1=u):(h.touch0=u,e=!0);if(t&&(t=clearTimeout(t),!h.touch1))return h.end(),void((u=n.select(this).on("dblclick.zoom"))&&u.apply(this,arguments));e&&(t=setTimeout(function(){t=null},E),r.interrupt(this),h.start())}}function A(){var e,o,i,r,u=G(this,arguments),h=n.event.changedTouches,s=h.length;for(l(),t&&(t=clearTimeout(t)),e=0;e<s;++e)o=h[e],i=n.touch(this,h,o.identifier),u.touch0&&u.touch0[2]===o.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===o.identifier&&(u.touch1[0]=i);if(o=u.that.__zoom,u.touch1){var c=u.touch0[0],a=u.touch0[1],f=u.touch1[0],m=u.touch1[1],p=(p=f[0]-c[0])*p+(p=f[1]-c[1])*p,d=(d=m[0]-a[0])*d+(d=m[1]-a[1])*d;o=P(o,Math.sqrt(p/d)),i=[(c[0]+f[0])/2,(c[1]+f[1])/2],r=[(a[0]+m[0])/2,(a[1]+m[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],r=u.touch0[1]}u.zoom("touch",k(S(o,i,r),u.extent,T))}function C(){var t,e,o=G(this,arguments),i=n.event.changedTouches,r=i.length;for(f(),a&&clearTimeout(a),a=setTimeout(function(){a=null},E),t=0;t<r;++t)e=i[t],o.touch0&&o.touch0[2]===e.identifier?delete o.touch0:o.touch1&&o.touch1[2]===e.identifier&&delete o.touch1;o.touch1&&!o.touch0&&(o.touch0=o.touch1,delete o.touch1),o.touch0?o.touch0[1]=this.__zoom.invert(o.touch0[0]):o.end()}return I.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",d),t!==e?B(t,n):e.interrupt().each(function(){G(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},I.scaleBy=function(t,n){I.scaleTo(t,function(){return this.__zoom.k*("function"==typeof n?n.apply(this,arguments):n)})},I.scaleTo=function(t,n){I.transform(t,function(){var t=g.apply(this,arguments),e=this.__zoom,o=j(t),i=e.invert(o),r="function"==typeof n?n.apply(this,arguments):n;return k(S(P(e,r),o,i),t,T)})},I.translateBy=function(t,n,e){I.transform(t,function(){return k(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),g.apply(this,arguments),T)})},I.translateTo=function(t,n,e){I.transform(t,function(){var t=g.apply(this,arguments),o=this.__zoom,i=j(t);return k(c.translate(i[0],i[1]).scale(o.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,T)})},H.prototype={start:function(){return 1==++this.active&&(this.index=X.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(X.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){n.customEvent(new h(I,t,this.that.__zoom),q.apply,q,[t,this.that,this.args])}},I.wheelDelta=function(t){return arguments.length?(x="function"==typeof t?t:u(+t),I):x},I.filter=function(t){return arguments.length?(_="function"==typeof t?t:u(!!t),I):_},I.touchable=function(t){return arguments.length?(w="function"==typeof t?t:u(!!t),I):w},I.extent=function(t){return arguments.length?(g="function"==typeof t?t:u([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),I):g},I.scaleExtent=function(t){return arguments.length?(M[0]=+t[0],M[1]=+t[1],I):[M[0],M[1]]},I.translateExtent=function(t){return arguments.length?(T[0][0]=+t[0][0],T[1][0]=+t[1][0],T[0][1]=+t[0][1],T[1][1]=+t[1][1],I):[[T[0][0],T[0][1]],[T[1][0],T[1][1]]]},I.constrain=function(t){return arguments.length?(k=t,I):k},I.duration=function(t){return arguments.length?(b=+t,I):b},I.interpolate=function(t){return arguments.length?(Y=t,I):Y},I.on=function(){var t=q.on.apply(q,arguments);return t===q?I:t},I.clickDistance=function(t){return arguments.length?(V=(t=+t)*t,I):Math.sqrt(V)},I},t.zoomTransform=a,t.zoomIdentity=c,Object.defineProperty(t,"__esModule",{value:!0})});

;
//# sourceMappingURL=scripts.js.map
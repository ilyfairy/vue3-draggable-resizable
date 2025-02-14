module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "b4ad");
/******/ })
/************************************************************************/
/******/ ({

/***/ "007d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("e539");
var isSymbol = __webpack_require__("aa5f");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "00f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var IE8_DOM_DEFINE = __webpack_require__("ec5b");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("70ec");
var anObject = __webpack_require__("593a");
var toPropertyKey = __webpack_require__("007d");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "0162":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "021a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "03c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "06e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var isObject = __webpack_require__("4f67");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "085b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");
var isCallable = __webpack_require__("1385");
var store = __webpack_require__("128b");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "0892":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var toObject = __webpack_require__("8984");
var lengthOfArrayLike = __webpack_require__("d8c0");
var setArrayLength = __webpack_require__("aa6d");
var doesNotExceedSafeInteger = __webpack_require__("618f");
var fails = __webpack_require__("021a");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "0acf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__("7e01");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "0bfe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var isCallable = __webpack_require__("1385");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "0ce0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("0bfe");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "0ec4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("423a");
var isNullOrUndefined = __webpack_require__("4a90");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "11cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "128b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("e12f");
var globalThis = __webpack_require__("639e");
var defineGlobalProperty = __webpack_require__("3b33");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.40.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "1385":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1484":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("cfef");
var fails = __webpack_require__("021a");
var globalThis = __webpack_require__("639e");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "1587":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");
var toObject = __webpack_require__("8984");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "186e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "1c9c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");
var isCallable = __webpack_require__("1385");
var isObject = __webpack_require__("4f67");
var create = __webpack_require__("978b");
var getPrototypeOf = __webpack_require__("4d2e");
var defineBuiltIn = __webpack_require__("8f09");
var wellKnownSymbol = __webpack_require__("353a");
var IS_PURE = __webpack_require__("e12f");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "2017":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("11cd");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "20df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("0bfe");
var uncurryThis = __webpack_require__("83cc");
var getOwnPropertyNamesModule = __webpack_require__("cae7");
var getOwnPropertySymbolsModule = __webpack_require__("7e5b");
var anObject = __webpack_require__("593a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "2609":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__("3e68");
var defineProperty = __webpack_require__("00f4");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "2704":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("353a");
var Iterators = __webpack_require__("cb7b");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "2d58":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5a3");
var getMethod = __webpack_require__("0ec4");
var isNullOrUndefined = __webpack_require__("4a90");
var Iterators = __webpack_require__("cb7b");
var wellKnownSymbol = __webpack_require__("353a");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2d67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "300b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");
var isCallable = __webpack_require__("1385");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "317b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("9dbc");
var requireObjectCoercible = __webpack_require__("db8f");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "353a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var shared = __webpack_require__("42e8");
var hasOwn = __webpack_require__("1587");
var uid = __webpack_require__("e2a5");
var NATIVE_SYMBOL = __webpack_require__("1484");
var USE_SYMBOL_AS_UID = __webpack_require__("d561");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "372e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "3b33":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "3e68":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");
var fails = __webpack_require__("021a");
var isCallable = __webpack_require__("1385");
var hasOwn = __webpack_require__("1587");
var DESCRIPTORS = __webpack_require__("2d67");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("ded3").CONFIGURABLE;
var inspectSource = __webpack_require__("085b");
var InternalStateModule = __webpack_require__("ab31");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "423a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1385");
var tryToString = __webpack_require__("0162");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "42e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("128b");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "43b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "4a90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "4c6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var map = __webpack_require__("703b");
var IS_PURE = __webpack_require__("e12f");

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


/***/ }),

/***/ "4d2e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1587");
var isCallable = __webpack_require__("1385");
var toObject = __webpack_require__("8984");
var sharedKey = __webpack_require__("e1b6");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("03c5");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "4f67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1385");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "593a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("4f67");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "595d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__("639e");
var userAgent = __webpack_require__("bee1");
var classof = __webpack_require__("9f5e");

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


/***/ }),

/***/ "5b8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("8db9");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "618f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "61b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("8f09");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "6209":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "639e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("de2f")))

/***/ }),

/***/ "6b37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var create = __webpack_require__("978b");
var createNonEnumerableProperty = __webpack_require__("c4a2");
var defineBuiltIns = __webpack_require__("61b4");
var wellKnownSymbol = __webpack_require__("353a");
var InternalStateModule = __webpack_require__("ab31");
var getMethod = __webpack_require__("0ec4");
var IteratorPrototype = __webpack_require__("1c9c").IteratorPrototype;
var createIterResultObject = __webpack_require__("43b1");
var iteratorClose = __webpack_require__("7515");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      if (iterator) iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ "6c2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("593a");
var iteratorClose = __webpack_require__("7515");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "6e03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var definePropertyModule = __webpack_require__("00f4");
var createPropertyDescriptor = __webpack_require__("d2ac");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "703b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var aCallable = __webpack_require__("423a");
var anObject = __webpack_require__("593a");
var getIteratorDirect = __webpack_require__("6209");
var createIteratorProxy = __webpack_require__("6b37");
var callWithSafeIterationClosing = __webpack_require__("6c2f");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


/***/ }),

/***/ "70ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var fails = __webpack_require__("021a");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "7515":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var anObject = __webpack_require__("593a");
var getMethod = __webpack_require__("0ec4");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "7931":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("021a");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "7d06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var call = __webpack_require__("2017");
var aCallable = __webpack_require__("423a");
var anObject = __webpack_require__("593a");
var getIteratorDirect = __webpack_require__("6209");
var createIteratorProxy = __webpack_require__("6b37");
var callWithSafeIterationClosing = __webpack_require__("6c2f");
var IS_PURE = __webpack_require__("e12f");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "7d82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var call = __webpack_require__("2017");
var propertyIsEnumerableModule = __webpack_require__("186e");
var createPropertyDescriptor = __webpack_require__("d2ac");
var toIndexedObject = __webpack_require__("317b");
var toPropertyKey = __webpack_require__("007d");
var hasOwn = __webpack_require__("1587");
var IE8_DOM_DEFINE = __webpack_require__("ec5b");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "7e01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "7e5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "8273":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var $reduce = __webpack_require__("c8df").left;
var arrayMethodIsStrict = __webpack_require__("7931");
var CHROME_VERSION = __webpack_require__("cfef");
var IS_NODE = __webpack_require__("c669");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "83cc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("11cd");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "8636":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "86a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var iterate = __webpack_require__("b07e");
var aCallable = __webpack_require__("423a");
var anObject = __webpack_require__("593a");
var getIteratorDirect = __webpack_require__("6209");

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "8984":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("db8f");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8d7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("e574");
var enumBugKeys = __webpack_require__("dd42");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "8db9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("372e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "8f09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1385");
var definePropertyModule = __webpack_require__("00f4");
var makeBuiltIn = __webpack_require__("3e68");
var defineGlobalProperty = __webpack_require__("3b33");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "978b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("593a");
var definePropertiesModule = __webpack_require__("afa7");
var enumBugKeys = __webpack_require__("dd42");
var hiddenKeys = __webpack_require__("8636");
var html = __webpack_require__("0ce0");
var documentCreateElement = __webpack_require__("06e6");
var sharedKey = __webpack_require__("e1b6");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "9826":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("8db9");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "9dbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");
var fails = __webpack_require__("021a");
var classof = __webpack_require__("9f5e");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "9f5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "a10d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var iterate = __webpack_require__("b07e");
var aCallable = __webpack_require__("423a");
var anObject = __webpack_require__("593a");
var getIteratorDirect = __webpack_require__("6209");

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "a4e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d1a9");
var globalThis = __webpack_require__("639e");
var anInstance = __webpack_require__("0acf");
var anObject = __webpack_require__("593a");
var isCallable = __webpack_require__("1385");
var getPrototypeOf = __webpack_require__("4d2e");
var defineBuiltInAccessor = __webpack_require__("2609");
var createProperty = __webpack_require__("6e03");
var fails = __webpack_require__("021a");
var hasOwn = __webpack_require__("1587");
var wellKnownSymbol = __webpack_require__("353a");
var IteratorPrototype = __webpack_require__("1c9c").IteratorPrototype;
var DESCRIPTORS = __webpack_require__("2d67");
var IS_PURE = __webpack_require__("e12f");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "a8bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var isCallable = __webpack_require__("1385");
var isObject = __webpack_require__("4f67");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "aa5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("0bfe");
var isCallable = __webpack_require__("1385");
var isPrototypeOf = __webpack_require__("7e01");
var USE_SYMBOL_AS_UID = __webpack_require__("d561");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "aa6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var isArray = __webpack_require__("cb8f");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "ab31":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("fc69");
var globalThis = __webpack_require__("639e");
var isObject = __webpack_require__("4f67");
var createNonEnumerableProperty = __webpack_require__("c4a2");
var hasOwn = __webpack_require__("1587");
var shared = __webpack_require__("128b");
var sharedKey = __webpack_require__("e1b6");
var hiddenKeys = __webpack_require__("8636");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "abdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("353a");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "afa7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("70ec");
var definePropertyModule = __webpack_require__("00f4");
var anObject = __webpack_require__("593a");
var toIndexedObject = __webpack_require__("317b");
var objectKeys = __webpack_require__("8d7f");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "b07e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("f70a");
var call = __webpack_require__("2017");
var anObject = __webpack_require__("593a");
var tryToString = __webpack_require__("0162");
var isArrayIteratorMethod = __webpack_require__("2704");
var lengthOfArrayLike = __webpack_require__("d8c0");
var isPrototypeOf = __webpack_require__("7e01");
var getIterator = __webpack_require__("ea5b");
var getIteratorMethod = __webpack_require__("2d58");
var iteratorClose = __webpack_require__("7515");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "b4ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DraggableContainer", function() { return /* reexport */ DraggableContainer; });

// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.19_@vue+compiler-sfc@3.5.13_less-loader@5.0.0_less@3.13.1_webpack@4.47.0_pbxa4pl5472ljmgjoo7isiqtpm/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__("a4e5");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__("4c6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__("7d06");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__("86a0");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("0892");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("8273");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce = __webpack_require__("a10d");

// CONCATENATED MODULE: ./src/components/utils.ts






const IDENTITY = Symbol('Vue3DraggableResizable');
function getElSize(el) {
  const style = window.getComputedStyle(el);
  return {
    width: parseFloat(style.getPropertyValue('width')),
    height: parseFloat(style.getPropertyValue('height'))
  };
}
function createEventListenerFunction(type) {
  return (el, events, handler) => {
    if (!el) {
      return;
    }
    if (typeof events === 'string') {
      events = [events];
    }
    events.forEach(e => el[type](e, handler, {
      passive: false
    }));
  };
}
const addEvent = createEventListenerFunction('addEventListener');
const removeEvent = createEventListenerFunction('removeEventListener');
function filterHandles(handles) {
  if (handles && handles.length > 0) {
    const result = [];
    handles.forEach(item => {
      if (ALL_HANDLES.includes(item) && !result.includes(item)) {
        result.push(item);
      }
    });
    return result;
  } else {
    return [];
  }
}
function getId() {
  return String(Math.random()).substr(2) + String(Date.now());
}
function getReferenceLineMap(containerProvider, parentSize, id) {
  if (containerProvider.disabled.value) {
    return null;
  }
  const referenceLine = {
    row: [],
    col: []
  };
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  referenceLine.row.push(...containerProvider.adsorbRows);
  referenceLine.col.push(...containerProvider.adsorbCols);
  if (containerProvider.adsorbParent.value) {
    referenceLine.row.push(0, parentHeight.value, parentHeight.value / 2);
    referenceLine.col.push(0, parentWidth.value, parentWidth.value / 2);
  }
  const widgetPositionStore = containerProvider.getPositionStore(id);
  Object.values(widgetPositionStore).forEach(({
    x,
    y,
    w,
    h
  }) => {
    referenceLine.row.push(y, y + h, y + h / 2);
    referenceLine.col.push(x, x + w, x + w / 2);
  });
  const referenceLineMap = {
    row: referenceLine.row.reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: {
          min: cur - 5,
          max: cur + 5,
          value: cur
        }
      };
    }, {}),
    col: referenceLine.col.reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: {
          min: cur - 5,
          max: cur + 5,
          value: cur
        }
      };
    }, {})
  };
  return referenceLineMap;
}
// CONCATENATED MODULE: ./src/components/hooks.ts






function useState(initialState) {
  const state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(initialState);
  const setState = value => {
    state.value = value;
    return value;
  };
  return [state, setState];
}
function initState(props, emit) {
  const [width, setWidth] = useState(props.initW);
  const [height, setHeight] = useState(props.initH);
  const [left, setLeft] = useState(props.x);
  const [top, setTop] = useState(props.y);
  const [enable, setEnable] = useState(props.active);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [resizingHandle, setResizingHandle] = useState('');
  const [resizingMaxWidth, setResizingMaxWidth] = useState(Infinity);
  const [resizingMaxHeight, setResizingMaxHeight] = useState(Infinity);
  const [resizingMinWidth, setResizingMinWidth] = useState(props.minW);
  const [resizingMinHeight, setResizingMinHeight] = useState(props.minH);
  const [parentScaleX, setParentScaleX] = useState(props.parentScaleX);
  const [parentScaleY, setParentScaleY] = useState(props.parentScaleY);
  const [triggerKey, setTriggerKey] = useState(props.triggerKey);
  const aspectRatio = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => height.value / width.value);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(width, newVal => {
    emit('update:w', newVal);
  }, {
    immediate: true
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(height, newVal => {
    emit('update:h', newVal);
  }, {
    immediate: true
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(top, newVal => {
    emit('update:y', newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(left, newVal => {
    emit('update:x', newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(enable, (newVal, oldVal) => {
    emit('update:active', newVal);
    if (!oldVal && newVal) {
      emit('activated');
    } else if (oldVal && !newVal) {
      emit('deactivated');
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.active, newVal => {
    setEnable(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.parentScaleX, () => {
    setParentScaleX(props.parentScaleX);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.parentScaleY, () => {
    setParentScaleY(props.parentScaleY);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.triggerKey, () => {
    setTriggerKey(props.triggerKey);
  });
  return {
    id: getId(),
    width,
    height,
    top,
    left,
    enable,
    dragging,
    resizing,
    resizingHandle,
    resizingMaxHeight,
    resizingMaxWidth,
    resizingMinWidth,
    resizingMinHeight,
    aspectRatio,
    parentScaleX,
    parentScaleY,
    triggerKey,
    setEnable,
    setDragging,
    setResizing,
    setResizingHandle,
    setResizingMaxHeight,
    setResizingMaxWidth,
    setResizingMinWidth,
    setResizingMinHeight,
    $setWidth: val => setWidth(Math.floor(val)),
    $setHeight: val => setHeight(Math.floor(val)),
    $setTop: val => setTop(Math.floor(val)),
    $setLeft: val => setLeft(Math.floor(val)),
    setWidth: val => setWidth(Math.floor(val)),
    setHeight: val => setHeight(Math.floor(val)),
    setTop: val => setTop(Math.floor(val)),
    setLeft: val => setLeft(Math.floor(val))
  };
}
function initParent(containerRef) {
  const parentWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentHeight = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    if (containerRef.value && containerRef.value.parentElement) {
      const {
        width,
        height
      } = getElSize(containerRef.value.parentElement);
      parentWidth.value = width;
      parentHeight.value = height;
    }
  });
  return {
    parentWidth,
    parentHeight
  };
}
function initLimitSizeAndMethods(props, parentSize, containerProps) {
  const {
    width,
    height,
    left,
    top,
    resizingMaxWidth,
    resizingMaxHeight,
    resizingMinWidth,
    resizingMinHeight
  } = containerProps;
  const {
    setWidth,
    setHeight,
    setTop,
    setLeft
  } = containerProps;
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  const limitProps = {
    minWidth: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return resizingMinWidth.value;
    }),
    minHeight: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return resizingMinHeight.value;
    }),
    maxWidth: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      let max = Infinity;
      if (props.parent) {
        max = Math.min(parentWidth.value, resizingMaxWidth.value);
      }
      return max;
    }),
    maxHeight: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      let max = Infinity;
      if (props.parent) {
        max = Math.min(parentHeight.value, resizingMaxHeight.value);
      }
      return max;
    }),
    minLeft: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? 0 : -Infinity;
    }),
    minTop: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? 0 : -Infinity;
    }),
    maxLeft: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? parentWidth.value - width.value : Infinity;
    }),
    maxTop: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? parentHeight.value - height.value : Infinity;
    })
  };
  const limitMethods = {
    setWidth(val) {
      if (props.disabledW) {
        return width.value;
      }
      return setWidth(Math.min(limitProps.maxWidth.value, Math.max(limitProps.minWidth.value, val)));
    },
    setHeight(val) {
      if (props.disabledH) {
        return height.value;
      }
      return setHeight(Math.min(limitProps.maxHeight.value, Math.max(limitProps.minHeight.value, val)));
    },
    setTop(val) {
      if (props.disabledY) {
        return top.value;
      }
      return setTop(Math.min(limitProps.maxTop.value, Math.max(limitProps.minTop.value, val)));
    },
    setLeft(val) {
      if (props.disabledX) {
        return left.value;
      }
      return setLeft(Math.min(limitProps.maxLeft.value, Math.max(limitProps.minLeft.value, val)));
    }
  };
  return {
    ...limitProps,
    ...limitMethods
  };
}
const DOWN_HANDLES = ['mousedown', 'touchstart'];
const UP_HANDLES = ['mouseup', 'touchend'];
const MOVE_HANDLES = ['mousemove', 'touchmove'];
function getPosition(e) {
  if ('touches' in e) {
    return [e.touches[0].pageX, e.touches[0].pageY];
  } else {
    return [e.pageX, e.pageY];
  }
}
function initDraggableContainer(containerRef, containerProps, limitProps, draggable, emit, containerProvider, parentSize) {
  const {
    left: x,
    top: y,
    width: w,
    height: h,
    dragging,
    id
  } = containerProps;
  const {
    setDragging,
    setEnable,
    setResizing,
    setResizingHandle,
    parentScaleX,
    parentScaleY,
    triggerKey
  } = containerProps;
  const {
    setTop,
    setLeft
  } = limitProps;
  let lstX = 0;
  let lstY = 0;
  let lstPageX = 0;
  let lstPageY = 0;
  let referenceLineMap = null;
  const documentElement = document.documentElement;
  const _unselect = e => {
    var _containerRef$value;
    const target = e.target;
    if (!((_containerRef$value = containerRef.value) !== null && _containerRef$value !== void 0 && _containerRef$value.contains(target))) {
      setEnable(false);
      setDragging(false);
      setResizing(false);
      setResizingHandle('');
    }
  };
  const handleUp = () => {
    setDragging(false);
    // document.documentElement.removeEventListener('mouseup', handleUp)
    // document.documentElement.removeEventListener('mousemove', handleDrag)
    removeEvent(documentElement, UP_HANDLES, handleUp);
    removeEvent(documentElement, MOVE_HANDLES, handleDrag);
    referenceLineMap = null;
    if (containerProvider) {
      containerProvider.updatePosition(id, {
        x: x.value,
        y: y.value,
        w: w.value,
        h: h.value
      });
      containerProvider.setMatchedLine(null);
    }
  };
  const handleDrag = e => {
    e.preventDefault();
    const trigger = triggerKey.value == 'right' ? 3 : 1;
    // console.log("键",triggerKey.value)
    // console.log("对应key",trigger)
    // console.log('按下的键',e)
    if (trigger != e.which) {
      return;
    }
    if (!(dragging.value && containerRef.value)) return;
    const [pageX, pageY] = getPosition(e);
    const deltaX = (pageX - lstPageX) / parentScaleX.value;
    const deltaY = (pageY - lstPageY) / parentScaleY.value;
    let newLeft = lstX + deltaX;
    let newTop = lstY + deltaY;
    if (referenceLineMap !== null) {
      const widgetSelfLine = {
        col: [newLeft, newLeft + w.value / 2, newLeft + w.value],
        row: [newTop, newTop + h.value / 2, newTop + h.value]
      };
      const matchedLine = {
        row: widgetSelfLine.row.map((i, index) => {
          let match = null;
          Object.values(referenceLineMap.row).forEach(referItem => {
            if (i >= referItem.min && i <= referItem.max) {
              match = referItem.value;
            }
          });
          if (match !== null) {
            if (index === 0) {
              newTop = match;
            } else if (index === 1) {
              newTop = Math.floor(match - h.value / 2);
            } else if (index === 2) {
              newTop = Math.floor(match - h.value);
            }
          }
          return match;
        }).filter(i => i !== null),
        col: widgetSelfLine.col.map((i, index) => {
          let match = null;
          Object.values(referenceLineMap.col).forEach(referItem => {
            if (i >= referItem.min && i <= referItem.max) {
              match = referItem.value;
            }
          });
          if (match !== null) {
            if (index === 0) {
              newLeft = match;
            } else if (index === 1) {
              newLeft = Math.floor(match - w.value / 2);
            } else if (index === 2) {
              newLeft = Math.floor(match - w.value);
            }
          }
          return match;
        }).filter(i => i !== null)
      };
      containerProvider.setMatchedLine(matchedLine);
    }
    emit('dragging', {
      x: setLeft(newLeft),
      y: setTop(newTop)
    });
  };
  const handleDown = e => {
    if (!draggable.value) return;
    setDragging(true);
    lstX = x.value;
    lstY = y.value;
    lstPageX = getPosition(e)[0];
    lstPageY = getPosition(e)[1];
    // document.documentElement.addEventListener('mousemove', handleDrag)
    // document.documentElement.addEventListener('mouseup', handleUp)
    addEvent(documentElement, MOVE_HANDLES, handleDrag);
    addEvent(documentElement, UP_HANDLES, handleUp);
    if (containerProvider && !containerProvider.disabled.value) {
      referenceLineMap = getReferenceLineMap(containerProvider, parentSize, id);
    }
  };
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(dragging, (cur, pre) => {
    if (!pre && cur) {
      emit('drag-start', {
        x: x.value,
        y: y.value
      });
      setEnable(true);
      setDragging(true);
    } else {
      emit('drag-end', {
        x: x.value,
        y: y.value
      });
      setDragging(false);
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    const el = containerRef.value;
    if (!el) return;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    // document.documentElement.addEventListener('mousedown', _unselect)
    // el.addEventListener('mousedown', handleDown)
    addEvent(documentElement, DOWN_HANDLES, _unselect);
    addEvent(el, DOWN_HANDLES, handleDown);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    if (!containerRef.value) return;
    // document.documentElement.removeEventListener('mousedown', _unselect)
    // document.documentElement.removeEventListener('mouseup', handleUp)
    // document.documentElement.removeEventListener('mousemove', handleDrag)
    removeEvent(documentElement, DOWN_HANDLES, _unselect);
    removeEvent(documentElement, UP_HANDLES, handleUp);
    removeEvent(documentElement, MOVE_HANDLES, handleDrag);
  });
  return {
    containerRef
  };
}
function initResizeHandle(containerProps, limitProps, parentSize, props, emit) {
  const {
    setWidth,
    setHeight,
    setLeft,
    setTop
  } = limitProps;
  const {
    width,
    height,
    left,
    top,
    aspectRatio
  } = containerProps;
  const {
    setResizing,
    setResizingHandle,
    setResizingMaxWidth,
    setResizingMaxHeight,
    setResizingMinWidth,
    setResizingMinHeight
  } = containerProps;
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  let lstW = 0;
  let lstH = 0;
  let lstX = 0;
  let lstY = 0;
  let lstPageX = 0;
  let lstPageY = 0;
  let tmpAspectRatio = 1;
  let idx0 = '';
  let idx1 = '';
  const documentElement = document.documentElement;
  const resizeHandleDrag = e => {
    e.preventDefault();
    let [_pageX, _pageY] = getPosition(e);
    let deltaX = _pageX - lstPageX;
    let deltaY = _pageY - lstPageY;
    let _deltaX = deltaX;
    let _deltaY = deltaY;
    if (props.lockAspectRatio) {
      deltaX = Math.abs(deltaX);
      deltaY = deltaX * tmpAspectRatio;
      if (idx0 === 't') {
        if (_deltaX < 0 || idx1 === 'm' && _deltaY < 0) {
          deltaX = -deltaX;
          deltaY = -deltaY;
        }
      } else {
        if (_deltaX < 0 || idx1 === 'm' && _deltaY < 0) {
          deltaX = -deltaX;
          deltaY = -deltaY;
        }
      }
    }
    if (idx0 === 't') {
      setHeight(lstH - deltaY);
      setTop(lstY - (height.value - lstH));
    } else if (idx0 === 'b') {
      setHeight(lstH + deltaY);
    }
    if (idx1 === 'l') {
      setWidth(lstW - deltaX);
      setLeft(lstX - (width.value - lstW));
    } else if (idx1 === 'r') {
      setWidth(lstW + deltaX);
    }
    emit('resizing', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
  };
  const resizeHandleUp = () => {
    emit('resize-end', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
    setResizingHandle('');
    setResizing(false);
    setResizingMaxWidth(Infinity);
    setResizingMaxHeight(Infinity);
    setResizingMinWidth(props.minW);
    setResizingMinHeight(props.minH);
    // document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
    // document.documentElement.removeEventListener('mouseup', resizeHandleUp)
    removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
    removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
  };
  const resizeHandleDown = (e, handleType) => {
    if (!props.resizable) return;
    e.stopPropagation();
    setResizingHandle(handleType);
    setResizing(true);
    idx0 = handleType[0];
    idx1 = handleType[1];
    if (aspectRatio.value) {
      if (['tl', 'tm', 'ml', 'bl'].includes(handleType)) {
        idx0 = 't';
        idx1 = 'l';
      } else {
        idx0 = 'b';
        idx1 = 'r';
      }
    }
    let minHeight = props.minH;
    let minWidth = props.minW;
    if (minHeight / minWidth > aspectRatio.value) {
      minWidth = minHeight / aspectRatio.value;
    } else {
      minHeight = minWidth * aspectRatio.value;
    }
    setResizingMinWidth(minWidth);
    setResizingMinHeight(minHeight);
    if (parent) {
      let maxHeight = idx0 === 't' ? top.value + height.value : parentHeight.value - top.value;
      let maxWidth = idx1 === 'l' ? left.value + width.value : parentWidth.value - left.value;
      if (props.lockAspectRatio) {
        if (maxHeight / maxWidth < aspectRatio.value) {
          maxWidth = maxHeight / aspectRatio.value;
        } else {
          maxHeight = maxWidth * aspectRatio.value;
        }
      }
      setResizingMaxHeight(maxHeight);
      setResizingMaxWidth(maxWidth);
    }
    lstW = width.value;
    lstH = height.value;
    lstX = left.value;
    lstY = top.value;
    const lstPagePosition = getPosition(e);
    lstPageX = lstPagePosition[0];
    lstPageY = lstPagePosition[1];
    tmpAspectRatio = aspectRatio.value;
    emit('resize-start', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
    // document.documentElement.addEventListener('mousemove', resizeHandleDrag)
    // document.documentElement.addEventListener('mouseup', resizeHandleUp)
    addEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
    addEvent(documentElement, UP_HANDLES, resizeHandleUp);
  };
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    // document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
    // document.documentElement.removeEventListener('mousemove', resizeHandleUp)
    removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
    removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
  });
  const handlesFiltered = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => props.resizable ? filterHandles(props.handles) : []);
  return {
    handlesFiltered,
    resizeHandleDown
  };
}
function watchProps(props, limits) {
  const {
    setWidth,
    setHeight,
    setLeft,
    setTop
  } = limits;
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.w, newVal => {
    setWidth(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.h, newVal => {
    setHeight(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.x, newVal => {
    setLeft(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.y, newVal => {
    setTop(newVal);
  });
}
// EXTERNAL MODULE: ./src/components/index.css
var components = __webpack_require__("fc27");

// CONCATENATED MODULE: ./src/components/Vue3DraggableResizable.ts






const ALL_HANDLES = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'];
const VdrProps = {
  initW: {
    type: Number,
    default: null
  },
  initH: {
    type: Number,
    default: null
  },
  w: {
    type: Number,
    default: 0
  },
  h: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  draggable: {
    type: Boolean,
    default: true
  },
  resizable: {
    type: Boolean,
    default: true
  },
  disabledX: {
    type: Boolean,
    default: false
  },
  disabledY: {
    type: Boolean,
    default: false
  },
  disabledW: {
    type: Boolean,
    default: false
  },
  disabledH: {
    type: Boolean,
    default: false
  },
  minW: {
    type: Number,
    default: 20
  },
  minH: {
    type: Number,
    default: 20
  },
  active: {
    type: Boolean,
    default: false
  },
  parent: {
    type: Boolean,
    default: false
  },
  handles: {
    type: Array,
    default: ALL_HANDLES,
    validator: handles => {
      return filterHandles(handles).length === handles.length;
    }
  },
  classNameDraggable: {
    type: String,
    default: 'draggable'
  },
  classNameResizable: {
    type: String,
    default: 'resizable'
  },
  classNameDragging: {
    type: String,
    default: 'dragging'
  },
  classNameResizing: {
    type: String,
    default: 'resizing'
  },
  classNameActive: {
    type: String,
    default: 'active'
  },
  classNameHandle: {
    type: String,
    default: 'handle'
  },
  lockAspectRatio: {
    type: Boolean,
    default: false
  },
  parentScaleX: {
    type: Number,
    default: 1
  },
  parentScaleY: {
    type: Number,
    default: 1
  },
  triggerKey: {
    type: String,
    default: 'left'
  }
};
const emits = ['activated', 'deactivated', 'drag-start', 'resize-start', 'dragging', 'resizing', 'drag-end', 'resize-end', 'update:w', 'update:h', 'update:x', 'update:y', 'update:active'];
const VueDraggableResizable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'Vue3DraggableResizable',
  props: VdrProps,
  emits: emits,
  setup(props, {
    emit
  }) {
    const containerProps = initState(props, emit);
    const provideIdentity = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('identity');
    let containerProvider = null;
    if (provideIdentity === IDENTITY) {
      containerProvider = {
        updatePosition: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('updatePosition'),
        getPositionStore: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('getPositionStore'),
        disabled: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('disabled'),
        adsorbParent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbParent'),
        adsorbCols: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbCols'),
        adsorbRows: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbRows'),
        setMatchedLine: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('setMatchedLine')
      };
    }
    const containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const parentSize = initParent(containerRef);
    const limitProps = initLimitSizeAndMethods(props, parentSize, containerProps);
    initDraggableContainer(containerRef, containerProps, limitProps, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'draggable'), emit, containerProvider, parentSize);
    const resizeHandle = initResizeHandle(containerProps, limitProps, parentSize, props, emit);
    watchProps(props, limitProps);
    return {
      containerRef,
      containerProvider,
      ...containerProps,
      ...parentSize,
      ...limitProps,
      ...resizeHandle
    };
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.top + 'px',
        left: this.left + 'px'
      };
    },
    klass() {
      return {
        [this.classNameActive]: this.enable,
        [this.classNameDragging]: this.dragging,
        [this.classNameResizing]: this.resizing,
        [this.classNameDraggable]: this.draggable,
        [this.classNameResizable]: this.resizable
      };
    }
  },
  mounted() {
    if (!this.containerRef) return;
    this.containerRef.ondragstart = () => false;
    const {
      width,
      height
    } = getElSize(this.containerRef);
    this.setWidth(this.initW === null ? this.w || width : this.initW);
    this.setHeight(this.initH === null ? this.h || height : this.initH);
    if (this.containerProvider) {
      this.containerProvider.updatePosition(this.id, {
        x: this.left,
        y: this.top,
        w: this.width,
        h: this.height
      });
    }
  },
  render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      ref: 'containerRef',
      class: ['vdr-container', this.klass],
      style: this.style
    }, [this.$slots.default && this.$slots.default(), ...this.handlesFiltered.map(item => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      class: ['vdr-handle', 'vdr-handle-' + item, this.classNameHandle, `${this.classNameHandle}-${item}`],
      style: {
        display: this.enable ? 'block' : 'none'
      },
      onMousedown: e => this.resizeHandleDown(e, item),
      onTouchstart: e => this.resizeHandleDown(e, item)
    }))]);
  }
});
/* harmony default export */ var Vue3DraggableResizable = (VueDraggableResizable);
// CONCATENATED MODULE: ./src/components/DraggableContainer.ts




/* harmony default export */ var DraggableContainer = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'DraggableContainer',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    adsorbParent: {
      type: Boolean,
      default: true
    },
    adsorbCols: {
      type: Array,
      default: null
    },
    adsorbRows: {
      type: Array,
      default: null
    },
    referenceLineVisible: {
      type: Boolean,
      default: true
    },
    referenceLineColor: {
      type: String,
      default: '#f00'
    }
  },
  setup(props) {
    const positionStore = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({});
    const updatePosition = (id, position) => {
      positionStore[id] = position;
    };
    const getPositionStore = excludeId => {
      const _positionStore = Object.assign({}, positionStore);
      if (excludeId) {
        delete _positionStore[excludeId];
      }
      return _positionStore;
    };
    const state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      matchedLine: null
    });
    const matchedRows = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => state.matchedLine && state.matchedLine.row || []);
    const matchedCols = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => state.matchedLine && state.matchedLine.col || []);
    const setMatchedLine = matchedLine => {
      state.matchedLine = matchedLine;
    };
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('identity', IDENTITY);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('updatePosition', updatePosition);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('getPositionStore', getPositionStore);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('setMatchedLine', setMatchedLine);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('disabled', Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'disabled'));
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbParent', Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'adsorbParent'));
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbCols', props.adsorbCols || []);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbRows', props.adsorbRows || []);
    return {
      matchedRows,
      matchedCols
    };
  },
  methods: {
    renderReferenceLine() {
      if (!this.referenceLineVisible) {
        return [];
      }
      return [...this.matchedCols.map(item => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
          style: {
            width: '0',
            height: '100%',
            top: '0',
            left: item + 'px',
            borderLeft: `1px dashed ${this.referenceLineColor}`,
            position: 'absolute'
          }
        });
      }), ...this.matchedRows.map(item => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
          style: {
            width: '100%',
            height: '0',
            left: '0',
            top: item + 'px',
            borderTop: `1px dashed ${this.referenceLineColor}`,
            position: 'absolute'
          }
        });
      })];
    }
  },
  render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      }
    }, [this.$slots.default && this.$slots.default(), ...this.renderReferenceLine()]);
  }
}));
// CONCATENATED MODULE: ./src/index.ts


Vue3DraggableResizable.install = app => {
  app.component(Vue3DraggableResizable.name, Vue3DraggableResizable);
  app.component(DraggableContainer.name, DraggableContainer);
  return app;
};

/* harmony default export */ var src_0 = (Vue3DraggableResizable);
// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.19_@vue+compiler-sfc@3.5.13_less-loader@5.0.0_less@3.13.1_webpack@4.47.0_pbxa4pl5472ljmgjoo7isiqtpm/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "bee1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "c4a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var definePropertyModule = __webpack_require__("00f4");
var createPropertyDescriptor = __webpack_require__("d2ac");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c669":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ENVIRONMENT = __webpack_require__("595d");

module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ "c7f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("9f5e");
var uncurryThis = __webpack_require__("83cc");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "c8df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("423a");
var toObject = __webpack_require__("8984");
var IndexedObject = __webpack_require__("9dbc");
var lengthOfArrayLike = __webpack_require__("d8c0");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "c92b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1587");
var ownKeys = __webpack_require__("20df");
var getOwnPropertyDescriptorModule = __webpack_require__("7d82");
var definePropertyModule = __webpack_require__("00f4");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "cae7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("e574");
var enumBugKeys = __webpack_require__("dd42");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "cb7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "cb8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("9f5e");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "cfef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var userAgent = __webpack_require__("bee1");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "d1a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var getOwnPropertyDescriptor = __webpack_require__("7d82").f;
var createNonEnumerableProperty = __webpack_require__("c4a2");
var defineBuiltIn = __webpack_require__("8f09");
var defineGlobalProperty = __webpack_require__("3b33");
var copyConstructorProperties = __webpack_require__("c92b");
var isForced = __webpack_require__("300b");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "d2ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "d561":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("1484");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "d8c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("9826");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "db8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("4a90");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "dd42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "de2f":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ded3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var hasOwn = __webpack_require__("1587");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "e12f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "e1b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("42e8");
var uid = __webpack_require__("e2a5");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "e2a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "e539":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var isObject = __webpack_require__("4f67");
var isSymbol = __webpack_require__("aa5f");
var getMethod = __webpack_require__("0ec4");
var ordinaryToPrimitive = __webpack_require__("a8bc");
var wellKnownSymbol = __webpack_require__("353a");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "e574":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("83cc");
var hasOwn = __webpack_require__("1587");
var toIndexedObject = __webpack_require__("317b");
var indexOf = __webpack_require__("ebc0").indexOf;
var hiddenKeys = __webpack_require__("8636");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "ea5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("2017");
var aCallable = __webpack_require__("423a");
var anObject = __webpack_require__("593a");
var tryToString = __webpack_require__("0162");
var getIteratorMethod = __webpack_require__("2d58");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "ebc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("317b");
var toAbsoluteIndex = __webpack_require__("5b8d");
var lengthOfArrayLike = __webpack_require__("d8c0");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "ec5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("2d67");
var fails = __webpack_require__("021a");
var createElement = __webpack_require__("06e6");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "f5a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("abdd");
var isCallable = __webpack_require__("1385");
var classofRaw = __webpack_require__("9f5e");
var wellKnownSymbol = __webpack_require__("353a");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f70a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("c7f5");
var aCallable = __webpack_require__("423a");
var NATIVE_BIND = __webpack_require__("11cd");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "fc27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("639e");
var isCallable = __webpack_require__("1385");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ })

/******/ });
//# sourceMappingURL=Vue3DraggableResizable.common.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/modules/burger.js":
/*!**********************************!*\
  !*** ./app/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const burgerBtn = document.querySelector('.hamburger');
  const navBurger = document.querySelector('.nav');
  const navBurgerBtn = document.querySelectorAll('.header__nav-item');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');

    if (burgerBtn.classList.contains('open')) {
      navBurger.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      navBurger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  navBurgerBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      navBurger.classList.remove('active');
      burgerBtn.classList.remove('open');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./app/js/modules/lazy.js":
/*!********************************!*\
  !*** ./app/js/modules/lazy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lazy = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const windowHeight = document.documentElement.clientHeight;
  let lazyImagesPositions = [];

  if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
        lazyScrollCheck();
      }
    });
  }

  window.addEventListener('scroll', lazyScroll);

  function lazyScroll() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
      lazyScrollCheck();
    }
  }

  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(item => pageYOffset > item - windowHeight);

    if (imgIndex >= 0) {
      if (lazyImages[imgIndex].dataset.src) {
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
        lazyImages[imgIndex].removeAttribute('data-src');
      }

      delete lazyImagesPositions[imgIndex];
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (lazy);

/***/ }),

/***/ "./app/js/modules/slider.js":
/*!**********************************!*\
  !*** ./app/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.esm.js");


const slider = () => {
  var headerSlider = document.querySelector('.reviews__slider');
  var interval = 0;

  function autoplay(run) {
    clearInterval(interval);
    interval = setInterval(() => {
      if (run && reviewsSlider) {
        reviewsSlider.next();
      }
    }, 3000);
  }

  var reviewsSlider = new keen_slider__WEBPACK_IMPORTED_MODULE_0__["default"](headerSlider, {
    loop: true,
    slidesPerView: 4,
    spacing: 20,
    breakpoints: {
      '(min-width: 280px)': {
        slidesPerView: 1
      },
      '(min-width: 575px)': {
        slidesPerView: 2
      },
      '(min-width: 896px)': {
        slidesPerView: 3
      },
      '(min-width: 1240px)': {
        slidesPerView: 4
      }
    },
    dragStart: () => {
      autoplay(false);
    },
    dragEnd: () => {
      autoplay(true);
    }
  });
  headerSlider.addEventListener("mouseover", () => {
    autoplay(false);
  });
  headerSlider.addEventListener("mouseout", () => {
    autoplay(true);
  });
  autoplay(true);
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./app/js/modules/tabs.js":
/*!********************************!*\
  !*** ./app/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const tabs = document.querySelectorAll('.products__btn__item');
  const tabsContent = document.querySelectorAll('.products__tabcontent');
  const tabsParent = document.querySelector('.products__tabitems');

  function hideTabsContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'entrance');
    });
    tabs.forEach(item => {
      item.classList.remove('products__btn__item-active');
    });
  }

  function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'entrance');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('products__btn__item-active');
  }

  hideTabsContent();
  showTabsContent();
  tabsParent.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('products__btn__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./app/js/modules/timer.js":
/*!*********************************!*\
  !*** ./app/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timer = () => {
  const deadline = '2025-05-11';

  function getRemainigTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const seconds = Math.floor(t / 1000 % 60);
    const minutes = Math.floor(t / 1000 / 60 % 60);
    const hours = Math.floor(t / (1000 * 60 * 60) % 24);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector(".timer__days span");
    const hours = timer.querySelector('.timer__hours span');
    const minutes = timer.querySelector('.timer__minutes span');
    const seconds = timer.querySelector('.timer__seconds span');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getRemainigTime(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./app/js/script.js":
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./app/js/modules/burger.js");
/* harmony import */ var _modules_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/lazy */ "./app/js/modules/lazy.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./app/js/modules/tabs.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./app/js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./app/js/modules/timer.js");
__webpack_require__(/*! es6-promise-polyfill */ "./node_modules/es6-promise-polyfill/promise.js");







window.addEventListener('DOMContentLoaded', e => {
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_lazy__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./node_modules/es6-promise-polyfill/promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise-polyfill/promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(global){

//
// Check for native Promise and it has correct interface
//

var NativePromise = global['Promise'];
var nativePromiseSupported =
  NativePromise &&
  // Some of these methods are missing from
  // Firefox/Chrome experimental implementations
  'resolve' in NativePromise &&
  'reject' in NativePromise &&
  'all' in NativePromise &&
  'race' in NativePromise &&
  // Older version of the spec had a resolver object
  // as the arg rather than a function
  (function(){
    var resolve;
    new NativePromise(function(r){ resolve = r; });
    return typeof resolve === 'function';
  })();


//
// export if necessary
//

if ( true && exports)
{
  // node.js
  exports.Promise = nativePromiseSupported ? NativePromise : Promise;
  exports.Polyfill = Promise;
}
else
{
  // AMD
  if (true)
  {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return nativePromiseSupported ? NativePromise : Promise;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else
  {}
}


//
// Polyfill
//

var PENDING = 'pending';
var SEALED = 'sealed';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var NOOP = function(){};

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// async calls
var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
var asyncQueue = [];
var asyncTimer;

function asyncFlush(){
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++)
    asyncQueue[i][0](asyncQueue[i][1]);

  // reset async asyncQueue
  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg){
  asyncQueue.push([callback, arg]);

  if (!asyncTimer)
  {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}


function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber){
  var owner = subscriber.owner;
  var settled = owner.state_;
  var value = owner.data_;  
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function')
  {
    settled = FULFILLED;
    try {
      value = callback(value);
    } catch(e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value))
  {
    if (settled === FULFILLED)
      resolve(promise, value);

    if (settled === REJECTED)
      reject(promise, value);
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value)
      throw new TypeError('A promises callback cannot return that same promise.');

    if (value && (typeof value === 'function' || typeof value === 'object'))
    {
      var then = value.then;  // then should be retrived only once

      if (typeof then === 'function')
      {
        then.call(value, function(val){
          if (!resolved)
          {
            resolved = true;

            if (value !== val)
              resolve(promise, val);
            else
              fulfill(promise, val);
          }
        }, function(reason){
          if (!resolved)
          {
            resolved = true;

            reject(promise, reason);
          }
        });

        return true;
      }
    }
  } catch (e) {
    if (!resolved)
      reject(promise, e);

    return true;
  }

  return false;
}

function resolve(promise, value){
  if (promise === value || !handleThenable(promise, value))
    fulfill(promise, value);
}

function fulfill(promise, value){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = value;

    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = reason;

    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  var callbacks = promise.then_;
  promise.then_ = undefined;

  for (var i = 0; i < callbacks.length; i++) {
    invokeCallback(callbacks[i]);
  }
}

function publishFulfillment(promise){
  promise.state_ = FULFILLED;
  publish(promise);
}

function publishRejection(promise){
  promise.state_ = REJECTED;
  publish(promise);
}

/**
* @class
*/
function Promise(resolver){
  if (typeof resolver !== 'function')
    throw new TypeError('Promise constructor takes a function argument');

  if (this instanceof Promise === false)
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');

  this.then_ = [];

  invokeResolver(resolver, this);
}

Promise.prototype = {
  constructor: Promise,

  state_: PENDING,
  then_: null,
  data_: undefined,

  then: function(onFulfillment, onRejection){
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if (this.state_ === FULFILLED || this.state_ === REJECTED)
    {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    }
    else
    {
      // subscribe
      this.then_.push(subscriber);
    }

    return subscriber.then;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.all().');

  return new Class(function(resolve, reject){
    var results = [];
    var remaining = 0;

    function resolver(index){
      remaining++;
      return function(value){
        results[index] = value;
        if (!--remaining)
          resolve(results);
      };
    }

    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolver(i), reject);
      else
        results[i] = promise;
    }

    if (!remaining)
      resolve(results);
  });
};

Promise.race = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.race().');

  return new Class(function(resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolve, reject);
      else
        resolve(promise);
    }
  });
};

Promise.resolve = function(value){
  var Class = this;

  if (value && typeof value === 'object' && value.constructor === Class)
    return value;

  return new Class(function(resolve){
    resolve(value);
  });
};

Promise.reject = function(reason){
  var Class = this;

  return new Class(function(resolve, reject){
    reject(reason);
  });
};

})(typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * keen-slider 5.5.1
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2021-06-10
 */

function t(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function e(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){var n,i,o,a,f,s,l,d,h,v,p,m,b,g,w,y,M,O,S,A,j,k,x,P,E,T,D,C,L,V,X,Y,z,H,I=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},q="data-keen-slider-moves",F="data-keen-slider-v",W=[],_=null,N=!1,R=!1,U=0,$=[];function B(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.addEventListener(n,e,r),W.push([t,n,e,r])}function G(t){if(O&&S===Z(t)&&ft()){var e=nt(t).x;if(!rt(t)&&P)return K(t);P&&(Nt(),A=e,P=!1),t.cancelable&&t.preventDefault();var r=A-e;E+=Math.abs(r),!T&&E>5&&(T=!0,n.setAttribute(q,!0)),Yt(x(r,Jt)*(lt()?-1:1),t.timeStamp),A=e}}function J(t){O||!ft()||et(t.target)||(O=!0,P=!0,S=Z(t),T=!1,E=0,rt(t),pt(),M=v,A=nt(t).x,Yt(0,t.timeStamp),ut("dragStart"))}function K(t){O&&S===Z(t,!0)&&ft()&&(n.removeAttribute(q),O=!1,gt(),ut("dragEnd"))}function Q(t){return t.changedTouches}function Z(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n?Q(t):tt(t);return e?e[0]?e[0].identifier:"error":"default"}function tt(t){return t.targetTouches}function nt(t){var n=tt(t);return{x:ht()?n?n[0].screenY:t.pageY:n?n[0].screenX:t.pageX,timestamp:t.timeStamp}}function et(t){return t.hasAttribute(y.preventEvent)}function rt(t){var n=tt(t);if(!n)return!0;var e=n[0],r=ht()?e.clientY:e.clientX,i=ht()?e.clientX:e.clientY,o=void 0!==j&&void 0!==k&&Math.abs(k-i)<=Math.abs(j-r);return j=r,k=i,o}function it(t){ft()&&O&&t.preventDefault()}function ot(){B(window,"orientationchange",Dt),B(window,"resize",(function(){return Tt()})),B(n,"dragstart",(function(t){ft()&&t.preventDefault()})),B(n,"mousedown",J),B(y.cancelOnLeave?n:window,"mousemove",G),y.cancelOnLeave&&B(n,"mouseleave",K),B(window,"mouseup",K),B(n,"touchstart",J,{passive:!0}),B(n,"touchmove",G,{passive:!1}),B(n,"touchend",K,{passive:!0}),B(n,"touchcancel",K,{passive:!0}),B(window,"wheel",it,{passive:!1})}function at(){W.forEach((function(t){t[0].removeEventListener(t[1],t[2],t[3])})),W=[]}function ut(t){y[t]&&y[t](Jt)}function ct(){return y.centered}function ft(){return void 0!==i?i:y.controls}function st(){return y.loop&&o>1}function lt(){return y.rtl}function dt(){return!y.loop&&y.rubberband}function ht(){return!!y.vertical}function vt(){D=window.requestAnimationFrame(mt)}function pt(){D&&(window.cancelAnimationFrame(D),D=null),C=null}function mt(t){C||(C=t);var n=t-C,e=bt(n);if(n>=V)return Yt(L-Y,!1),H?H():void ut("afterChange");var r=zt(e);if(0===r||st()||dt()||z){if(0!==r&&dt()&&!z)return St();Y+=e,Yt(e,!1),vt()}else Yt(e-r,!1)}function bt(t){return L*X(t/V)-Y}function gt(){switch(ut("beforeChange"),y.mode){case"free":Mt();break;case"free-snap":Ot();break;case"snap":default:wt()}}function wt(){yt((1===l&&0!==p?M:v)+Math.sign(p))}function yt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(t){return 1+--t*t*t*t*t};At(Ft(t=qt(t,r,i)),e,o,n)}function Mt(){if(0===b)return!(!zt(0)||st())&&yt(v);var t=y.friction/Math.pow(Math.abs(b),-.5);At(Math.pow(b,2)/t*Math.sign(b),6*Math.abs(b/t),(function(t){return 1-Math.pow(1-t,5)}))}function Ot(){if(0===b)return yt(v);var t=y.friction/Math.pow(Math.abs(b),-.5),n=Math.pow(b,2)/t*Math.sign(b),e=6*Math.abs(b/t),r=(U+n)/(s/l);At((-1===p?Math.floor(r):Math.ceil(r))*(s/l)-U,e,(function(t){return 1-Math.pow(1-t,5)}))}function St(){if(pt(),0===b)return yt(v,!0);var t=.04/Math.pow(Math.abs(b),-.5),n=Math.pow(b,2)/t*Math.sign(b),e=function(t){return--t*t*t+1},r=b;At(n,3*Math.abs(r/t),e,!0,(function(){At(Ft(qt(v)),500,e,!0)}))}function At(t,n,e,r,i){pt(),L=t,Y=0,V=n,X=e,z=r,H=i,C=null,vt()}function jt(e){var r=u(t);r.length&&(n=r[0],Tt(e),ot(),ut("mounted"))}function kt(){var t,n=I.breakpoints||[];for(var r in n)window.matchMedia(r).matches&&(t=r);if(t===_)return!0;var i=(_=t)?n[_]:I;i.breakpoints&&_&&delete i.breakpoints,y=e(e(e({},Gt),I),i),N=!0,h=null,ut("optionsChanged"),Et()}function xt(t){if("function"==typeof t)return t();var n=y.autoAdjustSlidesPerView;n||(o=Math.max(t,o));var e=st()&&n?o-1:o;return c(t,1,Math.max(e,1))}function Pt(){kt(),R=!0,ut("created")}function Et(t,n){t&&(I=t),n&&(_=null),Ct(),jt(n)}function Tt(t){var e=window.innerWidth;if(kt()&&(e!==h||t)){h=e;var r=y.slides;"number"==typeof r?(f=null,o=r):(f=u(r,n),o=f?f.length:0);var i=y.dragSpeed;x="function"==typeof i?i:function(t){return t*i},s=ht()?n.offsetHeight:n.offsetWidth,l=xt(y.slidesPerView),d=c(y.spacing,0,s/(l-1)-1),s+=d,a=ct()?(s/2-s/l/2)/s:0,Vt();var p=!R||N&&y.resetSlide?y.initial:v;Bt(st()?p:Ht(p)),ht()&&n.setAttribute(F,!0),N=!1}}function Dt(t){Tt(),setTimeout(Tt,500),setTimeout(Tt,2e3)}function Ct(){at(),Xt(),n&&n.hasAttribute(F)&&n.removeAttribute(F),ut("destroyed")}function Lt(){f&&f.forEach((function(t,n){var e=g[n].distance*s-n*(s/l-d/l-d/l*(l-1)),r=ht()?0:e,i=ht()?e:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");t.style.transform=o,t.style["-webkit-transform"]=o}))}function Vt(){f&&f.forEach((function(t){var n="calc(".concat(100/l,"% - ").concat(d/l*(l-1),"px)");ht()?(t.style["min-height"]=n,t.style["max-height"]=n):(t.style["min-width"]=n,t.style["max-width"]=n)}))}function Xt(){if(f){var t=["transform","-webkit-transform"];t=[].concat(r(t),ht?["min-height","max-height"]:["min-width","max-width"]),f.forEach((function(n){t.forEach((function(t){n.style.removeProperty(t)}))}))}}function Yt(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();_t(t,e),n&&(t=Ut(t)),U+=t,Rt()}function zt(t){var n=s*(o-1*(ct()?1:l))/l,e=U+t;return e>n?e-n:e<0?e:0}function Ht(t){return c(t,0,o-1-(ct()?0:l-1))}function It(){var t=Math.abs(w),n=U<0?1-t:t;return{direction:p,progressTrack:n,progressSlides:n*o/(o-1),positions:g,position:U,speed:b,relativeSlide:(v%o+o)%o,absoluteSlide:v,size:o,slidesPerView:l,widthOrHeight:s}}function qt(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return st()?n?Wt(t,e):t:Ht(t)}function Ft(t){return-(-s/l*t+U)}function Wt(t,n){var e=(v%o+o)%o,r=e<(t=(t%o+o)%o)?-e-o+t:-(e-t),i=e>t?o-e+t:t-e,a=n?Math.abs(r)<=i?r:i:t<e?r:i;return v+a}function _t(t,n){clearTimeout(m);var e=Math.sign(t);if(e!==p&&Nt(),p=e,$.push({distance:t,time:n}),m=setTimeout((function(){$=[],b=0}),50),($=$.slice(-6)).length<=1||0===p)return b=0;var r=$.slice(0,-1).reduce((function(t,n){return t+n.distance}),0),i=$[$.length-1].time,o=$[0].time;b=c(r/(i-o),-10,10)}function Nt(){$=[]}function Rt(){w=st()?U%(s*o/l)/(s*o/l):U/(s*o/l),$t();for(var t=[],n=0;n<o;n++){var e=(1/o*n-(w<0&&st()?w+1:w))*o/l+a;st()&&(e+=e>(o-1)/l?-o/l:e<-o/l+1?o/l:0);var r=1/l,i=e+r,u=i<r?i/r:i>1?1-(i-1)*l/1:1;t.push({portion:u<0||u>1?0:u,distance:lt()?-1*e+1-r:e})}g=t,Lt(),ut("move")}function Ut(t){if(st())return t;var n=zt(t);if(!dt())return t-n;if(0===n)return t;var e;return t*(e=n/s,(1-Math.abs(e))*(1-Math.abs(e)))}function $t(){var t=Math.round(U/(s/l));t!==v&&(!st()&&(t<0||t>o-1)||(v=t,ut("slideChanged")))}function Bt(t){ut("beforeChange"),Yt(Ft(t),!1),ut("afterChange")}var Gt={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Jt={controls:function(t){i=t},destroy:Ct,refresh:function(t){Et(t,!0)},next:function(){yt(v+1,!0)},prev:function(){yt(v-1,!0)},moveToSlide:function(t,n){yt(t,!0,n)},moveToSlideRelative:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0;yt(t,!0,e,!0,n)},resize:function(){Tt(!0)},details:function(){return It()},options:function(){var t=e({},y);return delete t.breakpoints,t}};return Pt(),Jt}function a(t){return Array.prototype.slice.call(t)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof t?a(t()):"string"==typeof t?a(n.querySelectorAll(t)):t instanceof HTMLElement!=!1?[t]:t instanceof NodeList!=!1?t:[]}function c(t,n,e){return Math.min(Math.max(t,n),e)}Math.sign||(Math.sign=function(t){return(t>0)-(t<0)||+t});/* harmony default export */ __webpack_exports__["default"] = (o);
//# sourceMappingURL=keen-slider.esm.js.map


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
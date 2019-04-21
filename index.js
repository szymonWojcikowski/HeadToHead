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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pie {\n  position: absolute;\n  margin-left: .3rem;\n  transform: rotate(180deg);\n  width: 1.2rem;\n  line-height: 1.2rem;\n  background: #b7afaf;\n  border-radius: 50%; }\n  .pie circle {\n    fill: none;\n    stroke: gold;\n    stroke-width: 32;\n    animation: rotate 1.5s ease-in; }\n\n@keyframes rotate {\n  0% {\n    stroke-dasharray: 0 100; } }\n\n#selected-truckers-stats {\n  width: 100%; }\n\n#stats1 {\n  color: #FFF; }\n\n#stats2 {\n  color: #030333; }\n\n.chart-wrapper {\n  position: relative;\n  background-color: #EEC;\n  width: 100%;\n  height: 160px; }\n  .chart-wrapper .tip {\n    display: inline-block;\n    width: 300px;\n    line-height: 1rem;\n    font-size: 1rem;\n    transition: all .4s;\n    padding: 0.5rem;\n    background-color: rgba(55, 60, 66, 0.85);\n    color: #FFF;\n    position: absolute;\n    z-index: 99;\n    cursor: pointer; }\n  .chart-wrapper .hidden {\n    line-height: 0;\n    font-size: 0;\n    padding: 0;\n    opacity: 0;\n    transition: all .4s; }\n  .chart-wrapper .chart-bg {\n    background-color: rgba(206, 167, 140, 0.692);\n    width: 100%;\n    height: 160px;\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: .25rem; }\n    .chart-wrapper .chart-bg .race-line {\n      stroke: rgba(3, 5, 5, 0.2);\n      stroke-width: 1px;\n      stroke-dasharray: 2px; }\n    .chart-wrapper .chart-bg circle {\n      position: relative; }\n    .chart-wrapper .chart-bg .chart-point-a {\n      stroke: #d4091a;\n      stroke-width: 3px; }\n    .chart-wrapper .chart-bg .chart-point-b {\n      stroke: #020341;\n      stroke-width: 3px; }\n    .chart-wrapper .chart-bg .chart-line-all {\n      position: relative;\n      z-index: -1;\n      fill: none;\n      stroke: rgba(59, 59, 59, 0.897);\n      stroke-width: 2px; }\n    .chart-wrapper .chart-bg .chart-line-b {\n      position: relative;\n      z-index: -2;\n      fill: none;\n      stroke: #030333;\n      stroke-width: 2px; }\n    .chart-wrapper .chart-bg .chart-line-a {\n      position: relative;\n      z-index: -3;\n      fill: none;\n      stroke: #d4091a;\n      stroke-width: 2px; }\n\n#selected-truckers-stats {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: .75rem;\n  border-radius: .25rem; }\n  #selected-truckers-stats thead {\n    display: table-cell;\n    display: flex;\n    align-content: stretch;\n    width: 100%; }\n    #selected-truckers-stats thead .row {\n      width: 100%;\n      margin-left: 0; }\n      #selected-truckers-stats thead .row th {\n        flex: 1 1 auto;\n        text-align: center;\n        padding-top: 1rem;\n        border-top-left-radius: .25rem;\n        border-top-right-radius: .25rem; }\n      #selected-truckers-stats thead .row .vs {\n        font-size: 3rem;\n        font-style: italic; }\n  #selected-truckers-stats tbody {\n    display: table-cell;\n    display: flex;\n    flex-direction: column;\n    align-content: stretch;\n    width: 100%;\n    padding-bottom: 5px;\n    height: 0;\n    transition: height .3s; }\n    #selected-truckers-stats tbody .row {\n      width: 100%;\n      margin-left: 0; }\n      #selected-truckers-stats tbody .row td {\n        flex: 1 1 auto; }\n      #selected-truckers-stats tbody .row th {\n        flex: 1 1 auto;\n        text-align: center;\n        opacity: 0;\n        color: transparent; }\n      #selected-truckers-stats tbody .row .stats1 {\n        background-color: #6c757d;\n        text-align: right; }\n        #selected-truckers-stats tbody .row .stats1 .wins-rate {\n          position: relative;\n          left: -1.2rem; }\n      #selected-truckers-stats tbody .row .stats2 {\n        background-color: #dc3545; }\n      #selected-truckers-stats tbody .row:last-child td {\n        padding-bottom: .5rem;\n        border-bottom-left-radius: .25rem;\n        border-bottom-right-radius: .25rem; }\n      #selected-truckers-stats tbody .row:last-child th {\n        padding-bottom: .5rem; }\n  #selected-truckers-stats tbody.open {\n    height: inherit;\n    transition: height .3s; }\n    #selected-truckers-stats tbody.open .row th {\n      opacity: 1;\n      color: #212529;\n      transition: opacity .3s, color .3s; }\n\n#comparison .row {\n  margin: 0; }\n  #comparison .row .bg-dark {\n    padding-top: .5rem;\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
 // ================to Do================>
// 1) sorting of options in select abcd DONE
// 2) multi-languages
// 3) avatars for truckers
// 4) option filtering
// 5) touch events (tooltips display on mobile)
// 6) gruping stats by series & year
// 7) history section: given race, given year

let lang = "en";
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(xhttp.responseText);
    const raceInfo = response.raceInfo; //--- diagnostyka danych z rajdami ---

    function dataCheck() {
      let nrOfCorrectRaces = 0;

      for (let i = 0; i < raceInfo.length; i++) {
        if (raceInfo[i].competitors.length === raceInfo[i].position.length) {
          nrOfCorrectRaces++;
        } else {
          console.error("Błędny index " + i + " Rok " + raceInfo[i].year + " rajd " + raceInfo[i].race);
        }
      }
    }

    dataCheck();
    console.info("Liczba rajdów w bazie: ", raceInfo.length); //--- deklaracja funkcji odpowiedzialnej za wyświetlanie wyników w konsoli ---

    const drawResults = function (rYear, rRace, rPosition, rCompetitor) {
      if (rPosition !== undefined) {
        console.info(rPosition + " miejsce: " + rCompetitor);
      }
    }; //--- tablica zbierająca z każdego rajdu liczbę uczestników ---


    let howMany = [];
    raceInfo.forEach(el => {
      howMany.push(el.position.length);
      console.log(el.year + "#" + el.race + " startowało: " + el.position.length);
    }); //--- sprawdzamy maksymalną liczbę uczestników ---

    const mostCompetitors = Math.max(...howMany);
    console.info("%cRekordowa liczba uczestników: " + mostCompetitors, "font-weight: 700;"); //--- pętle wywołujące funkcję wyświetlającą wyniki w konsoli ---   

    const drawingResultsLoops = function () {
      for (let i = 0; i < raceInfo.length; i++) {
        console.log("%c" + raceInfo[i].year + " race#" + raceInfo[i].race, "font-size: 14px;");

        for (let j = 0; j < mostCompetitors; j++) {
          drawResults(raceInfo[i].year, raceInfo[i].race, raceInfo[i].position[j], raceInfo[i].competitors[j]);
        }

        console.log("%c----------------", "font-weight: 700;");
      }
    };

    drawingResultsLoops(); //--- wyświetlanie pozycji zawodnika w konsoli ---

    const showPosition = function (raceNr, who) {
      if (raceNr < raceInfo.length) {
        let idWho = raceInfo[raceNr].competitors.indexOf(who);
        let raceNumber = 1 + parseInt(raceNr);
        let whoPosition = raceInfo[raceNr].position[idWho];

        if (whoPosition === undefined) {
          console.log(who + " w tym rajdzie nie startował.");
        } else {
          console.log(who + " na rajdzie " + raceNumber + " był " + whoPosition);
        }
      } else {
        console.log("Tego rajdu jeszcze nie było.");
      }
    }; //--- pobranie selectów i innych elementów strony ---


    const selects = document.getElementsByTagName("select"); //--- dodanie nasłuchu do selectów ---

    for (let i = 0; i < selects.length; i++) {
      selects[i].addEventListener("blur", function () {
        let context = this;
        showSelectedTruckerAndDisplayStats(context, i);
        clearingComparison();

        if (this.id === "firstSelect") {
          //--- trzeba wywołać dodatkową funkcję do stworzenia listy oponentów ---
          prepareSecondSelect();
        }
      });
    }

    for (let i = 0; i < selects.length; i++) {
      // to do: DRY
      selects[i].addEventListener("change", function () {
        let context = this;
        showSelectedTruckerAndDisplayStats(context, i);
        clearingComparison();

        if (this.id === "firstSelect") {
          prepareSecondSelect();
        }
      });
    } //--- tworzymy tablicę ze wszystkich pojedyńczych występów na rajdzie ---


    let competitorsToSelect = [];

    for (let i = 0; i < raceInfo.length; i++) {
      competitorsToSelect = competitorsToSelect.concat(raceInfo[i].competitors);
    } //--- pozostawienie unikatów z tablicy competitorsToSelect za pomocą roszerzeń prototypu tablic, posortowanie ---


    const uniques = competitorsToSelect.unique().sort();
    addingSelects(uniques, 0); //wypełnienie firstSelect kierowcami z tablicy uniques

    /* --- funkcja do wyświetlania statystyk pierwszego zawodnika i... generująca opcje wyboru do drugiego selecta (warto wydzielić) ---*/

    const showSelectedTruckerAndDisplayStats = function showSelectedTruckerAndDisplayStats(context, indexOfSelect) {
      let select = context;
      let selectedOption = select.options[select.selectedIndex];
      const selectedText = selectedOption.text; // 'dane'

      const statsTableBody = document.querySelector("#selected-truckers-stats tbody");
      statsTableBody.classList.add("open"); //--- statsDisplay ---

      const showMeStats = function showMeStats(raceInfo) {
        let absent = 0;
        let winner = 0;
        let second = 0;
        let third = 0;
        let podium = 0;
        let furtherPlaces = 0;
        let competed = 0;
        let miejsca = [];
        let numOfParticipants = [];
        let posPerContestants = [];
        let winsAgainstOthersTab = [];
        let winsTabLength = winsAgainstOthersTab.length; //--- pętla zliaczająca pozycje do statystyk ---

        for (let i = 0; i < raceInfo.length; i++) {
          let raceNr = i + 1;
          let chosenIndex = raceInfo[i].competitors.indexOf(selectedText);
          let positionToPush = raceInfo[i].position[chosenIndex];
          let numOfParticipantsToPush = raceInfo[i].position.length;
          let winsAgainstOthersRate = (numOfParticipantsToPush - positionToPush) / (numOfParticipantsToPush - 1);

          if (positionToPush != undefined) {
            miejsca.push(positionToPush);
            numOfParticipants.push(numOfParticipantsToPush);
            let posPerCont = "";
            posPerCont += " (Race " + raceNr + ": " + positionToPush + "/" + numOfParticipantsToPush + ")";
            posPerContestants.push(posPerCont);
            winsAgainstOthersTab.push(winsAgainstOthersRate);
            winsTabLength = winsAgainstOthersTab.length;
          }

          if (raceInfo[i].position[chosenIndex] == 1) {
            winner++;
            competed++;
            podium++;
          } else if (raceInfo[i].position[chosenIndex] == 2) {
            second++;
            competed++;
            podium++;
          } else if (raceInfo[i].position[chosenIndex] == 3) {
            third++;
            competed++;
            podium++;
          } else if (raceInfo[i].position[chosenIndex] == undefined) {
            absent++;
          } else {
            furtherPlaces++;
            competed++;
          }
        } //--- statystyki procentowe wyliczane po warunkach zliczających ---


        let frequency = competed / raceInfo.length * 100;
        let winsPct = winner / competed * 100;
        let podiumPct = podium / competed * 100;

        let fSumOfComp = function su(numOfParticipants) {
          let sumOfComp = 0;

          for (let i = 0; i < numOfParticipants.length; i++) {
            sumOfComp = sumOfComp + parseInt(numOfParticipants[i]);
          }

          return sumOfComp;
        };

        let fSumOfPos = function suma(miejsca) {
          let sumOfPos = 0;

          for (let i = 0; i < miejsca.length; i++) {
            sumOfPos = sumOfPos + parseInt(miejsca[i]);
          }

          return sumOfPos;
        };

        let per = function per(fSumOfPos, fSumOfComp) {
          let positionPerNumOfCompetitors = fSumOfPos(miejsca) / fSumOfComp(numOfParticipants);
          return positionPerNumOfCompetitors;
        };

        let onceOrMore = function (toEstimate, toDisplay) {
          if (parseInt(toEstimate) >= 1) {
            return ` x${toDisplay}`;
          } else {
            return "";
          }
        };

        let winsRate = function (winsAgainstOthersTab, winsTabLength) {
          let winsRateSum = winsAgainstOthersTab.reduce((prev, cur) => {
            return prev + cur;
          });
          return winsRateSum / winsTabLength;
        };

        let indexOfStatsContainer = 1 + indexOfSelect;
        let nameOfStatsPrefix = "st".concat(indexOfStatsContainer, "-");
        let statsCompetedId = nameOfStatsPrefix.concat("competed");
        let statsFrequencyId = nameOfStatsPrefix.concat("frequency");
        let statsWinnerId = nameOfStatsPrefix.concat("winner");
        let statsSecondId = nameOfStatsPrefix.concat("second");
        let statsThirdId = nameOfStatsPrefix.concat("third");
        let statsPodiumId = nameOfStatsPrefix.concat("podium");
        let statsWinsPctId = nameOfStatsPrefix.concat("wins-pct");
        let statsPodiumPctId = nameOfStatsPrefix.concat("podium-pct");
        let statsFurtherPlacesId = nameOfStatsPrefix.concat("further-places");
        let statsAgainstOthersId = nameOfStatsPrefix.concat("against-others");
        let raceContainerNr = "race-by-race" + indexOfStatsContainer;
        const statsCompeted = document.getElementById(statsCompetedId);
        const statsFrequency = document.getElementById(statsFrequencyId);
        const statsWinner = document.getElementById(statsWinnerId);
        const statsSecond = document.getElementById(statsSecondId);
        const statsThird = document.getElementById(statsThirdId);
        const statsPodium = document.getElementById(statsPodiumId);
        const statsWinsPct = document.getElementById(statsWinsPctId);
        const statsPodiumPct = document.getElementById(statsPodiumPctId);
        const statsFurtherPlaces = document.getElementById(statsFurtherPlacesId);
        const statsAgainstOthers = document.getElementById(statsAgainstOthersId);
        const chart = `<svg viewBox="0 0 64 64" class="pie">
                            <circle r="25%" cx="50%" cy="50%" style="stroke-dasharray: ${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3) * 100}, 100; stroke-dashoffset: 0; animation-delay: .2s">
                            </circle>
                        </svg>`;
        statsCompeted.innerText = competed;
        statsFrequency.innerText = `${frequency.toFixed(3)}%`;
        statsWinner.innerHTML = `${winner} ${onceOrMore(winner, "&#129351;")}`;
        statsSecond.innerHTML = `${second} ${onceOrMore(second, "&#129352;")}`;
        statsThird.innerHTML = `${third} ${onceOrMore(third, "&#129353;")}`;
        statsPodium.innerText = podium;
        statsWinsPct.innerText = `${winsPct.toFixed(3)}%`;
        statsPodiumPct.innerText = `${podiumPct.toFixed(3)}%`;
        statsFurtherPlaces.innerText = furtherPlaces;
        statsAgainstOthers.innerHTML = `<span class="wins-rate">${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3)} ${chart}</span>`;
      };

      showMeStats(raceInfo);
    }; //--- sparametryzowane dodawanie selectów ---


    function addingSelects(truckersTab, selectToFill) {
      for (let i = 0; i < truckersTab.length; i++) {
        function addOption(i) {
          let mySelect = null;
          let newElOption = null;
          newElOption = document.createElement("option");
          newElOption.innerHTML = truckersTab[i];
          mySelect = selects[selectToFill];
          mySelect.appendChild(newElOption);
        }

        addOption(i);
      }
    } //--- przygotowanie listy oponentów możliwych do porównania ---


    function truckersToCompare() {
      let selectedOption = selects[0].options[selects[0].selectedIndex];
      let selectedText = selectedOption.text;
      let avilableToCompare = [];
      avilableToCompare = uniques.filter(function (el) {
        return el != selectedOption.text;
      });
      return avilableToCompare;
    } //--- dodanie optionow do drugiego selecta ---


    const prepareSecondSelect = function () {
      const selectToClear = selects[1];

      while (selectToClear.firstChild) {
        selectToClear.removeChild(selectToClear.firstChild);
      } //--- wypełnienie SelectoToCompare kierowcami z tablicy avilableToCompare ---


      addingSelects(truckersToCompare(), 1);
    }; //--- deklaracja wyrażenia funkcyjnego czyszczącego kontener porównania ---


    const clearingComparison = function () {
      const compareContainer = document.getElementById("comparison");
      compareContainer.innerHTML = "";
    }; //--- funkcja do porównywania wyników zawodników ---


    const vs = function () {
      const compareDisplay = document.getElementById("comparison");

      if (compareDisplay.firstChild === null) {
        // --- first driver ---
        let selectedOption1 = selects[0].options[selects[0].selectedIndex];
        let selectedText1 = selectedOption1.text;
        let who1 = selectedText1; // --- second driver ---

        let selectedOption2 = selects[1].options[selects[1].selectedIndex];
        let selectedText2 = selectedOption2.text;
        let who2 = selectedText2; // --- score collection ---

        let who1Score = 0;
        let who2Score = 0;
        let draw = 0; // --- chart variables ---

        let chartPoints1 = "";
        let chartPoints2 = "";
        let chartPointsNrOfDrivers = "";
        let oneRaceWidth = compareDisplay.offsetWidth / raceInfo.length;
        let svgHeight = 160; // --- markers arrays ---

        let positionPoint1MarkerTab = [];
        let positionPoint2MarkerTab = []; // --- SVG section ---

        let chartWrapper = document.createElement("div");
        chartWrapper.classList.add("chart-wrapper");
        let chartBg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        chartBg.setAttribute("version", "1.1");
        chartBg.classList.add("chart-bg"); // --- chart wrapper injection ---

        compareDisplay.appendChild(chartWrapper); //--- calculate scores and charts ---

        for (let i = 0; i < raceInfo.length; i++) {
          let who1Id = raceInfo[i].competitors.indexOf(who1); //index danego kierowcy w tabeli uczestników danego rajdu[i]

          let who2Id = raceInfo[i].competitors.indexOf(who2); //jw

          let who1Pos = parseInt(raceInfo[i].position[who1Id]) || undefined; //pozycja z tabeli wzięta po odpowiadającym indexie z tabeli uczestników

          let who2Pos = parseInt(raceInfo[i].position[who2Id]) || undefined; //jw

          let numberOfCompetitors = raceInfo[i].competitors.length;
          let raceCounter = i + 1;
          let positionPerCompetitors1 = (numberOfCompetitors - who1Pos) / (numberOfCompetitors - 1);
          let positionPerCompetitors2 = (numberOfCompetitors - who2Pos) / (numberOfCompetitors - 1);
          let milage = i * oneRaceWidth;
          chartPoints1 += `${milage}, ${who1Pos !== undefined ? positionPerCompetitors1 * numberOfCompetitors * 10 : 0} `;
          chartPoints2 += `${milage}, ${who2Pos !== undefined ? positionPerCompetitors2 * numberOfCompetitors * 10 : 0} `;
          chartPointsNrOfDrivers += `${milage}, ${numberOfCompetitors * 10} `;
          let y1 = positionPerCompetitors1 * numberOfCompetitors * 10;
          let y2 = positionPerCompetitors2 * numberOfCompetitors * 10;
          let cordinates1 = milage < 600 ? `left: ${milage + 7}px; top: ${y1 + 7}px;` : `left: ${milage - 300 - 7}px; top: ${y1 + 7}px;`;
          let cordinates2 = milage < 600 ? `left: ${milage + 5}px; top: ${y2 + 5}px;` : `left: ${milage - 300 - 5}px; top: ${y2 + 5}px;`; // --- creating&add tooltips --- 

          function genTooltip(who, cordinates, whoPos) {
            let tooltip = document.createElement("span");
            tooltip.classList.add("tip");
            tooltip.classList.add("hidden");
            tooltip.setAttribute("style", cordinates);
            tooltip.setAttribute("data-who", who);
            tooltip.setAttribute("data-id", i);
            tooltip.innerText = `On the race ${raceInfo[i].series}#${raceInfo[i].race}/${raceInfo[i].year} ${who} took ${whoPos} place (out of ${numberOfCompetitors} participants)`;
            chartWrapper.appendChild(tooltip);
          }

          if (who1Pos !== undefined) {
            const positionPoint1Marker = {
              cx: milage,
              cy: y1,
              id: i,
              position: who1Pos,
              race: i + 1,
              who: who1
            };
            positionPoint1MarkerTab.push(positionPoint1Marker);
            genTooltip(who1, cordinates1, who1Pos);
          } else {
            positionPoint1MarkerTab.push(null);
          }

          if (who2Pos !== undefined) {
            const positionPoint2Marker = {
              cx: milage,
              cy: y2,
              id: i,
              position: who2Pos,
              race: i + 1,
              who: who2
            };
            positionPoint2MarkerTab.push(positionPoint2Marker);
            genTooltip(who2, cordinates2, who2Pos);
          } else {
            positionPoint2MarkerTab.push(null);
          } // --- vertical race indicators on chart ---


          let raceLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
          raceLine.classList.add("race-line");
          raceLine.setAttribute("x1", milage);
          raceLine.setAttribute("x2", milage);
          raceLine.setAttribute("y1", 0);
          raceLine.setAttribute("y2", 160);
          chartBg.appendChild(raceLine); // --- score calculator ---

          if (who1Pos && who2Pos !== undefined) {
            if (who1Pos < who2Pos) {
              who1Score++;
            } else if (who2Pos < who1Pos) {
              who2Score++;
            } else {
              draw++;
            }
          }
        } // --- dodanie wykresów po pętli generującej ---


        let lineA = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        lineA.classList.add("chart-line-a");
        lineA.setAttribute("points", chartPoints1);
        chartBg.appendChild(lineA);
        let lineB = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        lineB.classList.add("chart-line-b");
        lineB.setAttribute("points", chartPoints2);
        chartBg.appendChild(lineB);
        let lineAll = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        lineAll.classList.add("chart-line-all");
        lineAll.setAttribute("points", chartPointsNrOfDrivers);
        chartBg.appendChild(lineAll); //--- funkcja rysująca markery pozycji zawodników na podstawie obiektów w tablicy ---

        function drawMarkers(tab, r, strokeColor, fillColor, cssClass) {
          function drawSingleMarker(item) {
            if (item !== null) {
              let positionPointMarker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
              positionPointMarker.setAttribute("cx", item.cx);
              positionPointMarker.setAttribute("cy", item.cy);
              positionPointMarker.setAttribute("r", r);
              positionPointMarker.setAttribute("stroke", strokeColor);
              positionPointMarker.setAttribute("fill", fillColor);
              positionPointMarker.setAttribute("stroke-innerWidth", "5");
              positionPointMarker.setAttribute("data-position", item.position);
              positionPointMarker.setAttribute("data-race", item.race);
              positionPointMarker.setAttribute("data-who", item.who);
              positionPointMarker.setAttribute("data-id", item.id);
              positionPointMarker.classList.add(cssClass);
              chartBg.appendChild(positionPointMarker);
            } else {
              console.log("DNS");
            }
          }

          tab.forEach(drawSingleMarker);
        } // --- rysuj wskazniki dla pierwszego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass) ---


        drawMarkers(positionPoint1MarkerTab, 7, "rgb(212, 9, 26)", "rgb(212, 9, 26)", "chart-point-a"); // --- rysuj wskazniki dla drugiego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass) ---

        drawMarkers(positionPoint2MarkerTab, 5, "rgb(2, 3, 65)", "rgb(2, 3, 65)", "chart-point-b"); // --- score in console ---

        console.log("---< Wynik H2H >---");
        console.info(who1 + " był wyżej " + who1Score);
        console.info(who2 + " był wyżej " + who2Score);
        console.info("remis był: " + draw); // --- markup for show driver comparison ---

        let h2hStat = document.createElement("div");
        h2hStat.classList.add("row", "text-light", "text-center", "bd-dark");
        h2hStat.innerHTML = `<div class=\"col-sm-12 bg-dark text-light\"><strong>Head to head</strong><br>
                        ${who1} took a higher place ${who1Score} times<br>
                        ${who2} took a higher place ${who2Score} times<br>
                        draw was ${draw}</div>`;
        compareDisplay.insertBefore(h2hStat, compareDisplay.firstChild); // --- wstawiamy wykres po sekcji porównywania ---

        chartWrapper.appendChild(chartBg); // --- add event listeners on markers ---

        let circles = document.querySelectorAll(".chart-bg > circle");

        for (let i = 0; i < circles.length; i++) {
          let tooltipsForCircles = document.querySelectorAll(".tip");
          circles[i].addEventListener("mouseenter", e => {
            for (let j = 0; j < tooltipsForCircles.length; j++) {
              if (e.target.dataset.who == tooltipsForCircles[j].dataset.who && e.target.dataset.id == tooltipsForCircles[j].dataset.id) {
                tooltipsForCircles[j].classList.toggle("hidden");
              }
            }
          }, false);
          circles[i].addEventListener("mouseleave", e => {
            for (let j = 0; j < tooltipsForCircles.length; j++) {
              if (tooltipsForCircles[j].dataset.who == e.target.dataset.who && tooltipsForCircles[j].dataset.id == e.target.dataset.id) {
                tooltipsForCircles[j].classList.toggle("hidden");
              }
            }
          }, false);
        }
      } else {
        console.log("The comparison has already been displayed");
      }
    }; // koniec f. vs()
    // --- plugging event listener on compare button ---


    const compareBtn = document.getElementById("compareBtn");
    compareBtn.addEventListener("click", vs, false);
  }
}; // end of xhttp.onreadystatechange


xhttp.open("GET", "db.json", true);
xhttp.send(); // --- polyfill: Array ---

Array.prototype.contains = function (v) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }

  return false;
};

Array.prototype.unique = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }

  return arr;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
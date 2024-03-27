import * as React17 from 'react';
import React17__default, { createContext, lazy, useState, useCallback, Component, cloneElement, Children, useContext, useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import { styled, ignoreSsrWarning, useTheme, themes, ThemeProvider, convert } from '@storybook/theming';
import { withReset, SyntaxHighlighter, FlexBar, codeCommon, IconButton, Form, components, Button, Zoom, ActionBar, nameSpaceClassNames, H2, AddonPanel, WithTooltip, TooltipNote, ScrollArea } from '@storybook/components';
import { ChevronSmallUpIcon, ChevronSmallDownIcon, AddIcon, SubtractIcon, ChevronDownIcon, ChevronRightIcon, ZoomIcon, ZoomOutIcon, ZoomResetIcon, MarkupIcon, LinkIcon, EyeCloseIcon, EyeIcon } from '@storybook/icons';
import { addons, types, useAddonState, useChannel } from '@storybook/manager-api';
import '@storybook/client-logger';
import { NAVIGATE_URL } from '@storybook/core-events';
import '@storybook/channels';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x3 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs
var getControlId, getControlSetterButtonId;
var init_chunk_GWAJ4KRU = __esm({
  "node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs"() {
    getControlId = (value3) => `control-${value3.replace(/\s+/g, "-")}`;
    getControlSetterButtonId = (value3) => `set-${value3.replace(/\s+/g, "-")}`;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap2(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length, result2 = Array(length);
      while (++index < length) {
        result2[index] = iteratee(array2[index], index, array2);
      }
      return result2;
    }
    module.exports = arrayMap2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear2() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(exports, module) {
    function eq2(value3, other) {
      return value3 === other || value3 !== value3 && other !== other;
    }
    module.exports = eq2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq2 = require_eq();
    function assocIndexOf2(array2, key2) {
      var length = array2.length;
      while (length--) {
        if (eq2(array2[length][0], key2)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf2 = require_assocIndexOf();
    var arrayProto2 = Array.prototype;
    var splice2 = arrayProto2.splice;
    function listCacheDelete2(key2) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice2.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheGet2(key2) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheHas2(key2) {
      return assocIndexOf2(this.__data__, key2) > -1;
    }
    module.exports = listCacheHas2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf2 = require_assocIndexOf();
    function listCacheSet2(key2, value3) {
      var data = this.__data__, index = assocIndexOf2(data, key2);
      if (index < 0) {
        ++this.size;
        data.push([key2, value3]);
      } else {
        data[index][1] = value3;
      }
      return this;
    }
    module.exports = listCacheSet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear2 = require_listCacheClear();
    var listCacheDelete2 = require_listCacheDelete();
    var listCacheGet2 = require_listCacheGet();
    var listCacheHas2 = require_listCacheHas();
    var listCacheSet2 = require_listCacheSet();
    function ListCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    module.exports = ListCache2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache2 = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache2();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key2) {
      var data = this.__data__, result2 = data["delete"](key2);
      this.size = data.size;
      return result2;
    }
    module.exports = stackDelete;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key2) {
      return this.__data__.get(key2);
    }
    module.exports = stackGet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key2) {
      return this.__data__.has(key2);
    }
    module.exports = stackHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal();
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root3 = freeGlobal2 || freeSelf2 || Function("return this")();
    module.exports = root3;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports, module) {
    var root3 = require_root();
    var Symbol3 = root3.Symbol;
    module.exports = Symbol3;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var nativeObjectToString3 = objectProto6.toString;
    var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
    function getRawTag2(value3) {
      var isOwn = hasOwnProperty5.call(value3, symToStringTag3), tag = value3[symToStringTag3];
      try {
        value3[symToStringTag3] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result2 = nativeObjectToString3.call(value3);
      if (unmasked) {
        if (isOwn) {
          value3[symToStringTag3] = tag;
        } else {
          delete value3[symToStringTag3];
        }
      }
      return result2;
    }
    module.exports = getRawTag2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto6 = Object.prototype;
    var nativeObjectToString3 = objectProto6.toString;
    function objectToString2(value3) {
      return nativeObjectToString3.call(value3);
    }
    module.exports = objectToString2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var getRawTag2 = require_getRawTag();
    var objectToString2 = require_objectToString();
    var nullTag2 = "[object Null]";
    var undefinedTag2 = "[object Undefined]";
    var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
    function baseGetTag2(value3) {
      if (value3 == null) {
        return value3 === void 0 ? undefinedTag2 : nullTag2;
      }
      return symToStringTag3 && symToStringTag3 in Object(value3) ? getRawTag2(value3) : objectToString2(value3);
    }
    module.exports = baseGetTag2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports, module) {
    function isObject4(value3) {
      var type = typeof value3;
      return value3 != null && (type == "object" || type == "function");
    }
    module.exports = isObject4;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObject4 = require_isObject();
    var asyncTag2 = "[object AsyncFunction]";
    var funcTag2 = "[object Function]";
    var genTag2 = "[object GeneratorFunction]";
    var proxyTag2 = "[object Proxy]";
    function isFunction2(value3) {
      if (!isObject4(value3)) {
        return false;
      }
      var tag = baseGetTag2(value3);
      return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
    }
    module.exports = isFunction2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js"(exports, module) {
    var root3 = require_root();
    var coreJsData2 = root3["__core-js_shared__"];
    module.exports = coreJsData2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData2 = require_coreJsData();
    var maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func;
    }
    module.exports = isMasked2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto3 = Function.prototype;
    var funcToString3 = funcProto3.toString;
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString3.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    module.exports = toSource2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isMasked2 = require_isMasked();
    var isObject4 = require_isObject();
    var toSource2 = require_toSource();
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var reIsNative2 = RegExp(
      "^" + funcToString3.call(hasOwnProperty5).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative2(value3) {
      if (!isObject4(value3) || isMasked2(value3)) {
        return false;
      }
      var pattern = isFunction2(value3) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value3));
    }
    module.exports = baseIsNative2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js"(exports, module) {
    function getValue2(object2, key2) {
      return object2 == null ? void 0 : object2[key2];
    }
    module.exports = getValue2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative2 = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative2(object2, key2) {
      var value3 = getValue2(object2, key2);
      return baseIsNative2(value3) ? value3 : void 0;
    }
    module.exports = getNative2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Map3 = getNative2(root3, "Map");
    module.exports = Map3;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative2 = require_getNative();
    var nativeCreate2 = getNative2(Object, "create");
    module.exports = nativeCreate2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate2 = require_nativeCreate();
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
      this.size = 0;
    }
    module.exports = hashClear2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete2(key2) {
      var result2 = this.has(key2) && delete this.__data__[key2];
      this.size -= result2 ? 1 : 0;
      return result2;
    }
    module.exports = hashDelete2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate2 = require_nativeCreate();
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function hashGet2(key2) {
      var data = this.__data__;
      if (nativeCreate2) {
        var result2 = data[key2];
        return result2 === HASH_UNDEFINED3 ? void 0 : result2;
      }
      return hasOwnProperty5.call(data, key2) ? data[key2] : void 0;
    }
    module.exports = hashGet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate2 = require_nativeCreate();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function hashHas2(key2) {
      var data = this.__data__;
      return nativeCreate2 ? data[key2] !== void 0 : hasOwnProperty5.call(data, key2);
    }
    module.exports = hashHas2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate2 = require_nativeCreate();
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    function hashSet2(key2, value3) {
      var data = this.__data__;
      this.size += this.has(key2) ? 0 : 1;
      data[key2] = nativeCreate2 && value3 === void 0 ? HASH_UNDEFINED3 : value3;
      return this;
    }
    module.exports = hashSet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear2 = require_hashClear();
    var hashDelete2 = require_hashDelete();
    var hashGet2 = require_hashGet();
    var hashHas2 = require_hashHas();
    var hashSet2 = require_hashSet();
    function Hash2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    module.exports = Hash2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash2 = require_Hash();
    var ListCache2 = require_ListCache();
    var Map3 = require_Map();
    function mapCacheClear2() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map3 || ListCache2)(),
        "string": new Hash2()
      };
    }
    module.exports = mapCacheClear2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable2(value3) {
      var type = typeof value3;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value3 !== "__proto__" : value3 === null;
    }
    module.exports = isKeyable2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable2 = require_isKeyable();
    function getMapData2(map, key2) {
      var data = map.__data__;
      return isKeyable2(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData2 = require_getMapData();
    function mapCacheDelete2(key2) {
      var result2 = getMapData2(this, key2)["delete"](key2);
      this.size -= result2 ? 1 : 0;
      return result2;
    }
    module.exports = mapCacheDelete2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData2 = require_getMapData();
    function mapCacheGet2(key2) {
      return getMapData2(this, key2).get(key2);
    }
    module.exports = mapCacheGet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData2 = require_getMapData();
    function mapCacheHas2(key2) {
      return getMapData2(this, key2).has(key2);
    }
    module.exports = mapCacheHas2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData2 = require_getMapData();
    function mapCacheSet2(key2, value3) {
      var data = getMapData2(this, key2), size = data.size;
      data.set(key2, value3);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear2 = require_mapCacheClear();
    var mapCacheDelete2 = require_mapCacheDelete();
    var mapCacheGet2 = require_mapCacheGet();
    var mapCacheHas2 = require_mapCacheHas();
    var mapCacheSet2 = require_mapCacheSet();
    function MapCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    module.exports = MapCache2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache2 = require_ListCache();
    var Map3 = require_Map();
    var MapCache2 = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key2, value3) {
      var data = this.__data__;
      if (data instanceof ListCache2) {
        var pairs = data.__data__;
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key2, value3]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache2(pairs);
      }
      data.set(key2, value3);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache2 = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache2(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    function setCacheAdd(value3) {
      this.__data__.set(value3, HASH_UNDEFINED3);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value3) {
      return this.__data__.has(value3);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache2 = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache2();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (predicate(array2[index], index, array2)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key2) {
      return cache.has(key2);
    }
    module.exports = cacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array2);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array2;
      }
      var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index < arrLength) {
        var arrValue = array2[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result2 = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result2 = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result2 = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result2;
    }
    module.exports = equalArrays;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root3 = require_root();
    var Uint8Array2 = root3.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result2 = Array(map.size);
      map.forEach(function(value3, key2) {
        result2[++index] = [key2, value3];
      });
      return result2;
    }
    module.exports = mapToArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result2 = Array(set.size);
      set.forEach(function(value3) {
        result2[++index] = value3;
      });
      return result2;
    }
    module.exports = setToArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq2 = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
    function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
            return false;
          }
          object2 = object2.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq2(+object2, +other);
        case errorTag:
          return object2.name == other.name && object2.message == other.message;
        case regexpTag:
        case stringTag:
          return object2 == other + "";
        case mapTag:
          var convert3 = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert3 || (convert3 = setToArray);
          if (object2.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object2);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object2, other);
          var result2 = equalArrays(convert3(object2), convert3(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object2);
          return result2;
        case symbolTag2:
          if (symbolValueOf) {
            return symbolValueOf.call(object2) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array2, values) {
      var index = -1, length = values.length, offset = array2.length;
      while (++index < length) {
        array2[offset + index] = values[index];
      }
      return array2;
    }
    module.exports = arrayPush;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"(exports, module) {
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result2 = keysFunc(object2);
      return isArray2(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
      while (++index < length) {
        var value3 = array2[index];
        if (predicate(value3, index, array2)) {
          result2[resIndex++] = value3;
        }
      }
      return result2;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto6 = Object.prototype;
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
      if (object2 == null) {
        return [];
      }
      object2 = Object(object2);
      return arrayFilter(nativeGetSymbols(object2), function(symbol) {
        return propertyIsEnumerable.call(object2, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n2, iteratee) {
      var index = -1, result2 = Array(n2);
      while (++index < n2) {
        result2[index] = iteratee(index);
      }
      return result2;
    }
    module.exports = baseTimes;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike2(value3) {
      return value3 != null && typeof value3 == "object";
    }
    module.exports = isObjectLike2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value3) {
      return isObjectLike2(value3) && baseGetTag2(value3) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike2 = require_isObjectLike();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value3) {
      return isObjectLike2(value3) && hasOwnProperty5.call(value3, "callee") && !propertyIsEnumerable.call(value3, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"(exports, module) {
    var root3 = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root3.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value3, length) {
      var type = typeof value3;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value3)) && (value3 > -1 && value3 % 1 == 0 && value3 < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value3) {
      return typeof value3 == "number" && value3 > -1 && value3 % 1 == 0 && value3 <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag2 = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value3) {
      return isObjectLike2(value3) && isLength(value3.length) && !!typedArrayTags[baseGetTag2(value3)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value3) {
        return func(value3);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil = function() {
      try {
        var types2 = freeModule && freeModule.require && freeModule.require("util").types;
        if (types2) {
          return types2;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function arrayLikeKeys(value3, inherited) {
      var isArr = isArray2(value3), isArg = !isArr && isArguments(value3), isBuff = !isArr && !isArg && isBuffer(value3), isType = !isArr && !isArg && !isBuff && isTypedArray(value3), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value3.length, String) : [], length = result2.length;
      for (var key2 in value3) {
        if ((inherited || hasOwnProperty5.call(value3, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
        isIndex(key2, length)))) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto6 = Object.prototype;
    function isPrototype(value3) {
      var Ctor = value3 && value3.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto6;
      return value3 === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result2 = [];
      for (var key2 in Object(object2)) {
        if (hasOwnProperty5.call(object2, key2) && key2 != "constructor") {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = baseKeys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value3) {
      return value3 != null && isLength(value3.length) && !isFunction2(value3);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    module.exports = keys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key2 = objProps[index];
        if (!(isPartial ? key2 in other : hasOwnProperty5.call(other, key2))) {
          return false;
        }
      }
      var objStacked = stack.get(object2);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object2;
      }
      var result2 = true;
      stack.set(object2, other);
      stack.set(other, object2);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key2 = objProps[index];
        var objValue = object2[key2], othValue = other[key2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key2, other, object2, stack) : customizer(objValue, othValue, key2, object2, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result2 = false;
          break;
        }
        skipCtor || (skipCtor = key2 == "constructor");
      }
      if (result2 && !skipCtor) {
        var objCtor = object2.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result2 = false;
        }
      }
      stack["delete"](object2);
      stack["delete"](other);
      return result2;
    }
    module.exports = equalObjects;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root();
    var DataView2 = getNative2(root3, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Promise2 = getNative2(root3, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root();
    var Set2 = getNative2(root3, "Set");
    module.exports = Set2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative2 = require_getNative();
    var root3 = require_root();
    var WeakMap2 = getNative2(root3, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map3 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag2 = require_baseGetTag();
    var toSource2 = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource2(DataView2);
    var mapCtorString = toSource2(Map3);
    var promiseCtorString = toSource2(Promise2);
    var setCtorString = toSource2(Set2);
    var weakMapCtorString = toSource2(WeakMap2);
    var getTag = baseGetTag2;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map3 && getTag(new Map3()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value3) {
        var result2 = baseGetTag2(value3), Ctor = result2 == objectTag ? value3.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result2;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object2), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object2)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty5.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty5.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike2 = require_isObjectLike();
    function baseIsEqual(value3, other, bitmask, customizer, stack) {
      if (value3 === other) {
        return true;
      }
      if (value3 == null || other == null || !isObjectLike2(value3) && !isObjectLike2(other)) {
        return value3 !== value3 && other !== other;
      }
      return baseIsEqualDeep(value3, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object2, source2, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object2 == null) {
        return !length;
      }
      object2 = Object(object2);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key2 = data[0], objValue = object2[key2], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key2 in object2)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result2 = customizer(objValue, srcValue, key2, object2, source2, stack);
          }
          if (!(result2 === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject4 = require_isObject();
    function isStrictComparable(value3) {
      return value3 === value3 && !isObject4(value3);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object2) {
      var result2 = keys(object2), length = result2.length;
      while (length--) {
        var key2 = result2[length], value3 = object2[key2];
        result2[length] = [key2, value3, isStrictComparable(value3)];
      }
      return result2;
    }
    module.exports = getMatchData;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key2, srcValue) {
      return function(object2) {
        if (object2 == null) {
          return false;
        }
        return object2[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object2));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source2) {
      var matchData = getMatchData(source2);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object2) {
        return object2 === source2 || baseIsMatch(object2, source2, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var symbolTag2 = "[object Symbol]";
    function isSymbol2(value3) {
      return typeof value3 == "symbol" || isObjectLike2(value3) && baseGetTag2(value3) == symbolTag2;
    }
    module.exports = isSymbol2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js"(exports, module) {
    var isArray2 = require_isArray();
    var isSymbol2 = require_isSymbol();
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp2 = /^\w*$/;
    function isKey2(value3, object2) {
      if (isArray2(value3)) {
        return false;
      }
      var type = typeof value3;
      if (type == "number" || type == "symbol" || type == "boolean" || value3 == null || isSymbol2(value3)) {
        return true;
      }
      return reIsPlainProp2.test(value3) || !reIsDeepProp2.test(value3) || object2 != null && value3 in Object(object2);
    }
    module.exports = isKey2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js"(exports, module) {
    var MapCache2 = require_MapCache();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function memoize4(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      var memoized = function() {
        var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
        if (cache.has(key2)) {
          return cache.get(key2);
        }
        var result2 = func.apply(this, args2);
        memoized.cache = cache.set(key2, result2) || cache;
        return result2;
      };
      memoized.cache = new (memoize4.Cache || MapCache2)();
      return memoized;
    }
    memoize4.Cache = MapCache2;
    module.exports = memoize4;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize4 = require_memoize();
    var MAX_MEMOIZE_SIZE2 = 500;
    function memoizeCapped2(func) {
      var result2 = memoize4(func, function(key2) {
        if (cache.size === MAX_MEMOIZE_SIZE2) {
          cache.clear();
        }
        return key2;
      });
      var cache = result2.cache;
      return result2;
    }
    module.exports = memoizeCapped2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped2 = require_memoizeCapped();
    var rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = memoizeCapped2(function(string) {
      var result2 = [];
      if (string.charCodeAt(0) === 46) {
        result2.push("");
      }
      string.replace(rePropName2, function(match, number, quote, subString) {
        result2.push(quote ? subString.replace(reEscapeChar2, "$1") : number || match);
      });
      return result2;
    });
    module.exports = stringToPath2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var arrayMap2 = require_arrayMap();
    var isArray2 = require_isArray();
    var isSymbol2 = require_isSymbol();
    var INFINITY3 = 1 / 0;
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolToString2 = symbolProto2 ? symbolProto2.toString : void 0;
    function baseToString2(value3) {
      if (typeof value3 == "string") {
        return value3;
      }
      if (isArray2(value3)) {
        return arrayMap2(value3, baseToString2) + "";
      }
      if (isSymbol2(value3)) {
        return symbolToString2 ? symbolToString2.call(value3) : "";
      }
      var result2 = value3 + "";
      return result2 == "0" && 1 / value3 == -INFINITY3 ? "-0" : result2;
    }
    module.exports = baseToString2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js"(exports, module) {
    var baseToString2 = require_baseToString();
    function toString2(value3) {
      return value3 == null ? "" : baseToString2(value3);
    }
    module.exports = toString2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js"(exports, module) {
    var isArray2 = require_isArray();
    var isKey2 = require_isKey();
    var stringToPath2 = require_stringToPath();
    var toString2 = require_toString();
    function castPath2(value3, object2) {
      if (isArray2(value3)) {
        return value3;
      }
      return isKey2(value3, object2) ? [value3] : stringToPath2(toString2(value3));
    }
    module.exports = castPath2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol2 = require_isSymbol();
    var INFINITY3 = 1 / 0;
    function toKey2(value3) {
      if (typeof value3 == "string" || isSymbol2(value3)) {
        return value3;
      }
      var result2 = value3 + "";
      return result2 == "0" && 1 / value3 == -INFINITY3 ? "-0" : result2;
    }
    module.exports = toKey2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath2 = require_castPath();
    var toKey2 = require_toKey();
    function baseGet2(object2, path) {
      path = castPath2(path, object2);
      var index = 0, length = path.length;
      while (object2 != null && index < length) {
        object2 = object2[toKey2(path[index++])];
      }
      return index && index == length ? object2 : void 0;
    }
    module.exports = baseGet2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js"(exports, module) {
    var baseGet2 = require_baseGet();
    function get2(object2, path, defaultValue) {
      var result2 = object2 == null ? void 0 : baseGet2(object2, path);
      return result2 === void 0 ? defaultValue : result2;
    }
    module.exports = get2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object2, key2) {
      return object2 != null && key2 in Object(object2);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath2 = require_castPath();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey2 = require_toKey();
    function hasPath(object2, path, hasFunc) {
      path = castPath2(path, object2);
      var index = -1, length = path.length, result2 = false;
      while (++index < length) {
        var key2 = toKey2(path[index]);
        if (!(result2 = object2 != null && hasFunc(object2, key2))) {
          break;
        }
        object2 = object2[key2];
      }
      if (result2 || ++index != length) {
        return result2;
      }
      length = object2 == null ? 0 : object2.length;
      return !!length && isLength(length) && isIndex(key2, length) && (isArray2(object2) || isArguments(object2));
    }
    module.exports = hasPath;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object2, path) {
      return object2 != null && hasPath(object2, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get2 = require_get();
    var hasIn = require_hasIn();
    var isKey2 = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey2 = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey2(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey2(path), srcValue);
      }
      return function(object2) {
        var objValue = get2(object2, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js"(exports, module) {
    function identity(value3) {
      return value3;
    }
    module.exports = identity;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key2) {
      return function(object2) {
        return object2 == null ? void 0 : object2[key2];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet2 = require_baseGet();
    function basePropertyDeep(path) {
      return function(object2) {
        return baseGet2(object2, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey2 = require_isKey();
    var toKey2 = require_toKey();
    function property(path) {
      return isKey2(path) ? baseProperty(toKey2(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray2 = require_isArray();
    var property = require_property();
    function baseIteratee(value3) {
      if (typeof value3 == "function") {
        return value3;
      }
      if (value3 == null) {
        return identity;
      }
      if (typeof value3 == "object") {
        return isArray2(value3) ? baseMatchesProperty(value3[0], value3[1]) : baseMatches(value3);
      }
      return property(value3);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative2 = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative2(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e2) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object2, key2, value3) {
      if (key2 == "__proto__" && defineProperty) {
        defineProperty(object2, key2, {
          "configurable": true,
          "enumerable": true,
          "value": value3,
          "writable": true
        });
      } else {
        object2[key2] = value3;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function assignValue(object2, key2, value3) {
      var objValue = object2[key2];
      if (!(hasOwnProperty5.call(object2, key2) && eq2(objValue, value3)) || value3 === void 0 && !(key2 in object2)) {
        baseAssignValue(object2, key2, value3);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath2 = require_castPath();
    var isIndex = require_isIndex();
    var isObject4 = require_isObject();
    var toKey2 = require_toKey();
    function baseSet(object2, path, value3, customizer) {
      if (!isObject4(object2)) {
        return object2;
      }
      path = castPath2(path, object2);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
      while (nested != null && ++index < length) {
        var key2 = toKey2(path[index]), newValue = value3;
        if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
          return object2;
        }
        if (index != lastIndex) {
          var objValue = nested[key2];
          newValue = customizer ? customizer(objValue, key2, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject4(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key2, newValue);
        nested = nested[key2];
      }
      return object2;
    }
    module.exports = baseSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet2 = require_baseGet();
    var baseSet = require_baseSet();
    var castPath2 = require_castPath();
    function basePickBy(object2, paths, predicate) {
      var index = -1, length = paths.length, result2 = {};
      while (++index < length) {
        var path = paths[index], value3 = baseGet2(object2, path);
        if (predicate(value3, path)) {
          baseSet(result2, castPath2(path, object2), value3);
        }
      }
      return result2;
    }
    module.exports = basePickBy;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
      var result2 = [];
      while (object2) {
        arrayPush(result2, getSymbols(object2));
        object2 = getPrototype(object2);
      }
      return result2;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object2) {
      var result2 = [];
      if (object2 != null) {
        for (var key2 in Object(object2)) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject4 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function baseKeysIn(object2) {
      if (!isObject4(object2)) {
        return nativeKeysIn(object2);
      }
      var isProto = isPrototype(object2), result2 = [];
      for (var key2 in object2) {
        if (!(key2 == "constructor" && (isProto || !hasOwnProperty5.call(object2, key2)))) {
          result2.push(key2);
        }
      }
      return result2;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
    }
    module.exports = keysIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object2) {
      return baseGetAllKeys(object2, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js
var require_pickBy = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js"(exports, module) {
    var arrayMap2 = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var basePickBy = require_basePickBy();
    var getAllKeysIn = require_getAllKeysIn();
    function pickBy2(object2, predicate) {
      if (object2 == null) {
        return {};
      }
      var props = arrayMap2(getAllKeysIn(object2), function(prop) {
        return [prop];
      });
      predicate = baseIteratee(predicate);
      return basePickBy(object2, props, function(value3, path) {
        return predicate(value3, path[0]);
      });
    }
    module.exports = pickBy2;
  }
});

// node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific/memoizerific.js
var require_memoizerific = __commonJS({
  "node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific/memoizerific.js"(exports, module) {
    (function(f3) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f3();
      } else if (typeof define === "function" && define.amd) {
        define([], f3);
      } else {
        var g2;
        if (typeof window !== "undefined") {
          g2 = window;
        } else if (typeof global !== "undefined") {
          g2 = global;
        } else if (typeof self !== "undefined") {
          g2 = self;
        } else {
          g2 = this;
        }
        g2.memoizerific = f3();
      }
    })(function() {
      return function e2(t3, n2, r3) {
        function s2(o3, u3) {
          if (!n2[o3]) {
            if (!t3[o3]) {
              var a2 = typeof __require == "function" && __require;
              if (!u3 && a2)
                return a2(o3, true);
              if (i3)
                return i3(o3, true);
              var f3 = new Error("Cannot find module '" + o3 + "'");
              throw f3.code = "MODULE_NOT_FOUND", f3;
            }
            var l2 = n2[o3] = { exports: {} };
            t3[o3][0].call(l2.exports, function(e3) {
              var n3 = t3[o3][1][e3];
              return s2(n3 ? n3 : e3);
            }, l2, l2.exports, e2, t3, n2, r3);
          }
          return n2[o3].exports;
        }
        var i3 = typeof __require == "function" && __require;
        for (var o2 = 0; o2 < r3.length; o2++)
          s2(r3[o2]);
        return s2;
      }({ 1: [function(_dereq_, module3, exports3) {
        module3.exports = function(forceSimilar) {
          if (typeof Map !== "function" || forceSimilar) {
            var Similar = _dereq_("./similar");
            return new Similar();
          } else {
            return /* @__PURE__ */ new Map();
          }
        };
      }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
        function Similar() {
          this.list = [];
          this.lastItem = void 0;
          this.size = 0;
          return this;
        }
        Similar.prototype.get = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            return this.lastItem.val;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return this.list[index].val;
          }
          return void 0;
        };
        Similar.prototype.set = function(key2, val) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            this.lastItem.val = val;
            return this;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            this.list[index].val = val;
            return this;
          }
          this.lastItem = { key: key2, val };
          this.list.push(this.lastItem);
          this.size++;
          return this;
        };
        Similar.prototype.delete = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            this.lastItem = void 0;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.size--;
            return this.list.splice(index, 1)[0];
          }
          return void 0;
        };
        Similar.prototype.has = function(key2) {
          var index;
          if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
            return true;
          }
          index = this.indexOf(key2);
          if (index >= 0) {
            this.lastItem = this.list[index];
            return true;
          }
          return false;
        };
        Similar.prototype.forEach = function(callback, thisArg) {
          var i3;
          for (i3 = 0; i3 < this.size; i3++) {
            callback.call(thisArg || this, this.list[i3].val, this.list[i3].key, this);
          }
        };
        Similar.prototype.indexOf = function(key2) {
          var i3;
          for (i3 = 0; i3 < this.size; i3++) {
            if (this.isEqual(this.list[i3].key, key2)) {
              return i3;
            }
          }
          return -1;
        };
        Similar.prototype.isEqual = function(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        };
        module3.exports = Similar;
      }, {}], 3: [function(_dereq_, module3, exports3) {
        var MapOrSimilar = _dereq_("map-or-similar");
        module3.exports = function(limit) {
          var cache = new MapOrSimilar(false), lru = [];
          return function(fn) {
            var memoizerific = function() {
              var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i3;
              if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) {
                throw new Error("Memoizerific functions should always be called with the same number of arguments");
              }
              for (i3 = 0; i3 < argsLengthMinusOne; i3++) {
                lruPath[i3] = {
                  cacheItem: currentCache,
                  arg: arguments[i3]
                };
                if (currentCache.has(arguments[i3])) {
                  currentCache = currentCache.get(arguments[i3]);
                  continue;
                }
                isMemoized = false;
                newMap = new MapOrSimilar(false);
                currentCache.set(arguments[i3], newMap);
                currentCache = newMap;
              }
              if (isMemoized) {
                if (currentCache.has(arguments[argsLengthMinusOne])) {
                  fnResult = currentCache.get(arguments[argsLengthMinusOne]);
                } else {
                  isMemoized = false;
                }
              }
              if (!isMemoized) {
                fnResult = fn.apply(null, arguments);
                currentCache.set(arguments[argsLengthMinusOne], fnResult);
              }
              if (limit > 0) {
                lruPath[argsLengthMinusOne] = {
                  cacheItem: currentCache,
                  arg: arguments[argsLengthMinusOne]
                };
                if (isMemoized) {
                  moveToMostRecentLru(lru, lruPath);
                } else {
                  lru.push(lruPath);
                }
                if (lru.length > limit) {
                  removeCachedResult(lru.shift());
                }
              }
              memoizerific.wasMemoized = isMemoized;
              memoizerific.numArgs = argsLengthMinusOne + 1;
              return fnResult;
            };
            memoizerific.limit = limit;
            memoizerific.wasMemoized = false;
            memoizerific.cache = cache;
            memoizerific.lru = lru;
            return memoizerific;
          };
        };
        function moveToMostRecentLru(lru, lruPath) {
          var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i3, ii;
          for (i3 = 0; i3 < lruLen; i3++) {
            isMatch = true;
            for (ii = 0; ii < lruPathLen; ii++) {
              if (!isEqual(lru[i3][ii].arg, lruPath[ii].arg)) {
                isMatch = false;
                break;
              }
            }
            if (isMatch) {
              break;
            }
          }
          lru.push(lru.splice(i3, 1)[0]);
        }
        function removeCachedResult(removedLru) {
          var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i3;
          currentLru.cacheItem.delete(currentLru.arg);
          for (i3 = removedLruLen - 2; i3 >= 0; i3--) {
            currentLru = removedLru[i3];
            tmp = currentLru.cacheItem.get(currentLru.arg);
            if (!tmp || !tmp.size) {
              currentLru.cacheItem.delete(currentLru.arg);
            } else {
              break;
            }
          }
        }
        function isEqual(val1, val2) {
          return val1 === val2 || val1 !== val1 && val2 !== val2;
        }
      }, { "map-or-similar": 1 }] }, {}, [3])(3);
    });
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array2[index], index, array2)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value3) {
      return value3 !== value3;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array2, value3, fromIndex) {
      var index = fromIndex - 1, length = array2.length;
      while (++index < length) {
        if (array2[index] === value3) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array2, value3, fromIndex) {
      return value3 === value3 ? strictIndexOf(array2, value3, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array2, value3) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value3, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array2, value3, comparator) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (comparator(value3, array2[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY3 = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY3) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array2, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array2);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result2;
      }
      outer:
        while (++index < length) {
          var value3 = array2[index], computed = iteratee ? iteratee(value3) : value3;
          value3 = comparator || value3 !== 0 ? value3 : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result2.push(value3);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result2) {
              seen.push(computed);
            }
            result2.push(value3);
          }
        }
      return result2;
    }
    module.exports = baseUniq;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq2(array2) {
      return array2 && array2.length ? baseUniq(array2) : [];
    }
    module.exports = uniq2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (iteratee(array2[index], index, array2) === false) {
          break;
        }
      }
      return array2;
    }
    module.exports = arrayEach;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source2, props, object2, customizer) {
      var isNew = !object2;
      object2 || (object2 = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key2 = props[index];
        var newValue = customizer ? customizer(object2[key2], source2[key2], key2, object2, source2) : void 0;
        if (newValue === void 0) {
          newValue = source2[key2];
        }
        if (isNew) {
          baseAssignValue(object2, key2, newValue);
        } else {
          assignValue(object2, key2, newValue);
        }
      }
      return object2;
    }
    module.exports = copyObject;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object2, source2) {
      return object2 && copyObject(source2, keys(source2), object2);
    }
    module.exports = baseAssign;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object2, source2) {
      return object2 && copyObject(source2, keysIn(source2), object2);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root3 = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root3.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result2);
      return result2;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source2, array2) {
      var index = -1, length = source2.length;
      array2 || (array2 = Array(length));
      while (++index < length) {
        array2[index] = source2[index];
      }
      return array2;
    }
    module.exports = copyArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source2, object2) {
      return copyObject(source2, getSymbols(source2), object2);
    }
    module.exports = copySymbols;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source2, object2) {
      return copyObject(source2, getSymbolsIn(source2), object2);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function initCloneArray(array2) {
      var length = array2.length, result2 = new array2.constructor(length);
      if (length && typeof array2[0] == "string" && hasOwnProperty5.call(array2, "index")) {
        result2.index = array2.index;
        result2.input = array2.input;
      }
      return result2;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
      return result2;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result2.lastIndex = regexp.lastIndex;
      return result2;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object2, tag, isDeep) {
      var Ctor = object2.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object2);
        case boolTag:
        case dateTag:
          return new Ctor(+object2);
        case dataViewTag:
          return cloneDataView(object2, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object2, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object2);
        case regexpTag:
          return cloneRegExp(object2);
        case setTag:
          return new Ctor();
        case symbolTag2:
          return cloneSymbol(object2);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject4 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object2() {
      }
      return function(proto) {
        if (!isObject4(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object2.prototype = proto;
        var result2 = new object2();
        object2.prototype = void 0;
        return result2;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike2 = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value3) {
      return isObjectLike2(value3) && getTag(value3) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike2 = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value3) {
      return isObjectLike2(value3) && getTag(value3) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject4 = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag2 = "[object Function]";
    var genTag2 = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag2] = cloneableTags[weakMapTag] = false;
    function baseClone(value3, bitmask, customizer, key2, object2, stack) {
      var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result2 = object2 ? customizer(value3, key2, object2, stack) : customizer(value3);
      }
      if (result2 !== void 0) {
        return result2;
      }
      if (!isObject4(value3)) {
        return value3;
      }
      var isArr = isArray2(value3);
      if (isArr) {
        result2 = initCloneArray(value3);
        if (!isDeep) {
          return copyArray(value3, result2);
        }
      } else {
        var tag = getTag(value3), isFunc = tag == funcTag2 || tag == genTag2;
        if (isBuffer(value3)) {
          return cloneBuffer(value3, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object2) {
          result2 = isFlat || isFunc ? {} : initCloneObject(value3);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value3, baseAssignIn(result2, value3)) : copySymbols(value3, baseAssign(result2, value3));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object2 ? value3 : {};
          }
          result2 = initCloneByTag(value3, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value3);
      if (stacked) {
        return stacked;
      }
      stack.set(value3, result2);
      if (isSet(value3)) {
        value3.forEach(function(subValue) {
          result2.add(baseClone(subValue, bitmask, customizer, subValue, value3, stack));
        });
      } else if (isMap(value3)) {
        value3.forEach(function(subValue, key3) {
          result2.set(key3, baseClone(subValue, bitmask, customizer, key3, value3, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value3);
      arrayEach(props || value3, function(subValue, key3) {
        if (props) {
          key3 = subValue;
          subValue = value3[key3];
        }
        assignValue(result2, key3, baseClone(subValue, bitmask, customizer, key3, value3, stack));
      });
      return result2;
    }
    module.exports = baseClone;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep2(value3) {
      return baseClone(value3, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep2;
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/default-options.js
var require_default_options = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/default-options.js"(exports, module) {
    module.exports = {
      // Where to render the table of contents.
      tocSelector: ".js-toc",
      // Where to grab the headings to build the table of contents.
      contentSelector: ".js-toc-content",
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1, h2, h3",
      // Headings that match the ignoreSelector will be skipped.
      ignoreSelector: ".js-toc-ignore",
      // For headings inside relative or absolute positioned containers within content
      hasInnerContainers: false,
      // Main class to add to links.
      linkClass: "toc-link",
      // Extra classes to add to links.
      extraLinkClasses: "",
      // Class to add to active links,
      // the link corresponding to the top most heading on the page.
      activeLinkClass: "is-active-link",
      // Main class to add to lists.
      listClass: "toc-list",
      // Extra classes to add to lists.
      extraListClasses: "",
      // Class that gets added when a list should be collapsed.
      isCollapsedClass: "is-collapsed",
      // Class that gets added when a list should be able
      // to be collapsed but isn't necessarily collapsed.
      collapsibleClass: "is-collapsible",
      // Class to add to list items.
      listItemClass: "toc-list-item",
      // Class to add to active list items.
      activeListItemClass: "is-active-li",
      // How many heading levels should not be collapsed.
      // For example, number 6 will show everything since
      // there are only 6 heading levels and number 0 will collapse them all.
      // The sections that are hidden will open
      // and close as you scroll to headings within them.
      collapseDepth: 0,
      // Smooth scrolling enabled.
      scrollSmooth: true,
      // Smooth scroll duration.
      scrollSmoothDuration: 420,
      // Smooth scroll offset.
      scrollSmoothOffset: 0,
      // Callback for scroll end.
      scrollEndCallback: function(e2) {
      },
      // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
      headingsOffset: 1,
      // Timeout between events firing to make sure it's
      // not too rapid (for performance reasons).
      throttleTimeout: 50,
      // Element to add the positionFixedClass to.
      positionFixedSelector: null,
      // Fixed position class to add to make sidebar fixed after scrolling
      // down past the fixedSidebarOffset.
      positionFixedClass: "is-position-fixed",
      // fixedSidebarOffset can be any number but by default is set
      // to auto which sets the fixedSidebarOffset to the sidebar
      // element's offsetTop from the top of the document on init.
      fixedSidebarOffset: "auto",
      // includeHtml can be set to true to include the HTML markup from the
      // heading node instead of just including the innerText.
      includeHtml: false,
      // includeTitleTags automatically sets the html title tag of the link
      // to match the title. This can be useful for SEO purposes or
      // when truncating titles.
      includeTitleTags: false,
      // onclick function to apply to all links in toc. will be called with
      // the event as the first parameter, and this can be used to stop,
      // propagation, prevent default or perform action
      onClick: function(e2) {
      },
      // orderedList can be set to false to generate unordered lists (ul)
      // instead of ordered lists (ol)
      orderedList: true,
      // If there is a fixed article scroll container, set to calculate titles' offset
      scrollContainer: null,
      // prevent ToC DOM rendering if it's already rendered by an external system
      skipRendering: false,
      // Optional callback to change heading labels.
      // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
      // Called each time a heading is parsed. Expects a string and returns the modified label to display.
      // Additionally, the attribute `data-heading-label` may be used on a heading to specify
      // a shorter string to be used in the TOC.
      // function (string) => string
      headingLabelCallback: false,
      // ignore headings that are hidden in DOM
      ignoreHiddenElements: false,
      // Optional callback to modify properties of parsed headings.
      // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
      // Function has to return the same or modified obj.
      // The heading will be excluded from TOC if nothing is returned.
      // function (object, HTMLElement) => object | void
      headingObjectCallback: null,
      // Set the base path, useful if you use a `base` tag in `head`.
      basePath: "",
      // Only takes affect when `tocSelector` is scrolling,
      // keep the toc scroll position in sync with the content.
      disableTocScrollSync: false,
      // Offset for the toc scroll (top) position when scrolling the page.
      // Only effective if `disableTocScrollSync` is false.
      tocScrollOffset: 0
    };
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/build-html.js
var require_build_html = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/build-html.js"(exports, module) {
    module.exports = function(options2) {
      var forEach = [].forEach;
      var some = [].some;
      var body = document.body;
      var tocElement;
      var currentlyHighlighting = true;
      var SPACE_CHAR = " ";
      function createEl(d3, container) {
        var link = container.appendChild(createLink(d3));
        if (d3.children.length) {
          var list = createList(d3.isCollapsed);
          d3.children.forEach(function(child) {
            createEl(child, list);
          });
          link.appendChild(list);
        }
      }
      function render(parent, data) {
        var collapsed = false;
        var container = createList(collapsed);
        data.forEach(function(d3) {
          createEl(d3, container);
        });
        tocElement = parent || tocElement;
        if (tocElement === null) {
          return;
        }
        if (tocElement.firstChild) {
          tocElement.removeChild(tocElement.firstChild);
        }
        if (data.length === 0) {
          return tocElement;
        }
        return tocElement.appendChild(container);
      }
      function createLink(data) {
        var item = document.createElement("li");
        var a2 = document.createElement("a");
        if (options2.listItemClass) {
          item.setAttribute("class", options2.listItemClass);
        }
        if (options2.onClick) {
          a2.onclick = options2.onClick;
        }
        if (options2.includeTitleTags) {
          a2.setAttribute("title", data.textContent);
        }
        if (options2.includeHtml && data.childNodes.length) {
          forEach.call(data.childNodes, function(node) {
            a2.appendChild(node.cloneNode(true));
          });
        } else {
          a2.textContent = data.textContent;
        }
        a2.setAttribute("href", options2.basePath + "#" + data.id);
        a2.setAttribute("class", options2.linkClass + SPACE_CHAR + "node-name--" + data.nodeName + SPACE_CHAR + options2.extraLinkClasses);
        item.appendChild(a2);
        return item;
      }
      function createList(isCollapsed) {
        var listElement = options2.orderedList ? "ol" : "ul";
        var list = document.createElement(listElement);
        var classes = options2.listClass + SPACE_CHAR + options2.extraListClasses;
        if (isCollapsed) {
          classes = classes + SPACE_CHAR + options2.collapsibleClass;
          classes = classes + SPACE_CHAR + options2.isCollapsedClass;
        }
        list.setAttribute("class", classes);
        return list;
      }
      function updateFixedSidebarClass() {
        if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
          var top;
          top = document.querySelector(options2.scrollContainer).scrollTop;
        } else {
          top = document.documentElement.scrollTop || body.scrollTop;
        }
        var posFixedEl = document.querySelector(options2.positionFixedSelector);
        if (options2.fixedSidebarOffset === "auto") {
          options2.fixedSidebarOffset = tocElement.offsetTop;
        }
        if (top > options2.fixedSidebarOffset) {
          if (posFixedEl.className.indexOf(options2.positionFixedClass) === -1) {
            posFixedEl.className += SPACE_CHAR + options2.positionFixedClass;
          }
        } else {
          posFixedEl.className = posFixedEl.className.replace(SPACE_CHAR + options2.positionFixedClass, "");
        }
      }
      function getHeadingTopPos(obj) {
        var position = 0;
        if (obj !== null) {
          position = obj.offsetTop;
          if (options2.hasInnerContainers) {
            position += getHeadingTopPos(obj.offsetParent);
          }
        }
        return position;
      }
      function updateClassname(obj, className) {
        if (obj && obj.className !== className) {
          obj.className = className;
        }
        return obj;
      }
      function updateToc(headingsArray) {
        if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
          var top;
          top = document.querySelector(options2.scrollContainer).scrollTop;
        } else {
          top = document.documentElement.scrollTop || body.scrollTop;
        }
        if (options2.positionFixedSelector) {
          updateFixedSidebarClass();
        }
        var headings = headingsArray;
        var topHeader;
        if (currentlyHighlighting && tocElement !== null && headings.length > 0) {
          some.call(headings, function(heading, i3) {
            if (getHeadingTopPos(heading) > top + options2.headingsOffset + 10) {
              var index = i3 === 0 ? i3 : i3 - 1;
              topHeader = headings[index];
              return true;
            } else if (i3 === headings.length - 1) {
              topHeader = headings[headings.length - 1];
              return true;
            }
          });
          var oldActiveTocLink = tocElement.querySelector("." + options2.activeLinkClass);
          var activeTocLink = tocElement.querySelector("." + options2.linkClass + ".node-name--" + topHeader.nodeName + '[href="' + options2.basePath + "#" + topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
          if (oldActiveTocLink === activeTocLink) {
            return;
          }
          var tocLinks = tocElement.querySelectorAll("." + options2.linkClass);
          forEach.call(tocLinks, function(tocLink) {
            updateClassname(tocLink, tocLink.className.replace(SPACE_CHAR + options2.activeLinkClass, ""));
          });
          var tocLis = tocElement.querySelectorAll("." + options2.listItemClass);
          forEach.call(tocLis, function(tocLi) {
            updateClassname(tocLi, tocLi.className.replace(SPACE_CHAR + options2.activeListItemClass, ""));
          });
          if (activeTocLink && activeTocLink.className.indexOf(options2.activeLinkClass) === -1) {
            activeTocLink.className += SPACE_CHAR + options2.activeLinkClass;
          }
          var li = activeTocLink && activeTocLink.parentNode;
          if (li && li.className.indexOf(options2.activeListItemClass) === -1) {
            li.className += SPACE_CHAR + options2.activeListItemClass;
          }
          var tocLists = tocElement.querySelectorAll("." + options2.listClass + "." + options2.collapsibleClass);
          forEach.call(tocLists, function(list) {
            if (list.className.indexOf(options2.isCollapsedClass) === -1) {
              list.className += SPACE_CHAR + options2.isCollapsedClass;
            }
          });
          if (activeTocLink && activeTocLink.nextSibling && activeTocLink.nextSibling.className.indexOf(options2.isCollapsedClass) !== -1) {
            updateClassname(activeTocLink.nextSibling, activeTocLink.nextSibling.className.replace(SPACE_CHAR + options2.isCollapsedClass, ""));
          }
          removeCollapsedFromParents(activeTocLink && activeTocLink.parentNode.parentNode);
        }
      }
      function removeCollapsedFromParents(element) {
        if (element && element.className.indexOf(options2.collapsibleClass) !== -1 && element.className.indexOf(options2.isCollapsedClass) !== -1) {
          updateClassname(element, element.className.replace(SPACE_CHAR + options2.isCollapsedClass, ""));
          return removeCollapsedFromParents(element.parentNode.parentNode);
        }
        return element;
      }
      function disableTocAnimation(event) {
        var target = event.target || event.srcElement;
        if (typeof target.className !== "string" || target.className.indexOf(options2.linkClass) === -1) {
          return;
        }
        currentlyHighlighting = false;
      }
      function enableTocAnimation() {
        currentlyHighlighting = true;
      }
      return {
        enableTocAnimation,
        disableTocAnimation,
        render,
        updateToc
      };
    };
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/parse-content.js
var require_parse_content = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/parse-content.js"(exports, module) {
    module.exports = function parseContent(options2) {
      var reduce = [].reduce;
      function getLastItem(array2) {
        return array2[array2.length - 1];
      }
      function getHeadingLevel(heading) {
        return +heading.nodeName.toUpperCase().replace("H", "");
      }
      function isHTMLElement(maybeElement) {
        try {
          return maybeElement instanceof window.HTMLElement || maybeElement instanceof window.parent.HTMLElement;
        } catch (e2) {
          return maybeElement instanceof window.HTMLElement;
        }
      }
      function getHeadingObject(heading) {
        if (!isHTMLElement(heading))
          return heading;
        if (options2.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) {
          return null;
        }
        const headingLabel = heading.getAttribute("data-heading-label") || (options2.headingLabelCallback ? String(options2.headingLabelCallback(heading.innerText)) : (heading.innerText || heading.textContent).trim());
        var obj = {
          id: heading.id,
          children: [],
          nodeName: heading.nodeName,
          headingLevel: getHeadingLevel(heading),
          textContent: headingLabel
        };
        if (options2.includeHtml) {
          obj.childNodes = heading.childNodes;
        }
        if (options2.headingObjectCallback) {
          return options2.headingObjectCallback(obj, heading);
        }
        return obj;
      }
      function addNode(node, nest) {
        var obj = getHeadingObject(node);
        var level = obj.headingLevel;
        var array2 = nest;
        var lastItem = getLastItem(array2);
        var lastItemLevel = lastItem ? lastItem.headingLevel : 0;
        var counter = level - lastItemLevel;
        while (counter > 0) {
          lastItem = getLastItem(array2);
          if (lastItem && level === lastItem.headingLevel) {
            break;
          } else if (lastItem && lastItem.children !== void 0) {
            array2 = lastItem.children;
          }
          counter--;
        }
        if (level >= options2.collapseDepth) {
          obj.isCollapsed = true;
        }
        array2.push(obj);
        return array2;
      }
      function selectHeadings(contentElement, headingSelector) {
        var selectors = headingSelector;
        if (options2.ignoreSelector) {
          selectors = headingSelector.split(",").map(function mapSelectors(selector) {
            return selector.trim() + ":not(" + options2.ignoreSelector + ")";
          });
        }
        try {
          return contentElement.querySelectorAll(selectors);
        } catch (e2) {
          console.warn("Headers not found with selector: " + selectors);
          return null;
        }
      }
      function nestHeadingsArray(headingsArray) {
        return reduce.call(headingsArray, function reducer(prev, curr) {
          var currentHeading = getHeadingObject(curr);
          if (currentHeading) {
            addNode(currentHeading, prev.nest);
          }
          return prev;
        }, {
          nest: []
        });
      }
      return {
        nestHeadingsArray,
        selectHeadings
      };
    };
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/update-toc-scroll.js
var require_update_toc_scroll = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/update-toc-scroll.js"(exports, module) {
    var SCROLL_LEEWAY = 30;
    module.exports = function updateTocScroll(options2) {
      var toc = options2.tocElement || document.querySelector(options2.tocSelector);
      if (toc && toc.scrollHeight > toc.clientHeight) {
        var activeItem = toc.querySelector("." + options2.activeListItemClass);
        if (activeItem) {
          var cTop = toc.scrollTop;
          var cBottom = cTop + toc.clientHeight;
          var eTop = activeItem.offsetTop;
          var eBottom = eTop + activeItem.clientHeight;
          if (eTop < cTop + options2.tocScrollOffset) {
            toc.scrollTop -= cTop - eTop + options2.tocScrollOffset;
          } else if (eBottom > cBottom - options2.tocScrollOffset - SCROLL_LEEWAY) {
            toc.scrollTop += eBottom - cBottom + options2.tocScrollOffset + 2 * SCROLL_LEEWAY;
          }
        }
      }
    };
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/scroll-smooth/index.js
var require_scroll_smooth = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/scroll-smooth/index.js"(exports) {
    exports.initSmoothScrolling = initSmoothScrolling;
    function initSmoothScrolling(options2) {
      var duration = options2.duration;
      var offset = options2.offset;
      var pageUrl = location.hash ? stripHash(location.href) : location.href;
      delegatedLinkHijacking();
      function delegatedLinkHijacking() {
        document.body.addEventListener("click", onClick, false);
        function onClick(e2) {
          if (!isInPageLink(e2.target) || e2.target.className.indexOf("no-smooth-scroll") > -1 || e2.target.href.charAt(e2.target.href.length - 2) === "#" && e2.target.href.charAt(e2.target.href.length - 1) === "!" || e2.target.className.indexOf(options2.linkClass) === -1) {
            return;
          }
          jump(e2.target.hash, {
            duration,
            offset,
            callback: function() {
              setFocus(e2.target.hash);
            }
          });
        }
      }
      function isInPageLink(n2) {
        return n2.tagName.toLowerCase() === "a" && (n2.hash.length > 0 || n2.href.charAt(n2.href.length - 1) === "#") && (stripHash(n2.href) === pageUrl || stripHash(n2.href) + "#" === pageUrl);
      }
      function stripHash(url) {
        return url.slice(0, url.lastIndexOf("#"));
      }
      function setFocus(hash) {
        var element = document.getElementById(hash.substring(1));
        if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
          }
          element.focus();
        }
      }
    }
    function jump(target, options2) {
      var start = window.pageYOffset;
      var opt = {
        duration: options2.duration,
        offset: options2.offset || 0,
        callback: options2.callback,
        easing: options2.easing || easeInOutQuad
      };
      var tgt = document.querySelector('[id="' + decodeURI(target).split("#").join("") + '"]') || document.querySelector('[id="' + target.split("#").join("") + '"]');
      var distance = typeof target === "string" ? opt.offset + (target ? tgt && tgt.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : target;
      var duration = typeof opt.duration === "function" ? opt.duration(distance) : opt.duration;
      var timeStart;
      var timeElapsed;
      requestAnimationFrame(function(time) {
        timeStart = time;
        loop(time);
      });
      function loop(time) {
        timeElapsed = time - timeStart;
        window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));
        if (timeElapsed < duration) {
          requestAnimationFrame(loop);
        } else {
          end();
        }
      }
      function end() {
        window.scrollTo(0, start + distance);
        if (typeof opt.callback === "function") {
          opt.callback();
        }
      }
      function easeInOutQuad(t3, b2, c3, d3) {
        t3 /= d3 / 2;
        if (t3 < 1)
          return c3 / 2 * t3 * t3 + b2;
        t3--;
        return -c3 / 2 * (t3 * (t3 - 2) - 1) + b2;
      }
    }
  }
});

// node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/index.js
var require_js = __commonJS({
  "node_modules/.pnpm/tocbot@4.25.0/node_modules/tocbot/src/js/index.js"(exports, module) {
    (function(root3, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory(root3));
      } else if (typeof exports === "object") {
        module.exports = factory(root3);
      } else {
        root3.tocbot = factory(root3);
      }
    })(typeof global !== "undefined" ? global : window || global, function(root3) {
      var defaultOptions2 = require_default_options();
      var options2 = {};
      var tocbot2 = {};
      var BuildHtml = require_build_html();
      var ParseContent = require_parse_content();
      var updateTocScroll = require_update_toc_scroll();
      var buildHtml;
      var parseContent;
      var supports = !!root3 && !!root3.document && !!root3.document.querySelector && !!root3.addEventListener;
      if (typeof window === "undefined" && !supports) {
        return;
      }
      var headingsArray;
      var hasOwnProperty5 = Object.prototype.hasOwnProperty;
      function extend() {
        var target = {};
        for (var i3 = 0; i3 < arguments.length; i3++) {
          var source2 = arguments[i3];
          for (var key2 in source2) {
            if (hasOwnProperty5.call(source2, key2)) {
              target[key2] = source2[key2];
            }
          }
        }
        return target;
      }
      function throttle2(fn, threshold, scope2) {
        threshold || (threshold = 250);
        var last;
        var deferTimer;
        return function() {
          var context = scope2 || this;
          var now = +/* @__PURE__ */ new Date();
          var args2 = arguments;
          if (last && now < last + threshold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
              last = now;
              fn.apply(context, args2);
            }, threshold);
          } else {
            last = now;
            fn.apply(context, args2);
          }
        };
      }
      function getContentElement(options3) {
        try {
          return options3.contentElement || document.querySelector(options3.contentSelector);
        } catch (e2) {
          console.warn("Contents element not found: " + options3.contentSelector);
          return null;
        }
      }
      function getTocElement(options3) {
        try {
          return options3.tocElement || document.querySelector(options3.tocSelector);
        } catch (e2) {
          console.warn("TOC element not found: " + options3.tocSelector);
          return null;
        }
      }
      tocbot2.destroy = function() {
        var tocElement = getTocElement(options2);
        if (tocElement === null) {
          return;
        }
        if (!options2.skipRendering) {
          if (tocElement) {
            tocElement.innerHTML = "";
          }
        }
        if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
          document.querySelector(options2.scrollContainer).removeEventListener("scroll", this._scrollListener, false);
          document.querySelector(options2.scrollContainer).removeEventListener("resize", this._scrollListener, false);
          if (buildHtml) {
            document.querySelector(options2.scrollContainer).removeEventListener("click", this._clickListener, false);
          }
        } else {
          document.removeEventListener("scroll", this._scrollListener, false);
          document.removeEventListener("resize", this._scrollListener, false);
          if (buildHtml) {
            document.removeEventListener("click", this._clickListener, false);
          }
        }
      };
      tocbot2.init = function(customOptions) {
        if (!supports) {
          return;
        }
        options2 = extend(defaultOptions2, customOptions || {});
        this.options = options2;
        this.state = {};
        if (options2.scrollSmooth) {
          options2.duration = options2.scrollSmoothDuration;
          options2.offset = options2.scrollSmoothOffset;
          tocbot2.scrollSmooth = require_scroll_smooth().initSmoothScrolling(options2);
        }
        buildHtml = BuildHtml(options2);
        parseContent = ParseContent(options2);
        this._buildHtml = buildHtml;
        this._parseContent = parseContent;
        this._headingsArray = headingsArray;
        tocbot2.destroy();
        var contentElement = getContentElement(options2);
        if (contentElement === null) {
          return;
        }
        var tocElement = getTocElement(options2);
        if (tocElement === null) {
          return;
        }
        headingsArray = parseContent.selectHeadings(contentElement, options2.headingSelector);
        if (headingsArray === null) {
          return;
        }
        var nestedHeadingsObj = parseContent.nestHeadingsArray(headingsArray);
        var nestedHeadings = nestedHeadingsObj.nest;
        if (!options2.skipRendering) {
          buildHtml.render(tocElement, nestedHeadings);
        } else {
          return this;
        }
        this._scrollListener = throttle2(function(e2) {
          buildHtml.updateToc(headingsArray);
          !options2.disableTocScrollSync && updateTocScroll(options2);
          var isTop = e2 && e2.target && e2.target.scrollingElement && e2.target.scrollingElement.scrollTop === 0;
          if (e2 && (e2.eventPhase === 0 || e2.currentTarget === null) || isTop) {
            buildHtml.updateToc(headingsArray);
            if (options2.scrollEndCallback) {
              options2.scrollEndCallback(e2);
            }
          }
        }, options2.throttleTimeout);
        this._scrollListener();
        if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
          document.querySelector(options2.scrollContainer).addEventListener("scroll", this._scrollListener, false);
          document.querySelector(options2.scrollContainer).addEventListener("resize", this._scrollListener, false);
        } else {
          document.addEventListener("scroll", this._scrollListener, false);
          document.addEventListener("resize", this._scrollListener, false);
        }
        var timeout = null;
        this._clickListener = throttle2(function(event) {
          if (options2.scrollSmooth) {
            buildHtml.disableTocAnimation(event);
          }
          buildHtml.updateToc(headingsArray);
          timeout && clearTimeout(timeout);
          timeout = setTimeout(function() {
            buildHtml.enableTocAnimation();
          }, options2.scrollSmoothDuration);
        }, options2.throttleTimeout);
        if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
          document.querySelector(options2.scrollContainer).addEventListener("click", this._clickListener, false);
        } else {
          document.addEventListener("click", this._clickListener, false);
        }
        return this;
      };
      tocbot2.refresh = function(customOptions) {
        tocbot2.destroy();
        tocbot2.init(customOptions || this.options);
      };
      root3.tocbot = tocbot2;
      return tocbot2;
    });
  }
});
function u2() {
  return (u2 = Object.assign || function(e2) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t3 = arguments[r3];
      for (var n2 in t3)
        Object.prototype.hasOwnProperty.call(t3, n2) && (e2[n2] = t3[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c2(e2, r3) {
  if (null == e2)
    return {};
  var t3, n2, o2 = {}, a2 = Object.keys(e2);
  for (n2 = 0; n2 < a2.length; n2++)
    r3.indexOf(t3 = a2[n2]) >= 0 || (o2[t3] = e2[t3]);
  return o2;
}
function i2(e2) {
  var t3 = useRef(e2), n2 = useRef(function(e3) {
    t3.current && t3.current(e3);
  });
  return t3.current = e2, n2.current;
}
function Y(e2, t3, l2) {
  var u3 = i2(l2), c3 = useState(function() {
    return e2.toHsva(t3);
  }), s2 = c3[0], f3 = c3[1], v4 = useRef({ color: t3, hsva: s2 });
  useEffect(function() {
    if (!e2.equal(t3, v4.current.color)) {
      var r3 = e2.toHsva(t3);
      v4.current = { hsva: r3, color: t3 }, f3(r3);
    }
  }, [t3, e2]), useEffect(function() {
    var r3;
    F2(s2, v4.current.hsva) || e2.equal(r3 = e2.fromHsva(s2), v4.current.color) || (v4.current = { hsva: s2, color: r3 }, u3(r3));
  }, [s2, e2, u3]);
  var d3 = useCallback(function(e3) {
    f3(function(r3) {
      return Object.assign({}, r3, e3);
    });
  }, []);
  return [s2, d3];
}
var s, f2, v3, d2, h2, m, g, p2, b, _, x2, C2, E2, H, N, w2, y, q, k, I2, z2, D, K, L2, S2, T, F2, P, X, V, $2, J, Q, U, W, Z, ee, re, le, ue, Ee, He;
var init_dist = __esm({
  "node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.2.0_react@18.2.0/node_modules/react-colorful/dist/index.mjs"() {
    s = function(e2, r3, t3) {
      return void 0 === r3 && (r3 = 0), void 0 === t3 && (t3 = 1), e2 > t3 ? t3 : e2 < r3 ? r3 : e2;
    };
    f2 = function(e2) {
      return "touches" in e2;
    };
    v3 = function(e2) {
      return e2 && e2.ownerDocument.defaultView || self;
    };
    d2 = function(e2, r3, t3) {
      var n2 = e2.getBoundingClientRect(), o2 = f2(r3) ? function(e3, r4) {
        for (var t4 = 0; t4 < e3.length; t4++)
          if (e3[t4].identifier === r4)
            return e3[t4];
        return e3[0];
      }(r3.touches, t3) : r3;
      return { left: s((o2.pageX - (n2.left + v3(e2).pageXOffset)) / n2.width), top: s((o2.pageY - (n2.top + v3(e2).pageYOffset)) / n2.height) };
    };
    h2 = function(e2) {
      !f2(e2) && e2.preventDefault();
    };
    m = React17__default.memo(function(o2) {
      var a2 = o2.onMove, l2 = o2.onKey, s2 = c2(o2, ["onMove", "onKey"]), m2 = useRef(null), g2 = i2(a2), p3 = i2(l2), b2 = useRef(null), _2 = useRef(false), x3 = useMemo(function() {
        var e2 = function(e3) {
          h2(e3), (f2(e3) ? e3.touches.length > 0 : e3.buttons > 0) && m2.current ? g2(d2(m2.current, e3, b2.current)) : t3(false);
        }, r3 = function() {
          return t3(false);
        };
        function t3(t4) {
          var n2 = _2.current, o3 = v3(m2.current), a3 = t4 ? o3.addEventListener : o3.removeEventListener;
          a3(n2 ? "touchmove" : "mousemove", e2), a3(n2 ? "touchend" : "mouseup", r3);
        }
        return [function(e3) {
          var r4 = e3.nativeEvent, n2 = m2.current;
          if (n2 && (h2(r4), !function(e4, r5) {
            return r5 && !f2(e4);
          }(r4, _2.current) && n2)) {
            if (f2(r4)) {
              _2.current = true;
              var o3 = r4.changedTouches || [];
              o3.length && (b2.current = o3[0].identifier);
            }
            n2.focus(), g2(d2(n2, r4, b2.current)), t3(true);
          }
        }, function(e3) {
          var r4 = e3.which || e3.keyCode;
          r4 < 37 || r4 > 40 || (e3.preventDefault(), p3({ left: 39 === r4 ? 0.05 : 37 === r4 ? -0.05 : 0, top: 40 === r4 ? 0.05 : 38 === r4 ? -0.05 : 0 }));
        }, t3];
      }, [p3, g2]), C3 = x3[0], E3 = x3[1], H4 = x3[2];
      return useEffect(function() {
        return H4;
      }, [H4]), React17__default.createElement("div", u2({}, s2, { onTouchStart: C3, onMouseDown: C3, className: "react-colorful__interactive", ref: m2, onKeyDown: E3, tabIndex: 0, role: "slider" }));
    });
    g = function(e2) {
      return e2.filter(Boolean).join(" ");
    };
    p2 = function(r3) {
      var t3 = r3.color, n2 = r3.left, o2 = r3.top, a2 = void 0 === o2 ? 0.5 : o2, l2 = g(["react-colorful__pointer", r3.className]);
      return React17__default.createElement("div", { className: l2, style: { top: 100 * a2 + "%", left: 100 * n2 + "%" } }, React17__default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t3 } }));
    };
    b = function(e2, r3, t3) {
      return void 0 === r3 && (r3 = 0), void 0 === t3 && (t3 = Math.pow(10, r3)), Math.round(t3 * e2) / t3;
    };
    _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
    x2 = function(e2) {
      return L2(C2(e2));
    };
    C2 = function(e2) {
      return "#" === e2[0] && (e2 = e2.substring(1)), e2.length < 6 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 4 === e2.length ? b(parseInt(e2[3] + e2[3], 16) / 255, 2) : 1 } : { r: parseInt(e2.substring(0, 2), 16), g: parseInt(e2.substring(2, 4), 16), b: parseInt(e2.substring(4, 6), 16), a: 8 === e2.length ? b(parseInt(e2.substring(6, 8), 16) / 255, 2) : 1 };
    };
    E2 = function(e2, r3) {
      return void 0 === r3 && (r3 = "deg"), Number(e2) * (_[r3] || 1);
    };
    H = function(e2) {
      var r3 = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e2);
      return r3 ? N({ h: E2(r3[1], r3[2]), s: Number(r3[3]), l: Number(r3[4]), a: void 0 === r3[5] ? 1 : Number(r3[5]) / (r3[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
    };
    N = function(e2) {
      var r3 = e2.s, t3 = e2.l;
      return { h: e2.h, s: (r3 *= (t3 < 50 ? t3 : 100 - t3) / 100) > 0 ? 2 * r3 / (t3 + r3) * 100 : 0, v: t3 + r3, a: e2.a };
    };
    w2 = function(e2) {
      return K(I2(e2));
    };
    y = function(e2) {
      var r3 = e2.s, t3 = e2.v, n2 = e2.a, o2 = (200 - r3) * t3 / 100;
      return { h: b(e2.h), s: b(o2 > 0 && o2 < 200 ? r3 * t3 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0), l: b(o2 / 2), a: b(n2, 2) };
    };
    q = function(e2) {
      var r3 = y(e2);
      return "hsl(" + r3.h + ", " + r3.s + "%, " + r3.l + "%)";
    };
    k = function(e2) {
      var r3 = y(e2);
      return "hsla(" + r3.h + ", " + r3.s + "%, " + r3.l + "%, " + r3.a + ")";
    };
    I2 = function(e2) {
      var r3 = e2.h, t3 = e2.s, n2 = e2.v, o2 = e2.a;
      r3 = r3 / 360 * 6, t3 /= 100, n2 /= 100;
      var a2 = Math.floor(r3), l2 = n2 * (1 - t3), u3 = n2 * (1 - (r3 - a2) * t3), c3 = n2 * (1 - (1 - r3 + a2) * t3), i3 = a2 % 6;
      return { r: b(255 * [n2, u3, l2, l2, c3, n2][i3]), g: b(255 * [c3, n2, n2, u3, l2, l2][i3]), b: b(255 * [l2, l2, c3, n2, n2, u3][i3]), a: b(o2, 2) };
    };
    z2 = function(e2) {
      var r3 = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e2);
      return r3 ? L2({ r: Number(r3[1]) / (r3[2] ? 100 / 255 : 1), g: Number(r3[3]) / (r3[4] ? 100 / 255 : 1), b: Number(r3[5]) / (r3[6] ? 100 / 255 : 1), a: void 0 === r3[7] ? 1 : Number(r3[7]) / (r3[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
    };
    D = function(e2) {
      var r3 = e2.toString(16);
      return r3.length < 2 ? "0" + r3 : r3;
    };
    K = function(e2) {
      var r3 = e2.r, t3 = e2.g, n2 = e2.b, o2 = e2.a, a2 = o2 < 1 ? D(b(255 * o2)) : "";
      return "#" + D(r3) + D(t3) + D(n2) + a2;
    };
    L2 = function(e2) {
      var r3 = e2.r, t3 = e2.g, n2 = e2.b, o2 = e2.a, a2 = Math.max(r3, t3, n2), l2 = a2 - Math.min(r3, t3, n2), u3 = l2 ? a2 === r3 ? (t3 - n2) / l2 : a2 === t3 ? 2 + (n2 - r3) / l2 : 4 + (r3 - t3) / l2 : 0;
      return { h: b(60 * (u3 < 0 ? u3 + 6 : u3)), s: b(a2 ? l2 / a2 * 100 : 0), v: b(a2 / 255 * 100), a: o2 };
    };
    S2 = React17__default.memo(function(r3) {
      var t3 = r3.hue, n2 = r3.onChange, o2 = g(["react-colorful__hue", r3.className]);
      return React17__default.createElement("div", { className: o2 }, React17__default.createElement(m, { onMove: function(e2) {
        n2({ h: 360 * e2.left });
      }, onKey: function(e2) {
        n2({ h: s(t3 + 360 * e2.left, 0, 360) });
      }, "aria-label": "Hue", "aria-valuenow": b(t3), "aria-valuemax": "360", "aria-valuemin": "0" }, React17__default.createElement(p2, { className: "react-colorful__hue-pointer", left: t3 / 360, color: q({ h: t3, s: 100, v: 100, a: 1 }) })));
    });
    T = React17__default.memo(function(r3) {
      var t3 = r3.hsva, n2 = r3.onChange, o2 = { backgroundColor: q({ h: t3.h, s: 100, v: 100, a: 1 }) };
      return React17__default.createElement("div", { className: "react-colorful__saturation", style: o2 }, React17__default.createElement(m, { onMove: function(e2) {
        n2({ s: 100 * e2.left, v: 100 - 100 * e2.top });
      }, onKey: function(e2) {
        n2({ s: s(t3.s + 100 * e2.left, 0, 100), v: s(t3.v - 100 * e2.top, 0, 100) });
      }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t3.s) + "%, Brightness " + b(t3.v) + "%" }, React17__default.createElement(p2, { className: "react-colorful__saturation-pointer", top: 1 - t3.v / 100, left: t3.s / 100, color: q(t3) })));
    });
    F2 = function(e2, r3) {
      if (e2 === r3)
        return true;
      for (var t3 in e2)
        if (e2[t3] !== r3[t3])
          return false;
      return true;
    };
    P = function(e2, r3) {
      return e2.replace(/\s/g, "") === r3.replace(/\s/g, "");
    };
    X = function(e2, r3) {
      return e2.toLowerCase() === r3.toLowerCase() || F2(C2(e2), C2(r3));
    };
    V = "undefined" != typeof window ? useLayoutEffect : useEffect;
    $2 = function() {
      return ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
    };
    J = /* @__PURE__ */ new Map();
    Q = function(e2) {
      V(function() {
        var r3 = e2.current ? e2.current.ownerDocument : document;
        if (void 0 !== r3 && !J.has(r3)) {
          var t3 = r3.createElement("style");
          t3.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J.set(r3, t3);
          var n2 = $2();
          n2 && t3.setAttribute("nonce", n2), r3.head.appendChild(t3);
        }
      }, []);
    };
    U = function(t3) {
      var n2 = t3.className, o2 = t3.colorModel, a2 = t3.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i3 = t3.onChange, s2 = c2(t3, ["className", "colorModel", "color", "onChange"]), f3 = useRef(null);
      Q(f3);
      var v4 = Y(o2, l2, i3), d3 = v4[0], h3 = v4[1], m2 = g(["react-colorful", n2]);
      return React17__default.createElement("div", u2({}, s2, { ref: f3, className: m2 }), React17__default.createElement(T, { hsva: d3, onChange: h3 }), React17__default.createElement(S2, { hue: d3.h, onChange: h3, className: "react-colorful__last-control" }));
    };
    W = { defaultColor: "000", toHsva: x2, fromHsva: function(e2) {
      return w2({ h: e2.h, s: e2.s, v: e2.v, a: 1 });
    }, equal: X };
    Z = function(r3) {
      return React17__default.createElement(U, u2({}, r3, { colorModel: W }));
    };
    ee = function(r3) {
      var t3 = r3.className, n2 = r3.hsva, o2 = r3.onChange, a2 = { backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, n2, { a: 0 })) + ", " + k(Object.assign({}, n2, { a: 1 })) + ")" }, l2 = g(["react-colorful__alpha", t3]), u3 = b(100 * n2.a);
      return React17__default.createElement("div", { className: l2 }, React17__default.createElement("div", { className: "react-colorful__alpha-gradient", style: a2 }), React17__default.createElement(m, { onMove: function(e2) {
        o2({ a: e2.left });
      }, onKey: function(e2) {
        o2({ a: s(n2.a + e2.left) });
      }, "aria-label": "Alpha", "aria-valuetext": u3 + "%", "aria-valuenow": u3, "aria-valuemin": "0", "aria-valuemax": "100" }, React17__default.createElement(p2, { className: "react-colorful__alpha-pointer", left: n2.a, color: k(n2) })));
    };
    re = function(t3) {
      var n2 = t3.className, o2 = t3.colorModel, a2 = t3.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i3 = t3.onChange, s2 = c2(t3, ["className", "colorModel", "color", "onChange"]), f3 = useRef(null);
      Q(f3);
      var v4 = Y(o2, l2, i3), d3 = v4[0], h3 = v4[1], m2 = g(["react-colorful", n2]);
      return React17__default.createElement("div", u2({}, s2, { ref: f3, className: m2 }), React17__default.createElement(T, { hsva: d3, onChange: h3 }), React17__default.createElement(S2, { hue: d3.h, onChange: h3 }), React17__default.createElement(ee, { hsva: d3, onChange: h3, className: "react-colorful__last-control" }));
    };
    le = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: H, fromHsva: k, equal: P };
    ue = function(r3) {
      return React17__default.createElement(re, u2({}, r3, { colorModel: le }));
    };
    Ee = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: z2, fromHsva: function(e2) {
      var r3 = I2(e2);
      return "rgba(" + r3.r + ", " + r3.g + ", " + r3.b + ", " + r3.a + ")";
    }, equal: P };
    He = function(r3) {
      return React17__default.createElement(re, u2({}, r3, { colorModel: Ee }));
    };
  }
});

// node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module) {
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(exports, module) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key2 of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key2]] = key2;
    }
    var convert3 = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert3;
    for (const model of Object.keys(convert3)) {
      if (!("channels" in convert3[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert3[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert3[model].labels.length !== convert3[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert3[model];
      delete convert3[model].channels;
      delete convert3[model].labels;
      Object.defineProperty(convert3[model], "channels", { value: channels });
      Object.defineProperty(convert3[model], "labels", { value: labels });
    }
    convert3.rgb.hsl = function(rgb2) {
      const r3 = rgb2[0] / 255;
      const g2 = rgb2[1] / 255;
      const b2 = rgb2[2] / 255;
      const min = Math.min(r3, g2, b2);
      const max = Math.max(r3, g2, b2);
      const delta = max - min;
      let h3;
      let s2;
      if (max === min) {
        h3 = 0;
      } else if (r3 === max) {
        h3 = (g2 - b2) / delta;
      } else if (g2 === max) {
        h3 = 2 + (b2 - r3) / delta;
      } else if (b2 === max) {
        h3 = 4 + (r3 - g2) / delta;
      }
      h3 = Math.min(h3 * 60, 360);
      if (h3 < 0) {
        h3 += 360;
      }
      const l2 = (min + max) / 2;
      if (max === min) {
        s2 = 0;
      } else if (l2 <= 0.5) {
        s2 = delta / (max + min);
      } else {
        s2 = delta / (2 - max - min);
      }
      return [h3, s2 * 100, l2 * 100];
    };
    convert3.rgb.hsv = function(rgb2) {
      let rdif;
      let gdif;
      let bdif;
      let h3;
      let s2;
      const r3 = rgb2[0] / 255;
      const g2 = rgb2[1] / 255;
      const b2 = rgb2[2] / 255;
      const v4 = Math.max(r3, g2, b2);
      const diff = v4 - Math.min(r3, g2, b2);
      const diffc = function(c3) {
        return (v4 - c3) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h3 = 0;
        s2 = 0;
      } else {
        s2 = diff / v4;
        rdif = diffc(r3);
        gdif = diffc(g2);
        bdif = diffc(b2);
        if (r3 === v4) {
          h3 = bdif - gdif;
        } else if (g2 === v4) {
          h3 = 1 / 3 + rdif - bdif;
        } else if (b2 === v4) {
          h3 = 2 / 3 + gdif - rdif;
        }
        if (h3 < 0) {
          h3 += 1;
        } else if (h3 > 1) {
          h3 -= 1;
        }
      }
      return [
        h3 * 360,
        s2 * 100,
        v4 * 100
      ];
    };
    convert3.rgb.hwb = function(rgb2) {
      const r3 = rgb2[0];
      const g2 = rgb2[1];
      let b2 = rgb2[2];
      const h3 = convert3.rgb.hsl(rgb2)[0];
      const w3 = 1 / 255 * Math.min(r3, Math.min(g2, b2));
      b2 = 1 - 1 / 255 * Math.max(r3, Math.max(g2, b2));
      return [h3, w3 * 100, b2 * 100];
    };
    convert3.rgb.cmyk = function(rgb2) {
      const r3 = rgb2[0] / 255;
      const g2 = rgb2[1] / 255;
      const b2 = rgb2[2] / 255;
      const k2 = Math.min(1 - r3, 1 - g2, 1 - b2);
      const c3 = (1 - r3 - k2) / (1 - k2) || 0;
      const m2 = (1 - g2 - k2) / (1 - k2) || 0;
      const y2 = (1 - b2 - k2) / (1 - k2) || 0;
      return [c3 * 100, m2 * 100, y2 * 100, k2 * 100];
    };
    function comparativeDistance(x3, y2) {
      return (x3[0] - y2[0]) ** 2 + (x3[1] - y2[1]) ** 2 + (x3[2] - y2[2]) ** 2;
    }
    convert3.rgb.keyword = function(rgb2) {
      const reversed = reverseKeywords[rgb2];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value3 = cssKeywords[keyword];
        const distance = comparativeDistance(rgb2, value3);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert3.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert3.rgb.xyz = function(rgb2) {
      let r3 = rgb2[0] / 255;
      let g2 = rgb2[1] / 255;
      let b2 = rgb2[2] / 255;
      r3 = r3 > 0.04045 ? ((r3 + 0.055) / 1.055) ** 2.4 : r3 / 12.92;
      g2 = g2 > 0.04045 ? ((g2 + 0.055) / 1.055) ** 2.4 : g2 / 12.92;
      b2 = b2 > 0.04045 ? ((b2 + 0.055) / 1.055) ** 2.4 : b2 / 12.92;
      const x3 = r3 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      const y2 = r3 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      const z3 = r3 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x3 * 100, y2 * 100, z3 * 100];
    };
    convert3.rgb.lab = function(rgb2) {
      const xyz = convert3.rgb.xyz(rgb2);
      let x3 = xyz[0];
      let y2 = xyz[1];
      let z3 = xyz[2];
      x3 /= 95.047;
      y2 /= 100;
      z3 /= 108.883;
      x3 = x3 > 8856e-6 ? x3 ** (1 / 3) : 7.787 * x3 + 16 / 116;
      y2 = y2 > 8856e-6 ? y2 ** (1 / 3) : 7.787 * y2 + 16 / 116;
      z3 = z3 > 8856e-6 ? z3 ** (1 / 3) : 7.787 * z3 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x3 - y2);
      const b2 = 200 * (y2 - z3);
      return [l2, a2, b2];
    };
    convert3.hsl.rgb = function(hsl2) {
      const h3 = hsl2[0] / 360;
      const s2 = hsl2[1] / 100;
      const l2 = hsl2[2] / 100;
      let t22;
      let t3;
      let val;
      if (s2 === 0) {
        val = l2 * 255;
        return [val, val, val];
      }
      if (l2 < 0.5) {
        t22 = l2 * (1 + s2);
      } else {
        t22 = l2 + s2 - l2 * s2;
      }
      const t1 = 2 * l2 - t22;
      const rgb2 = [0, 0, 0];
      for (let i3 = 0; i3 < 3; i3++) {
        t3 = h3 + 1 / 3 * -(i3 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t22 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t22;
        } else if (3 * t3 < 2) {
          val = t1 + (t22 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb2[i3] = val * 255;
      }
      return rgb2;
    };
    convert3.hsl.hsv = function(hsl2) {
      const h3 = hsl2[0];
      let s2 = hsl2[1] / 100;
      let l2 = hsl2[2] / 100;
      let smin = s2;
      const lmin = Math.max(l2, 0.01);
      l2 *= 2;
      s2 *= l2 <= 1 ? l2 : 2 - l2;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v4 = (l2 + s2) / 2;
      const sv = l2 === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l2 + s2);
      return [h3, sv * 100, v4 * 100];
    };
    convert3.hsv.rgb = function(hsv) {
      const h3 = hsv[0] / 60;
      const s2 = hsv[1] / 100;
      let v4 = hsv[2] / 100;
      const hi = Math.floor(h3) % 6;
      const f3 = h3 - Math.floor(h3);
      const p3 = 255 * v4 * (1 - s2);
      const q2 = 255 * v4 * (1 - s2 * f3);
      const t3 = 255 * v4 * (1 - s2 * (1 - f3));
      v4 *= 255;
      switch (hi) {
        case 0:
          return [v4, t3, p3];
        case 1:
          return [q2, v4, p3];
        case 2:
          return [p3, v4, t3];
        case 3:
          return [p3, q2, v4];
        case 4:
          return [t3, p3, v4];
        case 5:
          return [v4, p3, q2];
      }
    };
    convert3.hsv.hsl = function(hsv) {
      const h3 = hsv[0];
      const s2 = hsv[1] / 100;
      const v4 = hsv[2] / 100;
      const vmin = Math.max(v4, 0.01);
      let sl;
      let l2;
      l2 = (2 - s2) * v4;
      const lmin = (2 - s2) * vmin;
      sl = s2 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l2 /= 2;
      return [h3, sl * 100, l2 * 100];
    };
    convert3.hwb.rgb = function(hwb) {
      const h3 = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f3;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i3 = Math.floor(6 * h3);
      const v4 = 1 - bl;
      f3 = 6 * h3 - i3;
      if ((i3 & 1) !== 0) {
        f3 = 1 - f3;
      }
      const n2 = wh + f3 * (v4 - wh);
      let r3;
      let g2;
      let b2;
      switch (i3) {
        default:
        case 6:
        case 0:
          r3 = v4;
          g2 = n2;
          b2 = wh;
          break;
        case 1:
          r3 = n2;
          g2 = v4;
          b2 = wh;
          break;
        case 2:
          r3 = wh;
          g2 = v4;
          b2 = n2;
          break;
        case 3:
          r3 = wh;
          g2 = n2;
          b2 = v4;
          break;
        case 4:
          r3 = n2;
          g2 = wh;
          b2 = v4;
          break;
        case 5:
          r3 = v4;
          g2 = wh;
          b2 = n2;
          break;
      }
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert3.cmyk.rgb = function(cmyk) {
      const c3 = cmyk[0] / 100;
      const m2 = cmyk[1] / 100;
      const y2 = cmyk[2] / 100;
      const k2 = cmyk[3] / 100;
      const r3 = 1 - Math.min(1, c3 * (1 - k2) + k2);
      const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
      const b2 = 1 - Math.min(1, y2 * (1 - k2) + k2);
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert3.xyz.rgb = function(xyz) {
      const x3 = xyz[0] / 100;
      const y2 = xyz[1] / 100;
      const z3 = xyz[2] / 100;
      let r3;
      let g2;
      let b2;
      r3 = x3 * 3.2406 + y2 * -1.5372 + z3 * -0.4986;
      g2 = x3 * -0.9689 + y2 * 1.8758 + z3 * 0.0415;
      b2 = x3 * 0.0557 + y2 * -0.204 + z3 * 1.057;
      r3 = r3 > 31308e-7 ? 1.055 * r3 ** (1 / 2.4) - 0.055 : r3 * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * g2 ** (1 / 2.4) - 0.055 : g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * b2 ** (1 / 2.4) - 0.055 : b2 * 12.92;
      r3 = Math.min(Math.max(0, r3), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert3.xyz.lab = function(xyz) {
      let x3 = xyz[0];
      let y2 = xyz[1];
      let z3 = xyz[2];
      x3 /= 95.047;
      y2 /= 100;
      z3 /= 108.883;
      x3 = x3 > 8856e-6 ? x3 ** (1 / 3) : 7.787 * x3 + 16 / 116;
      y2 = y2 > 8856e-6 ? y2 ** (1 / 3) : 7.787 * y2 + 16 / 116;
      z3 = z3 > 8856e-6 ? z3 ** (1 / 3) : 7.787 * z3 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x3 - y2);
      const b2 = 200 * (y2 - z3);
      return [l2, a2, b2];
    };
    convert3.lab.xyz = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let x3;
      let y2;
      let z3;
      y2 = (l2 + 16) / 116;
      x3 = a2 / 500 + y2;
      z3 = y2 - b2 / 200;
      const y22 = y2 ** 3;
      const x22 = x3 ** 3;
      const z22 = z3 ** 3;
      y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
      x3 = x22 > 8856e-6 ? x22 : (x3 - 16 / 116) / 7.787;
      z3 = z22 > 8856e-6 ? z22 : (z3 - 16 / 116) / 7.787;
      x3 *= 95.047;
      y2 *= 100;
      z3 *= 108.883;
      return [x3, y2, z3];
    };
    convert3.lab.lch = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let h3;
      const hr = Math.atan2(b2, a2);
      h3 = hr * 360 / 2 / Math.PI;
      if (h3 < 0) {
        h3 += 360;
      }
      const c3 = Math.sqrt(a2 * a2 + b2 * b2);
      return [l2, c3, h3];
    };
    convert3.lch.lab = function(lch) {
      const l2 = lch[0];
      const c3 = lch[1];
      const h3 = lch[2];
      const hr = h3 / 360 * 2 * Math.PI;
      const a2 = c3 * Math.cos(hr);
      const b2 = c3 * Math.sin(hr);
      return [l2, a2, b2];
    };
    convert3.rgb.ansi16 = function(args2, saturation = null) {
      const [r3, g2, b2] = args2;
      let value3 = saturation === null ? convert3.rgb.hsv(args2)[2] : saturation;
      value3 = Math.round(value3 / 50);
      if (value3 === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r3 / 255));
      if (value3 === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert3.hsv.ansi16 = function(args2) {
      return convert3.rgb.ansi16(convert3.hsv.rgb(args2), args2[2]);
    };
    convert3.rgb.ansi256 = function(args2) {
      const r3 = args2[0];
      const g2 = args2[1];
      const b2 = args2[2];
      if (r3 === g2 && g2 === b2) {
        if (r3 < 8) {
          return 16;
        }
        if (r3 > 248) {
          return 231;
        }
        return Math.round((r3 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r3 / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
      return ansi;
    };
    convert3.ansi16.rgb = function(args2) {
      let color = args2 % 10;
      if (color === 0 || color === 7) {
        if (args2 > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args2 > 50) + 1) * 0.5;
      const r3 = (color & 1) * mult * 255;
      const g2 = (color >> 1 & 1) * mult * 255;
      const b2 = (color >> 2 & 1) * mult * 255;
      return [r3, g2, b2];
    };
    convert3.ansi256.rgb = function(args2) {
      if (args2 >= 232) {
        const c3 = (args2 - 232) * 10 + 8;
        return [c3, c3, c3];
      }
      args2 -= 16;
      let rem2;
      const r3 = Math.floor(args2 / 36) / 5 * 255;
      const g2 = Math.floor((rem2 = args2 % 36) / 6) / 5 * 255;
      const b2 = rem2 % 6 / 5 * 255;
      return [r3, g2, b2];
    };
    convert3.rgb.hex = function(args2) {
      const integer = ((Math.round(args2[0]) & 255) << 16) + ((Math.round(args2[1]) & 255) << 8) + (Math.round(args2[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert3.hex.rgb = function(args2) {
      const match = args2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r3 = integer >> 16 & 255;
      const g2 = integer >> 8 & 255;
      const b2 = integer & 255;
      return [r3, g2, b2];
    };
    convert3.rgb.hcg = function(rgb2) {
      const r3 = rgb2[0] / 255;
      const g2 = rgb2[1] / 255;
      const b2 = rgb2[2] / 255;
      const max = Math.max(Math.max(r3, g2), b2);
      const min = Math.min(Math.min(r3, g2), b2);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r3) {
        hue = (g2 - b2) / chroma % 6;
      } else if (max === g2) {
        hue = 2 + (b2 - r3) / chroma;
      } else {
        hue = 4 + (r3 - g2) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert3.hsl.hcg = function(hsl2) {
      const s2 = hsl2[1] / 100;
      const l2 = hsl2[2] / 100;
      const c3 = l2 < 0.5 ? 2 * s2 * l2 : 2 * s2 * (1 - l2);
      let f3 = 0;
      if (c3 < 1) {
        f3 = (l2 - 0.5 * c3) / (1 - c3);
      }
      return [hsl2[0], c3 * 100, f3 * 100];
    };
    convert3.hsv.hcg = function(hsv) {
      const s2 = hsv[1] / 100;
      const v4 = hsv[2] / 100;
      const c3 = s2 * v4;
      let f3 = 0;
      if (c3 < 1) {
        f3 = (v4 - c3) / (1 - c3);
      }
      return [hsv[0], c3 * 100, f3 * 100];
    };
    convert3.hcg.rgb = function(hcg) {
      const h3 = hcg[0] / 360;
      const c3 = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      if (c3 === 0) {
        return [g2 * 255, g2 * 255, g2 * 255];
      }
      const pure = [0, 0, 0];
      const hi = h3 % 1 * 6;
      const v4 = hi % 1;
      const w3 = 1 - v4;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v4;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w3;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v4;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w3;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v4;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w3;
      }
      mg = (1 - c3) * g2;
      return [
        (c3 * pure[0] + mg) * 255,
        (c3 * pure[1] + mg) * 255,
        (c3 * pure[2] + mg) * 255
      ];
    };
    convert3.hcg.hsv = function(hcg) {
      const c3 = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v4 = c3 + g2 * (1 - c3);
      let f3 = 0;
      if (v4 > 0) {
        f3 = c3 / v4;
      }
      return [hcg[0], f3 * 100, v4 * 100];
    };
    convert3.hcg.hsl = function(hcg) {
      const c3 = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const l2 = g2 * (1 - c3) + 0.5 * c3;
      let s2 = 0;
      if (l2 > 0 && l2 < 0.5) {
        s2 = c3 / (2 * l2);
      } else if (l2 >= 0.5 && l2 < 1) {
        s2 = c3 / (2 * (1 - l2));
      }
      return [hcg[0], s2 * 100, l2 * 100];
    };
    convert3.hcg.hwb = function(hcg) {
      const c3 = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v4 = c3 + g2 * (1 - c3);
      return [hcg[0], (v4 - c3) * 100, (1 - v4) * 100];
    };
    convert3.hwb.hcg = function(hwb) {
      const w3 = hwb[1] / 100;
      const b2 = hwb[2] / 100;
      const v4 = 1 - b2;
      const c3 = v4 - w3;
      let g2 = 0;
      if (c3 < 1) {
        g2 = (v4 - c3) / (1 - c3);
      }
      return [hwb[0], c3 * 100, g2 * 100];
    };
    convert3.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert3.rgb.apple = function(rgb2) {
      return [rgb2[0] / 255 * 65535, rgb2[1] / 255 * 65535, rgb2[2] / 255 * 65535];
    };
    convert3.gray.rgb = function(args2) {
      return [args2[0] / 100 * 255, args2[0] / 100 * 255, args2[0] / 100 * 255];
    };
    convert3.gray.hsl = function(args2) {
      return [0, 0, args2[0]];
    };
    convert3.gray.hsv = convert3.gray.hsl;
    convert3.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert3.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert3.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert3.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert3.rgb.gray = function(rgb2) {
      const val = (rgb2[0] + rgb2[1] + rgb2[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(exports, module) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i3 = 0; i3 < len; i3++) {
        graph[models[i3]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i3 = 0; i3 < len; i3++) {
          const adjacent = adjacents[i3];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args2) {
        return to(from(args2));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i3 = 0; i3 < len; i3++) {
        const toModel = models[i3];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(exports, module) {
    var conversions = require_conversions();
    var route = require_route();
    var convert3 = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args2) {
        const arg0 = args2[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args2 = arg0;
        }
        return fn(args2);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args2) {
        const arg0 = args2[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args2 = arg0;
        }
        const result2 = fn(args2);
        if (typeof result2 === "object") {
          for (let len = result2.length, i3 = 0; i3 < len; i3++) {
            result2[i3] = Math.round(result2[i3]);
          }
        }
        return result2;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert3[fromModel] = {};
      Object.defineProperty(convert3[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert3[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert3[fromModel][toModel] = wrapRounded(fn);
        convert3[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert3;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"(exports, module) {
    var root3 = require_root();
    var now = function() {
      return root3.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject4 = require_isObject();
    var isSymbol2 = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value3) {
      if (typeof value3 == "number") {
        return value3;
      }
      if (isSymbol2(value3)) {
        return NAN;
      }
      if (isObject4(value3)) {
        var other = typeof value3.valueOf == "function" ? value3.valueOf() : value3;
        value3 = isObject4(other) ? other + "" : other;
      }
      if (typeof value3 != "string") {
        return value3 === 0 ? value3 : +value3;
      }
      value3 = baseTrim(value3);
      var isBinary = reIsBinary.test(value3);
      return isBinary || reIsOctal.test(value3) ? freeParseInt(value3.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value3) ? NAN : +value3;
    }
    module.exports = toNumber;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"(exports, module) {
    var isObject4 = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce(func, wait, options2) {
      var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      wait = toNumber(wait) || 0;
      if (isObject4(options2)) {
        leading = !!options2.leading;
        maxing = "maxWait" in options2;
        maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      function invokeFunc(time) {
        var args2 = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result2 = func.apply(thisArg, args2);
        return result2;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result2;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result2;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result2 : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result2;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js"(exports, module) {
    var debounce = require_debounce();
    var isObject4 = require_isObject();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function throttle2(func, wait, options2) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      if (isObject4(options2)) {
        leading = "leading" in options2 ? !!options2.leading : leading;
        trailing = "trailing" in options2 ? !!options2.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/Color-RQJUDNI5.mjs
var Color_RQJUDNI5_exports = {};
__export(Color_RQJUDNI5_exports, {
  ColorControl: () => ColorControl,
  default: () => Color_default
});
var import_color_convert, import_throttle, Wrapper, PickerTooltip, TooltipContent, Note, Swatches, SwatchColor, swatchBackground, Swatch, Input, ToggleIcon, ColorSpace, COLOR_SPACES, COLOR_REGEXP, RGB_REGEXP, HSL_REGEXP, HEX_REGEXP, SHORTHEX_REGEXP, ColorPicker, fallbackColor, stringToArgs, parseValue, getRealValue, useColorInput, id, usePresets, ColorControl, Color_default;
var init_Color_RQJUDNI5 = __esm({
  "node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/Color-RQJUDNI5.mjs"() {
    init_chunk_GWAJ4KRU();
    init_dist();
    import_color_convert = __toESM(require_color_convert(), 1);
    import_throttle = __toESM(require_throttle(), 1);
    Wrapper = styled.div({ position: "relative", maxWidth: 250 });
    PickerTooltip = styled(WithTooltip)({ position: "absolute", zIndex: 1, top: 4, left: 4 });
    TooltipContent = styled.div({ width: 200, margin: 5, ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" }, ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" }, ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" } });
    Note = styled(TooltipNote)(({ theme }) => ({ fontFamily: theme.typography.fonts.base }));
    Swatches = styled.div({ display: "grid", gridTemplateColumns: "repeat(9, 16px)", gap: 6, padding: 3, marginTop: 5, width: 200 });
    SwatchColor = styled.div(({ theme, active }) => ({ width: 16, height: 16, boxShadow: active ? `${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px` : `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: theme.appBorderRadius }));
    swatchBackground = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`;
    Swatch = ({ value: value3, active, onClick, style, ...props }) => {
      let backgroundImage = `linear-gradient(${value3}, ${value3}), ${swatchBackground}, linear-gradient(#fff, #fff)`;
      return React17__default.createElement(SwatchColor, { ...props, active, onClick, style: { ...style, backgroundImage } });
    };
    Input = styled(Form.Input)(({ theme }) => ({ width: "100%", paddingLeft: 30, paddingRight: 30, boxSizing: "border-box", fontFamily: theme.typography.fonts.base }));
    ToggleIcon = styled(MarkupIcon)(({ theme }) => ({ position: "absolute", zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: "border-box", cursor: "pointer", color: theme.input.color }));
    ColorSpace = ((ColorSpace2) => (ColorSpace2.RGB = "rgb", ColorSpace2.HSL = "hsl", ColorSpace2.HEX = "hex", ColorSpace2))(ColorSpace || {});
    COLOR_SPACES = Object.values(ColorSpace);
    COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/;
    RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i;
    HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i;
    HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i;
    SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i;
    ColorPicker = { hex: Z, rgb: He, hsl: ue };
    fallbackColor = { hex: "transparent", rgb: "rgba(0, 0, 0, 0)", hsl: "hsla(0, 0%, 0%, 0)" };
    stringToArgs = (value3) => {
      let match = value3?.match(COLOR_REGEXP);
      if (!match)
        return [0, 0, 0, 1];
      let [, x3, y2, z3, a2 = 1] = match;
      return [x3, y2, z3, a2].map(Number);
    };
    parseValue = (value3) => {
      if (!value3)
        return;
      let valid = true;
      if (RGB_REGEXP.test(value3)) {
        let [r3, g2, b2, a2] = stringToArgs(value3), [h3, s2, l2] = import_color_convert.default.rgb.hsl([r3, g2, b2]) || [0, 0, 0];
        return { valid, value: value3, keyword: import_color_convert.default.rgb.keyword([r3, g2, b2]), colorSpace: "rgb", rgb: value3, hsl: `hsla(${h3}, ${s2}%, ${l2}%, ${a2})`, hex: `#${import_color_convert.default.rgb.hex([r3, g2, b2]).toLowerCase()}` };
      }
      if (HSL_REGEXP.test(value3)) {
        let [h3, s2, l2, a2] = stringToArgs(value3), [r3, g2, b2] = import_color_convert.default.hsl.rgb([h3, s2, l2]) || [0, 0, 0];
        return { valid, value: value3, keyword: import_color_convert.default.hsl.keyword([h3, s2, l2]), colorSpace: "hsl", rgb: `rgba(${r3}, ${g2}, ${b2}, ${a2})`, hsl: value3, hex: `#${import_color_convert.default.hsl.hex([h3, s2, l2]).toLowerCase()}` };
      }
      let plain = value3.replace("#", ""), rgb2 = import_color_convert.default.keyword.rgb(plain) || import_color_convert.default.hex.rgb(plain), hsl2 = import_color_convert.default.rgb.hsl(rgb2), mapped = value3;
      if (/[^#a-f0-9]/i.test(value3) ? mapped = plain : HEX_REGEXP.test(value3) && (mapped = `#${plain}`), mapped.startsWith("#"))
        valid = HEX_REGEXP.test(mapped);
      else
        try {
          import_color_convert.default.keyword.hex(mapped);
        } catch {
          valid = false;
        }
      return { valid, value: mapped, keyword: import_color_convert.default.rgb.keyword(rgb2), colorSpace: "hex", rgb: `rgba(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}, 1)`, hsl: `hsla(${hsl2[0]}, ${hsl2[1]}%, ${hsl2[2]}%, 1)`, hex: mapped };
    };
    getRealValue = (value3, color, colorSpace) => {
      if (!value3 || !color?.valid)
        return fallbackColor[colorSpace];
      if (colorSpace !== "hex")
        return color?.[colorSpace] || fallbackColor[colorSpace];
      if (!color.hex.startsWith("#"))
        try {
          return `#${import_color_convert.default.keyword.hex(color.hex)}`;
        } catch {
          return fallbackColor.hex;
        }
      let short = color.hex.match(SHORTHEX_REGEXP);
      if (!short)
        return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
      let [r3, g2, b2] = short[1].split("");
      return `#${r3}${r3}${g2}${g2}${b2}${b2}`;
    };
    useColorInput = (initialValue, onChange) => {
      let [value3, setValue] = useState(initialValue || ""), [color, setColor] = useState(() => parseValue(value3)), [colorSpace, setColorSpace] = useState(color?.colorSpace || "hex");
      useEffect(() => {
        let nextValue = initialValue || "", nextColor = parseValue(nextValue);
        setValue(nextValue), setColor(nextColor), setColorSpace(nextColor?.colorSpace || "hex");
      }, [initialValue]);
      let realValue = useMemo(() => getRealValue(value3, color, colorSpace).toLowerCase(), [value3, color, colorSpace]), updateValue = useCallback((update) => {
        let parsed = parseValue(update), v4 = parsed?.value || update || "";
        setValue(v4), v4 === "" && (setColor(void 0), onChange(void 0)), parsed && (setColor(parsed), setColorSpace(parsed.colorSpace), onChange(parsed.value));
      }, [onChange]), cycleColorSpace = useCallback(() => {
        let next = COLOR_SPACES.indexOf(colorSpace) + 1;
        next >= COLOR_SPACES.length && (next = 0), setColorSpace(COLOR_SPACES[next]);
        let update = color?.[COLOR_SPACES[next]] || "";
        setValue(update), onChange(update);
      }, [color, colorSpace, onChange]);
      return { value: value3, realValue, updateValue, color, colorSpace, cycleColorSpace };
    };
    id = (value3) => value3.replace(/\s*/, "").toLowerCase();
    usePresets = (presetColors, currentColor, colorSpace) => {
      let [selectedColors, setSelectedColors] = useState(currentColor?.valid ? [currentColor] : []);
      useEffect(() => {
        currentColor === void 0 && setSelectedColors([]);
      }, [currentColor]);
      let presets = useMemo(() => (presetColors || []).map((preset) => typeof preset == "string" ? parseValue(preset) : preset.title ? { ...parseValue(preset.color), keyword: preset.title } : parseValue(preset.color)).concat(selectedColors).filter(Boolean).slice(-27), [presetColors, selectedColors]), addPreset = useCallback((color) => {
        color?.valid && (presets.some((preset) => id(preset[colorSpace]) === id(color[colorSpace])) || setSelectedColors((arr) => arr.concat(color)));
      }, [colorSpace, presets]);
      return { presets, addPreset };
    };
    ColorControl = ({ name: name2, value: initialValue, onChange, onFocus, onBlur, presetColors, startOpen = false }) => {
      let throttledOnChange = useCallback((0, import_throttle.default)(onChange, 200), [onChange]), { value: value3, realValue, updateValue, color, colorSpace, cycleColorSpace } = useColorInput(initialValue, throttledOnChange), { presets, addPreset } = usePresets(presetColors, color, colorSpace), Picker = ColorPicker[colorSpace];
      return React17__default.createElement(Wrapper, null, React17__default.createElement(PickerTooltip, { startOpen, closeOnOutsideClick: true, onVisibleChange: () => addPreset(color), tooltip: React17__default.createElement(TooltipContent, null, React17__default.createElement(Picker, { color: realValue === "transparent" ? "#000000" : realValue, onChange: updateValue, onFocus, onBlur }), presets.length > 0 && React17__default.createElement(Swatches, null, presets.map((preset, index) => React17__default.createElement(WithTooltip, { key: `${preset.value}-${index}`, hasChrome: false, tooltip: React17__default.createElement(Note, { note: preset.keyword || preset.value }) }, React17__default.createElement(Swatch, { value: preset[colorSpace], active: color && id(preset[colorSpace]) === id(color[colorSpace]), onClick: () => updateValue(preset.value) }))))) }, React17__default.createElement(Swatch, { value: realValue, style: { margin: 4 } })), React17__default.createElement(Input, { id: getControlId(name2), value: value3, onChange: (e2) => updateValue(e2.target.value), onFocus: (e2) => e2.target.select(), placeholder: "Choose color..." }), value3 ? React17__default.createElement(ToggleIcon, { onClick: cycleColorSpace }) : null);
    };
    Color_default = ColorControl;
  }
});

// src/constants.ts
var ADDON_ID = "storybook/msw-vite-addon";
var PANEL_ID = `${ADDON_ID}/panel`;
var EVENTS = {
  SEND: `${ADDON_ID}/send`,
  UPDATE: `${ADDON_ID}/update`,
  UPDATE_RESPONSES: `${ADDON_ID}/update-responses`,
  RESET: `${ADDON_ID}/reset`
};

// node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs
init_chunk_GWAJ4KRU();

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source2 = arguments[i3];
      for (var key2 in source2) {
        if (Object.prototype.hasOwnProperty.call(source2, key2)) {
          target[key2] = source2[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p3) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
    o3.__proto__ = p4;
    return o3;
  };
  return _setPrototypeOf(o2, p3);
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e2) {
    return typeof fn === "function";
  }
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t3;
  })();
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t3, e2, r3) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p3 = new (t3.bind.apply(t3, o2))();
  return r3 && _setPrototypeOf(p3, r3.prototype), p3;
}

// node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper11);
    }
    function Wrapper11() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper11.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper11,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper11, Class2);
  };
  return _wrapNativeSuper(Class);
}

// node_modules/.pnpm/polished@4.3.1/node_modules/polished/dist/polished.esm.js
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  "12": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  "13": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  "14": 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "15": 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  "70": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  "71": 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "72": 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  "78": 'base must be set in "px" or "%" but you set it in "%s".\n'
};
function format() {
  for (var _len = arguments.length, args2 = new Array(_len), _key = 0; _key < _len; _key++) {
    args2[_key] = arguments[_key];
  }
  var a2 = args2[0];
  var b2 = [];
  var c3;
  for (c3 = 1; c3 < args2.length; c3 += 1) {
    b2.push(args2[c3]);
  }
  b2.forEach(function(d3) {
    a2 = a2.replace(/%[a-z]/, d3);
  });
  return a2;
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    {
      for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args2[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args2))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert3) {
  if (convert3 === void 0) {
    convert3 = convertToInt;
  }
  if (saturation === 0) {
    return convert3(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert3(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color) {
  if (typeof color !== "string")
    return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function reduceHexValue2(value3) {
  if (value3.length === 7 && value3[1] === value3[2] && value3[3] === value3[4] && value3[5] === value3[6]) {
    return "#" + value3[1] + value3[3] + value3[5];
  }
  return value3;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value3) {
  var hex = value3.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value3, saturation, lightness) {
  if (typeof value3 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value3, saturation, lightness);
  } else if (typeof value3 === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value3.hue, value3.saturation, value3.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value3, saturation, lightness, alpha) {
  if (typeof value3 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value3, saturation, lightness) : "rgba(" + hslToRgb(value3, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value3 === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value3.alpha >= 1 ? hslToHex(value3.hue, value3.saturation, value3.lightness) : "rgba(" + hslToRgb(value3.hue, value3.saturation, value3.lightness) + "," + value3.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value3, green, blue) {
  if (typeof value3 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value3) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value3 === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value3.red) + numberToHex(value3.green) + numberToHex(value3.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isRgba = function isRgba2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && typeof color.alpha === "number";
};
var isHsl = function isHsl2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isHsla = function isHsla2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && typeof color.alpha === "number";
};
function toColorString(color) {
  if (typeof color !== "object")
    throw new PolishedError(8);
  if (isRgba(color))
    return rgba(color);
  if (isRgb(color))
    return rgb(color);
  if (isHsla(color))
    return hsla(color);
  if (isHsl(color))
    return hsl(color);
  throw new PolishedError(8);
}
function curried(f3, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f3.apply(this, combined) : curried(f3, length, combined);
  };
}
function curry(f3) {
  return curried(f3, f3.length, []);
}
function adjustHue(degree, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
}
curry(adjustHue);
function guard(lowerBoundary, upperBoundary, value3) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value3));
}
function darken(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken = curry(darken);
var curriedDarken$1 = curriedDarken;
function desaturate(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}
curry(desaturate);
function lighten(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = curry(lighten);
var curriedLighten$1 = curriedLighten;
function mix(weight, color, otherColor) {
  if (color === "transparent")
    return otherColor;
  if (otherColor === "transparent")
    return color;
  if (weight === 0)
    return otherColor;
  var parsedColor1 = parseToRgb(color);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
  });
  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
  });
  var alphaDelta = color1.alpha - color2.alpha;
  var x3 = parseFloat(weight) * 2 - 1;
  var y2 = x3 * alphaDelta === -1 ? x3 : x3 + alphaDelta;
  var z3 = 1 + x3 * alphaDelta;
  var weight1 = (y2 / z3 + 1) / 2;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight))
  };
  return rgba(mixedColor);
}
var curriedMix = curry(mix);
var mix$1 = curriedMix;
function opacify(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function saturate(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}
curry(saturate);
function setHue(hue, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}
curry(setHue);
function setLightness(lightness, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}
curry(setLightness);
function setSaturation(saturation, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}
curry(setSaturation);
function shade(percentage, color) {
  if (color === "transparent")
    return color;
  return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color);
}
curry(shade);
function tint(percentage, color) {
  if (color === "transparent")
    return color;
  return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color);
}
curry(tint);
function transparentize(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

// node_modules/.pnpm/@storybook+global@5.0.0/node_modules/@storybook/global/dist/index.mjs
var scope = (() => {
  let win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof globalThis !== "undefined") {
    win = globalThis;
  } else if (typeof global !== "undefined") {
    win = global;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  return win;
})();

// node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs
__toESM(require_pickBy(), 1);

// node_modules/.pnpm/@storybook+csf@0.1.3/node_modules/@storybook/csf/dist/index.mjs
var F = Object.create;
var u = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf;
var w = Object.prototype.hasOwnProperty;
var I = (r3, e2) => () => (e2 || r3((e2 = { exports: {} }).exports, e2), e2.exports);
var E = (r3, e2, n2, t3) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function")
    for (let a2 of C(e2))
      !w.call(r3, a2) && a2 !== n2 && u(r3, a2, { get: () => e2[a2], enumerable: !(t3 = B(e2, a2)) || t3.enumerable });
  return r3;
};
var v = (r3, e2, n2) => (n2 = r3 != null ? F(h(r3)) : {}, E(e2 || !r3 || !r3.__esModule ? u(n2, "default", { value: r3, enumerable: true }) : n2, r3));
var x = I((T2) => {
  Object.defineProperty(T2, "__esModule", { value: true }), T2.isEqual = /* @__PURE__ */ function() {
    var r3 = Object.prototype.toString, e2 = Object.getPrototypeOf, n2 = Object.getOwnPropertySymbols ? function(t3) {
      return Object.keys(t3).concat(Object.getOwnPropertySymbols(t3));
    } : Object.keys;
    return function(t3, a2) {
      return function i3(o2, s2, d3) {
        var y2, g2, p3, l2 = r3.call(o2), b2 = r3.call(s2);
        if (o2 === s2)
          return true;
        if (o2 == null || s2 == null)
          return false;
        if (d3.indexOf(o2) > -1 && d3.indexOf(s2) > -1)
          return true;
        if (d3.push(o2, s2), l2 != b2 || (y2 = n2(o2), g2 = n2(s2), y2.length != g2.length || y2.some(function(A3) {
          return !i3(o2[A3], s2[A3], d3);
        })))
          return false;
        switch (l2.slice(8, -1)) {
          case "Symbol":
            return o2.valueOf() == s2.valueOf();
          case "Date":
          case "Number":
            return +o2 == +s2 || +o2 != +o2 && +s2 != +s2;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + o2 == "" + s2;
          case "Set":
          case "Map":
            y2 = o2.entries(), g2 = s2.entries();
            do
              if (!i3((p3 = y2.next()).value, g2.next().value, d3))
                return false;
            while (!p3.done);
            return true;
          case "ArrayBuffer":
            o2 = new Uint8Array(o2), s2 = new Uint8Array(s2);
          case "DataView":
            o2 = new Uint8Array(o2.buffer), s2 = new Uint8Array(s2.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (o2.length != s2.length)
              return false;
            for (p3 = 0; p3 < o2.length; p3++)
              if ((p3 in o2 || p3 in s2) && (p3 in o2 != p3 in s2 || !i3(o2[p3], s2[p3], d3)))
                return false;
            return true;
          case "Object":
            return i3(e2(o2), e2(s2), d3);
          default:
            return false;
        }
      }(t3, a2, []);
    };
  }();
});
v(x());
["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t3, n2) => (t3[n2.toLowerCase()] = n2, t3), { for: "htmlFor" });
var Ht;
!function(t3) {
  t3[t3.MAX = 0] = "MAX", t3[t3.HIGH = 1] = "HIGH", t3[t3.MED = 2] = "MED", t3[t3.LOW = 3] = "LOW", t3[t3.MIN = 4] = "MIN";
}(Ht || (Ht = {}));

// node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.70_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs
var import_memoizerific2 = __toESM(require_memoizerific(), 1);
__toESM(require_uniq(), 1);
var import_cloneDeep = __toESM(require_cloneDeep(), 1);

// node_modules/.pnpm/telejson@7.2.0/node_modules/telejson/dist/chunk-465TF3XA.mjs
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key2) && key2 !== except)
        __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/telejson@7.2.0/node_modules/telejson/dist/index.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1);
var require_shams = __commonJS2({
  "node_modules/has-symbols/shams.js"(exports, module) {
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});
var require_has_symbols = __commonJS2({
  "node_modules/has-symbols/index.js"(exports, module) {
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});
var require_implementation = __commonJS2({
  "node_modules/function-bind/implementation.js"(exports, module) {
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args2 = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(
            this,
            args2.concat(slice.call(arguments))
          );
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        } else {
          return target.apply(
            that,
            args2.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args2.length);
      var boundArgs = [];
      for (var i3 = 0; i3 < boundLength; i3++) {
        boundArgs.push("$" + i3);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});
var require_function_bind = __commonJS2({
  "node_modules/function-bind/index.js"(exports, module) {
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});
var require_src = __commonJS2({
  "node_modules/has/src/index.js"(exports, module) {
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});
var require_get_intrinsic = __commonJS2({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e2) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e2) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x3) {
      return x3.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name2) {
      var value22;
      if (name2 === "%AsyncFunction%") {
        value22 = getEvalledConstructor("async function () {}");
      } else if (name2 === "%GeneratorFunction%") {
        value22 = getEvalledConstructor("function* () {}");
      } else if (name2 === "%AsyncGeneratorFunction%") {
        value22 = getEvalledConstructor("async function* () {}");
      } else if (name2 === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value22 = fn.prototype;
        }
      } else if (name2 === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value22 = getProto(gen.prototype);
        }
      }
      INTRINSICS[name2] = value22;
      return value22;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result2 = [];
      $replace(string, rePropName2, function(match, number, quote, subString) {
        result2[result2.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
      });
      return result2;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
      var intrinsicName = name2;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value22 = INTRINSICS[intrinsicName];
        if (value22 === needsEval) {
          value22 = doEval(intrinsicName);
        }
        if (typeof value22 === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value: value22
        };
      }
      throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
    };
    module.exports = function GetIntrinsic(name2, allowMissing) {
      if (typeof name2 !== "string" || name2.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name2) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath2(name2);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value22 = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i3 = 1, isOwn = true; i3 < parts.length; i3 += 1) {
        var part = parts[i3];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value22 = INTRINSICS[intrinsicRealName];
        } else if (value22 != null) {
          if (!(part in value22)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i3 + 1 >= parts.length) {
            var desc = $gOPD(value22, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value22 = desc.get;
            } else {
              value22 = value22[part];
            }
          } else {
            isOwn = hasOwn(value22, part);
            value22 = value22[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value22;
          }
        }
      }
      return value22;
    };
  }
});
var require_call_bind = __commonJS2({
  "node_modules/call-bind/index.js"(exports, module) {
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e2) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});
var require_callBound = __commonJS2({
  "node_modules/call-bind/callBound.js"(exports, module) {
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name2, allowMissing) {
      var intrinsic = GetIntrinsic(name2, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});
var require_shams2 = __commonJS2({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});
var require_is_regex = __commonJS2({
  "node_modules/is-regex/index.js"(exports, module) {
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value22) {
      if (!value22 || typeof value22 !== "object") {
        return false;
      }
      var descriptor = gOPD(value22, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value22, badStringifier);
      } catch (e2) {
        return e2 === isRegexMarker;
      }
    } : function isRegex(value22) {
      if (!value22 || typeof value22 !== "object" && typeof value22 !== "function") {
        return false;
      }
      return $toString(value22) === regexClass;
    };
  }
});
var require_is_function = __commonJS2({
  "node_modules/is-function/index.js"(exports, module) {
    module.exports = isFunction3;
    var toString2 = Object.prototype.toString;
    function isFunction3(fn) {
      if (!fn) {
        return false;
      }
      var string = toString2.call(fn);
      return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
    }
  }
});
var require_is_symbol = __commonJS2({
  "node_modules/is-symbol/index.js"(exports, module) {
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value22) {
        if (typeof value22.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value22));
      };
      module.exports = function isSymbol3(value22) {
        if (typeof value22 === "symbol") {
          return true;
        }
        if (toStr.call(value22) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value22);
        } catch (e2) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol3(value22) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});
__toESM2(require_is_regex());
__toESM2(require_is_function());
__toESM2(require_is_symbol());
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root2;
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value22) {
  var isOwn = hasOwnProperty.call(value22, symToStringTag), tag = value22[symToStringTag];
  try {
    value22[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result2 = nativeObjectToString.call(value22);
  if (unmasked) {
    if (isOwn) {
      value22[symToStringTag] = tag;
    } else {
      delete value22[symToStringTag];
    }
  }
  return result2;
}
var getRawTag_default = getRawTag;
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value22) {
  return nativeObjectToString2.call(value22);
}
var objectToString_default = objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value22) {
  if (value22 == null) {
    return value22 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value22) ? getRawTag_default(value22) : objectToString_default(value22);
}
var baseGetTag_default = baseGetTag;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
function isObject2(value22) {
  var type = typeof value22;
  return value22 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value22) {
  if (!isObject_default(value22)) {
    return false;
  }
  var tag = baseGetTag_default(value22);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value22) {
  if (!isObject_default(value22) || isMasked_default(value22)) {
    return false;
  }
  var pattern = isFunction_default(value22) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value22));
}
var baseIsNative_default = baseIsNative;
function getValue(object2, key2) {
  return object2 == null ? void 0 : object2[key2];
}
var getValue_default = getValue;
function getNative(object2, key2) {
  var value22 = getValue_default(object2, key2);
  return baseIsNative_default(value22) ? value22 : void 0;
}
var getNative_default = getNative;
function eq(value22, other) {
  return value22 === other || value22 !== value22 && other !== other;
}
var eq_default = eq;
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var hashDelete_default = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key2];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty3.call(data, key2) ? data[key2] : void 0;
}
var hashGet_default = hashGet;
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate_default ? data[key2] !== void 0 : hasOwnProperty4.call(data, key2);
}
var hashHas_default = hashHas;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key2, value22) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate_default && value22 === void 0 ? HASH_UNDEFINED2 : value22;
  return this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array2, key2) {
  var length = array2.length;
  while (length--) {
    if (eq_default(array2[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key2, value22) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  if (index < 0) {
    ++this.size;
    data.push([key2, value22]);
  } else {
    data[index][1] = value22;
  }
  return this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value22) {
  var type = typeof value22;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value22 !== "__proto__" : value22 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable_default(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key2) {
  var result2 = getMapData_default(this, key2)["delete"](key2);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key2) {
  return getMapData_default(this, key2).get(key2);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key2) {
  return getMapData_default(this, key2).has(key2);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key2, value22) {
  var data = getMapData_default(this, key2), size = data.size;
  data.set(key2, value22);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result2 = func.apply(this, args2);
    memoized.cache = cache.set(key2, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped_default(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result2;
});
var removeCodeComments = (code) => {
  let inQuoteChar = null;
  let inBlockComment = false;
  let inLineComment = false;
  let inRegexLiteral = false;
  let newCode = "";
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) {
    for (let i3 = 0; i3 < code.length; i3 += 1) {
      if (!inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral) {
        if (code[i3] === '"' || code[i3] === "'" || code[i3] === "`") {
          inQuoteChar = code[i3];
        } else if (code[i3] === "/" && code[i3 + 1] === "*") {
          inBlockComment = true;
        } else if (code[i3] === "/" && code[i3 + 1] === "/") {
          inLineComment = true;
        } else if (code[i3] === "/" && code[i3 + 1] !== "/") {
          inRegexLiteral = true;
        }
      } else {
        if (inQuoteChar && (code[i3] === inQuoteChar && code[i3 - 1] !== "\\" || code[i3] === "\n" && inQuoteChar !== "`")) {
          inQuoteChar = null;
        }
        if (inRegexLiteral && (code[i3] === "/" && code[i3 - 1] !== "\\" || code[i3] === "\n")) {
          inRegexLiteral = false;
        }
        if (inBlockComment && code[i3 - 1] === "/" && code[i3 - 2] === "*") {
          inBlockComment = false;
        }
        if (inLineComment && code[i3] === "\n") {
          inLineComment = false;
        }
      }
      if (!inBlockComment && !inLineComment) {
        newCode += code[i3];
      }
    }
  } else {
    newCode = code;
  }
  return newCode;
};
(0, import_memoizerific.default)(1e4)(
  (code) => removeCodeComments(code).replace(/\n\s*/g, "").trim()
);
__toESM(require_js(), 1);
var Wrapper2 = styled.div(withReset, ({ theme }) => ({ backgroundColor: theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme.appBorderRadius, border: `1px dashed ${theme.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2 }));
var EmptyBlock = (props) => React17__default.createElement(Wrapper2, { ...props, className: "docblock-emptyblock sb-unstyled" });
var StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = styled.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" }));
var SourceSkeletonPlaceholder = styled.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${ignoreSsrWarning}`]: { margin: 0 } }));
var SourceSkeleton = () => React17__default.createElement(SourceSkeletonWrapper, null, React17__default.createElement(SourceSkeletonPlaceholder, null), React17__default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), React17__default.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), React17__default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }));
var Source = ({ isLoading, error, language, code, dark, format: format2, ...rest }) => {
  let { typography } = useTheme();
  if (isLoading)
    return React17__default.createElement(SourceSkeleton, null);
  if (error)
    return React17__default.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = React17__default.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format2, language, className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u")
    return syntaxHighlighter;
  let overrideTheme = dark ? themes.dark : themes.light;
  return React17__default.createElement(ThemeProvider, { theme: convert({ ...overrideTheme, fontCode: typography.fonts.mono, fontBase: typography.fonts.base }) }, syntaxHighlighter);
};
Source.defaultProps = { format: false };
var toGlobalSelector = (element) => `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`;
var breakpoint = 600;
styled.h1(withReset, ({ theme }) => ({ color: theme.color.defaultText, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } }));
styled.h2(withReset, ({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme.color.defaultText) }));
styled.div(({ theme }) => {
  let reset = { fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border };
  return { maxWidth: 1e3, width: "100%", [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
});
styled.div(({ theme }) => ({ background: theme.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${breakpoint}px)`]: {} }));
var getBlockBackgroundStyle = (theme) => ({ borderRadius: theme.appBorderRadius, background: theme.background.content, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme.appBorderColor}` });
var Bar = styled(FlexBar)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" });
var Wrapper22 = styled.div({ display: "flex", alignItems: "center", gap: 4 });
var IconPlaceholder = styled.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` }));
var Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => React17__default.createElement(Bar, { ...rest }, React17__default.createElement(Wrapper22, { key: "left" }, isLoading ? [1, 2, 3].map((key2) => React17__default.createElement(IconPlaceholder, { key: key2 })) : React17__default.createElement(React17__default.Fragment, null, React17__default.createElement(IconButton, { key: "zoomin", onClick: (e2) => {
  e2.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, React17__default.createElement(ZoomIcon, null)), React17__default.createElement(IconButton, { key: "zoomout", onClick: (e2) => {
  e2.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, React17__default.createElement(ZoomOutIcon, null)), React17__default.createElement(IconButton, { key: "zoomreset", onClick: (e2) => {
  e2.preventDefault(), resetZoom();
}, title: "Reset zoom" }, React17__default.createElement(ZoomResetIcon, null)))));
var ZoomContext = createContext({ scale: 1 });
var ChildrenContainer = styled.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded" }) => layout === "centered" || layout === "padded" ? { padding: "30px 20px", "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout = "padded" }) => layout === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {});
var StyledSource = styled(Source)(({ theme }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme.appBorderRadius, borderBottomRightRadius: theme.appBorderRadius, border: "none", background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content), color: theme.color.lightest, button: { background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content) } }));
var PreviewContainer = styled.div(({ theme, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar }) => withToolbar && { paddingTop: 40 });
var getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: React17__default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: React17__default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (Children.count(children) === 1) {
    let elt = children;
    if (elt.props)
      return elt.props.id;
  }
  return null;
}
var PositionedToolbar = styled(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 });
var Relative = styled.div({ overflow: "hidden", position: "relative" });
var Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, layout = "padded", ...props }) => {
  let [expanded, setExpanded] = useState(isExpanded), { source: source2, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = useState(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = useState(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], { window: globalWindow4 } = scope, copyToClipboard = useCallback(async (text) => {
    let { createCopyToClipboardFunction } = await import('@storybook/components');
    createCopyToClipboardFunction();
  }, []), onCopyCapture = (e2) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e2.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard(source2.props.code).then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return React17__default.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && React17__default.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z3) => setScale(scale * z3), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), React17__default.createElement(ZoomContext.Provider, { value: { scale } }, React17__default.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, React17__default.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout }, React17__default.createElement(Zoom.Element, { scale }, Array.isArray(children) ? children.map((child, i3) => React17__default.createElement("div", { key: i3 }, child)) : React17__default.createElement("div", null, children))), React17__default.createElement(ActionBar, { actionItems }))), withSource && expanded && source2);
};
styled(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
styled.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: codeCommon({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } }));
styled.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 }));
styled.span(codeCommon, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } }));
styled.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" }));
styled.div(codeCommon, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" }));
styled.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } }));
styled(ChevronSmallUpIcon)({ marginLeft: 4 });
styled(ChevronSmallDownIcon)({ marginLeft: 4 });
(0, import_memoizerific2.default)(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x3) => x3.length))}ch`;
});
styled.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px" } }));
styled.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } }));
styled.label({ display: "flex" });
var parse2 = (value22) => {
  let result2 = parseFloat(value22);
  return Number.isNaN(result2) ? void 0 : result2;
};
styled.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } });
styled.span({});
styled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
styled.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } });
styled.span({});
styled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" };
styled.select(styleResets, ({ theme }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme.input.color || "inherit", background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: `${theme.input.border} 0 0 0 1px inset`, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } }));
styled.span(({ theme }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme.textMutedColor, path: { fill: theme.textMutedColor } } }));
var VALUE = "value";
var KEY = "key";
var ERROR = "Error";
var OBJECT = "Object";
var ARRAY = "Array";
var STRING = "String";
var NUMBER = "Number";
var BOOLEAN = "Boolean";
var DATE = "Date";
var NULL = "Null";
var UNDEFINED = "Undefined";
var FUNCTION = "Function";
var SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE";
var REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE";
var UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result2 = {};
    if (!onlyValue) {
      if (!inputRefKey.value)
        return;
      result2.key = inputRefKey.value;
    }
    result2.newValue = onSubmitValueParser(false, keyPath, deep, result2.key, inputRefValue.value), handleAdd(result2);
  }
  refInputKey(node) {
    this.state.inputRefKey = node;
  }
  refInputValue(node) {
    this.state.inputRefValue = node;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = cloneElement(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = cloneElement(inputElementValue, { placeholder: "Value", ref: this.refInputValue }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = cloneElement(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return React17__default.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: React17__default.createElement("button", null, "+"), cancelButtonElement: React17__default.createElement("button", null, "c") };
var JsonArray = class extends Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index];
      beforeRemoveAction(index, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(data.length, keyPath, deep, newValue).then(() => {
      let newData = [...data, newValue];
      this.setState({ data: newData }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], newData), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: newData.length - 1, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key: key2, value: value22 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeUpdateAction(key2, keyPath, deep, oldValue, value22).then(() => {
        data[key2] = value22, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key: key2, newValue: value22, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name: name2, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React17__default.createElement("span", { className: "rejt-collapsed" }, React17__default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name: name2, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter, ul, addForm } = getStyle(name2, data, keyPath, deep, dataType), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), addItemButton = cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React17__default.createElement("span", { className: "rejt-not-collapsed" }, React17__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "["), !addFormVisible && addItemButton, React17__default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, data.map((item, index) => React17__default.createElement(JsonNode, { key: index, name: index.toString(), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && React17__default.createElement("div", { className: "rejt-add-form", style: addForm }, React17__default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: true, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React17__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "]"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state, { dataType, getStyle } = this.props, value22 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name2, data, keyPath, deep, dataType);
    return React17__default.createElement("div", { className: "rejt-array-node" }, React17__default.createElement("span", { onClick: this.handleCollapseMode }, React17__default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " ")), value22);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React17__default.createElement("span", null, " - "), plusMenuElement: React17__default.createElement("span", null, " + ") };
var JsonFunctionValue = class extends Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name: name2, value: value22, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name2, value22, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name: name2, deep } = this.state;
    if (!inputRef)
      return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name2, inputRef.value);
    handleUpdateValue({ value: newValue, key: name2 }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name: name2, value: value22, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name2, originalValue, keyPath, deep, dataType), result2 = null, minusElement = null, resultOnlyResult = readOnly(name2, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name2, originalValue, dataType), editButtonElementLayout = cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), textareaElementLayout = cloneElement(textareaElement, { ref: this.refInput, defaultValue: originalValue });
      result2 = React17__default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
    } else {
      result2 = React17__default.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode }, value22);
      let minusMenuLayout = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return React17__default.createElement("li", { className: "rejt-function-value-node", style: style.li }, React17__default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " "), result2, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: React17__default.createElement("button", null, "e"), cancelButtonElement: React17__default.createElement("button", null, "c"), minusMenuElement: React17__default.createElement("span", null, " - ") };
var JsonNode = class extends Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name: name2, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return React17__default.createElement(JsonObject, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return React17__default.createElement(JsonObject, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return React17__default.createElement(JsonArray, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return React17__default.createElement(JsonValue, { name: name2, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return React17__default.createElement(JsonValue, { name: name2, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return React17__default.createElement(JsonValue, { name: name2, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return React17__default.createElement(JsonValue, { name: name2, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return React17__default.createElement(JsonValue, { name: name2, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return React17__default.createElement(JsonValue, { name: name2, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return React17__default.createElement(JsonFunctionValue, { name: name2, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return React17__default.createElement(JsonValue, { name: name2, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath, props.name];
    this.state = { name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key: key2, newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(key2, keyPath, deep, newValue).then(() => {
      data[key2] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: key2, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key2) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeRemoveAction(key2, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: key2, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key2], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key: key2, value: value22 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeUpdateAction(key2, keyPath, deep, oldValue, value22).then(() => {
        data[key2] = value22, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key: key2, newValue: value22, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name: name2, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React17__default.createElement("span", { className: "rejt-collapsed" }, React17__default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name: name2, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul, delimiter } = getStyle(name2, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), addItemButton = cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), list = keyList.map((key2) => React17__default.createElement(JsonNode, { key: key2, name: key2, data: data[key2], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key2), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }));
    return React17__default.createElement("span", { className: "rejt-not-collapsed" }, React17__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "{"), !isReadOnly && addItemButton, React17__default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, list), !isReadOnly && addFormVisible && React17__default.createElement("div", { className: "rejt-add-form", style: addForm }, React17__default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React17__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "}"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state, { getStyle, dataType } = this.props, value22 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name2, data, keyPath, deep, dataType);
    return React17__default.createElement("div", { className: "rejt-object-node" }, React17__default.createElement("span", { onClick: this.handleCollapseMode }, React17__default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " ")), value22);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React17__default.createElement("span", null, " - "), plusMenuElement: React17__default.createElement("span", null, " + ") };
var JsonValue = class extends Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name: name2, value: value22, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name2, value22, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name: name2, deep } = this.state;
    if (!inputRef)
      return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name2, inputRef.value);
    handleUpdateValue({ value: newValue, key: name2 }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name: name2, value: value22, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name2, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name2, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name2, originalValue, dataType), editButtonElementLayout = cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), inputElementLayout = cloneElement(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) }), minusMenuLayout = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return React17__default.createElement("li", { className: "rejt-value-node", style: style.li }, React17__default.createElement("span", { className: "rejt-name", style: style.name }, name2, " : "), isEditing ? React17__default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : React17__default.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? null : this.handleEditMode }, String(value22)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: React17__default.createElement("button", null, "e"), cancelButtonElement: React17__default.createElement("button", null, "c"), minusMenuElement: React17__default.createElement("span", null, " - ") };
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var value2 = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function parse3(string) {
  let result2 = string;
  if (result2.indexOf("function") === 0)
    return (0, eval)(`(${result2})`);
  try {
    result2 = JSON.parse(string);
  } catch {
  }
  return result2;
}
var JsonTree = class extends Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key2, data) {
    this.setState({ data }), this.props.onFullyUpdate(data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? React17__default.createElement("div", { className: "rejt-tree" }, React17__default.createElement(JsonNode, { data, name: rootName, deep: -1, isCollapsed, onUpdate: this.onUpdate, onDeltaUpdate, readOnly: readOnlyFunction, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value2;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name2, rawValue) => parse3(rawValue), inputElement: () => React17__default.createElement("input", null), textareaElement: () => React17__default.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = scope;
var Wrapper6 = styled.div(({ theme }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } }));
var ButtonInline = styled.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 }));
var ActionAddIcon = styled(AddIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.ancillary }, "svg + &": { marginLeft: 0 } }));
var ActionSubstractIcon = styled(SubtractIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.negative }, "svg + &": { marginLeft: 0 } }));
var Input2 = styled.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } }));
var RawButton = styled(IconButton)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } }));
var RawInput = styled(Form.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } }));
var ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 };
var dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
};
var selectValue = (event) => {
  event.currentTarget.select();
};
var getCustomStyleFunction = (theme) => () => ({ name: { color: theme.color.secondary }, collapsed: { color: theme.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } });
var ObjectControl = ({ name: name2, value: value22, onChange }) => {
  let theme = useTheme(), data = useMemo(() => value22 && (0, import_cloneDeep.default)(value22), [value22]), hasData = data != null, [showRaw, setShowRaw] = useState(!hasData), [parseError, setParseError] = useState(null), updateRaw = useCallback((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(void 0);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]), [forceVisible, setForceVisible] = useState(false), onForceVisible = useCallback(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = useRef(null);
  if (useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData)
    return React17__default.createElement(Button, { id: getControlSetterButtonId(name2), onClick: onForceVisible }, "Set object");
  let rawJSONForm = React17__default.createElement(RawInput, { ref: htmlElRef, id: getControlId(name2), name: name2, defaultValue: value22 === null ? "" : JSON.stringify(value22, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : null }), isObjectOrArray = Array.isArray(value22) || typeof value22 == "object" && value22?.constructor === Object;
  return React17__default.createElement(Wrapper6, null, isObjectOrArray && React17__default.createElement(RawButton, { onClick: (e2) => {
    e2.preventDefault(), setShowRaw((v4) => !v4);
  } }, showRaw ? React17__default.createElement(EyeCloseIcon, null) : React17__default.createElement(EyeIcon, null), React17__default.createElement("span", null, "RAW")), showRaw ? rawJSONForm : React17__default.createElement(JsonTree, { readOnly: !isObjectOrArray, isCollapsed: isObjectOrArray ? void 0 : () => true, data, rootName: name2, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: React17__default.createElement(ButtonInline, { type: "button" }, "Cancel"), editButtonElement: React17__default.createElement(ButtonInline, { type: "submit" }, "Save"), addButtonElement: React17__default.createElement(ButtonInline, { type: "submit", primary: true }, "Save"), plusMenuElement: React17__default.createElement(ActionAddIcon, null), minusMenuElement: React17__default.createElement(ActionSubstractIcon, null), inputElement: (_2, __, ___, key2) => key2 ? React17__default.createElement(Input2, { onFocus: selectValue, onBlur: dispatchEnterKey }) : React17__default.createElement(Input2, null), fallback: rawJSONForm }));
};
var RangeInput = styled.input(({ theme, min, max, value: value22 }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme.color.secondary, boxShadow: `0 0px 5px 0px ${theme.color.secondary}` } }, "&::-moz-range-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: "grab", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value22 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme.input.background}`, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } }));
var RangeLabel = styled.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" });
var RangeCurrentAndMaxLabel = styled(RangeLabel)(({ numberOFDecimalsPlaces, max }) => ({ width: `${numberOFDecimalsPlaces + max.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 }));
var RangeWrapper = styled.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)) : 0;
}
var RangeControl = ({ name: name2, value: value22, onChange, min = 0, max = 100, step = 1, onBlur, onFocus }) => {
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value22 !== void 0, numberOFDecimalsPlaces = useMemo(() => getNumberOfDecimalPlaces(step), [step]);
  return React17__default.createElement(RangeWrapper, null, React17__default.createElement(RangeLabel, null, min), React17__default.createElement(RangeInput, { id: getControlId(name2), type: "range", onChange: handleChange, name: name2, value: value22, min, max, step, onFocus, onBlur }), React17__default.createElement(RangeCurrentAndMaxLabel, { numberOFDecimalsPlaces, max }, hasValue ? value22.toFixed(numberOFDecimalsPlaces) : "--", " / ", max));
};
styled.label({ display: "flex" });
styled.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 }));
styled(Form.Input)({ padding: 10 });
lazy(() => Promise.resolve().then(() => (init_Color_RQJUDNI5(), Color_RQJUDNI5_exports)));
styled.span({ fontWeight: "bold" });
styled.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" }));
styled.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...codeCommon({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } }));
styled.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 }));
styled.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 }));
styled.td(({ theme, expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" }));
styled(ChevronDownIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
styled(ChevronRightIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
styled.span(({ theme }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" }));
styled.td(({ theme }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s1 - 1, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), background: `${theme.background.app} !important`, "& ~ td": { background: `${theme.background.app} !important` } }));
styled.td(({ theme }) => ({ position: "relative", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.app }));
styled.td(() => ({ position: "relative" }));
styled.tr(({ theme }) => ({ "&:hover > td": { backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`, boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } }));
styled.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" }));
styled.div(({ theme }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${theme.appBorderColor}`, "&:last-child": { borderBottom: 0 } }));
styled.div(({ numColumn }) => ({ display: "flex", flexDirection: "column", flex: numColumn || 1, gap: 5, padding: "12px 20px" }));
styled.div(({ theme, width, height }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, width: width || "100%", height: height || 16, borderRadius: 3 }));
styled.div(({ inAddonPanel, theme }) => ({ height: inAddonPanel ? "100%" : "auto", display: "flex", border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`, borderRadius: inAddonPanel ? 0 : theme.appBorderRadius, padding: inAddonPanel ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" }));
styled.div(({ theme }) => ({ display: "flex", fontSize: theme.typography.size.s2 - 1, gap: 25 }));
styled.div(({ theme }) => ({ width: 1, height: 16, backgroundColor: theme.appBorderColor }));
styled.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } }));
styled(IconButton)(({ theme }) => ({ margin: "-4px -12px -4px 0" }));
styled.span({ display: "flex", justifyContent: "space-between" });
styled.div(({ theme }) => ({ marginRight: 30, fontSize: `${theme.typography.size.s1}px`, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
styled.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
styled.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
styled.div(withReset, ({ theme }) => ({ ...getBlockBackgroundStyle(theme), margin: "25px 0 40px", padding: "30px 20px" }));
styled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, color: theme.color.defaultText }));
styled.div(({ theme }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.2, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
styled.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
styled.div(({ theme }) => ({ flex: 1, textAlign: "center", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
styled.div({ display: "flex", flexDirection: "row" });
styled.div(({ background }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background, content: '""' } }));
styled.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
styled.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
styled.div({ flex: 1, display: "flex", flexDirection: "row" });
styled.div({ display: "flex", alignItems: "flex-start" });
styled.div({ flex: "0 0 30%" });
styled.div({ flex: 1 });
styled.div(({ theme }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme.typography.weight.bold, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
styled.div(({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
styled.div(({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, color: theme.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
styled.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
styled.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
styled.div({ display: "flex", flexFlow: "row wrap" });
scope && scope.__DOCS_CONTEXT__ === void 0 && (scope.__DOCS_CONTEXT__ = createContext(null), scope.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = scope ? scope.__DOCS_CONTEXT__ : createContext(null);
createContext({ sources: {} });
var { document: document2 } = scope;
function navigate(context, url) {
  context.channel.emit(NAVIGATE_URL, url);
}
components.a;
var SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: styled(headerType)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {});
var OcticonAnchor = styled.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" }));
var HeaderWithOcticonAnchor = ({ as, id: id2, children, ...rest }) => {
  let context = useContext(DocsContext), OcticonHeader = OcticonHeaders[as], hash = `#${id2}`;
  return React17__default.createElement(OcticonHeader, { id: id2, ...rest }, React17__default.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash, tabIndex: -1, target: "_self", onClick: (event) => {
    document2.getElementById(id2) && navigate(context, hash);
  } }, React17__default.createElement(LinkIcon, null)), children);
};
var HeaderMdx = (props) => {
  let { as, id: id2, children, ...rest } = props;
  if (id2)
    return React17__default.createElement(HeaderWithOcticonAnchor, { as, id: id2, ...rest }, children);
  let Component4 = as, { as: omittedAs, ...withoutAs } = props;
  return React17__default.createElement(Component4, { ...nameSpaceClassNames(withoutAs, as) });
};
SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => React17__default.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {});
styled.div(({ theme }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } }));
styled.div(({ theme }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${theme.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: theme.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: theme.color.secondary, textDecoration: "none" } }));
styled.p(({ theme }) => ({ fontWeight: 600, fontSize: "0.875em", color: theme.textColor, textTransform: "uppercase", marginBottom: 10 }));
var Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string")
    return React17__default.createElement(H2, null, children);
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return React17__default.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
styled(Heading2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: theme.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } }));

// src/utils/statusMap.ts
var statusTextMap = {
  200: "OK",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
};
var statusMap_default = statusTextMap;

// src/Panel.tsx
var statusCodes = Object.keys(statusMap_default);
var { Select } = Form;
var Container = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;

  & > div:not(:first-child) {
    border-block-start: 1px solid ${({ theme }) => theme.appBorderColor};
  }

  & > div:last-child {
    border-block-end: 1px solid ${({ theme }) => theme.appBorderColor};
  }

  & > div {
    padding-block: 2rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  h3 {
    margin-block-end: 0.5rem;
  }
`;
var ObjectControlContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`;
var SBSelect = styled(Select)`
  inline-size: 100%;
`;
var Label5 = styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`;
var ObjectsContainer = styled.div`
  flex: 1 1 50%;
`;
var SBButton = styled(Button)`
  margin-block-start: 1rem;
`;
var Panel = (props) => {
  const [addonState, setAddonState] = useAddonState(ADDON_ID, {});
  const [dataHasChanged, setDataHasChanged] = React17.useState(false);
  const emit = useChannel({
    [EVENTS.SEND]: (newAddonState) => {
      setAddonState({ ...addonState, ...newAddonState });
    }
  });
  const onReset = () => {
    emit(EVENTS.RESET);
    setDataHasChanged(false);
  };
  const onChange = (key2, value3) => {
    emit(EVENTS.UPDATE, { key: key2, value: value3 });
  };
  const onChangeResponse = (key2, objectKey, objectValue) => {
    setDataHasChanged(true);
    emit(EVENTS.UPDATE_RESPONSES, { key: key2, objectKey, objectValue });
  };
  const getRender = () => {
    if (addonState.delay !== void 0 && addonState.status !== void 0 && addonState.responses !== void 0)
      return /* @__PURE__ */ React17.createElement(ScrollArea, null, /* @__PURE__ */ React17.createElement(Container, null, /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement(Label5, null, /* @__PURE__ */ React17.createElement("h3", null, "Response Delay : ", addonState.delay, " ms"), /* @__PURE__ */ React17.createElement("p", null, "Set a mock response delay")), /* @__PURE__ */ React17.createElement(
        RangeControl,
        {
          name: "delay",
          value: addonState.delay,
          onChange: (value3) => onChange("delay", value3),
          min: 0,
          max: 1e4,
          step: 500
        }
      )), /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement(Label5, null, /* @__PURE__ */ React17.createElement("h3", null, "Response Status : ", addonState.status), /* @__PURE__ */ React17.createElement("p", null, "Select a mock response status")), /* @__PURE__ */ React17.createElement(
        SBSelect,
        {
          onChange: (event) => onChange("status", event.target.value),
          value: addonState.status,
          name: "status"
        },
        statusCodes.map((code) => /* @__PURE__ */ React17.createElement("option", { key: code, value: code }, code, " - ", statusMap_default[code]))
      )), /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement(Label5, null, /* @__PURE__ */ React17.createElement("h3", null, "Response Data"), /* @__PURE__ */ React17.createElement("p", null, "Edit the mock response data")), /* @__PURE__ */ React17.createElement(ObjectsContainer, null, addonState.responses && Object.keys(addonState.responses).length > 0 && Object.keys(addonState.responses).map((key2) => {
        const { method, path } = addonState.responses[key2].handler.info;
        const { operationName } = addonState.responses[key2].handler.info;
        return /* @__PURE__ */ React17.createElement(ObjectControlContainer, { key: key2 }, /* @__PURE__ */ React17.createElement(
          ObjectControl,
          {
            name: method && path ? `${method} ${path}` : operationName,
            value: addonState.responses[key2].response.jsonBodyData,
            onChange: (value3) => onChangeResponse("responses", key2, value3),
            theme: void 0
          }
        ));
      }))), /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement(Label5, null, /* @__PURE__ */ React17.createElement("h3", null, "Reset"), /* @__PURE__ */ React17.createElement("p", null, "Reset the original mock response data")), /* @__PURE__ */ React17.createElement(SBButton, { onClick: onReset, disabled: !dataHasChanged }, "Reset Mock Data"))));
    return /* @__PURE__ */ React17.createElement(Container, null, /* @__PURE__ */ React17.createElement(Label5, null, "No mock data."));
  };
  return /* @__PURE__ */ React17.createElement(AddonPanel, { ...props }, /* @__PURE__ */ React17.createElement("div", null, getRender()));
};
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "MSW",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => /* @__PURE__ */ React17.createElement(Panel, { active: !!active })
  });
});
/*! Bundled license information:

telejson/dist/index.mjs:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zb = {}));
}(this, (function (exports) { 'use strict';

  /**
   * 添加script
   * @param {string} url js url
   * @param {function} [onload] 加载成功回调
   * @param {function} [onerror] 加载失败回调
   * @return {HTMLElement} script引用
   */
  function addScript(url, onload, onerror) {
    var script = document.createElement('script');
    if (onload) {
      script.onload = function () {
        onload(script);
      };
    }
    script.onerror = function () {
      if (onerror) {
        onerror(script);
      } else if (onload) {
        onload(script);
      }
    };
    script.src = url;
    document.head.appendChild(script);
    return script
  }

  exports.addScript = addScript;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

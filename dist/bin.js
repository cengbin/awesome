(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zb = {}));
}(this, (function (exports) { 'use strict';

  /**
   * class模块
   * @module class
   * */

  /**
   * DOM添加类
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * */
  function addClass(element, className) {
    var regClassName = new RegExp('(^| )' + className + '( |$)');
    // ( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
    if (!regClassName.test(element.className)) {
      element.className = element.className.split(/\s+/).concat(className).join(' ');
    }
  }

  /**
   * DOM删除类
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * */
  function removeClass(element, className) {
    var regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    element.className = element.className.replace(regClassName, '');
  }

  /**
   * 判断DOM是否有某个类名
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * @return {Boolean} 判断后的值
   * */
  function hasClass(element, className) {
    return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  /**
   * DOM添加/删除类的切换操作
   * @param {HTMLElement} element - DOM元素
   * @param {string} className - 类名
   * */
  function toggleClass(element, className) {
    if (hasClass(element, className)) {
      removeClass(element, className);
    } else {
      addClass(element, className);
    }
  }

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

  exports.addClass = addClass;
  exports.addScript = addScript;
  exports.hasClass = hasClass;
  exports.removeClass = removeClass;
  exports.toggleClass = toggleClass;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

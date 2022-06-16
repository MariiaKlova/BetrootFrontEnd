"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Figure =
/*#__PURE__*/
function () {
  function Figure(width, height, color, left, top) {
    _classCallCheck(this, Figure);

    this.width = width;
    this.height = height;
    this.color = color;
    this.left = left;
    this.top = top;
  }

  _createClass(Figure, [{
    key: "show",
    value: function show() {
      document.body.insertAdjacentHTML('beforeend', "<div class=\"figure\" \n            style=\"width:".concat(this.width, "px;\n            height:").concat(this.height, "px;\n            background-color:").concat(this.color, ";\n            left:").concat(this.left, "px;\n            top:").concat(this.top, "px;\n            position: absolute\">\n        </div>\n        "));
    }
  }]);

  return Figure;
}();
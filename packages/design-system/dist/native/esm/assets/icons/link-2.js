import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgLink2 = function SvgLink2(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.24 6.5a.75.75 0 0 1 .75-.75h1.51c3.445 0 6.25 2.817 6.25 6.25 0 3.445-2.816 6.25-6.25 6.25h-1.51a.75.75 0 0 1 0-1.5h1.51c2.607 0 4.75-2.135 4.75-4.75 0-2.607-2.135-4.75-4.75-4.75h-1.51a.75.75 0 0 1-.75-.75ZM1.25 12A6.26 6.26 0 0 1 7.5 5.75H9a.75.75 0 0 1 0 1.5H7.5A4.76 4.76 0 0 0 2.75 12c0 2.607 2.135 4.75 4.75 4.75H9a.75.75 0 0 1 0 1.5H7.5c-3.445 0-6.25-2.817-6.25-6.25Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
  })));
};

export { SvgLink2 as default };

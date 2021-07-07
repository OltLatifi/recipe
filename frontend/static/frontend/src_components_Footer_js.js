/*! For license information please see src_components_Footer_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Footer_js"],{"./src/components/Footer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => /* binding */ Footer\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");\n/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");\n;\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {\n    variant: "body2",\n    color: "textSecondary"\n  }, "Copyright © ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__.default, {\n    color: "inherit",\n    href: "https://streho.pythonanywhere.com/"\n  }, "Nje shtepi per kafshet"), " ", new Date().getFullYear(), ".");\n}\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({\n  footer: {\n    padding: theme.spacing(3, 2),\n    marginTop: "auto",\n    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800]\n  }\n}));\nfunction Footer() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {\n    className: classes.footer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__.default, {\n    maxWidth: "sm"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {\n    variant: "body1"\n  }, "Platforme e decentralizuar per strehimin e kafsheve ne Kosove."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      margin: \'0 2%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "https://github.com/OltLatifi/Safauna",\n    target: "_blank"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__.default, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Copyright, null)));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Footer.js?')}}]);
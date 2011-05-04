require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/75facf7e3e2e534c307f54f259c3e920b1dc6965@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs3-ace/","name":"extjs3-ace","main":"lib/component.js","contexts":{"top":{"/lib/component":{"include":{"github.com/cadorn/ace-extjs/packages/extjs-ace/":{}}}}},"mappings":{"extjs-ace":{"location":"" + bravojs.mainModuleDir + "/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861"},"ace":{"location":"" + bravojs.mainModuleDir + "/87749d9714f1925e26afa48a0d592eaa39403858"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/b5bd9e5093176e86aa6f6c4d581342361d8c923f"},"pilot":{"location":"" + bravojs.mainModuleDir + "/f9a24d6931cb0c0e8264fed132a0ed8c97415c4c"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/75facf7e3e2e534c307f54f259c3e920b1dc6965@/lib/component'), ['extjs-ace/component'], function (require, exports, module)
{
    var COMPONENT = require("extjs-ace/component");

    exports.main = function()
    {
        COMPONENT.init();
        
        var component = COMPONENT.getComponent();

        Ext.ux.AceEditor = Ext.extend(Ext.BoxComponent, component);
    }
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/twilight'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-twilight .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-twilight .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-twilight .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-twilight .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-twilight .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-twilight .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-twilight .ace_scroller {\
  background-color: #141414;\
}\
\
.ace-twilight .ace_text-layer {\
  cursor: text;\
  color: #F8F8F8;\
}\
\
.ace-twilight .ace_cursor {\
  border-left: 2px solid #A7A7A7;\
}\
\
.ace-twilight .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #A7A7A7;\
}\
 \
.ace-twilight .ace_marker-layer .ace_selection {\
  background: rgba(221, 240, 255, 0.20);\
}\
\
.ace-twilight .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-twilight .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25);\
}\
\
.ace-twilight .ace_marker-layer .ace_active_line {\
  background: rgba(255, 255, 255, 0.031);\
}\
\
       \
.ace-twilight .ace_invisible {\
  color: rgba(255, 255, 255, 0.25);\
}\
\
.ace-twilight .ace_keyword {\
  color:#CDA869;\
}\
\
.ace-twilight .ace_keyword.ace_operator {\
  \
}\
\
.ace-twilight .ace_constant {\
  color:#CF6A4C;\
}\
\
.ace-twilight .ace_constant.ace_language {\
  \
}\
\
.ace-twilight .ace_constant.ace_library {\
  \
}\
\
.ace-twilight .ace_constant.ace_numeric {\
  \
}\
\
.ace-twilight .ace_invalid {\
  \
}\
\
.ace-twilight .ace_invalid.ace_illegal {\
  color:#F8F8F8;\
background-color:rgba(86, 45, 86, 0.75);\
}\
\
.ace-twilight .ace_invalid.ace_deprecated {\
  text-decoration:underline;\
font-style:italic;\
color:#D2A8A1;\
}\
\
.ace-twilight .ace_support {\
  color:#9B859D;\
}\
\
.ace-twilight .ace_support.ace_function {\
  color:#DAD085;\
}\
\
.ace-twilight .ace_function.ace_buildin {\
  \
}\
\
.ace-twilight .ace_string {\
  color:#8F9D6A;\
}\
\
.ace-twilight .ace_string.ace_regexp {\
  color:#E9C062;\
}\
\
.ace-twilight .ace_comment {\
  font-style:italic;\
color:#5F5A60;\
}\
\
.ace-twilight .ace_comment.ace_doc {\
  \
}\
\
.ace-twilight .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-twilight .ace_variable {\
  color:#7587A6;\
}\
\
.ace-twilight .ace_variable.ace_language {\
  \
}\
\
.ace-twilight .ace_xml_pe {\
  color:#494949;\
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-twilight";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/twilight');
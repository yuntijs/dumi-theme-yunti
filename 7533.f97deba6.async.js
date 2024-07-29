"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[7533,7510],{77533:function(m,a,e){e.r(a),e.d(a,{default:function(){return r}});var t=e(37510);const n=Object.freeze({displayName:"Elm",fileTypes:["elm"],name:"elm",patterns:[{include:"#import"},{include:"#module"},{include:"#debug"},{include:"#comments"},{match:"\\b(_)\\b",name:"keyword.unused.elm"},{include:"#type-signature"},{include:"#type-declaration"},{include:"#type-alias-declaration"},{include:"#string-triple"},{include:"#string-quote"},{include:"#char"},{comment:"Floats are always decimal",match:"\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b",name:"constant.numeric.float.elm"},{match:"\\b([0-9]+)\\b",name:"constant.numeric.elm"},{match:"\\b(0x[0-9a-fA-F]+)\\b",name:"constant.numeric.elm"},{include:"#glsl"},{include:"#record-prefix"},{include:"#module-prefix"},{include:"#constructor"},{captures:{1:{name:"punctuation.bracket.elm"},2:{name:"record.name.elm"},3:{name:"keyword.pipe.elm"},4:{name:"entity.name.record.field.elm"}},match:"(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\|)\\s+([a-z][a-zA-Z0-9_]*)",name:"meta.record.field.update.elm"},{captures:{1:{name:"keyword.pipe.elm"},2:{name:"entity.name.record.field.elm"},3:{name:"keyword.operator.assignment.elm"}},match:"(\\|)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",name:"meta.record.field.update.elm"},{captures:{1:{name:"punctuation.bracket.elm"},2:{name:"record.name.elm"}},match:"(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+$",name:"meta.record.field.update.elm"},{captures:{1:{name:"punctuation.bracket.elm"},2:{name:"entity.name.record.field.elm"},3:{name:"keyword.operator.assignment.elm"}},match:"(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",name:"meta.record.field.elm"},{captures:{1:{name:"punctuation.separator.comma.elm"},2:{name:"entity.name.record.field.elm"},3:{name:"keyword.operator.assignment.elm"}},match:"(,)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",name:"meta.record.field.elm"},{match:"(\\}|\\{)",name:"punctuation.bracket.elm"},{include:"#unit"},{include:"#comma"},{include:"#parens"},{match:"(->)",name:"keyword.operator.arrow.elm"},{include:"#infix_op"},{match:"(\\=|\\:|\\||\\\\)",name:"keyword.other.elm"},{match:"\\b(type|as|port|exposing|alias|infixl|infixr|infix)\\s+",name:"keyword.other.elm"},{match:"\\b(if|then|else|case|of|let|in)\\s+",name:"keyword.control.elm"},{include:"#record-accessor"},{include:"#top_level_value"},{include:"#value"},{include:"#period"},{include:"#square_brackets"}],repository:{block_comment:{applyEndPatternLast:1,begin:"\\{-(?!#)",captures:{0:{name:"punctuation.definition.comment.elm"}},end:"-\\}",name:"comment.block.elm",patterns:[{include:"#block_comment"}]},char:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.char.begin.elm"}},end:"'",endCaptures:{0:{name:"punctuation.definition.char.end.elm"}},name:"string.quoted.single.elm",patterns:[{match:`\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,name:"constant.character.escape.elm"},{match:"\\^[A-Z@\\[\\]\\\\\\^_]",name:"constant.character.escape.control.elm"}]},comma:{match:"(,)",name:"punctuation.separator.comma.elm"},comments:{patterns:[{begin:"--",captures:{1:{name:"punctuation.definition.comment.elm"}},end:"$",name:"comment.line.double-dash.elm"},{include:"#block_comment"}]},constructor:{match:"\\b[A-Z][a-zA-Z0-9_]*\\b",name:"constant.type-constructor.elm"},debug:{match:"\\b(Debug)\\b",name:"invalid.illegal.debug.elm"},glsl:{begin:"(\\[)(glsl)(\\|)",beginCaptures:{1:{name:"entity.glsl.bracket.elm"},2:{name:"entity.glsl.name.elm"},3:{name:"entity.glsl.bracket.elm"}},end:"(\\|\\])",endCaptures:{1:{name:"entity.glsl.bracket.elm"}},name:"meta.embedded.block.glsl",patterns:[{include:"source.glsl"}]},import:{begin:"^\\b(import)\\s+",beginCaptures:{1:{name:"keyword.control.import.elm"}},end:"\\n(?!\\s)",name:"meta.import.elm",patterns:[{match:"(as|exposing)",name:"keyword.control.elm"},{include:"#module_chunk"},{include:"#period"},{match:"\\s+",name:"punctuation.spaces.elm"},{include:"#module-exports"}]},infix_op:{match:"(</>|<\\?>|<\\||<=|\\|\\||&&|>=|\\|>|\\|=|\\|\\.|\\+\\+|::|/=|==|//|>>|<<|<|>|\\^|\\+|-|/|\\*)",name:"keyword.operator.elm"},module:{begin:"^\\b((port |effect )?module)\\s+",beginCaptures:{1:{name:"keyword.other.elm"}},end:"\\n(?!\\s)",endCaptures:{1:{name:"keyword.other.elm"}},name:"meta.declaration.module.elm",patterns:[{include:"#module_chunk"},{include:"#period"},{match:"(exposing)",name:"keyword.other.elm"},{match:"\\s+",name:"punctuation.spaces.elm"},{include:"#module-exports"}]},"module-exports":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.parens.module-export.elm"}},end:"(\\))",endCaptures:{1:{name:"punctuation.parens.module-export.elm"}},name:"meta.declaration.exports.elm",patterns:[{match:"\\b[a-z][a-zA-Z_'0-9]*",name:"entity.name.function.elm"},{match:"\\b[A-Z][A-Za-z_'0-9]*",name:"storage.type.elm"},{match:",",name:"punctuation.separator.comma.elm"},{match:"\\s+",name:"punctuation.spaces.elm"},{include:"#comma"},{match:"\\(\\.\\.\\)",name:"punctuation.parens.ellipses.elm"},{match:"\\.\\.",name:"punctuation.parens.ellipses.elm"},{include:"#infix_op"},{comment:"So named because I don't know what to call this.",match:"\\(.*?\\)",name:"meta.other.unknown.elm"}]},"module-prefix":{captures:{1:{name:"support.module.elm"},2:{name:"keyword.other.period.elm"}},match:"([A-Z][a-zA-Z0-9_]*)(\\.)",name:"meta.module.name.elm"},module_chunk:{match:"[A-Z][a-zA-Z0-9_]*",name:"support.module.elm"},parens:{match:"(\\(|\\))",name:"punctuation.parens.elm"},period:{match:"[.]",name:"keyword.other.period.elm"},"record-accessor":{captures:{1:{name:"keyword.other.period.elm"},2:{name:"entity.name.record.field.accessor.elm"}},match:"(\\.)([a-z][a-zA-Z0-9_]*)",name:"meta.record.accessor"},"record-prefix":{captures:{1:{name:"record.name.elm"},2:{name:"keyword.other.period.elm"},3:{name:"entity.name.record.field.accessor.elm"}},match:"([a-z][a-zA-Z0-9_]*)(\\.)([a-z][a-zA-Z0-9_]*)",name:"record.accessor.elm"},square_brackets:{match:"[\\[\\]]",name:"punctuation.definition.list.elm"},"string-quote":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.elm"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.elm"}},name:"string.quoted.double.elm",patterns:[{match:`\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,name:"constant.character.escape.elm"},{match:"\\^[A-Z@\\[\\]\\\\\\^_]",name:"constant.character.escape.control.elm"}]},"string-triple":{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.elm"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.elm"}},name:"string.quoted.triple.elm",patterns:[{match:`\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,name:"constant.character.escape.elm"},{match:"\\^[A-Z@\\[\\]\\\\\\^_]",name:"constant.character.escape.control.elm"}]},top_level_value:{match:"^[a-z][a-zA-Z0-9_]*\\b",name:"entity.name.function.top_level.elm"},"type-alias-declaration":{begin:"^(type\\s+)(alias\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",beginCaptures:{1:{name:"keyword.type.elm"},2:{name:"keyword.type-alias.elm"},3:{name:"storage.type.elm"}},end:"^(?=\\S)",name:"meta.function.type-declaration.elm",patterns:[{match:"\\n\\s+",name:"punctuation.spaces.elm"},{match:"\\=",name:"keyword.operator.assignment.elm"},{include:"#module-prefix"},{match:"\\b[A-Z][a-zA-Z0-9_]*\\b",name:"storage.type.elm"},{match:"\\b[a-z][a-zA-Z0-9_]*\\b",name:"variable.type.elm"},{include:"#comments"},{include:"#type-record"}]},"type-declaration":{begin:"^(type\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",beginCaptures:{1:{name:"keyword.type.elm"},2:{name:"storage.type.elm"}},end:"^(?=\\S)",name:"meta.function.type-declaration.elm",patterns:[{captures:{1:{name:"constant.type-constructor.elm"}},match:"^\\s*([A-Z][a-zA-Z0-9_]*)\\b",name:"meta.record.field.elm"},{match:"\\s+",name:"punctuation.spaces.elm"},{captures:{1:{name:"keyword.operator.assignment.elm"},2:{name:"constant.type-constructor.elm"}},match:"(\\=|\\|)\\s+([A-Z][a-zA-Z0-9_]*)\\b",name:"meta.record.field.elm"},{match:"\\=",name:"keyword.operator.assignment.elm"},{match:"\\-\\>",name:"keyword.operator.arrow.elm"},{include:"#module-prefix"},{match:"\\b[a-z][a-zA-Z0-9_]*\\b",name:"variable.type.elm"},{match:"\\b[A-Z][a-zA-Z0-9_]*\\b",name:"storage.type.elm"},{include:"#comments"},{include:"#type-record"}]},"type-record":{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.braces.begin"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.braces.end"}},name:"meta.function.type-record.elm",patterns:[{match:"\\s+",name:"punctuation.spaces.elm"},{match:"->",name:"keyword.operator.arrow.elm"},{captures:{1:{name:"entity.name.record.field.elm"},2:{name:"keyword.other.elm"}},match:"([a-z][a-zA-Z0-9_]*)\\s+(\\:)",name:"meta.record.field.elm"},{match:"\\,",name:"punctuation.separator.comma.elm"},{include:"#module-prefix"},{match:"\\b[a-z][a-zA-Z0-9_]*\\b",name:"variable.type.elm"},{match:"\\b[A-Z][a-zA-Z0-9_]*\\b",name:"storage.type.elm"},{include:"#comments"},{include:"#type-record"}]},"type-signature":{begin:"^(port\\s+)?([a-z_][a-zA-Z0-9_']*)\\s+(\\:)",beginCaptures:{1:{name:"keyword.other.port.elm"},2:{name:"entity.name.function.elm"},3:{name:"keyword.other.colon.elm"}},end:"((^(?=[a-z]))|^$)",name:"meta.function.type-declaration.elm",patterns:[{include:"#type-signature-chunk"}]},"type-signature-chunk":{patterns:[{match:"->",name:"keyword.operator.arrow.elm"},{match:"\\s+",name:"punctuation.spaces.elm"},{include:"#module-prefix"},{match:"\\b[a-z][a-zA-Z0-9_]*\\b",name:"variable.type.elm"},{match:"\\b[A-Z][a-zA-Z0-9_]*\\b",name:"storage.type.elm"},{match:"\\(\\)",name:"constant.unit.elm"},{include:"#comma"},{include:"#parens"},{include:"#comments"},{include:"#type-record"}]},unit:{match:"\\(\\)",name:"constant.unit.elm"},value:{match:"\\b[a-z][a-zA-Z0-9_]*\\b",name:"meta.value.elm"}},scopeName:"source.elm",embeddedLangs:["glsl"]});var r=[...t.default,n]},37510:function(m,a,e){e.r(a),e.d(a,{default:function(){return r}});var t=e(32205);const n=Object.freeze({displayName:"GLSL",fileTypes:["vs","fs","gs","vsh","fsh","gsh","vshader","fshader","gshader","vert","frag","geom","f.glsl","v.glsl","g.glsl"],foldingStartMarker:"/\\*\\*|\\{\\s*$",foldingStopMarker:"\\*\\*/|^\\s*\\}",name:"glsl",patterns:[{match:"\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b",name:"keyword.control.glsl"},{match:"\\b(void|bool|int|uint|float|vec2|vec3|vec4|bvec2|bvec3|bvec4|ivec2|ivec2|ivec3|uvec2|uvec2|uvec3|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|sampler[1|2|3]D|samplerCube|sampler2DRect|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArray|sampler[1|2]DArrayShadow|samplerBuffer|sampler2DMS|sampler2DMSArray|struct|isampler[1|2|3]D|isamplerCube|isampler2DRect|isampler[1|2]DArray|isamplerBuffer|isampler2DMS|isampler2DMSArray|usampler[1|2|3]D|usamplerCube|usampler2DRect|usampler[1|2]DArray|usamplerBuffer|usampler2DMS|usampler2DMSArray)\\b",name:"storage.type.glsl"},{match:"\\b(attribute|centroid|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying)\\b",name:"storage.modifier.glsl"},{match:"\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragDat|gl_FragDept|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexIDh)\\b",name:"support.variable.glsl"},{match:"\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b",name:"support.constant.glsl"},{match:"\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b",name:"support.function.glsl"},{match:"\\b(asm|double|enum|extern|goto|inline|long|short|sizeof|static|typedef|union|unsigned|volatile)\\b",name:"invalid.illegal.glsl"},{include:"source.c"}],scopeName:"source.glsl",embeddedLangs:["c"]});var r=[...t.default,n]}}]);

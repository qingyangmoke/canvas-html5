1. 不要使用import 所有对模块引用都要使用require的方式 且 用路径使用单引号 原始是npm发布的时候会会把src目录下的二级文件都拷贝到 dist根目录 ，并且使用webpack把src的index.js文件打包成dist/index.js 并把package中的入口改成index.js
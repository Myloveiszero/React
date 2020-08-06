1.  .tsx 工作流
    .tsx React组件 -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript.jsx -> babel(polyfill + env + plugin) -> react DOM -> webpack-dev-server  html-webpack-plugin footer script bundle.js
    <!-- .tsx 文件通过webpack -->

2.  最烦的是什么？
    react-scripts 约定俗成

3.  hooks 特色
-   useState
-   useEffect
-   useCallback
-   useMemo
-   useRef
-   useContext
-   useReducer

4.  分析以下React是如何运行的
    jsx
    root 
    jsx 的编译过程
    -   节点的类型
    标签节点  div h4
    组件 递归
    <></>
    text 文本

5.   你做项目时遇到了什么问题
    -   api 文档
    -   相互尊重 极客范
    -   useRef 解决闭包的副作用问题
    -   接口数据还没有加载完成，用户提前退出， 报错

6.  数据在hooks 怎么走？
    useState -> context 轻量级 | reducer 重量级 | useReducer | mobx

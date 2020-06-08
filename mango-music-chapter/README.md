1.  做react/vue项目。  仿一个音乐类的
2.  做一个上线的业务  思路 结构  技能点

=   react 组件由 组件component 实例和一个css文件  styl
    create-react-app  css/less  styl
    不一定要用官方的create-react-app, 下次自己的项目， 我就可以从这个项目开始  项目模板

-   单页应用  single Page Application SPA
    只有一个页面的应用
    提升网站的用户体验
    点击路由时， 不会重新刷新整个页面， 而是根据路由的配置， 是把相应的组件显示出来
-   根据界面 可以分析出 头尾不同 , 中间内容根据 Route 匹配
-   Loading 组件
    哪个目录下创建？
    containers
    components  路由级别组件
    Loading 服务于任何listAPI 列表组件  通用组件
    
    1.  数据请求阶段 显示Loading
    2.  数据来了后 隐藏它
    父组件  要给loading 传参

-   api/ 分层的能力， 职责分离 是代码复杂， 且大型化的前提，
    每个路由模块页面独立一个js文件， 便于维护和代码阅读
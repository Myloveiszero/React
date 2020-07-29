-   router
    1.  react-router
        react-router-dom
        react-router-config
    2.  react-router 嵌套
        config router 配置 让项目结构清晰了
    3.  当路由比较复杂时，传统的手写router/route 配置难以维护，
    企业级的router配置方案react-router-config,清晰，易管理 ,可维护的 routes/index.js 配置
    layout app 里总有几套皮肤，匹配那个级别的所有路由
    routes react-router-config renderRoutes(route,routes)

-   search 业务
    接口文档
    -   热门搜索
    /search/hot  参数 null
    返回值 result.hot
    -   搜索建议
    /suggest? keywords=
    参数 keyword  
    返回值 albums
    -   搜索结果
    /search?keywoeds=

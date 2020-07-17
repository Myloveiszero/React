-   全栈项目
    一分为二的思想
        1.  前后端分离
        2.  UI与redux分离
        
    城市数据怎么做
    -   数据 CityData 默认 null mockjs 请求回来
    -   action-type setCityData
    -   是否显示 isCitySelectorVisible false
        ACTION_SET_IS_CITY_SELECTOR_VISIBILE
        isLoadingData
        ACTION_SET_IS_LOADING_CITY_DATA
    -   后端API设计流程
        1.  mongodb/msql 写真后端
            mockerAPI 解决了跨域问题
        2.  模块化输出api配置
        3.  require json Mocker.mock random 配置
    -   api -> action -> reducer -> connect -> 组件

    -   数据请求都 放在actions中
            异步的actions中，dispatch多个action

    
        
1.  css reset
        normalize.css
        index.css 移动业务的设置

2.  无状态组件的创造流程  需要可以练习
    -   组件插入父级组件之中，思考好props
    -   组件的类型如果是无状态组件
        prop-types css propTypes
        形参props
        return (<div></div>)
    -   props 解构出来要的props
    -   功能函数建议由父组件来打理，子组件纯粹负责render，并且函数可以复用

3.  年轻的react hooks 全新开发方式
    class Component -> function
    函数式编程
    class + constructor + 生命周期 + render  -> function + react hooks 函数
    -   useCallback 缓存一个函数
    -   useMemo 

4.  有状态组件编写顺序
    -  数据 Provider store

5.  redux
    -   简单的redux 项目结构
        store.js createStore reducers
            中间件 axios  redux-thunk 支持异步
        reducers.js combineReducers
        action.js 数据请求， 状态改变的触发都由actions来负责
            ActionTypes 可读性
    -   redux API -> 设计状态 （reducer + actions）
        初始值 from to 两个reducer函数
        把函数、初始值、action、 return初始值 写好
        状态会怎么改变  动作的声明 SET_FROM 
        -   switch case  
        -   {type,payload} action 
        -   actionTypes 常量声明 增强可读性
        -   action 写出来
    -   数据组件化
        1.  connect 高阶返回原组件
            connect({
                mapState,
                mapDispach
            })(Component)
        2.  创建组件
        3.  状态组件，无状态组件的复用
        
    -   reducer


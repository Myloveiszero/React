import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './mock/data.js';

// JSX UI state MVVM 行为 oo
// 函数返回值是组件
// /posts/  axios api请求的url  /commments/
// Post组件作为参数  高阶组件
//通用性的提供数据请求及更新的解决方案
//有人为它服务

class Post extends Component {
  render() {
    return (
      <div>
        <p> {this.props.msg}</p>
        <p> {this.props.content} </p>
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const loadAndRefresh = (url) => (WrappedComponent)=> {
  // 返回组件
  return class extends Component {
    constructor() {
      super();
      this.state = {
        msg: '',
        content: ''
      }
    }
  
    componentDidMount() {
      //数据请求
      this._loadData();
    }

    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      })
      axios.get(url)
        .then(res => {
          console.log(res.data);
          this.setState({
            msg: res.data.title,
            content: res.data.content,
          })
        })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props}/>
      )
    }
  }
}

const WrappedPost = loadAndRefresh('/posts/')(Post);

const WrappedComment = loadAndRefresh('/comments/')(Comment);

function App() {
  return (
    <div className="App">
      {/* message  */}
      {/* <Post /> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;

import { axiosInstance } from './config';

export const getRecommendListRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data:[{
          id: 1,
          title: 'aaaaaa'
        }]
      })
    }, 1000)
  })
}

// 项目所有请求API的列表文件 
// 每个请求一个函数
// 每个函数都是返回一个promise 

// api 与actions的分离点
// axiosInstance.get   返回是Promise 

//首页广告 
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");
}


// reducer  init = {singerList: [], offset=0}
// useEffect dispatch getHotSingerList 异步
//  getHotSingerListRequest API请求
// then 
//   changeSingerList [] [...data]同步
//   changeOffet 0 data.length 同步

// better-scroll baseUI scroll / index.js  上拉触底加载更多

// 下拉刷新的时候， 过程是怎么样的
// onPullDown offset = 0 getHotSingerList -> getHotSingerListRequest(API) -> changeSingerList

// 前后端合作的要素有哪些
// 1.  接口地址 url/ top /artists 请求  RESTFUL 资源的暴露
// 2.  传参  
// 3.  接口文档 后端给  

//接口请求规范
// 歌手列表， 支持分页 
export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};
//歌手信息
// history.push()
export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};
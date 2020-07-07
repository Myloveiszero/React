// 假数据 真数据前用一下
 import Mock from 'mockjs';

 export default Mock.mock('/posts/','get', {
     success: true,
     title: '海滨墓园',
     content: '每当海风吹过，唯有试着生存',
     'list|5-10': [{
         'title': '@title()',
         'email': '@email',
         'id': '@id',
         'key|+1': 1
     }]
 })

import React from "react";
// StatefullComponent  StatelessComponent
import Search from "./Search";
<<<<<<< HEAD
import Header from "./Header";
import Results from "./Results";

=======
import Results from "./Results";


>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
class Main extends React.Component {
  // 集列表， 搜索于一体 怎么做？ 
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true // 正在加载中  体验
    }
  }
  
  // URL不一样？ 分析URL不一样
  componentDidMount() {
    // /  把所有啤酒都查出来， 
    // /search/:searchTerm   就查searchTerm
    // const \
    console.log(this.props.match.params);
    const params = this.props.match.params || {} // 
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm); // 
  }
<<<<<<< HEAD

  componentDidUpdate(prevProps) {
    // console.log('did update')
    // console.log(prevProps);
    const currentSearchTerm = this.props.match.params.searchTerm; // 新的参数
    const oldSearchTerm = prevProps.match.params.searchTerm;
    // console.log(oldSearchTerm, currentSearchTerm);
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm)
    }
  }

  // = hops 在业务上有什么用？
  // es6 概念 默认赋值
  loadBeers(searchTerm = "hops") {
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`) 
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers: localBeers,
        loading: false
      })
      return ;
    }
=======
  // = hops 在业务上有什么用？
  // es6 概念 默认赋值
  loadBeers(searchTerm = "hops") {
   
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api 地址
      .then(data => data.json())
      .then(data => {
        
        const beers = data.data || [];
<<<<<<< HEAD
        
=======
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
        this.setState({
          loading: false,
          beers
        });
<<<<<<< HEAD
        // 业务
        // 列表记录相关 searchTerm 变化
        localStorage.setItem(
          `search-${searchTerm}`,
          JSON.stringify(this.state.beers)
        )
=======
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
        console.log(data)
      })
  }

<<<<<<< HEAD
  render() {
    return (
      <div>
        <Header siteName="Beer me!" />
=======

  render() {
    return (
      <div>
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
        <Search /> 
        {/* 搜索组件 */}
        <Results beers={this.state.beers}
         loading={this.state.loading} />
      </div>
    )
  }
}

<<<<<<< HEAD
=======

>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
export default Main
import React,{Component} from 'react'
import { renderData } from '../common/utils/mixin';


class Main extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>系统设置</div>
    )
  }
}

export default renderData({
  id: 'setting', // 应用关联使用的redex
  component: Main, // 接收数据的组件入口
  url: ''
});

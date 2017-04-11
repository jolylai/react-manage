import React,{ Component } from 'react'
import { Tool,config } from '../../config/config'
import { Layout,Menu,Breadcrumb,Icon } from 'antd'
import { History, Link } from 'react-router';
import { Lmenu } from './Lmenu.jsx'
import { Lheader } from './Lheader.jsx'
import { Lfooter } from './Lfooter.jsx'
import { renderData } from '../common/utils/mixin';
// 布局样式
import './style/layout.less';
const { Content, Sider } = Layout;



/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component{
  constructor(props){
    super(props);
    const collapsed = Tool.localItem('COLLAPSED') == 'YES' ? true : false;
    this.state = {
      collapsed: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    };
  }
  onCollapse = (collapsed) => {
    if(collapsed) Tool.localItem('COLLAPSED','YES'); else Tool.localItem('COLLAPSED','NO');
    this.state({
      collapsed: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    });
  }
  toggle = (collapsed) => {
    if (collapsed) Tool.localItem('COLLAPSED','YES');else Tool.localItem('COLLAPSED','NO');
    this.setState({
      collapsed: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    })
  }
  render(){
    // 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
    return(
      <Layout className="layout">
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="layout-logo">
            <Link to="/home">
              <span className="logo-text">{config.logoText}</span>
            </Link>
          </div>
          <Lmenu mode={this.state.mode} />
        </Sider>
        <Layout>
          <Lheader collapsed={this.state.collapsed} toggle={ collapsed => {this.toggle(collapsed)}}/>
          <Content className="layout-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default renderData({
  id: 'layout',
  component: Main,
  url: ''
})

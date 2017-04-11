import React,{ Component } from 'react';
import { Tool } from '../../config/config'
import { Link } from 'react-router'
import { Menu,Icon } from 'antd'
/**
 * 公共菜单
 *
 * @export
 * @class menu
 * @extends {Component}
 */
export class Lmenu extends Component{
  constructor(props,context){
    super(props,context);
    const openKeys = Tool.localItem('OPENKEY') ? [Tool.localItem('OPENKEY')]:[];
    this.state = {
      openkeys: openKeys
    };
  }
  render(){
    //
    const defaultSelectedKey = process.env.NODE_ENV !== 'production' ? [location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home'] : [location.hash.split('/')[location.hash.split('/').length - 1].split('?')[0] || 'home'];
    return (
      <Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode} defaultSelectedKeys={defaultSelectedKey}>
        <Menu.Item key="home">
          <Link to="/home">
            <Icon type="laptop"/>
            <span className="nav-text">首页</span>
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

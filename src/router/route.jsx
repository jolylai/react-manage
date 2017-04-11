import React, {Component, PropTypes} from 'react'; // react核心
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'; // 创建route所需
import auth from '../components/common/utils/auth'; // 登录逻辑处理
import layout from '../components/layout/layout.jsx'
import login from '../components/login/Login'; // 登录界面


class Roots extends Component{
  render(){
    return(
      // 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
      <div>{this.props.children}</div>
    )
  }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const requireAuth = (nextState,replace) => {
  if (!auth.loggedIn()){
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

const RouteConfig = (
  <Router history = { history }>
    <Route path="/home" component={ layout } onEnter={requireAuth}>
    </Route>
    <Route path="/login" component={Roots}> // 所有的访问，都跳转到Roots
      <IndexRoute component={login} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
    </Route>
    <Redirect from="*" to="/home" />
  </Router>
);

export default RouteConfig;

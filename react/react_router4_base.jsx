import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routeConfig from './router_config';

/**
 * 根据router配置进行转换到route组件
 */
const recursiveRouterConfig = routesConf => {
  const routes = routesConf.map(route => {
    // route的相关信息
    const childRoutes = route.children;
    const rPath = route.path;
    const comp = route.component;
    // 对于route的封装
    let returnRouteCom = [];
    const renderFunc = props => React
      .createElement(comp, props, recursiveRouterConfig(childRoutes));
    if (childRoutes && childRoutes.length) {
      returnRouteCom = <Route key={rPath} path={rPath} render={renderFunc} />;
    } else {
      returnRouteCom = (
        <Route key={rPath} path={rPath} exact component={comp} />
      );
    }
    return returnRouteCom;
  });
  return <Switch>{routes}</Switch>;
};

export default () => (
  <HashRouter>{recursiveRouterConfig(routeConfig)}</HashRouter>
);

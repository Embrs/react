import React from 'react';
import { Route } from 'react-router-dom';
const userRoles = ['default', 'p1', 'p2']; //be test

// 有分頁都要引入
function RouteHander(routes) {
  return (
    <div className="RouteHander">
      {routes.map((route, i) => {
        const { path, exact, routes, role } = route;
        const find = userRoles.find(userRole => userRole === role);
        if (find) {
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={routeProps => <route.component {...routeProps} routes={routes} />}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default RouteHander;

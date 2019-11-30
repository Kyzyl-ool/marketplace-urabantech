import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import {firstLevelRouterWithoutId, firstLevelRoutes} from "./RoutesAndComponents";

const getParamsId = () => {
  const params = useParams();
  return params.id
}

export const TreeRootRouter = ({children}) => {
  return <>
    <Switch>
      {
        firstLevelRoutes.map((route, index) => <Route key={index} path={`/${route.name}/:id`}
                                                      component={() => React.createElement(route.component, {id: getParamsId()})}/>)
      }
      {
        firstLevelRouterWithoutId.map((route, index) => (<Route key={index} exact path={`/${route.name}`}
                                                               component={() => React.createElement(route.component )}/>))
      }
    </Switch>
    {children}
  </>;
};
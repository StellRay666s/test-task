import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home/default/orders`}
          component={lazy(() => import(`./orders`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/home/default/clients/list`}
          component={lazy(() => import(`./Clients/ClientsList`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/home/default/clients/user:id,:name,:phone,:email,:website`}
          component={lazy(() => import(`./Clients/ClientUser`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/home/default/clients/group`}
          component={lazy(() => import(`./Clients/ClientsGroup`))}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);

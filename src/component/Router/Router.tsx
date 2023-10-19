import IRoute from "@interface/route/IRoute";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import routes from '@route/router-config';
import RouteLoader from "../RouteLoader/RouteLoader";

const createRoutes = (routes: IRoute[]) => {
    return routes.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component />}>
            {route.children && createRoutes(route.children)}
        </Route>
    ));
}

const Router = () => {
    const routeElements = createRoutes(routes);

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route
          element={
            <RouteLoader>
                <Outlet />
            </RouteLoader>
          }
        >
          {routeElements}
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
}

export default Router;
import IRoute from "@interface/route/IRoute";
import { lazy } from "react";

const routes: IRoute[] = [{
    path: '/',
    component: lazy(() => import("@screen/HomeScreen")),
    exact: true,
}];


export default routes;
import IRoute from "@interface/route/IRoute";
import { lazy } from "react";

const routes: IRoute[] = [{
    path: '/',
    component: lazy(() => import("@screen/HomeScreen")),
    exact: true,
}, {
    path: '/create-or-join',
    component: lazy(() => import("@screen/AddOrJoinSpace")),
    exact: true,
}];


export default routes;
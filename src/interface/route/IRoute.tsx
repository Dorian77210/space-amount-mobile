import { ComponentType, LazyExoticComponent } from "react";

interface ISubRouteChildren {
  path: string;
  component: LazyExoticComponent<ComponentType<unknown>>;
}

export default interface IRoute {
    path: string;
    component: LazyExoticComponent<ComponentType<unknown>>;
    exact?: boolean;
    children?: ISubRouteChildren[];
  }
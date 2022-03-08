import * as React from "react";
import Context from "./Context";
import matchPath from "./matchPath";

interface Interface {
  path;
  component?;
  exact?: boolean;
  children?;
  render?;
  location?;
}
export default function Route(props: Interface) {
  const ctx = React.useContext(Context);

  const { component, children, location = ctx.location, render } = props;
  const match = matchPath(location.pathname||location.location.pathname, props);

  const prop = {
    ...ctx,
    location,
    match,
  };
  return match
    ? children
      ? typeof children === "function"
        ? children(prop)
        : children
      : component
      ? React.createElement(component, prop)
      : render
      ? render(prop)
      : null
    : typeof children === "function"
    ? children(prop)
    : null;
}

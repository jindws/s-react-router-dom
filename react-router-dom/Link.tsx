import * as React from "react";
import Context from "./Context";

interface Interface {
  to;
  children;
}
export default function Link(props: Interface) {
  function Jump(history, e) {
    e.preventDefault();
    history.push(to);
  }
  const { to, children } = props;
  const { history } = React.useContext(Context);
  return (
    <a href={to} onClick={Jump.bind(this, history)}>
      {children}
    </a>
  );
}

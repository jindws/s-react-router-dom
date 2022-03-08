import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter, Link, Route } from "../react-router-dom";

function Index() {
  return "Index";
}

function Test() {
  return "Test";
}

function ALWAYS() {
  return <h1>ALWAYS</h1>;
}

function Render() {
  return "Render";
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Index</Link>
      <br />
      <Link to="/test">Test</Link>
      <br />
      <Link to="/render">Render</Link>
      <br />
      <Link to="/children">ALWAYS</Link>
      <br />
      <hr />
      <Route path="/test" component={Test} />
      <Route path="/render" render={Render} />
      <Route exact path="/" component={Index} />
      <Route path="*" children={ALWAYS} />
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("app"));

import * as React from "react";
import { createBrowserHistory } from "history";
import Context from "./Context";

export default function BrowserRouter(props) {
  const history = React.useMemo(() => {
    return createBrowserHistory();
  }, []);

  const [location, setLocation] = React.useState(history.location );

  React.useEffect(() => {
    const unListen = history.listen((location) => {
      setLocation(location as any);
    });
    return () => unListen();
  }, []);

  return (
    <Context.Provider
      value={{
        history,
        location,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes"

const Login = lazy(() => import("./pages/login"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          //New Pages 

          //End New Pages
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route component={notfound} />
        </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;

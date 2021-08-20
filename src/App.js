/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <div className="App flex bg-white w-full h-screen overflow-y-scroll overflow-x-hidden">
      <Router>
      <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            //New Pages //End New Pages
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={notfound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

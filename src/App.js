import { Suspense,lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Heroes = lazy(()=> import("./pages/Heroes"));
const Detail = lazy(()=> import("./pages/Detail"));

function App() {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <HomeLayout>
                            <Switch>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                                <Route path="/heroes" exact>
                                  <Heroes/>
                                </Route>
                                <Route path="/detail" exact>
                                    <Detail/>
                                </Route>
                            </Switch>
                        </HomeLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;

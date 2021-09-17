import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../pages/SignedOut/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
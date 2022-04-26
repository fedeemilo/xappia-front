import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Excel from "../pages/Excel";
import { URLS } from "../constants/urls";
import Result from "../pages/Result";
import Example from "../pages/Example";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={URLS.home} element={<Home />} />
                <Route path={URLS.excel} element={<Excel />} />
                <Route path={URLS.result} element={<Result />} />
                <Route path={URLS.example} element={<Example />} />
                <Route path={URLS.other} element={<Home />} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;

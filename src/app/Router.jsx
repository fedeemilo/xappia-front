import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import LoadExcel from "../pages/LoadExcel";
import { URLS } from "../constants/urls";
import LoadResult from "../pages/LoadResult";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={URLS.home} element={<Home />} />
                <Route path={URLS.excel} element={<LoadExcel />} />
                <Route path={URLS.result} element={<LoadResult />} />
                <Route path={URLS.other} element={<Home />} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;

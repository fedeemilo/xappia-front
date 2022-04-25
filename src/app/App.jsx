import { useMemo } from "react";
import NavBar from "../components/NavBar";
import Router from "./Router";

function App() {
    return (
        <div className="">
            <NavBar />
            {useMemo(() => {
                return <Router />;
            }, [])}
        </div>
    );
}

export default App;

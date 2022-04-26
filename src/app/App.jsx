import { useMemo } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Router from "./Router";

function App() {
    return (
        <div>
            <NavBar />
            {useMemo(() => {
                return <Router />;
            }, [])}
            <Footer />
        </div>
    );
}

export default App;

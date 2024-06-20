import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navigation from "./components/Navigation";

export const Root = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Destination" element={<Destination />} />
                    <Route path="/Crew" element={<Crew />} />
                    <Route path="/Technology" element={<Technology />} />
                </Routes>
            </Router>
        </>
    );
};
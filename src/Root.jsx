import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
                    <Route path="/home" element={<Home />} />
                    <Route path="/destination" element={<Navigate to="/destination/moon" />} />
                    <Route path="/destination/:destinationId" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </Router>
        </>
    );
};

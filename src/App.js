import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
    return (
        <div>
            <div className="bottt grad fixed h-screen w-screen top-0 left-0"></div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<RegisterForm />} path="/login" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

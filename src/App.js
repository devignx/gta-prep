import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
    return (
        <div>
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

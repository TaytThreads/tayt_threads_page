import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import AuthLayout from "./routes/Authentication";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

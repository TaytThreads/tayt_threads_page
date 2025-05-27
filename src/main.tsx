import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";

import MainPageLayout from "./routes/MainLayout";
import AuthLayout from "./routes/Authentication";

import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import Confirmation from "./routes/Confirmation";
import MainPage from "./pages/MainPage";

import "./index.css";
import output from "../amplify_outputs.json";

Amplify.configure(output);

const root = document.getElementById("root");
if (!root) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/confirm-signup/:email" element={<Confirmation />} />
    </Routes>
  </BrowserRouter>
);

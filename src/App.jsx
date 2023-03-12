import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { HomeUser } from "./components/HomeUser";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { ResetPassword } from "./components/ResetPassword";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-green-700 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeUser />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

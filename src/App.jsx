import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;

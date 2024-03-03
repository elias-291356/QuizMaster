import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/LoginForm/LoginForm";
import NotFound from "./components/NotFound/NotFound";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;

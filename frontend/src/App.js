import logo from "./logo.svg";
import "./App.css";
import Admin from "./components/admin";
import AdminProfile from "./components/admin/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import User from "./components/user";
import UserProfile from "./components/user/profile";
import UserSignup from "./components/main/signup";
import Footer from "./components/main/footer";
import Header from "./components/main/header";
import Home from "./components/main/home";
import ManageEquipment from "./components/admin/manageequipment";
import AddEquipment from "./components/admin/addequipment";
import ManageUser from "./components/admin/mangeUser";
import DashBoard from "./components/admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<AddEquipment />} path="addequipment" />
          <Route element={<AdminProfile />} path="profile" />
          <Route element={<ManageEquipment />} path="manageequipment" />
          <Route element={< ManageUser />} path="manageuser" />
          <Route element={< DashBoard />} path="dashboard" />

        </Route>

        <Route element={<Main />} path="main">
          <Route element={<Footer />} path="footer" />
          <Route element={<Header />} path="header" />
          <Route element={<Home />} path="home" />
          <Route element={<UserSignup />} path="usersignup" />
        </Route>
        <Route element={<User />} path="user">
          <Route element={<UserProfile />} path="profile" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
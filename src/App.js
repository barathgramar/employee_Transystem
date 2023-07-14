import URegisterPage from "./pages/URegisterPage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ULoginPage from "./pages/ULoginPage";
import ALoginPage from "./pages/ALoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./pages/Layout";
import DashBoard from "./component/Dashboard"
import UserDashBoard from "./pages/UserDashBoard"
import Admin_Home from "./admindashboard/Admin_Home";
import Vehicles from "./admindashboard/Vehicles";
import Driver from "./admindashboard/Driver";
import Management from "./admindashboard/ManageMent";

function App(){
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Layout>
      <Routes >
          <Route path="/register" element={<URegisterPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<ULoginPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/home" element={<Admin_Home/>}/>
          <Route path="/vehicle" element={<Vehicles/>}/>
          <Route path="/management" element={<Management/>}/>
          <Route path="/driver" element={<Driver/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/userdashboard" element={<UserDashBoard/>}/>
          <Route path="/adminlogin" element={<ALoginPage/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
      
   
    </div>
  )
}

export default App;

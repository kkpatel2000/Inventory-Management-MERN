import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Login from "./login/Login.jsx"
import Signup from "./Signup/Signup.jsx"
import Home from "./Home/Home.jsx"
import Raw from "./dashbord/stock/Raw.jsx"
import StockEntry from './dashbord/stock/StockEntry.jsx'
import Bill from './dashbord/Bill/Bill.jsx'
import Attedance from './dashbord/Employee_Attendance/Attendance.jsx'
import Footer from './Home/Footer';
import About_us from './About_us/About_us';
import EmployeeRegistration from './dashbord/Employee/EmployeeRegistration'
import Vendor from './dashbord/Vendor/Vendor'
import Reports from './Reports/Reports'
import Stockin from './Reports/StockIn.jsx'
import Sellingin from './Reports/Sellingin.jsx'
import Details from './Home/Details.jsx'
import Salary from './Reports/Salary.jsx'
import Product from './Reports/Product.jsx'
import BillGenerate from './Reports/BillGenerate'
import Testing from './testing/Testing.jsx'


function App  ()  {
  return (
    <Router>
      <Switch>
      
        <Route path="/signup">
          <Signup/>
        </Route>
        
        <Route path="/Home">
          <Home/>
          <Footer/>
          <Details/>
        </Route>
        
        <Route path="/Row">
          <Home/>
          <Raw/>
          <Details/>
        </Route>

        <Route path="/StockEntry">
          <Home/>
          <StockEntry/>
          <Details/>
        </Route>

        <Route path="/EmployeeRegistration">
          <Home/>
          <EmployeeRegistration/>
          <Details/>
        </Route>

        <Route path="/Vendor">
          <Home/>
          <Vendor/>
          <Details/>
        </Route>

      <Route path="/Bill">
        <Bill/>
      </Route>

      <Route path="/Attedance">
        <Attedance/>
      </Route>

      <Route path="/Reports">
        <Home/>
        <Reports/>
        <Details/>
       </Route>

       <Route path="/Stockin">
        <Home/>
        <Stockin/>
        <Details/>
       </Route>

       <Route path="/Salary">
         <Home/>
         <Salary/>
       </Route>

       <Route path="/Product">
         <Home/>
         <Product/>
         <Details/>
       </Route>

       <Route path="/BillGenerate">
        <Home/>
        <BillGenerate/>
        <Details/>
       </Route>

       <Route path="/About_us">
        <Home/>
        <About_us/>
        <Details/>
       </Route>
   
       <Route path="/Testing">
        <Home/>
        <Testing/>
        <Details/>
       </Route>

       <Route path="/">
        <Login/>
       </Route>
        
      </Switch>
    </Router>
  
    );
}

export default App;

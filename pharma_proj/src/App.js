import React from "react";
import './App.css';
// import Header from "./component/Header";
import CategoryType from './component/CategoryType';
import UnitType from './component/UnitType';
import DrugType from "./component/DrugType";
import Drug from "./component/Drug";
import myImage from './image/back.jpg';
import proimages from './image/person.png';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Cosmotics from "./component/Cosmotics";
import Sales from "./component/Sales";


class MyApp extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
              <div class="nav">
                <div class="logo">
                  <img src={myImage} alt="My Image" />
                </div>
                <div class="nav li">
                    <NavLink class="nav a" to="/" >Dashboard</NavLink>
                </div>
                <div >
                    <NavLink class="nav a" to="/CategoryType" >CategoryType</NavLink>
                </div>
                <div >
                      <NavLink  class= "nav a"to="/UnitType" >UnitType</NavLink>
                  </div>
                  <div >
                      <NavLink class="nav a" to="/DrugType" >DrugType</NavLink>
                  </div>
                  <div >
                      <NavLink  class="nav a " to="/Drug" >Drug</NavLink>
                  </div>
                  <div >
                      <NavLink class="nav a" to="/Cosmotics" >Cosmotics</NavLink>
                  </div>
                  <div >
                      <NavLink  class="nav a" to="/Sales" >Sales</NavLink>
                  </div>
                  
                  <div class="pro">
                    <img src={proimages} alt="images"></img>
                 </div>
                 <div class="pro-text">
                  <p>profiles</p>
                </div>
              </div>
              <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/CategoryType" element={<CategoryType />} />
                  <Route exact path="/UnitType" element={<UnitType />} />
                  <Route exact path="/DrugType" element={<DrugType />} />
                  <Route exact path="/Drug" element={<Drug />} />
                  <Route exact path="/Cosmotics" element={<Cosmotics />} />
                  <Route exact path="/Sales" element={<Sales />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
  }
}

export default MyApp;

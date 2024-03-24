import React from "react";
import Sidebaar from './components/Sidebar'
import Dashboard from "./components/Dashboard";

export default function App(){
  return(
    <div className="flex">
      <Sidebaar />
      <Dashboard />
    </div>
  )
}
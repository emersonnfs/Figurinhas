import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import FigurinhasNacionais from "../components/FigurinhasNacionais";
import FigurinhasInternacionais from "../components/FigurinhasInternacionais";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/figurinhas-nacionais" element={<FigurinhasNacionais />} />
        <Route path="/figurinhas-internacionais" element={<FigurinhasInternacionais />} />
    </Routes>
  )
}

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectCard from "./components/ProjectCard/Projects";
import EmployeeDetails from "./components/EmployeeCard/EmployeeCard";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<EmployeeDetails/>}/>
                <Route path="/projects" element={<ProjectCard/>}></Route>
            </Routes>
        </div>
    );
};

export default AllRoutes;
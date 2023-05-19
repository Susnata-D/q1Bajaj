import React from "react";
import {employees} from "../../Data/Employees"
import "./EmployeeCard.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDesignation, setFilterDesignation] = useState('');
  const [filterSkills, setFilterSkills] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterDesignation = (event) => {
    setFilterDesignation(event.target.value);
  };

  const handleFilterSkills = (event) => {
    setFilterSkills(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const lowercaseName = employee.name ? employee.name.toLowerCase() : '';
    const lowercaseDesignation = employee.designation ? employee.designation.toLowerCase() : '';
    const lowercaseSkills = employee.skills ? employee.skills.map((skill) => skill.toLowerCase()) : [];

    return (
      lowercaseName.includes(searchTerm.toLowerCase()) &&
      (filterDesignation === '' || lowercaseDesignation === filterDesignation.toLowerCase()) &&
      (filterSkills === '' || lowercaseSkills.includes(filterSkills.toLowerCase()))
    );
  });

  return (
    <div>
      <h2>Employee List</h2>
      <Link className="link" to="/projects">Projects</Link>
      <div className="search-bar"> 
        <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="filter-bar">
        <label htmlFor="designation-filter">Filter by Designation:</label>
        <select id="designation-filter" value={filterDesignation} onChange={handleFilterDesignation}>
          <option value="">All</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Project Manager">Project Manager</option>
        </select>
        <label htmlFor="skills-filter">Filter by Skills:</label>
        <select id="skills-filter" value={filterSkills} onChange={handleFilterSkills}>
          <option value="">All</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Manual Testing">Manual Testing</option>
          <option value="Java">Java</option>
          <option value="SQL">SQL</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
      </div>
      <div className="card-container">
        {filteredEmployees.map((employee) => (
          <div className="info-card" key={employee.id}>
            <h2>{employee.name}</h2>
            <p>ID: {employee.id}</p>
            <p>Designation: {employee.designation}</p>
            <p>Skills: {employee.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;

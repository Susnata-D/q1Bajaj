import React from "react";
import {employees} from "../../Data/Employees"
import "./EmployeeCard.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("");
  const [filterSkills, setFilterSkills] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterDesignation = (event) => {
    setFilterDesignation(event.target.value);
  };

  const handleFilterSkills = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setFilterSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== value)
      );
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const lowercaseName = employee.name ? employee.name.toLowerCase() : "";
    const lowercaseDesignation = employee.designation
      ? employee.designation.toLowerCase()
      : "";
    const lowercaseSkills = employee.skills
      ? employee.skills.map((skill) => skill.toLowerCase())
      : [];

    return (
      lowercaseName.includes(searchTerm.toLowerCase()) &&
      (filterDesignation === "" ||
        lowercaseDesignation === filterDesignation.toLowerCase()) &&
      (filterSkills.length === 0 ||
        filterSkills.some((skill) =>
          lowercaseSkills.includes(skill.toLowerCase())
        ))
    );
  });

  return (
    <div className="employee-details-container">
      <h2>Employee List</h2>
      <Link className="link" to="/projects">
        Projects
      </Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-bar">
        <label htmlFor="designation-filter">Filter by Designation:</label>
        <select
          id="designation-filter"
          value={filterDesignation}
          onChange={handleFilterDesignation}
        >
          <option value="">All</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Project Manager">Project Manager</option>
        </select>
        <label>Filter by Skills:</label>
        <div className="skills-checkboxes">
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              checked={filterSkills.includes("JavaScript")}
              onChange={handleFilterSkills}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              value="Manual Testing"
              checked={filterSkills.includes("Manual Testing")}
              onChange={handleFilterSkills}
            />
            Manual Testing
          </label>
          <label>
            <input
              type="checkbox"
              value="Java"
              checked={filterSkills.includes("Java")}
              onChange={handleFilterSkills}
            />
            Java
          </label>
          <label>
            <input
              type="checkbox"
              value="SQL"
              checked={filterSkills.includes("SQL")}
              onChange={handleFilterSkills}
            />
            SQL
          </label>
          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={filterSkills.includes("HTML")}
              onChange={handleFilterSkills}
              />
            HTML
          </label>
          <label>
            <input
              type="checkbox"
              value="CSS"
              checked={filterSkills.includes("CSS")}
              onChange={handleFilterSkills}
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              value="Python"
              checked={filterSkills.includes("Python")}
              onChange={handleFilterSkills}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              value="PhotoShop"
              checked={filterSkills.includes("PhotoShop")}
              onChange={handleFilterSkills}
            />
            PhotoShop
          </label>
        </div>
      </div>
      <div className="card-container">
        {filteredEmployees.map((employee) => (
          <div className="info-card" key={employee.id}>
            <h2>{employee.name}</h2>
            <p>ID: {employee.id}</p>
            <p>Designation: {employee.designation}</p>
            <p>Skills: {employee.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;



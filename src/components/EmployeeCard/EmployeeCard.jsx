import React from "react";
import {employees} from "../../Data/Employees"

const EmployeeDetails = () => {

  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div className="employee-container" key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Designation: {employee.designation}</p>
          <p>Skills: {employee.skills.join(', ')}</p>
          <p>Projects: {employee.projects.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDetails;
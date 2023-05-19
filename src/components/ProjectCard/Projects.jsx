import React from 'react';
import { employees } from '../../Data/Employees';
import "./Projects.css"

const ProjectTable = () => {

  return (
    <table className='project-table'>
      <thead>
        <tr>
          <th>Project</th>
          <th>Team Size</th>
          <th>Completed Tasks</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          const projects = employee.projects || [];
          const totalTeamSize = projects.reduce((sum, project) => {
            const team = project.team || [];
            return sum + team.length;
          }, 0);
          const totalCompletedTasks = projects.reduce((sum, project) => {
            const tasks = project.tasks || [];
            return sum + tasks.filter((task) => task.status === 'Completed').length;
          }, 0);

          return (
            <tr key={employee.id}>
              <td>{projects.length}</td>
              <td>{totalTeamSize}</td>
              <td>{totalCompletedTasks}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectTable;

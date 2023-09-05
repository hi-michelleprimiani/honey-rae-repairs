import { useEffect, useState } from "react";
import "./Employees.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, SetEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArray) => {
      SetEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeesObj) => {
        return (
          <Link to={`/employees/${employeesObj.id}`}>
            <User user={employeesObj} key={employeesObj.id} />
          </Link>
        );
      })}
    </div>
  );
};

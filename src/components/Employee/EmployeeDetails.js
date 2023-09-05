import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeService";
import { useState, useEffect } from "react";
import "./Employee.css";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employeeById, setEmployeeById] = useState(null);

  useEffect(() => {
    getEmployeeById(employeeId).then((employeeArray) => {
      setEmployeeById(employeeArray[0]);
    });
  }, [employeeId]);

  const ticketCount = employeeById ? employeeById.employeeTickets.length : 0;

  return (
    <>
      <div className="employee">
        <div className="employee-header">
          {employeeById && (
            <>
              {employeeById.user.fullName} <br />
            </>
          )}
        </div>
        <div className="employee-info">
          {employeeById && (
            <>
              Email: {employeeById.user.email} <br />
              Specialty: {employeeById.specialty} <br />
              Rate : {employeeById.rate}
            </>
          )}
        </div>
        <div className="employee-footer">
          {employeeById && <>Currently working on {ticketCount} tickets</>}
        </div>
      </div>
    </>
  );
};

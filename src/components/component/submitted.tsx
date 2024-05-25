import React, { useState, useEffect } from "react";
import { fetchSubmittedAssignments } from "../../services/courseService";
import { getUser } from "@/services/authService";

function SubmittedAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSubmittedAssignments() {
      const user = await getUser(localStorage.getItem("username"));

      try {
        const response = await fetchSubmittedAssignments(user.id);
        const data = await response.json();

        setAssignments(data);
      } catch (err) {
        setError(err.message);
      }
    }
    getSubmittedAssignments();
  }, []);

  return (
    <div>
      <h2 className="ml-6 text-lg font-semibold mb-4">Submitted Assignments</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="ml-6 bg-white rounded-md p-4 shadow-md"
          >
            <p className="text-gray-500">{assignment.content}</p>
            <h3
              className={`text-lg font-semibold ${getStatusColorClass(
                assignment.status
              )}`}
            >
              {assignment.status}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function getStatusColorClass(status: string): string {
  switch (status) {
    case "ACCEPTED":
      return "text-green-600";
    case "REJECTED":
      return "text-red-600";
    case "PENDING":
      return "text-yellow-600";
    default:
      return "";
  }
}

export default SubmittedAssignments;

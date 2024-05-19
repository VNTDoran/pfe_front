export async function fetchCourses() {
  const response = await fetch("http://localhost:8089/pfe/getAllTraining", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  console.log(response);

  return response.json();
}

export async function fetchCoursebyId(id) {
  const response = await fetch(`http://localhost:8089/pfe/getTraining/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  console.log(response);
  return response.json();
}

export async function insertCourse(courseData) {
  const response = await fetch("http://localhost:8089/pfe/generateCourse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(courseData),
  });
  if (!response.ok) {
    throw new Error("Failed to insert course");
  }
  return response.json();
}

export async function fetchQuizId(id) {
  const response = await fetch(
    `http://localhost:8089/pfe/getQuizs/idTraining/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  return response;
}

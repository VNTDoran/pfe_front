export async function fetchCourses() {
  const email = localStorage.getItem("username");
  const response = await fetch(
    `http://localhost:8089/pfe/getAllTraining/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
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
  const email = localStorage.getItem("username");
  console.log(courseData);
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

export async function fetchResults() {
  const email = localStorage.getItem("username");

  const response = await fetch(
    `http://localhost:8089/pfe/retrieveResults/${email}`,
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

export async function saveResultsDB(scoreData) {
  console.log(scoreData);
  const response = await fetch("http://localhost:8089/pfe/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreData),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  return response;
}

export const BACKEND_URL = "https://fullstackcoursework-backend.onrender.com";

// GET: all lessons
export async function getLessons() {
    try {
        const res = await fetch(`${BACKEND_URL}/lessons`);
        if (!res.ok) {
            throw new Error("Failed to fetch all lessons");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Backend API call error: ", error);
        return [];
    }
}

// PUT: update an available lesson spaces left after order is submitted
export async function updateLessonSpaces(lessonId, newSpaces) {
    try {
      const res = await fetch(`${BACKEND_URL}/lessons/${lessonId}`, {
        method : "PUT",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify({ newSpaces })
      });

      if (res.ok) {
        console.log("Lesson spaces successfully updated");
      } else {
        console.error("Error updating lesson spaces");
      }

    } catch (error) {
        console.error("Backend API call error: ", error);
    }
}

// POST: register user
export async function registerUser(username, email, phone, password) {

    const userData = {
        username,
        email,
        phone,
        password
    };

    try {
        const res = await fetch(`${BACKEND_URL}/register`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(userData)
        });

        const data = await res.json();

        if (res.ok) {
            alert("Registration successful");
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error("Error registering user: ", error);
        alert("Error registering user");
    }
}

// POST: login user
export async function loginUser(username, password) {
    try {
        const res = await fetch(`${BACKEND_URL}/login`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }
        return data;
    } catch (error) {
        console.error("Error: ", error);
        alert("Login Error");
        return;
    }
}

// POST: save a new order
export async function saveOrder(userName, userPhone, lessonIds, lessonSpaces) {
    const orderData = {
        userName,
        userPhone,
        lessonIds,
        lessonSpaces
    };

    try {

        const res = await fetch(`${BACKEND_URL}/orders`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(orderData)
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message)
            return false;
        }

        return true;

    } catch (error) {
        console.error("Error: ", error);
        alert("Order error");
        return false;
    }
}

// POST: Create a new Lesson
export async function createLesson(lessonData) {
    try {

        const res = await fetch(`${BACKEND_URL}/lessons`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lessonData)
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return null;
        }

        return data;

    } catch (error) {
        console.error("Error creating lesson:", error);
        alert("Error creating lesson");
        return null;
  }
}

// DELETE: delete a lesson
export async function deleteLesson(id) {
  const res = await fetch(`${BACKEND_URL}/lessons/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error deleting lesson");
  }

  return res.json();
}

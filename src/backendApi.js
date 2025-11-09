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
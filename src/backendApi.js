export const BACKEND_URL = "https://benjaminzadorian.github.io/FullStackCourseWork-Frontend/";

// api fetch to get all lessons
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
import { reactive } from "vue";
import { getLessons, createLesson, updateLessonSpaces, deleteLesson, saveOrder } from "./backendApi.js";

// export the reactive object of the cart object and cart functions so that they are global
export const store = reactive({
    stock: await getLessons(),

    async refreshStock() {
        this.stock = await getLessons();
    },

    async createLesson(lessonData) {
        await createLesson(lessonData);
        await this.refreshStock();
    },

    async updateLessonSpaces(lessonId, newSpaces) {
        await updateLessonSpaces(lessonId, newSpaces);
        await this.refreshStock();
    },
    
    async deleteLesson(lessonId) {
        await deleteLesson(lessonId);
        await this.refreshStock();
    },

    async saveOrder(fullName, phoneNumber, lessonIds, lessonSpaces) {
        await saveOrder(fullName, phoneNumber, lessonIds, lessonSpaces);
        await this.refreshStock();
    }

});
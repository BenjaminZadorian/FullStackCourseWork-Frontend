import { reactive } from "vue";
import { getLessons } from "./backendApi.js";

// export the reactive object of the cart object and cart functions so that they are global
export const store = reactive({
    stock: await getLessons()
});
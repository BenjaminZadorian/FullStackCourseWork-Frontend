import { reactive } from "vue";
import { orderHistory } from "./backendApi";

// export the reactive object of the cart object and cart functions so that they are global
export const user = reactive({
    cart: [],
    orders: [],
    // user object that holds relevant data
    user: {
        isLoggedIn: false,
        _id: '',
        username: '',
        email: '',
        phone : ''
    },

    async login(_id, name, email, phone) {
        this.user.isLoggedIn = true;
        this.user._id = _id;
        this.user.username = name;
        this.user.email = email;
        this.user.phone = phone;

        await this.loadOrderHistory();
    },

    logout() {
        this.user.isLoggedIn = false;
        this.user.username = '';
    },

    // Check if an item exists then add it to the cart if it doesn't
    addToCart(item) {
        const itemExists = this.cart.find((x) => x._id === item._id);
        if (!itemExists) {
            this.cart.push(item);
        }
    },
    
    // ---- Cart Functions ----

    // remove an item from the cart based off its id
    removeFromCart(id) {
        this.cart = this.cart.filter((x) => x._id !== id)
    },

    // check if an object already exists in the cart
    existsInCart(id) {
        return this.cart.some((x) => x._id === id)
    },

    // get the size of the cart
    get cartCount(){
        return this.cart.length;
    },

    get allCartItems() {
        return this.cart;
    },

    // remove all objects inside the cart
    clearCart(){
        this.cart = [];
    },

    async loadOrderHistory() {
        if (!this.user._id) {
            console.log("No user ID found, will not load order history");
            return;
        }
        const history = await orderHistory(this.user._id);
        this.orders = history;
    }
});
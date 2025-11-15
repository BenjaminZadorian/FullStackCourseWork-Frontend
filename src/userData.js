import { reactive } from "vue";

// export the reactive object of the cart object and cart functions so that they are global
export const user = reactive({
    cart: [],
    orders: [],
    // user object that holds relevant data
    user: {
        isLoggedIn: true,
        username: 'Test',
        email: '',
        password: '',
        phone : ''
    },

    login(name, password, email, phone) {
        this.user.isLoggedIn = true;
        this.user.username = name;
        this.user.password = password;
        this.user.email = email;
        this.user.phone = phone;
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
    }

    // ---- Order Functions ----

});
import { reactive } from "vue";

// export the reactive object of the cart object and cart functions so that they are global
export const store = reactive({
    cart: [],
    user: {
        isLoggedIn: false,
        name: ''
    },

    login(name) {
        this.user.isLoggedIn = true;
        this.user.name = name;
    },

    logout() {
        this.user.isLoggedIn = false;
        this.user.name = '';
    },

    // Check if an item exists then add it to the cart if ti doesn't
    addToCart(item) {
        const itemExists = this.cart.find((x) => x.id === item.id);
        if (!itemExists) {
            this.cart.push(item);
        }
    },

    // remove an item from the cart based off its id
    removeFromCart(id) {
        this.cart = this.cart.filter((x) => x.id !== id)
    },

    // check if an object already exists in the cart
    existsInCart(id) {
        return this.cart.some((x) => x.id === id)
    },

    // get the size of the cart
    get cartCount(){
        return this.cart.length;
    },

    get allItems() {
        return this.cart;
    },

    // remove all objects inside the cart
    clearCart(){
        this.cart = [];
    }

});
const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",
            products: [
                {
                    thumb: "./assets/p1.jpg",
                    name: "Sản phẩm A",
                    price: "120",
                    isCart: false,
                },
                {
                    thumb: "./assets/p2.jpg",
                    name: "Sản phẩm B",
                    price: "150",
                    isCart: false,
                },
                {
                    thumb: "./assets/p3.jpg",
                    name: "Sản phẩm C",
                    price: "200",
                    isCart: true,
                }
            ],

        };
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart
        }
    },
    computed: {
        productsComputed() {
            return this.products.filter(product => product.price < 160)
        }
    }
});

app.mount("#contact");

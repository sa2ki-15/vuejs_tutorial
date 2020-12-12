let app = new Vue({
    el: "#app",
    data: {
        message: "HelloWorld!",
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
        },
    },
});

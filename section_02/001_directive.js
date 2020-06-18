var app = new Vue({
    el: "#app",
    data: {
        message: "HelloWorld!",
        number: 3,
        ok: false,

        html: "<h1>H1タグです</h1>",
        url: "https://google.com",
        attrubute: "href",

        urlTwitter: "https://twitter.com",
        twitterObject: {
            href: "https://twitter.com",
            id: 1,
        },
    },

    methods: {
        sayHi: function () {
            this.message = "Hello VueJS";
            return this.message;
        },
    },
});

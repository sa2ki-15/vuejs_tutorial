var app = new Vue({
    el: "#app",
    data: {
        isActive: true,
        color: "red",
        bg: "bg-blue",
        textColor: "red",
        bgColor: "blue",
        styleObject: {
            color: "red",
            "background-color": "blue",
        },
        baseStyles: {
            fontSize: "60px",
        },
    },
    computed: {
        classObject: function () {
            return {
                red: this.isActive,
                "bg-blue": !this.isActive,
            };
        },
    },
    // methods: {},
});

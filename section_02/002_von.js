var app = new Vue({
    el: "#app",
    data: {
        count: 0,
        event: "click",
        x: 0,
        y: 0,
    },

    methods: {
        countUp: function (times) {
            this.count += 1 * times;
        },
        changeMousePosition: function (event, divideNumber) {
            console.log(event);
            this.x = event.clientX / divideNumber;
            this.y = event.clientY / divideNumber;
        },
        myAlert: function () {
            alert("アラート");
        },
    },
});

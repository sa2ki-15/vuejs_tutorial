let app = new Vue({
    el: '#app',
    data: {
        current: new Date().toLocaleString(),
        path: 'https://www.web-deli.com/image/logo.gif',
        errorPath: './image/logo.gif',
        mouseResult: ''
    },
    methods: {
        onClick: function () {
            this.current = new Date().toLocaleString();
        },
        onMouseEnter:function () {
            this.path = 'https://www.web-deli.com/image/home_chara.gif'
        },
        onMouseLeave:function () {
            this.path = 'https://www.web-deli.com/image/logo.gif'
        },
        onError: function () {
            this.errorPath = 'https://wings.msn.to/image/wings.jpg'
        },
        onMouseIn:function (e) {
            this.mouseResult += 'Enter: ' + e.target.id + '<br />'
        },
        onMouseOut:function (e) {
            this.mouseResult += 'Leave: ' + e.target.id + '<br />'
        }
    }
});

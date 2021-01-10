let app = new Vue({
    el: '#app',
    data: {
        name: '匿名',
        show: false,
        pos: {
            top: 0,
            left: 0,
            position:'fixed'
        }
    },
    methods: {
        onParentClick: function () {
            console.log('#Parent tun ...');
        },
        onCurrentClick: function () {
            console.log('#Current tun ...');
        },
        onChildClick: function () {
            console.log('#Child tun ...');
        },
        help: function () {
            window.alert('氏名を入力してください');
        },
        onRightClick: function(e) {
            this.pos.top = e.pageY + 'px'
            this.pos.left = e.pageX + 'px'
            this.show = true;
        },
        onLeftClick: function() {
            this.show = false;
        }
    }
});

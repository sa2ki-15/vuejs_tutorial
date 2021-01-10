let app = new Vue({
    el: '#app',
    data: {
        result: 0

    },
    methods: {
        onSubmit: function (e) {
            if (!confirm('送信してもいいですか？')) {
                e.preventDefault();
            }
        },
        onClick: function () {
            this.result = Math.floor(Math.random() * 100);
        }
    }
});

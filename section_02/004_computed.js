var app = new Vue({
    el: "#app",
    data: {
        counter: 0,
        otherCounter: 0,
    },
    computed: {
        // computedで定義すると定義されたプロパティが変わったときのみ発火する
        lessThanThreeComputed: function () {
            console.log("Computed");
            return this.counter > 3 ? "3より上です" : "3以下です";
        },
    },
    methods: {
        // methodsに定義された関数を{{}}で実行すると関係ないイベントでも毎回発火してしまう
        lessThanThreeMethod: function () {
            console.log("Method");
            return this.counter > 3 ? "3より上です" : "3以下です";
        },
    },
    watch: {
        // computedでは扱えないプロパティ変化の検知などに使う。
        // 例えばプロパティを画面に表示しない場合、非同期処理など。
        counter: function () {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 3000);
        },
    },
});

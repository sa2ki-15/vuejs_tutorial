let app = new Vue({
    el: '#app',
    data: {
        current: new Date(),
        author: {
            name: 'test'
        },
        name: '',
        upperName: ''
    },
    created:function () {
        // リアクティブシステムでcurrentに変更があると自動でテンプレートに反映する
        let that = this;
        this.timer = setInterval(function () {
            that.current = new Date();
        }, 1000)

        /*
         * オブジェクトにあとからプロパティを追加しても検知できない
         * リアクティブにするにはVue.set()を使用する
         * 複数のプロパティがあるときはObject.assignで空オブジェクトにマージすることで、
         * プロパティ自体が新しいインスタンスに変更されるため検知される
         */
        setTimeout(function () {
            that.author.name = 'test2';
            // that.author.company = 'google';
            Vue.set(that.author, 'company', 'google')
            that.author = Object.assign(
                {}, that.author, {sex: 'male', age: 20});
        }, 3000)

        this.delayFunc = _.debounce(this.getUpper, 2000)
    },
    mounted: function(){
        let that = this
        Vue.set(this.author, 'job', 'programmer');

        // ビューへの反映は非同期のため、DOMを参照するには
        // ビューの更新後に実行される$nextTick()を使用する
        this.$nextTick().then(function (){
            console.log(that.$el.textContent.includes(that.author.job))
        });
    },
    beforeDestroy: function () {
        clearInterval(this.timer)
    },
    methods: {
        getUpper: function () {
            this.upperName = this.name.toUpperCase();
        }
    },
    watch: {
        // 特定のプロパティの変更を監視して任意の処理を実行する
        name: function (newValue, oldValue) {
            this.delayFunc();
        },
        // watchにオプションを指定する場合
        // name: {
        //     handler: function (newValue, oldValue) {
        //     this.delayFunc();
        //     },
        //     deep: true,
        //     immedimate: true
        // },
        // 入れ子のオブジェクトはプロパティを''で囲う必要がある
        'author.name': function (newValue, oldValue) {
            console.log(oldValue + ' -> ' + newValue)
        }
    }
});

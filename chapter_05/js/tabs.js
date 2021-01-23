// 動的に切り替えるコンポーネント
let tabMember = {
    template: `
    <div class="banner">
        <h3>メンバー</h3>
        <p>メンバー募集中！！</p>
        <label for="name">名前：</label>
        <input type="text" id="name" v-model="name">
        <input type="submit" value="登録">
    </div>`,
}

let tabNews = {
    template: `
    <div class="banner">
        <h3>ニュース</h3>
        <p>今日のニュース</p>
    </div>`,
}

let tabTest = {
    template: `
    <div class="banner">
        <h3>テスト</h3>
        <p>テスト内容</p>
    </div>`,
}

new Vue({
    el: '#app',
    data: {
        current: 'member',
        tabs: {
            'member': 'メンバー募集',
            'news': 'ニュース',
            'test': 'テスト'
        }
    },
    components:{
        'tab-member': tabMember,
        'tab-news': tabNews,
        'tab-test': tabTest,
    },
    methods: {
        onTabClick: function (tab) {
            this.current = tab;
        }
    },
    computed: {
        tabNames: function () {
            return Object.keys(this.tabs)
        },
        currentTab: function () {
            return 'tab-' + this.current
        }
    }
});

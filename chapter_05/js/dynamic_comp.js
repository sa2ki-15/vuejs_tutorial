// 動的に切り替えるコンポーネント
let bannerMember = {
    template: `
    <div class="banner">
        <h3>メンバー</h3>
        <p>メンバー募集中！！</p>
    </div>`,
}

let bannerNews = {
    template: `
    <div class="banner">
        <h3>ニュース</h3>
        <p>今日のニュース</p>
    </div>`,
}

let bannerTest = {
    template: `
    <div class="banner">
        <h3>テスト</h3>
        <p>テスト内容</p>
    </div>`,
}

new Vue({
    el: '#app',
    data: {
        current: 0,
        bannerComponents: ['member', 'news', 'test']
    },
    components:{
        'banner-member': bannerMember,
        'banner-news': bannerNews,
        'banner-test': bannerTest,
    },
    created: function () {
        let that = this;
        this.interval = setInterval(function () {
            that.current = (that.current + 1) % that.bannerComponents.length;
        }, 1000)
    },
    destroyed: function () {
        clearInterval(this.interval)
    },
    computed: {
        currentBanner: function f() {
            return 'banner-' + this.bannerComponents[this.current]
        }
    }
});

// $parent, $refsによる親子間コンポーネントの通信は
// 基本的に行わない。props, $emitを使用する
// コンポーネント構造が複雑になると可読性が落ちるため。
let MyChild = {
    template: `<p>子コンポーネント：{{message}}</p>`,
    data: function () {
        return {
            message: ''
        };
    },
    mounted: function() {
        this.$parent.message = '子から設定';
    }
}

new Vue({
    el: '#app',
    components:{
        'my-child': MyChild,
    },
    data: {
        message: ''
    },
    mounted:function() {
        this.$refs.child.message = '親から設定';
    }
});

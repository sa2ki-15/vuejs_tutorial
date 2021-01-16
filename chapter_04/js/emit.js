let MyCounter = {
    template: `
    <button type="button" @click="onCountUp">
        {{step}}
    </button>
    `,
    props: {
        step: 0,
    },
    methods: {
        onCountUp: function () {
            // 親コンポーネントに$emitでイベントを通知
            this.$emit('plus', this.step);
        }
    }
}

new Vue({
    el: '#app',
    components:{
        'my-counter': MyCounter,
    },
    data: {
        current: 0
    },
    methods: {
        onPlus: function (e) {
            //$emitで子コンポーネントのイベントとデータを受け取る
            this.current += e;
        },
        onClick: function () {
            this.current += 100;
        }
    }
});

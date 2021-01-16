let LocalMyHello = {
    // 文字列配列でpropsを指定
    // props: ['yourName', 'yourAge'],

    // オブジェクトでpropsを指定
    // props: {
    //     yourName: '',
    //     yourAge: 0,
    // },

    // プロパティの型を制限することも可能
    props: {
        yourName: {
            type: String,
            required: true,
            default: '',
            validator: function (value) {
                return value.length <= 5;
            }
        },
        yourAge: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    template: `
        <div>
            <div>こんにちは、{{ yourName }} ! </div>
            <div>あなたの年齢は、{{ yourAge }} です。</div>
        </div>
    `,
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
}

let MyCounter = {
    props: ['init'],
    template: `
        <div>
            <div>現在の値は {{ current }} です </div>
            <div>現在の値は {{ current2 }} です </div>
            <input type="button" @click="onClickCount" value="+1"> 
        </div>
    `,
    data: function () {
        return {
            // propsで親コンポーネントから渡された値は基本変更しない
            // 変更した場合は別のプロパティに移す
            current: this.init,
        };
    },
    computed: {
        current2: function () {
            return this.current * 2;
        }
    },
    methods: {
        onClickCount: function () {
            this.current++;
        }
    }
}

new Vue({
    el: '#app',
    components:{
        'local-my-hello': LocalMyHello,
        'my-counter': MyCounter,
    }
});

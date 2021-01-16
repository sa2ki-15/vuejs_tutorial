/**
 * グローバル登録
 * templateは単一のルート要素を持つ必要がある
  */
Vue.component('global-my-hello', {
    template: `<div>(グローバル登録)こんにちは、{{ name }} ! </div>`,
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
});

/**
 * ローカル登録用コンポーネント
 */
let LocalMyHello = {
    template: `<div>(ローカル登録1)こんにちは、{{ name }} ! </div>`,
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
}

new Vue({
    el: '#app',
    // ローカル登録
    components:{
        // オブジェクトを別で定義してvalueに設定
        'local-my-hello': LocalMyHello,
        // valueに直接コンポーネントを定義することも可能
        'local-my-hello2': {
            template: `<div>(ローカル登録2)こんにちは、{{ name }} ! </div>`,
            data: function () {
                return {
                    name: 'Vue.js'
                };
            }
        }
    }
});

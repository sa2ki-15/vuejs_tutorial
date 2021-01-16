let LocalMyHello = {
    template: `<div>こんにちは、<slot>ゲスト</slot> さん！ </div>`,
}

// 複数slotを使うには v-slot の name属性で区別する
// name属性がないslot要素は規定で「name="default"」とみなされ1つにまとめられる
let MySlot = {
    template: `
    <div>
        <header>
            <slot name="header">デフォルトヘッダ</slot>
        </header>
        <div>
            <slot>デフォルトメイン</slot>
        </div>
        <footer>
            <slot name="footer">デフォルトフッタ</slot>
        </footer>
    </div>`,
}

// 子コンポーネントのデータを参照するにはスロットプロパティを使用する
let MyBook = {
    data: function () {
        return {
            book: {
                title: 'Vue.js入門',
                price: 2000,
                publish: '出版社'
            }
        }
    },
    // v-bindで親コンポーネントに公開するdataをバインドする
    template: `
    <div>
        <slot :book="book">{{book.title}} : {{book.publish}}</slot>
    </div>`
}

new Vue({
    el: '#app',
    components:{
        'local-my-hello': LocalMyHello,
        'my-slot': MySlot,
        'my-book': MyBook,
    }
});

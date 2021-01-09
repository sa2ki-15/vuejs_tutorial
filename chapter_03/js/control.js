let app = new Vue({
    el: '#app',
    data: {
        show: false,
        show2: false,
        holiday: '',
        pay: '',
        books: [
            {
                isbn: '1234-5678',
                title: 'Vue.jsの本',
                price: 2500,
            },
            {
                isbn: '4321-8765',
                title: 'React.jsの本',
                price: 3000,
            },
        ],
        songs: [
            {
                title: '天体観測',
                lyrics: '見えないものを見ようとして～',
                composer: 'BUMP OF CHICKEN'
            }
        ]
    },
    computed: {
        expensiveBooks:function(){
            return this.books.filter(function(b){
                return b.price >= 2800;
            })
        }
    }
});

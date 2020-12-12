let app = new Vue({
    el: '#app',
    data: {
        email: 'test@example.com',
        currentDate: new Date().toLocaleString()
    },
    computed: {
        localEmail: function(){
            return this.email.split('@')[0];
        },
        randomc: function (){
            return Math.random();
        }
    },
    methods: {
        localEmailMethod: function (){
            return this.email.split('@')[0];
        },
        randomm: function (){
            return Math.random();
        },
        onClick: function () {
            this.currentDate = new Date().toLocaleString();
        }

    }
});

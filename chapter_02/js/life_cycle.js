let app = new Vue({
    el: '#app',
    data: {
        date: new Date().toLocaleString()
    },
    methods: {
        onClick: function () {
            this.date = new Date().toLocaleString()
        }
    },
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});

setTimeout(function () {
    app.$destroy();
}, 5000);

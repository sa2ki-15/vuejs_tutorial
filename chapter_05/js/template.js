let LocalMyHello = {
    template: `<div>こんにちは、{{ name }} ! </div>`,
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
}

new Vue({
    el: '#app',
    components:{
        'local-my-hello': LocalMyHello,
    }
});

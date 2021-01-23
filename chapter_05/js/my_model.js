let myInput = {
    // v-modelでバインドされたvalueをpropsせ受け取る
    // v-model="message" == v-bind:value="message" v-on:input="message = $event.target.value"
    props: ['value'],
    template: `
    <div>
        <label for="name">名前：</label>
        <input type="text" id="name" :value="value" @input="$emit('input', $event.target.value)">
    </div>`,
}

let myInput2 = {
    // computedを使う方法
    props: ['value'],
    template: `
    <div>
        <label for="name">名前：</label>
        <input type="text" id="name" v-model="internalValue">
    </div>`,
    computed: {
        internalValue: {
            get() {
                return this.value
            },
            set(newValue) {
                if (this.value !== newValue) {
                    this.$emit('input', newValue)
                }
            }
        }
    }
}

new Vue({
    el: '#app',
    data: {
        message: '',
        message2: '',
    },
    components:{
        'my-input': myInput,
        'my-input2': myInput2,
    }
});

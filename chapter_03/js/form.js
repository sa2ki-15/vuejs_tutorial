let app = new Vue({
    el: '#app',
    data: {
        myName: '匿名',
        date: new Date().toLocaleDateString(),
        range: 0,
        color: '#000000',
        pet: 'うさぎ',
        agree: false,
        agree2: false,
        os: [],
        os2: '',
        os3: [],
        uploadMessage: '',
        temperature: 0,
        memo: '',
        mails: []
    },
    methods: {
        onChange: function () {
            let that = this;
            let file = this.$refs.uploadfile.files[0];
            let data = new FormData();
            data.append('uploadfile', file, file.name);

            // サーバプログラムはないので動作しない
            fetch('upload.php',{
                method: 'POST',
                body: data
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                that.uploadMessage = text;
            }).catch(function (error) {
                window.alert('Error' + error.message)
            })
        },
        onChangeRound: function () {
            this.temperature = this.temperature.toFixed(1)
        },
        onChangeTrim: function () {
            console.log('入力値は[' + this.memo + ']です')
        }
    }
});

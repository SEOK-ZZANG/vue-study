var appp = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        extraData: 'GO GO GO ~ !',
        uid: '10',
        flag: true
    },
    methods: {
        clickBtn() {
            console.log('hi')
        },
        eventMethod() {
            alert('Clicked Event Button !!')
        }
    }
})
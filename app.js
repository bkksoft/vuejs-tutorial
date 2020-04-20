new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        name: 'Chong',
        job: 'Dev',
        website: 'https://bkksoft.me'
    },
    methods: {
        getName: function(){
            return this.name;
        },
        setName: function( txt ){
            return this.name = txt;
        }
    }
})
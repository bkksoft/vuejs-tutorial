new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        name: 'Chong',
        job: 'Dev',
        age: 20,
        website: 'https://bkksoft.me',

        like: false,
    },
    methods: {
        getName: function(){
            return this.name;
        },
        setName: function( txt ){
            return this.name = txt;
        },
        addAge: function () {
            this.age++;
        },
        subtractAge: function(){
            this.age--;
        }
    }
})
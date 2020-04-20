Vue.component('Chong', {
    data: function(){
        return {
            count: 0
        }
    },

    template: '<button type="button" @click="count++">Count: {{count}}</button>'
});

Vue.component('post', {
    
    props: ['title'],
    template: '<div>New Post: {{title}}</div>'
});


Vue.component('showview', {
    
    props: {
        title: {
            type: String,
            required: true
        },
        view: {
            type: Number,
            default: 0
        }
    },
    template: '<div>{{title}} | view: {{ view }}</div>'
});

Vue.component('showComment', {
    
    props: ['commentpost'],
    template: '<li>{{commentpost}}</li>'
});

new Vue({
    el: '#app',

    data: {
        newComment: '',
        comments: ['สวัสดีตอนเช้า', 'สวัสดีตอนบ่าย', 'สวัสดีตอนค่ำ']
    },

    methods: {
        addComment: function(){
            this.comments.push( this.newComment );
            this.newComment = ''
        }
    }
});
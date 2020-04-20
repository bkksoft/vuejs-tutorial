var Post = new Vue({
    el: '#post',
    data: {
        title: '',
        message: ''
    }
})


var Comment = new Vue({
    el: '#comment',
    data: {
        text: ''
    }
})

var Like = new Vue({
    el: '#like',
    data: {
        status: false
    },
    methods: {
        changeLike: function(){
            this.status = !this.status;
        }
    }
})
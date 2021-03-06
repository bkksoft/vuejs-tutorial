Vue.component('mainMenu', {
    
    data: function(){
        return {
            inavs: [
                { title: 'Getting Started', link: 'index.html' },
                { title: 'Basic', link: 'basic.html' },
                { title: 'Multiple Vue', link: 'multiple-vue.html' },
                { title: 'Component', link: 'component.html' },
                { title: 'Slot', link: 'slot.html' },
            ]
        }
    },
    props: ['curent'],

    template: '<nav><a v-for="nav in navs" v-bind:href="nav.link">{{ nav.title }}</a></nav>'
});
new Vue({
    el: '#app',
    data: {
        message: {
            show: false,
            text: '',
        },
        postData: {
            name: '',
            salary: 0
        },
        employees: [
            {
                name: 'คำแก้ว',
                salary: 14000,
            },
            {
                name: 'ขาม',
                salary: 15000
            }
        ]
    },
    methods: {
        addEmp: function(){
            this.employees.push({
                name: this.postData.name,
                salary: this.postData.salary,
            });

            this.postData.name = '';
            this.postData.salary = 0;
        },
        showMessage: function (){

            console.log( 'saved..' );

            // this.message.text = 'Saved.';
            // message.show = true;

            // setTimeout( function(){
            //     message.show = false
            // }, 13000 );
        }
    },
    computed: {
        sumation : function(){
            let sum = this.employees.reduce((value, data)=>{
                return value + Number(data.salary)
            }, 0)

            return sum;
        },
        avg: function (){
            let sum = this.employees.reduce((value, data)=>{
                return value + Number(data.salary)
            }, 0)

            return sum/this.employees.length
        }
    },
    watch: {
        sumation: function(){
            this.showMessage();
        }
    }
})
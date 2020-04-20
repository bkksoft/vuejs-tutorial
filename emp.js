new Vue({
    el: '#app',
    data: {
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
        }
    }
})
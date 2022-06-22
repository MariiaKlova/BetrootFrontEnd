const TodoItem = {
    name: 'TodoItem', //
    props: ['item', 'index'],
    methods: {
        markDone(ind){
            this.$parent.markDone(ind)
        }
    },
    template: '#todo_item'
}

const App = {
    data() {
        return {
            todoList: [{
                    text: 'Buy a milk',
                    isDone: true,
                },
                {
                    text: 'Wash the car',
                    isDone: false,
                },
                {
                    text: 'Learn Vue.JS',
                    isDone: false
                }
            ],
            taskTest: ''
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addTodo() {
            if (this.taskText !== '') {
                this.todoList.push({
                    text: this.taskText,
                    isDone: false,
                });
                this.taskText == '';
            }
        },
        markDone(ind) {
            this.todoList[ind].isDone = true;
        }
    }
}

Vue.createApp(App).mount('#app')
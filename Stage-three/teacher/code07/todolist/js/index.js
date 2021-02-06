new Vue({
    el: '#app',
    data: {
        tabbars: [{
            id: 1,
            text: 'A', // 表示全部任务
            className: 'primary'
        },{
            id: 2,
            text: 'F', // 表示已完成任务
            className: 'success'
        },{
            id: 3,
            text: 'U', // 表示未完成任务
            className: 'danger'
        }],
        todos: [{
            id: 1,
            task: '任务一',
            flag: false 
        }],
        type: 'A',
        maskFlag: false,
        markType: 'add',
        val: '',
        activeId: 0
    },
    methods: {

        sortTodos (arr) {
            return arr.sort((a,b) => {
                return b.id - a.id
            })
        },

        add () {
            this.todos.push({
                id: this.sortTodos(this.todos)[0].id + 1,
                task: this.val,
                flag: false 
            })
        },
        modify () {
            this.todos.forEach(v => {
                if (v.id === this.activeId) {
                    v.task = this.val 
                }
            })
        },
        remove (id) {
            this.todos = this.todos.filter(v => v.id!=id)
        },

        confirm () {
            if (this.markType === 'modify') {
                // 走的就是修改
                this.modify()
            } else {
                // 走的就是添加
                this.add()
            }
            this.closeMaskFlag()
            this.val = ''
        },

        openMaskFlag (e,task,id) {
            if (e.target.dataset.type === 'add') {
                this.markType = 'add'
                this.val = ''
            } else {
                this.markType = 'modify'
                this.val = task
                this.activeId = id 
            }
            this.maskFlag = true 
        },
        closeMaskFlag () {
            this.maskFlag = false 
        },
        changeFlag (id) {
            this.todos.forEach(v => {
                if (v.id === id) {
                    v.flag = !v.flag
                }
            });
        },
        changeType (text) {
            this.type = text 
        }
    },
    computed: {
        newTodos () {
            switch (this.type) {
                case 'A':
                    return this.sortTodos(this.todos)
                    break;
                case 'F':
                    return this.sortTodos(this.todos.filter(v => v.flag))
                    break;
                case 'U':
                    return this.sortTodos(this.todos.filter(v => !v.flag))
                    break;
                default:
                    return this.sortTodos(this.todos)
                    break;
            }
        }
    }
})
let app = new Vue({
    el: "#app",
    data: {
        maskFlag: false,
        confirmStr: '',
        // confirmType: '',
        circles: [{
            type: "A",
            className: "all",
            text: "全部"
        }, {
            type: "U",
            className: "undo",
            text: "未完成"
        }, {
            type: "S",
            className: "success",
            text: "已完成"
        }, ],
        todos: [{
            id: 1,
            text: "任务一",
            confirmType: "modify"
        }, {
            id: 2,
            text: "任务二",
            confirmType: "modify"
        }, {
            id: 3,
            text: "任务三",
            confirmType: "modify"
        }, {
            id: 4,
            text: "任务四",
            confirmType: "modify"
        }, ]
    },
    methods: {
        openMaskFlag() {
            this.maskFlag = true;
        },
        closeMaskFlag() {
            this.maskFlag = false;
        },
        confirmMaskFlag(type) {
            if (type != "add") {
                let newObj = { id: (this.todos[this.todos.length - 1].id + 1), text: this.confirmStr, confirmType: "modify" };
                this.todos.push(newObj);
            }
            this.confirmStr = '';
            this.closeMaskFlag();
        },
        editTask(id) {
            this.confirmType = "modify";
            this.openMaskFlag();
            this.todos.forEach(elm => {
                if (elm.id === id) {
                    this.confirmStr = elm.text;
                }
            })
        }
    },
    computed: {

    },
    watch: {

    }
})
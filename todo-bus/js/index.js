const bus = new Vue();

Vue.component("HeadTop",{
    template: "#headTop",
    methods:{
        open(){
            bus.$emit("openModal",{undefined,undefined})
        }
    }
    
})
Vue.component("MainCont",{
    template: "#mainCont",
    data(){
        return{
            tasks:[
                {
                    id:1,
                    text:"任务一",
                    finish:false
                },{
                    id:2,
                    text:"任务二",
                    finish:false
                }
            ],
            tabName:""
        }
    },
    methods:{
        sortArr(arr){
            return arr.sort((a,b)=>b.id-a.id);
        },
        changeType(id){
            this.tasks.map(v=>{
                if(v.id==id){
                    v.finish = !v.finish
                }
            })
        },
        remove(id){
            this.tasks = this.tasks.filter(v=>v.id!=id);
        },
        update(id){
            let text="";
            this.tasks.forEach(v=>{
                if(v.id==id){
                    text = v.text
                }
            })
            bus.$emit("openModal",{id,text})
        }
    },
    computed:{
        newTasks(){
            bus.$on("changeName", (name)=>this.tabName=name);
            switch(this.tabName ){
                case 'A': return this.sortArr(this.tasks); 
                case 'F': return this.sortArr(this.tasks.filter(v=>v.finish));  
                case 'U': return this.sortArr(this.tasks.filter(v=>!v.finish)); 
                default : return this.sortArr(this.tasks); 
            }
        }
    },
    mounted(){
        bus.$on("addTask",(val)=>{
            const taskId = this.tasks.length?this.sortArr(this.tasks)[0].id+1:1;
            this.tasks.unshift({
                id:taskId,
                text: val,
                finish:false
            })
        });
        bus.$on("updateTask",({id,todo})=>{
            this.tasks.map(e=>{
                if(e.id==id){
                    e.text = todo;
                }
            })
        });
    }
})
Vue.component("FootBottom",{
    template: "#footBottom",
    data(){
        return{
            tabbars:[
                {
                    id:1,
                    name:"A",
                    className:"primary"
                },
                {
                    id:2,
                    name:"F",
                    className:"success"
                },{
                    id:3,
                    name:"U",
                    className:"danger"
                }
            ],
            tabOn:'A'
        }
    },
    methods:{
        changeType(name){
            this.tabOn = name;
            bus.$emit("changeName", name);
        }
    },
   
})
Vue.component("Modal",{
    template: "#modal",
    data(){
        return {
            modalFlag: false,
            todo:"",
            comfirmId:undefined
        }
    },
    methods:{
        closeModal(){
            this.modalFlag = false
        },
        comfirm(){
            if(this.comfirmId){
                bus.$emit('updateTask',{
                    id: this.comfirmId,
                    todo: this.todo
                })
            }else{
                bus.$emit('addTask',this.todo);
            }
            this.closeModal();
        },
    },
    mounted(){
        bus.$on("openModal",({id,text})=>{
            this.modalFlag = true;
            if(id){
                this.todo = text;
                this.comfirmId = id
            }else{
                this.todo = "";
                this.comfirmId = undefined
            }
        });
    }

})

new Vue({
    el:"#app"
})
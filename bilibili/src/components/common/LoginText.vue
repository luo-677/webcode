<template>
    <div>
        <van-field v-model="content" :label="label" :type="type" :placeholder="placeholder" />
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
        },
        type: {
            type: String,
            // input 标签本身默认text
            // default(){
            //     return "text";
            // }
        },
        placeholder: {
            type: String,
        },
        rule: {
            // 正则缺少依赖
            type: RegExp,
        }
    },
    data() {
        return {
            content: '',
        }
    },
    methods: {
        dataChange(){
            // let realReg = new RegExp(this.rule);
            // hotdog_es
            // mou23456
            if(this.rule.test(this.content)){
                console.log("格式校验通过");
                this.$emit('inputChange',this.content)
            }
        }
    },
    // 使用watch自动监听data中的属性变化
    watch: {
        content(){
          this.dataChange();  
        }
    }
}
</script>
<style lang="scss">
    
</style>
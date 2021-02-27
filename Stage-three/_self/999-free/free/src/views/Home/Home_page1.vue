<template>
    <div>
        home_page1
        <ul>
            <li v-for="data in list" :key="data" @click="changePage(data)">{{data}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Home-page1",
    data(){
        return {
            list: ['111','222','333'],
        }
    },
    methods: {
        changePage(data){
            console.log(data);
            this.$router.push(`/detail1/${data}`)
        }
    },
}
</script>
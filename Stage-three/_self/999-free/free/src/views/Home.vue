<template>
    <div>
        home
        <router-link to="/home/home_page1" tag="p">home_page1</router-link>
        <router-link to="/home/home_page2" tag="p">home_page2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
}
</script>
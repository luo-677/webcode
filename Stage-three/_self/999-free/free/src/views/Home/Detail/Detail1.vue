<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route.params.id)
    },
}
</script>
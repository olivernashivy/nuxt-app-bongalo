<template>
    <reg-home/>
</template>
<script>
    import RegHome from '../components/registration/reg1/RegHome'

    export default {
        auth: false,
        components: { RegHome },
        head() {
            return {
                title: "signup",
            }
        },
         async mounted(){
            if (this.$auth.loggedIn){
                await this.$router.push('/')
            }
            }
    }
</script>
<style scoped lang="stylus">
</style>

<template>
    <user-signup/>
</template>
<script>
    import UserSignup from '../../components/registration/reg1/UserSignup'

    export default {
        auth: false,
        components: { UserSignup },
        head() {
            return {
                title: "user signup",
            }
        },
    }
</script>
<style scoped lang="stylus">
</style>

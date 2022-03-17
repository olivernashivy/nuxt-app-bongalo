<template>
    <create-account/>
</template>
<script>
    import CreateAccount from '../../components/registration/reg1/CreateAccount'

    export default {
        auth: false,
        components: { CreateAccount },
        head() {
            return {
                title: "create Account",
            }
        },
    }
</script>
<style scoped lang="stylus">
</style>

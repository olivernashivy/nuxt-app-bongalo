<template>
    <complete-reg/>
</template>
<script>
    import CompleteReg from '../../components/registration/reg1/CompleteReg'

    export default {
        auth: false,
        components: { CompleteReg },
        head() {
            return {
                title: "Conglaturation ",
            }
        },
    }
</script>
<style scoped lang="stylus">
</style>

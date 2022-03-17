<template>
    <otp-form/>
</template>
<script>
    import OtpForm from '../../components/registration/reg1/OtpForm'

    export default {
        auth: false,
        components: { OtpForm },
        head() {
            return {
                title: "otp form",
            }
        },
    }
</script>
<style scoped lang="stylus">
</style>

<template>
    <stepper/>
</template>
<script>
    import Stepper from '../components/booking/Stepper'

    export default {
        auth: false,
        components: { Stepper },
        head() {
            return {
                title: "Booking ",
            }
        },
    }
</script>
<style scoped lang="stylus">
</style>

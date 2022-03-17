<template>
<v-container  fill-height fluid back-image >
   <v-layout align-center class="padd">
  <v-row align="center"
  justify="center">
    <v-col v-if="logged_in">
     
        <v-btn
              type="submit"
              color="secondary"
              class="mt-4"
              large
              block
              to="/booking"
          >
              Booking
              </v-btn>
    </v-col>
       <v-col v-else>
     
        <v-btn
              type="submit"
              color="secondary"
              class="mt-4"
              large
              block
              @click="go_tologin"
          >
              Login
              </v-btn>
    </v-col>
    <v-col>
          <v-btn
              type="submit"
              color="primary"
              class="mt-4"
              large
              block
              @click="go_torform"
          >
              Signup
              </v-btn>
    </v-col>
  </v-row>
   </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
       logged_in:this.$auth.loggedIn,
    }
  },
  methods: {
           
            async go_torform() {
                     await this.$router.push('/registration')
            },
             async go_tologin() {
                     await this.$router.push('/login')
            },}
}
</script>
<style scoped lang="stylus">
 .padd {
   padding : 10rem
 }
 .back-image {
      background-image: url('@/assets/images/4.png')  
      position:fixed
      left: 0
      right: 0
      bottom: 0
      top: 0
      background-position: center
      background-repeat: no-repeat repeat
      background-size: cover
      height: 100vh
       
        
    }
</style>
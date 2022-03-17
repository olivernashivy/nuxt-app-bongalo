<template>

    <v-app-bar class="elevation-3 white" app height="78px">
        <nuxt-link to="/" class="d-flex">
            <img
                rel="preload"
                alt="Logo"
                class=" mx-10"
                width="60px"
                height="60px"
                src="~/assets/images/22.png"
            />
        </nuxt-link>
        <v-btn
            color="#838B95"
            outlined
            class=" light-weight small-font px-4 ml-4"
            @click="$router.go(-1)" 
        >
            Back
        </v-btn>
         <v-btn v-show="logged_in"
            color="#838B95"
            outlined
            class=" light-weight small-font px-4 ml-4"
            @click="logout" 
        >
            Logout
        </v-btn>
    </v-app-bar>
</template>

<script>




    export default {
        data() {
            return {
                loading: false,
                 is_form_valid: false,
               logged_in:this.$auth.loggedIn,
            }
        },
        methods: {
       Continue() {
               
                this.$router.push('/register/completereg/')
            },
            logout(){
                this.$auth.logout()
            }
    }

       
    }
</script>

<style scoped lang="stylus">
     .back-image {
      background-image: url('@/assets/images/4.png')  
      background-position: center
      background-repeat: no-repeat repeat
      background-size: cover
      height: 100vh
       
        
    }
</style>

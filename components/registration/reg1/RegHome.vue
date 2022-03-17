<template>

    <div class="fill-height back-image">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <v-card-title class="pb-4">
                    <div class="display-3"> <p class=" white--text">Book <span class=" primary--text">ahead</span> your next trip or vacation</p></div>
                </v-card-title>
                
                 
                        <v-spacer/>
                        <div class="d-flex justify-content-center ">
                        <div class=" mx-auto">
                        <v-btn
                            type="submit"
                            color="primary"
                            large
                            block
                            :loading="loading"
                            @click="go_torform"
                        >
                            Create Acount
                        </v-btn>
  <v-spacer/>
                         <v-btn
                            type="submit"
                            color="light"
                            class="mt-4"
                            large
                            block
                            :loading="loading"
                            to="/login"
                        >
                            Login
                        </v-btn>
                        <div class="mt-5 mb-5 text-center white--text"> or</div>
                      
                                                <v-btn
                            type="submit"
                            color="light"
                            large
                           
                            block
                            :loading="loading"
                        >
                        <span class="custom-loader">
                        <v-icon light>mdi-apple</v-icon>
                        </span>
                            Continue with Apple
                        </v-btn>
                        <v-spacer/>
                        
                         <v-btn
                            type="submit"
                            color="light"
                            class="mt-4"
                            large
                           
                            block
                            :loading="loading"
                        >
                        <span class="custom-loader">
                        <v-icon light>mdi-google</v-icon>
                        </span>
                           Continue with Google
                        </v-btn>
                        
                        </div>
                        </div>
                  
              
            </v-card>

        </v-container>

    </div>
</template>

<script>

 import ImageBack from "~/components/ui/ImageBack"


    export default {
   components: {  ImageBack},
        data() {
            return {
                loading: false,
                 is_form_valid: false,
               
            }
        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/userform')
            }},
    }
</script>

<style scoped lang="stylus">
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

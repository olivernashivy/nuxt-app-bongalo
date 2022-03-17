<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                
                 
                      
                        <div class="d-flex justify-content-center ">
                        <div class="col-md-8 mx-auto">
                       <div class="shadow grey lighten-2 mx-5 my-5 px-5 py-5">
                          <v-img
                                :src="require(`@/assets/images/10.png`)"
                                aspect-ratio="1"
                                class=" p-4"
                                 min="200"
                                max="500"
                            > 
                             </v-img>
                            <div>
                              <p class=" text-center">Conglaturation</p>
                 <p class="grey--text caption text-center">You have successfully created an account.
                     A Stressfully life lies Ahead of you</p> 
                            </div>
                       </div>
                    
                        <v-spacer/>
                         <v-btn
                            type="submit"
                            color="primary"
                            class="mt-4"
                            large
                            block
                             @click="Continue"
                        >
                            Continue 
                        </v-btn>
                        <v-spacer/>
                      
                        <div>
                        </div>
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
                 countDown : 10,
                 otpnumber:"",
               
            }
        },
        methods: {
       Continue() {
               
                this.$router.push('/login/')
            },}

       
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

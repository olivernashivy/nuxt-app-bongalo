<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <v-card-title class="pb-4">
                    <div class="display-1"> <p class=" ">We have sent a code to your  number</p></div>
                    <p class="grey--text caption">Enter your code to verify your account</p>
                </v-card-title>
                
                 
                        <v-spacer/>
                        <div class="d-flex justify-content-center ">
                        <div class="col-md-6 mx-5">
                        <v-otp-input
                        v-model="otpnumber"
                        length="4"
                        type="number"
                        >
                        </v-otp-input>
                        <v-spacer/>
                         <v-btn
                            type="submit"
                            color="primary"
                            class="mt-4"
                            large
                            block
                            :loading="loading"
                             @click="countDownTimer"
                             :disabled ="!(otpnumber.length === 4)"
                        >
                            Verify 
                        </v-btn>
                        <div class="mt-5 mb-5 text-center caption">
                            <div>Didn't get the code <a>Resend</a></div>
                             <div>Resend code in <a>{{countDown}}</a></div>
                             </div>
                        
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
            async go_torform() {
                     await this.$router.push('/register/userform')
            },
       
       countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
                this.$router.push('/register/createaccount')
            },
           
        
            },
       
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

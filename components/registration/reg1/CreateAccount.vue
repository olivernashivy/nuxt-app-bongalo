<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <div class="display-1 text-center"> <p class="primary--text ">Create account</p></div>
                 <p class="grey--text caption text-center">Let get to know you better</p>
                <v-card-title class="pb-4 ">
                    
                   
                </v-card-title>
                
                 
                        <form  @submit.prevent>
                    <v-text-field
                    v-model="name"
                    label="Full Name"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    outlined
                    :disabled="!name "
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        outlined
                        :disabled="!name || !email"
                        @click:append="show1 = !show1"
          ></v-text-field>
                   
                   <v-btn
                   @click="completereg"
                    type="submit"
                    color="primary"
                    class="mt-4"
                    large
                    block
                    :disabled="!name || !email || !password"
                     >
                            Create Account 
                </v-btn>
             </form>
             <div class="mt-5">
                  <p class="text-center ">Already have an Acount <a href="/login">Login</a></p></div>
              
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
                  show1: false,
                name: '',
                email: '',
                select: null,
                password: '',
               
            }
        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/userform')
            },
       async completereg() {
            if(!this.$auth.loggedIn){
                try {
                 const payload = {
                  "first_name":this.name,
                  "email":this.email,
                  "password":this.password
                 }
                    await this.$axios.post(`/account/register/`,  payload )
                    this.$router.push('/register/completereg/')
                }
                catch(e){
                        console.log(e)
                }}
                else{
                    //logout
                     this.$auth.logout()
                }
               
            },
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

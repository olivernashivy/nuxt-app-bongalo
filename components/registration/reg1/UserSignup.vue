<template>

    <div class="fill-height back-image">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <v-card-title class="pb-4">
                    <div class="display-1"> <p class=" white--text">Create an acount</p></div>
                </v-card-title>
               
               <v-row no-gutters>
                     <v-col
                       
                        sm="2"
                        md="2">
                    <v-autocomplete
                    v-model="countrycode"
                    :items="codes"
                    item-text="name"
                    item-value="dial_code"
                    >
                        
                    </v-autocomplete>
                     </v-col>
                     <v-col  
                    >
                    <v-text-field
                   v-model="phonenumber"
                    solo
                    :prefix="countrycode"
                    :disabled="!countrycode"
                        >
                </v-text-field>
                     </v-col>

               </v-row>
                
                   <v-btn
                            type="submit"
                            color="primary"
                            class="mt-4"
                            large
                            block
                             :disabled="phonenumber.length < 7"
                            @click="go_torform"
                        >
                            Continue
                        </v-btn>
                        <v-spacer/>
                        <div class="d-flex justify-content-center ">
                        <div class="col-md-6 mx-5">
                       
 
                        <div class="mt-5 mb-5 text-center white--text"> or</div>
                        <div>
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
                        </v-btn></div>
                        <v-spacer/>
                        <div>
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
                        </v-btn></div>
                        </div>
                        </div>
                  
              
            </v-card>

        </v-container>

    </div>
</template>

<script>

    import FormError from "~/components/ui/FormError"
    import { mapState } from "vuex"
    import countrycodes from './countrycodes'

    export default {
        components: {  FormError},
        data() {
            return {
                loading: false,
                 is_form_valid: false,
                errors: {},
                 codes: countrycodes,
                countrycode:null,
                phonenumber:'',
                form: {
                    first_name: '',
                    last_name: '',
                    title: '',
                    business_unit: ''
                },
            }
        },
        computed: {
            
            user() {
                return this.$auth.user
            },

        },
       
        async mounted() {
            await this.$store.dispatch('account/get_user')
        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/otpform')
            },
            
        }
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

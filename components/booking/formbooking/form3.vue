<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <div class="display-1 text-center"> <p class="">Where is your place located</p></div>
                <div class=" text-center"> <h3 class="">Guest will get your exact location once they booked a
                     reservation</h3></div>
                     <div>
                           <v-btn
                            type="submit"
                            color="primary"
                            class="mt-4"
                            large
                            block
                            outlined
                        >
                             <span class="custom-loader mx-3">
                        <v-icon light>mdi-navigation-variant</v-icon>
                        </span>
                            Use your location
                        </v-btn>
                        <v-divider>
                            
                        </v-divider>
                        <div class="mt-5 mb-5 text-center text-decoration-underline"> or enter your address</div>
                     </div>
                 
                <v-card-title class="pb-4 ">
                    
                   
                </v-card-title>
                 <label class="py-2 grey--text">Country region</label>
                   <v-autocomplete
                    :items="countries"
                    v-model="country"
                    item-text="states"
                    label="City select"
                    outlined
                   
                    required
                    ></v-autocomplete>
                     <label class="py-2 grey--text">Street Adress </label>
                    <v-text-field
                       v-model="street"
                    label="House name/ Steet number/road"
                    required
                    outlined
                     :disabled="!country"
                        >
          </v-text-field>
                    <label class="py-2 grey--text">Apt suite(Optional) </label>
                    <v-text-field
                       v-model="suite"
                    label="Apt suite, building access code"
                    required
                    outlined
                        >
          </v-text-field>
                 
             
            
              
            </v-card>

        </v-container>

    </div>
</template>

<script>

 import ImageBack from "~/components/ui/ImageBack"
import cities from '../city'
    export default {
   components: {  ImageBack},
    data() {
            return {
                loading: false,
                suite:'',
                street:'',
                countries:[],
                country:'',
               
            }
        },
        mounted(){
            this.transformcities()
        },
        watch: {
            suite() {
                 this.$emit('suite', this.suite)
            },
             street() {
                 this.$emit('street', this.street)
            },
             country() {
                 this.$emit('country', this.country)
            },

        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/userform')
            },
              async transformcities() {
                  const newcities = cities
                  let city = []
                  for (let i=0; i < newcities.length ;i++){
                     this.countries.push(newcities[i].state)
                      for(let j=0 ;j < newcities[i].states.length; j++){
                           console.log()
                          city.push( newcities[i].country  + ',' + newcities[i].states[j])
                      }
                  }
                 
                    this.countries = city
                    return this.countries
            },
       async completereg() {
          
                try {
                 const payload = {
                  "first_name":this.name,
                  "email":this.email,
                  "password":this.password
                 }
                    await this.$axios.post(`/account/register/`,  payload )
                }
                catch(e){
                        console.log(e)
                }
                this.$router.push('/register/completereg/')
            },
        }
    }
</script>
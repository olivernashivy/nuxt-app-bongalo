<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <div class="display-1 text-center"> <p class="">How many guest your place can accomodate</p></div>
                <div class=" text-center"> <h3 class="caption">Check that you have enough rooms to accomodate your guest comfortably</h3></div>
                 
                <v-card-title class="pb-4 ">
                    
                   
                </v-card-title>
                <div class="mb-2">
                   <v-row align="center">
                       <v-col xs="6" >Guest</v-col>
                    <v-col xs="6" > 
                      <v-row align="center">
                       <v-col>
                                <v-btn
                                class="mx-2"
                                fab
                                small
                                color="primary"
                                outlined
                                @click="guest -= 1"
                                >
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                                </v-btn>

                    </v-col>
                            <v-col> {{guest}} </v-col>
                    <v-col>
                         
                                    <v-btn
                                class="mx-2"
                                fab
                                small
                                color="primary"
                                outlined
                                @click="guest += 1"
                                >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                    </v-col>
                    </v-row>
                </v-col>
                   </v-row>
                    </div>
                    <label class="py-2 grey--text">How many bedrooms a guest can use?</label>
                     <v-select
                    :items="guestrooms"
                    v-model="bedperguest"
                    label="Bed rooms per guest "
                    outlined
                    required
                    ></v-select>
                     <label class="py-2 grey--text">How many beds a guest can use?</label>
                       <div class="mb-2">
                         <v-row align="center">
                       <v-col xs="6" >Bed</v-col>
                    <v-col xs="6" > 
                      <v-row align="center">
                       <v-col >
                                <v-btn
                                class="mx-2"
                                fab
                                small
                                color="primary"
                                outlined
                                @click="bed -= 1"
                                >
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                                </v-btn>

                    </v-col>
                            <v-col> {{bed}} </v-col>
                    <v-col>
                         
                                    <v-btn
                                class="mx-2"
                                fab
                                small
                                color="primary"
                                outlined
                                @click="bed += 1"
                                >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                    </v-col>
                    </v-row>
                </v-col>
                   </v-row>
                    </div>
                    <div class="pt-3">
                     <p class="display-1 ">Sleeping Arrangment</p>
                <h3 class="grey--text">Sharing the type of bed can help prople understand sleeping arrangment</h3>
                   
                     <v-select
                    :items="sleepingarrangments"
                    v-model="sleepingarrangment"
                    label="Sleeping arrangment "
                    outlined
                    :disabled="!bedperguest"
                    required
                    ></v-select>  
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
                 guest: 10,
                 bed: 1,
                show1: false,
                name: '',
                email: '',
                select: null,
                password: '',
                guestnumber :null,
                location :'',
                bedperguest:'',
                sleepingarrangment:'',
                guestrooms:[
                     { text: '1 bedrooms ', value: '1' },
                    { text: '2 bedrooms', value: '2' },
                ],
                sleepingarrangments:[
                     { text: 'bunks bed ', value: 'bunk bed' },
                    { text: 'alone in a room', value: 'alone in a room' },
                    { text: 'alone in a house', value: 'alone in a house' },
                    { text: 'shared house', value: 'shared house' },
                ],
               
            }
        },
        watch: {
            guest() {
                 this.$emit('guest', this.guest)
            },
             bed() {
                 this.$emit('bed', this.bed)
            },
             bedperguest() {
                 this.$emit('bedperguest', this.bedperguest)
            },
              sleepingarrangment() {
                 this.$emit('sleepingarrangment', this.sleepingarrangment)
            },

        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/userform')
            },
         add() {
             this.guest =+ 1
             return this.guest
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
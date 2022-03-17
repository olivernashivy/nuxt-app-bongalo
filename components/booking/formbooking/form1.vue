<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <div class="display-1 text-center"> <p class="">Lets get starting listing your space</p></div>
                <div class=" text-center"> <h3 class="">What Kind of space do you have?</h3></div>
                 
                <v-card-title class="pb-4 ">
                    
                </v-card-title>
                
                   <v-select
                    :items="typerooms"
                    v-model="typeroom"
                    label="Type of rooms"
                    outlined
                   filled

                    ></v-select>
                     <v-select
                    :items="guestnumbers"
                    v-model="guestnumber"
                    label="guest number"
                    required
                    outlined
                    :disabled ="!typeroom"

                    >
                    </v-select>
                    <v-text-field
                       v-model="location"
                    label="location city"
                    required
                    outlined
                    :disabled ="!guestnumber"
                        >
          </v-text-field>              
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
                typeroom:'',
                guestnumber:'',
                 location :'',
                 data:{},
                typerooms: [
        { text: 'Private Room', value: 'private' },
        { text: 'Couple Room', value: 'couple' },
        { text: 'Singles Room', value: 'single' },
      ],
      guestnumbers: [
        { text: '1 person ', value: '1' },
        { text: '2 people', value: '2' },
        { text: '3 people', value: '3' },
        { text: '5 people', value: '5' },
        { text: '5-10 people', value: '10' },
        { text: '10-20 people', value: '20' },
        { text: '20-50 people', value: '50' },
        { text: 'over 50 people', value: '100' },
      ],
               
            }
        },
        watch: {
            guestnumber() {
                 this.$emit('guestnumber', this.guestnumber)
            },
             typeroom() {
                 this.$emit('typeroom', this.typeroom)
            },
             location() {
                 this.$emit('location', this.location)
            },

        },
        methods: {
            async go_torform() {
                     await this.$router.push('/register/userform')
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
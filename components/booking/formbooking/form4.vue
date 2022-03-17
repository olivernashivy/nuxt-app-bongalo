<template>

    <div class="fill-height ">
      
        <v-container fluid class="fill-height justify-center fade-in">
            
            <v-card class="transparent elevation-0" width="600px">
                <div class="display-1 text-center"> <p class="">What ammeneties do you offer?</p></div>
                <div class=" text-center"> <h3 class="">These are some ammenities guest expect but you can add more
                     after you publish </h3></div>
                     <div>
                         <v-card
                            class="mx-auto"
                            max-width="400"
                            tile
                        >
                            <v-list-item
                             v-for="(item, i) in items"
                                :key="i">

                            <v-list-item-content>
                                <v-list-item-title>{{item.text}}</v-list-item-title>
                            </v-list-item-content>
                            <span class="">
                             <v-checkbox
                              :value="item.icon"
                                v-model="selected"       
                            ></v-checkbox></span>
                            </v-list-item> 
                         </v-card>
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
                selected: [],
                loading: false,
                 checkbox: true,
                 items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  
               
            }
        },
         watch: {
            selected() {
                 this.$emit('selected', this.selected)
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
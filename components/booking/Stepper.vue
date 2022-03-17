<template>
  <form  @submit.prevent>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        step 1 
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
       step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step  :complete="e1 > 3"
        step="3">
        step 3
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">
        step 4
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
         
         
        >
          <form1  @guestnumber="onguestnumber"
          @typeroom ="ontyperoom"
          @location="onlocation"/>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
          :disabled="!location || !guestnumber1 || !typeroom"
        >
          Continue 
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          
        >
      <form-2   @guest="onguest"
          @bed ="onbed"
          @bedperguest="onbedperguest"
           @sleepingarrangment="onsleepingarrangment"
          />
        </v-card>
    <div class="d-flex justify-space-between">
     
        <v-btn
          color="primary"
          @click="e1 = 3"
          :disabled="!sleepingarrangment || !bedperguest"
        >
          Continue 
        </v-btn>
        <v-btn 
         @click="e1 = 1"
         color="secondary">
          Back
        </v-btn>
    
    </div>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
         
        >
        <form3
        @suite="onsuite"
          @street ="onstreet"
          @country="oncountry"/></v-card>
  <div class="d-flex justify-space-between">
        <v-btn
          color="primary"
          @click="e1 = 4"
           :disabled="!country || !street"
        >
          Continue
        </v-btn>

        <v-btn 
         @click="e1 = 2"
         color="secondary">
          Back
        </v-btn>
  </div>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
          class="mb-12"
         
        >
        <form4
        @selected="onselected"/></v-card>
  <div class="d-flex justify-space-between">
        <v-btn
          color="primary"
          @click="submitform"
        >
          Continue 
        </v-btn>

        <v-btn 
         @click="e1 = 3"
         color="secondary"
        >
          Back
        </v-btn>
  </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </form>
</template>

<script>

import Form1 from './formbooking/form1'
import Form2 from './formbooking/form2'
import Form3 from './formbooking/form3'
import Form4 from './formbooking/form4'
  export default {
    components :{ Form1, Form2, Form3, Form4 },
    data () {
      return {
        e1: 1,
        guestnumber1 : '',
        typeroom:'',
        location :'',
        bedperguest:null,
        guest:0,
        bed :0,
        sleepingarrangment:null,
        suite:'',
        street:'',
        country:'',
        selected:[],


      }
    },
                
    methods:{
       onguestnumber (value) {
            this.guestnumber1 = value
          },
          ontyperoom(value){
            this.typeroom =value
          },
          onlocation(value){
            this.location = value
          },
          onguest (value) {
            this.guest = value
          },
          onbed(value){
            this.bed =value
          },
          onbedperguest(value){
            this.bedperguest = value
          },
          onsleepingarrangment(value){
            this.sleepingarrangment = value
          },
           onsuite (value) {
            this.suite = value
          },
          oncountry(value){
            this.country =value
          },
          onstreet(value){
            this.street = value
          },
          onselected(value){
            this.selected = value
          },
         async submitform() {
           if(this.$auth.loggedIn){
                try {
                 const payload = {
                    "room_type":this.typeroom ,
                    "number_of_guests":this.guestnumber1 ,
                    "location":this.location ,
                    "guests": this.guest,
                    "beds": this.bed,
                    "bedrooms": this.bedperguest,
                    "country":this.country ,
                    "street": this.street,
                    "suite_code": this.suite,
                    "ammenities": this.selected.join(),
                     "added_by":this.$auth.user.id
                 }
                    await this.$axios.post(`/ap/booking/`,  payload )
                    this.$router.push('/')
                }
                catch(e){
                        console.log(e)
                }}
                else{
                   this.$router.push('/login/')
                }
                
            },
    },
  }
</script>
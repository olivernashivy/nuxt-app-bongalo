<template>
<div class="back">
  <v-row >
    <v-col
      v-for="n in 6"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="require(`@/assets/images/${n}.png`)"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
           
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</div>
</template>
<style scoped lang="stylus">
     .back {
        
       
        
        
    }
</style>
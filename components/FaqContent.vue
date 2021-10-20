<template>
<v-container fluid>
   <v-card class=" py-4 d-flex justify-center">
      <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
       
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
   </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
    }),
  }
</script>
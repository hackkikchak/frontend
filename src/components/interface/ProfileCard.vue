<template>
  <q-card>
    <q-card-section>
      {{userInfo}}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileCard',
  props: ['userInfo'],
  methods: {

  }

})
</script>

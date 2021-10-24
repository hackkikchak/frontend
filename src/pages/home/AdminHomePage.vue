<template>
  <q-page class="flex flex-center">
    <ProfileCard :userInfo="userInfo"></ProfileCard>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ProfileCard from 'interface/ProfileCard.vue'
export default defineComponent({
  name: 'AdminHomePage',
  props: ['userInfo'],
  components: {
    ProfileCard
  },
  setup () {
  }
})
</script>

<template>
  <q-page class="flex flex-center">
    {{userInfo}}
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useUserInfo from 'src/hooks/user/useUserInfo'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const { userInfo } = useUserInfo()
    return {
      userInfo
    }
  }
})
</script>

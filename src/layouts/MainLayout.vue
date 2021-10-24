<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer  elevated class="shadow-10 bg-white">
      <q-toolbar>
        <q-btn
          color="black"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <ProfileOptionsButton :userInfo="userInfo"></ProfileOptionsButton>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      show-if-above
      bordered
      class="bg-grey-1"
    >
     <LeftDrawerItems  ></LeftDrawerItems>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawerItems from 'src/components/interface/DrawerItems.vue'
import ProfileOptionsButton from 'src/components/interface/ProfileOptionsButton.vue'
import { defineComponent } from 'vue'
import useUserInfo from 'src/hooks/user/useUserInfo'
import useLeftDrawerItems from 'src/hooks/useLeftDrawerItems'

export default defineComponent({
  name: 'MainLayout',

  components: {
    LeftDrawerItems,
    ProfileOptionsButton
  },

  computed: {

  },
  mounted () {
    console.log(
      this.leftDrawerOpen,
      this.toggleLeftDrawer, this.userInfo
    )
  },
  setup () {
    const { leftDrawerOpen, toggleLeftDrawer } = useLeftDrawerItems()
    const { userInfo } = useUserInfo()
    return {
      userInfo,
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
})
</script>

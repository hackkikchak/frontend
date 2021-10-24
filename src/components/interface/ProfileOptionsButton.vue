<template>
  <q-btn-dropdown
    flat
    round
    color="black"
    icon="manage_accounts"
  >
    <q-card v-if="userInfo" class="text-white bg-primary">
      <q-card-section>
        <div class="column items-center">
          <div class="flex">
            <div class="row items-center align-center">
              <q-avatar size="50px">
                <img :src="userInfo.avatar">
              </q-avatar>
            </div>
            <div class="q-ml-md">
              <div>
                <q-badge color="green">
                  {{ userInfo.roleString }}
                </q-badge>
              </div>
              <div class="text-secondary text-subtitle1 text-weight-bold">
                {{ userInfo.lastName }} {{ userInfo.firstName }} {{ userInfo.secondName }}
              </div>
              <div class="text-caption">{{ userInfo.email }}</div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions vertical>
        <q-separator dark></q-separator>
        <q-btn
            color="white"
            label="Выход"
            flat
            rounded
            push
            size="md"
            v-close-popup
            @click="logout()"
          />
      </q-card-actions>

    </q-card>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent } from 'vue'
import EventBus from '../../service/user/EventBus'

export default defineComponent({
  name: 'LogoutButton',
  props: ['userInfo'],
  methods: {
    logout () {
      EventBus.dispatch('logout')
    }
  }

})
</script>

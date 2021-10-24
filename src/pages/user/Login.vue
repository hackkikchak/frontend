<template>
  <q-page class="bg-secondary">
    <div class="q-pa-md bg-primary shadow-13" style="border-radius: 0 0 18px 18px">
      <div class="row justify-center">
        <div class="col-12 col-md-6 column items-center justify-center">
          <div>
            <img
              alt="Quasar logo"
              src="~assets/logo.svg"
              style="width: 200px; height: 200px"
            >
          </div>

        </div>
        <div class="col-12">
          <q-tabs
            v-model="loginTabs"
            dense
            class="text-white fit"
            active-color="white"
            indicator-color="secondary"
            align="around"
          >
            <q-tab name="register" label="Регистрация" />
            <q-tab name="auth" active label="Войти" />
          </q-tabs>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="col-10 col-md-6">
        <q-tab-panels class="bg-transparent" v-model="loginTabs" animated>
          <q-tab-panel name="register">
            <q-form>
              <h1 class="text-h4 text-weight-bold">Регистрация</h1>
              <q-input

                type="text"
                bg-color="white"
                :outlined="true"
                label="Имя пользователя"
                class="q-mb-md "
                />
              <q-input

                bg-color="white"
                :outlined="true"
                label="Номер телефона"
                mask="+7 (###) ### - ## - ##"
                class="q-mb-md"
              >
              </q-input >

              <div class="row justify-center">
                <div class="col-12 col-md-6 q-pa-xs">
                    <q-btn size="md" color="primary" class="full-width"
                    rounded label="Подтвердить регистрацию" />
                </div>
              </div>

              <div class="row q-my-md">
                <div class="col-12">
                  <div v-if="message !==''" class="text-weight-bolder text-center text-body1 text-negative">
                    {{message}}
                  </div>
                </div>
              </div>
            </q-form>
          </q-tab-panel>
          <q-tab-panel name="auth">
            <q-form @submit="submitForm">
              <h1 class="text-h4 text-weight-bold">Авторизация</h1>
              <q-input
                v-model="user.username"
                type="text"
                bg-color="white"
                :outlined="true"
                label="Имя пользователя"
                class="q-mb-md "
                />
              <q-input
                v-model="user.password"
                :type="passwordShow ? 'password' : 'text'"
                bg-color="white"
                :outlined="true"
                label="Пароль"
                class="q-mb-md"
              >
                <template v-slot:append>
                  <q-icon
                    :name="passwordShow ? 'manage_accounts' : 'manage_accounts'"
                    class="cursor-pointer"
                    @click="passwordShow = !passwordShow"
                  />
                </template>
              </q-input >

              <div class="row justify-center">
                <div class="col-12 col-md-6 q-pa-xs">
                    <q-btn size="md" color="primary" rounded  class="full-width" :disable="disableComponentStatus"  type="submit" label="Начало работы" />
                </div>
                <div class="col-12 col-md-6 q-pa-xs">
                    <q-btn size="md" color="primary" class="full-width"
                    rounded :disable="disableComponentStatus"  label="Восстановить пароль" />
                </div>
              </div>

              <div class="row q-my-md">
                <div class="col-12">
                  <div v-if="message !==''" class="text-weight-bolder text-center text-body1 text-negative">
                    {{message}}
                  </div>
                </div>
              </div>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

import useDisableCompponent from 'src/hooks/useDisableCompponent'
export default defineComponent({
  name: 'Login',
  setup () {
    const {
      disable,
      enable,
      disableComponentStatus
    } = useDisableCompponent()

    return {
      disable,
      enable,
      disableComponentStatus,
      loginTabs: ref('auth')
    }
  },
  data () {
    return {
      message: '',
      passwordShow: true,
      user: {
        username: 'admin',
        password: '111'
      }

    }
  },
  created () {
  },
  methods: {
    submitForm () {
      this.disable()
      this.$store.dispatch('user/login', this.user)
        .then(() => {
          this.$router.push({ name: 'home' })
          this.enable()
        },
        (error) => {
          this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message || error.toString()
          this.enable()
        }
        )
    }
  }
})
</script>

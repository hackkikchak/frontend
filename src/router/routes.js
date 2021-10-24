
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/Index.vue'),
        meta: { title: 'Домашняя страница' }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/profile/Profile.vue'),
        meta: { title: 'Профиль' }
      },

      {
        path: '/settings',
        name: 'settings',
        component: () => import('pages/Settings.vue'),
        meta: { title: 'Настройки' }
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/user/Login.vue'),
        meta: { title: 'Авторизация' }
      }
    ]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

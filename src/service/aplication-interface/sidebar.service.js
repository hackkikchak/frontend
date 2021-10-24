
class SidebarService {
  getItems (user) {
    // if
    const itemsSidebar = [
      {
        ...this.getCookItems()
      }
    ]
    return itemsSidebar
  }

  getCookItems () {
    return {
      title: 'Основное меню',
      items: [
        {
          title: 'Профиль',
          to: 'profile',
          icon: 'account_circle'
        },
        {
          title: 'Настройки',
          to: 'settings',
          icon: 'settings'
        }
      ]
    }
  }
}

export default new SidebarService()

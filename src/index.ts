import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { getUserData } from './user.js'
import { getFavoritesAmount } from './user.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  getUserData()
  getFavoritesAmount()
  renderUserBlock(localStorage.user.username, localStorage.user.avatarUrl, localStorage.favoritesAmount.favoriteItemsAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

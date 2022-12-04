import { renderBlock } from './lib.js'

export function renderUserBlock (name:'string', avatar:'string', favoriteItemsAmount:number) {
  const userInfo = {
    name: 'Wade Warren',
    avatar: '/img/avatar.png',
    favoriteItemsAmount: 7
  }
  const favoritesCaption = (favoriteItemsAmount >= 1) ? true : 'ничего нет'


  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userInfo.avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userInfo.name}</p>
          <p class="fav">
            <i class="heart-icon${favoritesCaption ? 'active' : ''}"></i>${userInfo.favoriteItemsAmount}
          </p>
      </div>
    </div>
    `
  )
}

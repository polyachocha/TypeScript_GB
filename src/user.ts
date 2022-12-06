import { renderBlock } from './lib'

export function getUserData(value:unknown) {
  if (value instanceof  ) {
    const info = JSON.parse(localStorage.getItem('user'))
    return info
  }
  
}

export function getFavoritesAmount() {
  const quantity = JSON.parse(localStorage.getItem('favoriteItemsAmount'))
  return quantity
}

export function renderUserBlock (userName: string, avatarUrl: string, favoriteItemsAmount?: number) {
  
  const favoritesCaption = (favoriteItemsAmount >= 1) ? true : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption.valueOf}
          </p>
      </div>
    </div>
    `
  )
}

const userNameAvatar = {
  'userName': 'Wade Warren',
  'avatarUrl': '/img/avatar.png'
};
localStorage.setItem('user', JSON.stringify(userNameAvatar));

const favoritesItems = {
  'favoriteItemsAmount': 7
}
localStorage.setItem('favoritesAmount', JSON.stringify(favoritesItems));

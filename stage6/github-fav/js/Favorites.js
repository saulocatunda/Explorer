export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
  }
  
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }
}




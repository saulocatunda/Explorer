export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }

  update() {
    this.removeAllTr()
  }

  createRow() {
    const tr = document.createElement('tr')

    const content = `
    <td class="user">
      <img
        src="https://github.com/diego3g.png"
        alt="Imagem de maykbrito"
      />
      <a href="https://github.com/diego3g" target="_blank">
        <p>Diego Fernandes</p>
        <span>diego3g</span>
      </a>
    </td>
    <td class="repositories">48</td>
    <td class="followers">22503</td>
    <td>
      <button class="remove">&times;</button>
    </td>
  `
  }

  removeAllTr() {}
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'saulocatunda',
        name: 'Saulo Catunda',
        public_repos: '25',
        fallowers: '5899876'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        fallowers: '120000'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '76',
        fallowers: '120000'
      }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = ''

      console.log(row);
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
            <td class="user">
              <img
                src="https://github.com/saulocatunda.png"
                alt="Imagem do Saulo"
              />
              <a href="https://github.com/saulocatunda" target="_blank">
                <p>Saulo Catunda</p>
                <span>saulocatunda</span>
              </a>
            </td>
            <td class="repositories">20</td>
            <td class="fallowers">1</td>
            <td><button class="remove">&times;</button></td>
    `

    return tr
  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}

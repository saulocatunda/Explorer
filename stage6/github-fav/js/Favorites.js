export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.tbody = this.root.querySelector('table tbody')
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

  delete(user) {
    const filteredEntries = this.entries.filter(
      entry => entry.login !== user.login
    )
    console.log(filteredEntries)
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
      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.fallowers').textContent = user.fallowers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
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
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}

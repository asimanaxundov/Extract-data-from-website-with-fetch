fetch('https://jsonplaceholder.typicode.com/users', {})
  .then((resp) => resp.json())
  .then((data) => {
    createTable(data)
  })
  .catch((error) => {
    console.error('Data extraction error:', error)
  })



function createTable(data) {
  var table = document.createElement('table')
  var tableHead = document.createElement('thead')
  var headRow = document.createElement('tr')

  Object.keys(data[0]).forEach((key) => {
    var th = document.createElement('th')
    if ((index == 4) || (index == 7)) th.classList.add('hide')

    th.textContent = key
    headRow.appendChild(th)
  })

  tableHead.appendChild(headRow)
  table.appendChild(tableHead)

  var tableBody = document.createElement('tbody')
  data.forEach((item) => {
    var row = document.createElement('tr')

    Object.values(item).forEach((value, index) => {
      var cell = document.createElement('td')

      if (index == 1) cell.className = 'name-tab'
      if ((index == 4) || (index == 7)) cell.classList.add('hide')

      cell.textContent = value
      row.appendChild(cell)
    })
    tableBody.appendChild(row)
  })
  table.appendChild(tableBody)

  document.body.appendChild(table)

  table.addEventListener('click', (event) => {
    if (event.target.classList.contains('name-tab')) {
      const modal = document.getElementById('myModal')
      modal.style.display = 'block'

      const modalContent = document.querySelector('.modalContent')
      const dataContainer = document.querySelector('.dataContainer')
      
      for (let i = 0; i <= 9; i++) {
        
        dataContainer.textContent = `
        Street: ${data[i].address.street},
        Suite: ${data[i].address.suite},
        City: ${data[i].address.city},
        Zipcode: ${data[i].address.zipcode},
        Geocode(lat): ${data[i].address.geo.lat},
        Geocode(lng): ${data[i].address.geo.lng}
        
        `
      }

      // modalContent.textContent = `Street: ${data[0].address.street}`
      // modalContent.textContent = `Suite: ${data[0].address.suite}`
      // modalContent.textContent = `City: ${data[0].address.city}`
      // modalContent.textContent = `Zipcode: ${data[0].address.zipcode}`
      // modalContent.textContent = `Geocode(lat): ${data[0].address.geo.lat}`
      // modalContent.textContent = `Geocode(lng): ${data[0].address.geo.lng}`

      const closeBtn = document.querySelector('.close')
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
      })
    }
  })
}

class TableCsv {
  /**
   * @param {HTMLTableElement} root The table element which will display the CSV data.
   */
  constructor (root) {
    this.root = root
  }

  /**
   * Clears existing data in the table and replaces it with new data.
   *
   * @param {string[][]} data A 2D array of data to be used as the table body
   * @param {string[]} headerColumns List of headings to be used
   */
  update (data, headerColumns = []) {
    this.clear()
    this.setHeader(headerColumns)
    this.setBody(data)
  }

  /**
   * Clears all contents of the table (incl. the header).
   */
  clear () {
    this.root.innerHTML = ''
  }

  /**
   * Sets the table header.
   *
   * @param {string[]} headerColumns List of headings to be used
   */
  setHeader (headerColumns) {
    this.root.insertAdjacentHTML(
      'afterbegin',
      `
            <thead>
                <tr>
                    ${headerColumns.map(text => `<th>${text}</th>`).join('')}
                </tr>
            </thead>
        `
    )
  }

  /**
   * Sets the table body.
   *
   * @param {string[][]} data A 2D array of data to be used as the table body
   */
  setBody (data) {
    const rowsHtml = data.map(row => {
      return `
                <tr>
                    ${row.map(text => `<td>${text}</td>`).join('')}
                </tr>
            `
    })

    this.root.insertAdjacentHTML(
      'beforeend',
      `
            <tbody>
                ${rowsHtml.join('')}
            </tbody>
        `
    )
  }
}

$(document).ready(function () {
  const tableRoot = document.getElementById('securitiiesFromCSV')
  const csvFileInput = document.getElementById('fileSelect')
  console.log(tableRoot)
  const tableCsv = new TableCsv(tableRoot)
  var securityData = []
  csvFileInput.addEventListener('change', e => {
    Papa.parse(csvFileInput.files[0], {
      delimiter: ',',
      skipEmptyLines: true,
      complete: results => {
        console.log(results)
        tableCsv.update(results.data.slice(1), results.data[0])
        for (var i = 1; i < results.data.length; i++) {
          securityData.push(results.data[i])
        }
      }
    })
  })
  console.log(securityData)
  document
    .getElementById('submitButton')
    .addEventListener('click', function (e) {
      e.preventDefault()
      $.ajax({
        url: 'https://localhost:7143/deleteSecurities',
        type: 'DELETE',
        // data: JSON.stringify(modelInfo),
        // added data type
        // data: JSON.stringify(ModelsData),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          Accept: '*',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + sessionStorage.token
        },

        success: function printData (res) {
          alert('Securities Deleted Successfully')

          // Making Pie Chart from data
          $.ajax({
            url: 'https://localhost:7143/addAllSecurities',
            type: 'POST',
            data: JSON.stringify(securityData),
            // added data type
            // data: JSON.stringify(ModelsData),
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
              Accept: '*',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + sessionStorage.token
            },

            success: function printData (res) {
              alert('Securities Added Successfully')
            },

            error: function (er) {
              alert('errrorr')
              // alert(JSON.stringify(er));
            }
          })
        },
        error: function (er) {
          alert('errrorr')
          // alert(JSON.stringify(er));
        }
      })
    })
})

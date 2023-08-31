var d5

function xyz(Name, Email, RiskProfile, Model, id) {
  let r = document.createElement('tr')
  let d1 = document.createElement('td')
  d1.innerHTML = Name
  let d2 = document.createElement('td')
  d2.innerHTML = Email
  let d3 = document.createElement('td')
  d3.innerHTML = RiskProfile
  let d4 = document.createElement('td')
  d4.innerHTML = Model
  d5 = document.createElement('a')
  d5.setAttribute('id', Email)
  d5.setAttribute('href', 'clients.html')
  d5.innerHTML = 'Delete'
  console.log(d5)
  document.getElementById(id).appendChild(r)
  document.getElementById(id).appendChild(d1)
  document.getElementById(id).appendChild(d2)
  document.getElementById(id).appendChild(d3)
  document.getElementById(id).appendChild(d4)
  document.getElementById(id).appendChild(d5)
}

$(document).ready(function (e) {
  // getting Clients List
  $.ajax({
    url: "https://localhost:7143/existingClientsList",
    type: 'GET',
    // added data type
    // data: JSON.stringify(newClientData),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Header": "*",
      "Accept": "*",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.token
    },

    success: function printData(res) {
      alert("Client list loaded Successfully");
      // console.log(res);
      res = JSON.parse(res);
      console.log(res);

      for (var i = 0; i < res.length; i++) {
        document.getElementById('ClientDropDown').appendChild(addClient(res[i].ClientEmail))
      }
    },

    error: function (er) {
      alert("errrorr");
      alert(JSON.stringify(er));
    }
  });

  //Fetching Clients Data onClick of Refresh

  ClientName = document.getElementById('ClientNameInTable')
  ClientEmail = document.getElementById('ClientEmailInTable')
  ClientContact = document.getElementById('ClientContactInTable')
  ClientAadhar = document.getElementById('ClientAadharInTable')
  ClientPAN = document.getElementById('ClientPANInTable')
  ClientRisk = document.getElementById('ClientRiskInTable')
  ClientModel = document.getElementById('ClientModelInTable')

  document.getElementById("refreshButton").addEventListener("click", function (e) {
    e.preventDefault();
    var Email = document.getElementById("ClientDropDown").value
    document.getElementById("pieChart").innerHTML = "";
    var c = {
      EmailId: Email
    }
    console.log(c);
    $.ajax({
      url: "https://localhost:7143/existingClientsData",
      type: "POST",
      // added data type
      data: JSON.stringify(c),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Accept": "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.token
      },

      success: function printData(res) {
        alert("Client Data loaded Successfully");
        // console.log(res);
        res = JSON.parse(res);
        console.log(res);
        ClientName.innerHTML = res[0].Name;
        ClientEmail.innerHTML = res[0].Email;
        ClientContact.innerHTML = res[0].PhoneNo;
        ClientAadhar.innerHTML = res[0].AadharNo;
        ClientPAN.innerHTML = res[0].PancardNo;
        ClientRisk.innerHTML = res[0].RiskProfile;
        ClientModel.innerHTML = res[0].SuggestedModel;
        var modelInfo = {
          RiskProfile: res[0].RiskProfile,
          Model: res[0].SuggestedModel
        }
        $.ajax({
          url: 'https://localhost:7143/modelPieChart',
          type: 'POST',
          data: JSON.stringify(modelInfo),
          // added data type
          // data: JSON.stringify(ModelsData),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            Accept: '*',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.token
          },

          success: function printData(res) {
            alert('Models list loaded Successfully')
            res = JSON.parse(res)
            console.log(res)
            var data = { labels: [], weightage: [] }
            for (var i = 0; i < res.length; i++) {
              data.labels.push(res[i].AssetType)
              data.weightage.push(res[i].AssetSum)
            }
            var canvasP = document.getElementById('pieChart')
            var ctxP = canvasP.getContext('2d')
            var myPieChart = new Chart(ctxP, {
              type: 'pie',
              data: {
                labels: data.labels,
                datasets: [
                  {
                    data: data.weightage,
                    backgroundColor: [
                      '#64B5F6',
                      '#FFD54F',
                      '#2196F3',
                      '#FFC107',
                      '#1976D2',
                      '#FFA000',
                      '#0D47A1'
                    ],
                    hoverBackgroundColor: [
                      '#B2EBF2',
                      '#FFCCBC',
                      '#4DD0E1',
                      '#FF8A65',
                      '#00BCD4',
                      '#FF5722',
                      '#0097A7'
                    ]
                  }
                ]
              },
              options: {
                legend: {
                  display: true,
                  position: 'right'
                }
              }
            })
          },

          error: function (er) {
            alert('errrorr')
            // alert(JSON.stringify(er));
          }
        })
      },

      error: function (er) {
        alert("not possible");
        // alert("errrorr");
        console.log(JSON.stringify(er));
      }
    });
  });


  // let Email = getElementById("Email").value;
  // var clientDelete = {
  //   "Email": d5.id
  // };
  // console.log(JSON.stringify(clientDelete));

  // $.ajax({
  //   url: "https://localhost:7143/deleteClientsData",
  //   type: 'POST',
  //   // added data type
  //   data: JSON.stringify(clientDelete),
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Request-Method": "*",
  //     "Accept": "*",
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer " + sessionStorage.token
  //   },
  //   success: function (res, status, xhr) {
  //     alert("Client Deleted Successfully");

  //     // console.log(JSON.parse(xhr.responseText).Value);
  //     //   sessionStorage.setItem("token",JSON.parse(xhr.responseText).Value);
  //     //   console.log(JSON.parse(xhr.responseText));
  //     // alert(JSON.stringify(res));
  //     location.href = "Clients.html";
  //   },
  //   error: function (er) {
  //     alert("error");
  //     // alert(JSON.stringify(er));
  //   }

  // });
});

function addClient(val) {
  let opt = document.createElement('option')
  opt.setAttribute('value', val)
  opt.innerHTML = val
  return opt
}

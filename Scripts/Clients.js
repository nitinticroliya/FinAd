var d5;

function xyz(Name, Email, RiskProfile, Model, id) {
  let r = document.createElement("tr");
  let d1 = document.createElement("td");
  d1.innerHTML = Name;
  let d2 = document.createElement("td");
  d2.innerHTML = Email;
  let d3 = document.createElement("td");
  d3.innerHTML = RiskProfile;
  let d4 = document.createElement("td");
  d4.innerHTML = Model;
  d5 = document.createElement("a");
  d5.setAttribute("id", Email);
  d5.setAttribute("href", "clients.html");
  d5.innerHTML = "Delete";
  console.log(d5);
  document.getElementById(id).appendChild(r);
  document.getElementById(id).appendChild(d1);
  document.getElementById(id).appendChild(d2);
  document.getElementById(id).appendChild(d3);
  document.getElementById(id).appendChild(d4);
  document.getElementById(id).appendChild(d5);
}

$(document).ready(function (e) {
  $.ajax({
    url: "https://localhost:7143/existingClientsData",
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
        xyz(res[i].Name, res[i].Email, res[i].RiskProfile, res[i].SuggestedModel, "clientList");
      }
    },


    error: function (er) {
      alert("errrorr");
      alert(JSON.stringify(er));
    }
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


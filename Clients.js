$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7143/existingClientsData",
        type: 'GET',
        // added data type
        // data: JSON.stringify(newClientData),
        headers: {
            "Access-Control-Allow-Origin": "*",
            //    "Access-Control-Request-Method" : "*",
            "Accept": "*",
            "Content-Type": "application/json"
        },

        success: function printData(res) {
            alert("Client list loaded Successfully");
            // console.log(res);
            res = JSON.parse(res);
            for(var i=0; i<res.length; i++){
                xyz(res[i].Name, res[i].Email, res[i].RiskProfile, res[i].SuggestedModel, "clientTables");
            }
        },


        error: function (er) {
            alert("errrorr");
            alert(JSON.stringify(er));
        }
    });
    // });
});

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
    document.getElementById(id).appendChild(r);
    document.getElementById(id).appendChild(d1);
    document.getElementById(id).appendChild(d2);
    document.getElementById(id).appendChild(d3);
    document.getElementById(id).appendChild(d4);
}
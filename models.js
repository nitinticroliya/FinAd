$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7143/existingModelsData",
        type: 'GET',
        // added data type
        // data: JSON.stringify(ModelsData),
        headers: {
            "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Headers" : "*",
            "Accept": "*",
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + sessionStorage.token
        },

        success: function printData(res) {
            alert("Models list loaded Successfully");
            // console.log(res);
            res = JSON.parse(res);
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                xyz(res[i].RiskProfile, res[i].ModelName, "modelTables");
            }
        },


        error: function (er) {
            alert("errrorr");
            alert(JSON.stringify(er));
        }
    });
});

function xyz(RiskProfile, ModelName, id) {
    let r = document.createElement("tr");
    let d1 = document.createElement("td");
    d1.innerHTML = RiskProfile;
    let d2 = document.createElement("td");
    d2.innerHTML = ModelName;
    
    document.getElementById(id).appendChild(r);
    document.getElementById(id).appendChild(d1);
    document.getElementById(id).appendChild(d2);
}
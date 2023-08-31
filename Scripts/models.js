$(document).ready(function () {


    // Getting RiskProfiles list for selecting model
    $.ajax({
        url: "https://localhost:7143/RiskProfileList",
        type: 'GET',
        dataType: 'json',
        // added data type
        // data: JSON.stringify(modeldata),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Accept": "*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.token
        },
        success: function addRiskProfile(res, status, xhr) {
            alert("Risk Profile list updated");
            alert(xhr.responseText);
            var RiskProfileList = JSON.parse(xhr.responseText);
            console.log(RiskProfileList);
            for (var i = 0; i < RiskProfileList.length; i++) {
                document.getElementById("riskProfileDropDown").appendChild(addModel(RiskProfileList[i].RiskProfile));
            }
        },
        error: function (er) {
            alert("error");
            // alert(JSON.stringify(er));
        }

    }).then;


    // getting Models list for specific Risk Profile
    document.getElementById("refreshButton").addEventListener("click", function () {
        var RiskProfile = document.getElementById("riskProfileDropDown").value;
        console.log(RiskProfile);

        var modeldata = {
            "RiskProfile": RiskProfile
        };

        $.ajax({
            url: "https://localhost:7143/selectedModelList",
            type: 'POST',
            // dataType: 'Json',
            // added data type
            data: JSON.stringify(modeldata),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Accept": "*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.token
            },
            success: function addModelList(modelList) {
                alert("model list updated");
                // alert(xhr.responseText);
                modelList = JSON.parse(modelList);
                console.log(modelList);
                for (var i = 0; i < modelList.length; i++) {
                    document.getElementById("ModelDropDown").appendChild(addModel(modelList[i].Model));
                }
            },
            error: function (er) {
                alert("error");
                // alert(JSON.stringify(er));
            }

        });


    });



    //Getting Data for specific model

    document.getElementById("refreshButtonModel").addEventListener("click", function () {
        var RiskProfile = document.getElementById("riskProfileDropDown").value;
        // console.log(RiskProfile);
        var Model = document.getElementById("ModelDropDown").value;
        // console.log(SelectedModel);
        var modelInfo = {
            "RiskProfile": RiskProfile,
            "Model": Model

        };

        $.ajax({
            url: "https://localhost:7143/existingModelsData",
            type: 'POST',
            data: JSON.stringify(modelInfo),
            // added data type
            // data: JSON.stringify(ModelsData),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Accept": "*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.token
            },

            success: function printData(res) {
                alert("Models list loaded Successfully");
                // console.log(res);
                res = JSON.parse(res);
                // console.log("readed")
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    xyz(res[i].Asset, res[i].Securities, res[i].Weightage, "modelTables");
                }
            },
            error: function (er) {
                alert("errrorr");
                // alert(JSON.stringify(er));
            }
        });
    });

});

function xyz(Asset, Securities, Weightage, id) {
    let r = document.createElement("tr");
    let d1 = document.createElement("td");
    d1.innerHTML = Asset;
    let d2 = document.createElement("td");
    d2.innerHTML = Securities;
    let d3 = document.createElement("td");
    d3.innerHTML = Weightage;

    document.getElementById(id).appendChild(r);
    document.getElementById(id).appendChild(d1);
    document.getElementById(id).appendChild(d2);
    document.getElementById(id).appendChild(d3);
}

function addRiskProfile(val) {
    let opt = document.createElement("option");
    opt.setAttribute("value", val);
    opt.innerHTML = val;
    return opt;
}

function addModel(val) {
    let opt = document.createElement("option");
    opt.setAttribute("value", val);
    opt.innerHTML = val;
    return opt;
}
$(document).ready(function () {
    const array = new Array();

    // fetching data from list of secruties table
    $.ajax({
        url: "https://localhost:7143/securitiesList",
        type: 'GET',
        // added data type
        // data: JSON.stringify(newClientData),
        headers: {
            "Access-Control-Allow-Origin": "*",
            //    "Access-Control-Request-Method" : "*",
            "Accept": "*",
            "Content-Type": "application/json",
            // "Authorization" : "Bearer " + sessionStorage.token
        },

        success: function printData(res) {
            // alert("Securities list loaded Successfully");
            // console.log(res);
            res = JSON.parse(res);
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                var obj = securities(i + 1, res[i].Securities);
                document.getElementById("securityList").appendChild(obj["input"]);
                document.getElementById("securityList").appendChild(obj["label"]);
                document.getElementById("securityList").appendChild(document.createElement("br"));
            }

            document.getElementById("submitList").addEventListener("click", () => {

                var ModelTable = document.getElementById("newModelTable");
                ModelTable.innerHTML = null;

                let head = document.createElement("thead");
                head.setAttribute("id", "securitiesTables");
                head.setAttribute("class", "bg-primary text-white");
                document.getElementById("newModelTable").appendChild(head);

                for (var i = 1; i <= res.length; i++) {
                    if (document.getElementById(i).checked) {
                        securityTable(document.getElementById(i).value, i, "newModelTable");
                        array.push(i);
                    }
                }
                console.log(array);
            })
        },
        error: function (er) {
            alert("errrorr");
            alert(JSON.stringify(er));
        }
    });



    // sending Model data to backend
    document.getElementById("submitSecurities").addEventListener("click", function (event) {
        event.preventDefault();
        var len = array.length;
        let sum = 0;
        console.log("sum:" + sum + " TemparraY:" + array);
        for (var i = 0; i < len; i++) {
            sum += parseInt(document.getElementById("box_" + array[i]).value);
        }
        if (sum != 100) {
            alert("Recheck the securities weightage");
        }

        else {
            for (var i = 1; i <= array.length;) {
                let j = array.pop();
                let ModelName = document.getElementById("modelName").value;
                let RiskProfile = document.getElementById("risk").value;
                let Securities = document.getElementById(j).value;
                let Weightage = document.getElementById("box_" + j).value;

                // let ModelName = document.getElementById("modelName").value;
                // let RiskProfile = document.getElementById("risk").value;
                // let Securities = document.getElementById("").value;

                var newModelData = {
                    "ModelName": ModelName,
                    "RiskProfile": RiskProfile,
                    "Securities": Securities,
                    "Weightage": Weightage
                };
                console.log(JSON.stringify(newModelData));

                $.ajax({
                    url: "https://localhost:7143/newModelData",
                    type: 'POST',
                    // added data type
                    data: JSON.stringify(newModelData),
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                           "Access-Control-Request-Method" : "*",
                        "Accept": "*",
                        "Content-Type": "application/json",
                        "Authorization" : "Bearer " + sessionStorage.token
                    },
                    success: function (res) {
                        // alert("New Model added Successfully");
                        // alert(JSON.stringify(res));
                        location.href="models.html";
                    },
                    error: function (er) {
                        alert("errrorr");
                        alert(JSON.stringify(er));
                    }
                });
            }
        }



    });
});

function riskProfile() {
    var riskProfile = document.getElementById("risk").value;

    console.log(riskProfile);
}



function securities(id, val) {
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    inp.setAttribute("id", id);
    inp.setAttribute("value", val);
    let labl = document.createElement("label");
    labl.setAttribute("for", id);
    labl.innerHTML = val;
    var obj = {
        "input": inp,
        "label": labl
    };
    return obj;
}

function securityTable(Security, Sid, Tid) {
    let r = document.createElement("tr");
    let d1 = document.createElement("td");
    d1.innerHTML = Security;
    let inp = document.createElement("input");
    inp.setAttribute("type", "number");
    inp.setAttribute("id", "box_" + Sid);
    inp.setAttribute("min",0);
    document.getElementById(Tid).appendChild(r);
    document.getElementById(Tid).appendChild(d1);
    document.getElementById(Tid).appendChild(inp);
    console.log(inp);
}
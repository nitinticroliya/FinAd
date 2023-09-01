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
            "Access-Control-Allow-Headers": "*",
            "Accept": "*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.token
        },

        success: function printData(res) {
            // alert("Securities list loaded Successfully");
            // console.log(res);
            res = JSON.parse(res);
            console.log(res);
            var head = document.createElement("thead");
            var r = document.createElement("tr");
            var h1 = document.createElement("th");
            var h2 = document.createElement("th");
            h1.innerHTML = "Security";
            h2.innerHTML = "Asset Type";
            r.appendChild(h1);
            r.appendChild(h2);
            head.appendChild(r);
            document.getElementById("securityList").appendChild(head);
            document.getElementById("securityList").appendChild(document.createElement("br"));
            
            var body = document.createElement("tbody");


            for (var i = 0; i < res.length; i++) {
                var obj = securities(i, res[i].Securities, res[i].AssetClass);
                body.appendChild(obj);
                body.appendChild(document.createElement("br"));
            }
            document.getElementById("securityList").appendChild(body);

            document.getElementById("submitList").addEventListener("click", () => {

                var ModelTable = document.getElementById("newModelTable");
                ModelTable.innerHTML = null;

                for (var i = 0; i < res.length; i++) {
                    if (document.getElementById("check_"+i).checked) {
                        securityTable(res[i].Securities, res[i].AssetClass, i, "newModelTable");
                        array.push(i);
                    }
                }
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
                let Asset = document.getElementById("check_"+j).getAttribute("class");
                let Securities = document.getElementById("check_"+j).value;
                let Weightage = document.getElementById("box_" + j).value;

                // let ModelName = document.getElementById("modelName").value;
                // let RiskProfile = document.getElementById("risk").value;
                // let Securities = document.getElementById("").value;

                var newModelData = {
                    "ModelName": ModelName,
                    "RiskProfile": RiskProfile,
                    "Securities": Securities,
                    "AssetClass" : Asset,
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
                        "Access-Control-Allow-Method": "*",
                        "Accept": "*",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.token
                    },
                    success: function (res) {
                        // alert("New Model added Successfully");
                        // alert(JSON.stringify(res));
                        location.href = "models.html";
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



function securities(id, val, val2) {
    let r = document.createElement("tr");
    let d1 = document.createElement("td");
    let d2 = document.createElement("td");
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    inp.setAttribute("id", "check_"+id);
    inp.setAttribute("class", val2);
    
    inp.setAttribute("value", val);
    let labl = document.createElement("label");
    labl.setAttribute("for", "check_"+id);
    labl.innerHTML = val;
    d2.setAttribute("id", "Asset" + id)
    d2.innerHTML = val2;
    d1.appendChild(inp);
    d1.appendChild(labl);
    r.appendChild(d1);
    r.appendChild(d2);
    return r;
}

function securityTable(Security, AssetClass, Sid, Tid) {
    let r = document.createElement("tr");
    let d2 = document.createElement("td");
    d2.setAttribute("id", "a_"+Sid);
    d2.setAttribute("value", AssetClass);
    
    d2.innerHTML = AssetClass;
    let d1 = document.createElement("td");
    d1.setAttribute("id", Sid);
    d1.setAttribute("value", Security);
    d1.innerHTML = Security;
    let inp = document.createElement("input");
    inp.setAttribute("type", "number");
    inp.setAttribute("id", "box_" + Sid);
    inp.setAttribute("min", 0);
    r.appendChild(d2);
    d1.appendChild(inp);
    r.appendChild(d1);
    document.getElementById(Tid).appendChild(document.createElement("br"));
    document.getElementById(Tid).appendChild(r);

}
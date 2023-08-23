$(document).ready(function () {
    for(var i=0; i<5; i++){
        var obj = myFunction("id_"+i, "name_"+i, "Security "+i);
        document.getElementById("securityList").appendChild(obj["input"]);
        document.getElementById("securityList").appendChild(obj["label"]);
        document.getElementById("securityList").appendChild(document.createElement("br"));
    }
    document.getElementById("submitList").addEventListener("click",()=>{
        for(var i=0; i<5; i++){
            if(document.getElementById("id_"+i).checked){
                xyz(document.getElementById("id_"+i).value, "id_"+i, "newModelTable");
            }
        }
    })
});

function riskProfile() {
    var riskProfile = document.getElementById("risk").value;
    
    console.log(riskProfile);
}


function myFunction(id, name, val){
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    inp.setAttribute("id", id);
    inp.setAttribute("name", name);
    inp.setAttribute("value", val);
    let labl = document.createElement("label");
    labl.setAttribute("for", id);
    labl.innerHTML=val;
    var obj = {
        "input": inp,
        "label": labl
    };
    return obj;
}

function xyz(Security, Eid, Tid) {
    let r = document.createElement("tr");
    let d1 = document.createElement("td");
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("id", Eid);
    d1.innerHTML = Security;
    document.getElementById(Tid).appendChild(r);
    document.getElementById(Tid).appendChild(d1);
    document.getElementById(Tid).appendChild(inp);
    console.log(inp);
}
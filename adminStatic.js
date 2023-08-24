$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7143/allQuestions",
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
            alert("Client list loaded Successfully");
            // console.log(res);
            res = JSON.parse(res);
            console.log(res);
            for(var i=0; i<res.length; i++){
                document.getElementById(res[i].ID).value = res[i].Questions;
            }
        },
        error: function (er) {
            alert("errrorr");
            alert(JSON.stringify(er));
        }
    });
});
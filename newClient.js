$(document).ready(function () {
    document.getElementById("newClientSubmit").addEventListener("click", function (event) {
      
      let Name = document.getElementById("newClientName").value;
      let PhoneNo = document.getElementById("newClientPhoneNo").value;
      let Email = document.getElementById("newClientEmail").value;
      let PancardNo = document.getElementById("newClientPancardNo").value;
      let AadharNo = document.getElementById("newClientAadharNo").value;
      let RiskProfile = document.getElementById("newClientRiskProfile").value;
      let SuggestedModel = document.getElementById("newClientSuggestedModel").value;
  
      var newClientData = {
        "Name": Name,
        "PhoneNo": PhoneNo,
        "Email": Email,
        "PancardNo": PancardNo,
        "AadharNo": AadharNo,
        "RiskProfile": RiskProfile,
        "SuggestedModel": SuggestedModel,
      };
      console.log(JSON.stringify(newClientData));
      // Minimum eight characters, at least one letter, one number and one special character
      // let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      // if (pattern.test(passwordKey)) {
      //write the ajax code to send to backend then check the validation there as well.
      // alert("passed the password check " + passwordKey);
  
      $.ajax({
        url: "https://localhost:7143/newClientData",
        type: 'POST',
        // added data type
        data: JSON.stringify(newClientData),
        headers: {
          "Access-Control-Allow-Origin": "*",
          //    "Access-Control-Request-Method" : "*",
          "Accept": "*",
          "Content-Type": "application/json"
        },
        success: function (res) {
          alert("New Client Successfully");
          alert(JSON.stringify(res));
        },
        error: function (er) {
          alert("errrorr");
          alert(JSON.stringify(er));
        }
      });
    });
  });
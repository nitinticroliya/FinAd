$(document).ready(function () {
  document.getElementById("Next1").addEventListener("click", function () {
    
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let PhoneNo = document.getElementById("contact").value;
    let PancardNo = document.getElementById("pan").value;
    let AadharNo = document.getElementById("aadhar").value;
    let model = document.getElementById("modelDropdown").value;
    
    Next2.addEventListener("click", function() {
      let totalScore = 0;
  
      // Calculate total score based on selected radio button values
      const questions = Form2.querySelectorAll(".question");
      questions.forEach(question => {
        const selectedOption = question.querySelector("input[type='radio']:checked");
        if (selectedOption) {
          totalScore += parseInt(selectedOption.value);
        }
      });
      let category = "";
      if (totalScore <= 10) {
        category = "Low Risk";
      } else if (totalScore >= 11 && totalScore <= 18) {
        category = "Moderate Risk";
      } else if (totalScore >= 19 && totalScore <= 25) {
        category = "High Risk";
      }
      console.log(totalScore);
      console.log(category);
      document.getElementById("totalScore").innerHTML="Total Score Obtained: <b>"+ totalScore+"/25</b>";
      document.getElementById("category").innerHTML="Risk Profile is: <b>"+category+"</b>";
      
    });
    document.getElementById("submitBtn").addEventListener("click", function() {
      var newClientData = {
      "Name": Name,
      "PhoneNo": PhoneNo,
      "Email": Email,
      "PancardNo": PancardNo,
      "AadharNo": AadharNo,
      "RiskProfile": category,
      "SuggestedModel": model
    };
    console.log(JSON.stringify(newClientData));
    // Minimum eight characters, at least one letter, one number and one special character
    // let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // if (pattern.test(passwordKey)) {
    //write the ajax code to send to backend then check the validation there as well.
    // alert("passed the password check " + passwordKey);

  //   $.ajax({
  //     url: "https://localhost:7143/newClientData",
  //     type: 'POST',
  //     // added data type
  //     data: JSON.stringify(newClientData),
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       //    "Access-Control-Request-Method" : "*",
  //       "Accept": "*",
  //       "Content-Type": "application/json"
  //     },
  //     success: function (res) {
  //       alert("New Client Successfully");
  //       alert(JSON.stringify(res));
  //     },
  //     error: function (er) {
  //       alert("errrorr");
  //       alert(JSON.stringify(er));
  //     }
  //   });
  });
  });
});
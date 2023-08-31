$(document).ready(function () {
  document.getElementById("Next1").addEventListener("click", function (event) {
    event.preventDefault();

    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let PhoneNo = document.getElementById("contact").value;
    let PancardNo = document.getElementById("pan").value;
    let AadharNo = document.getElementById("aadhar").value;
    // var newClientData = {
    //   "Name": Name,
    //   "PhoneNo": PhoneNo,
    //   "Email": Email,
    //   "PancardNo": PancardNo,
    //   "AadharNo": AadharNo,
    //   "RiskProfile": category,
    //   "SuggestedModel": model
    // };
    // console.log(JSON.stringify(newClientData));
    Next2.addEventListener("click", function () {
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
      if (totalScore <= 7) {
        category = "VLR";
      } else if (totalScore >= 8 && totalScore <= 15) {
        category = "MR";
      } else if (totalScore >= 16) {
        category = "VHR";
      }
      console.log(totalScore);
      console.log(category);
      document.getElementById("totalScore").innerHTML = "Total Score Obtained: <b>" + totalScore + "/25</b>";
      document.getElementById("category").innerHTML = "Risk Profile is: <b>" + category + "</b>";

      var modeldata = {
        "RiskProfile": category
      };
      console.log(JSON.stringify(modeldata));

      $.ajax({
        url: "https://localhost:7143/desiredModelList",
        type: 'POST',
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
          modelList = JSON.parse(modelList);
          console.log(modelList);
          for (var i = 0; i < modelList.length; i++) {
            document.getElementById("modelDropDown").appendChild(addModel(modelList[i].Model));
          }
        },
        error: function (er) {
          alert("error");
          // alert(JSON.stringify(er));
        }

      });
    });



    document.getElementById("submitBtn").addEventListener("click", function (e) {
      e.preventDefault();

      let model = document.getElementById("modelDropDown").value;
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
      $.ajax({
        url: "https://localhost:7143/newClientData",
        type: 'POST',
        // added data type
        data: JSON.stringify(newClientData),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Accept": "*",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.token
        },
        success: function newClient(res) {
          alert("Client Added Successfully");
          location.href = "Clients.html"
          // modelList = JSON.parse(modelList);
          // console.log(modelList);
          // for (var i = 0; i < modelList.length; i++) {
          //   document.getElementById("modelDropDown").appendChild(addModel(modelList[i].Model));
          // }


          // console.log(JSON.parse(xhr.responseText).Value);
          //   sessionStorage.setItem("token",JSON.parse(xhr.responseText).Value);
          //   console.log(JSON.parse(xhr.responseText));
          // alert(JSON.stringify(res));
          // location.href="Clients.html";
        },
        error: function (er) {
          alert("error");
          console.log(JSON.stringify(er));
        }

      });
    });
  });
});


function addModel(val) {
  let opt = document.createElement("option");
  opt.setAttribute("value", val);
  opt.innerHTML = val;
  return opt;
}
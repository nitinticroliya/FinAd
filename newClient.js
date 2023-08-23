$(document).ready(function () {
    document.getElementById("newClientSubmit").addEventListener("click", function (event) {
      
      let Name = document.getElementById("name").value;
      let PhoneNo = document.getElementById("contact").value;
      let Email = document.getElementById("email").value;
      let PancardNo = document.getElementById("pan").value;
      let AadharNo = document.getElementById("aadhar").value;
  
      submitButton.addEventListener("click", function() {
        let totalScore = 0;
    
        // Calculate total score based on selected radio button values
        const questions = surveyForm.querySelectorAll(".question");
        questions.forEach(question => {
          const selectedOption = question.querySelector("input[type='radio']:checked");
          if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
          }
        });
        let category = "";
        if (totalScore >= 4 && totalScore <= 10) {
          category = "Category 1";
        } else if (totalScore >= 11 && totalScore <= 15) {
          category = "Category 2";
        } else if (totalScore >= 16 && totalScore <= 20) {
          category = "Category 3";
        } else if (totalScore >= 21 && totalScore <= 25) {
          category = "Category 4";
        }
    
        // Display category
        categoryDisplay.textContent = `Category: ${category}`;
        console.log(category);
    
        // Show result section
        resultSection.classList.remove("hidden");
      });

      var newClientData = {
        "Name": Name,
        "PhoneNo": PhoneNo,
        "Email": Email,
        "PancardNo": PancardNo,
        "AadharNo": AadharNo,
        "RiskProfile": Category,
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
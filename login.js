//evve
$(document).ready(function () {
  document.getElementById("signinBtn").addEventListener("click", function (event) {



    //   let Name = document.getElementById("advisorName").value;
    //   // let dob = document.getElementById("advisorDOB").value;
    //   // let gender = document.getElementById("advisorGender").value;
    //   let phoneNo = document.getElementById("advisorPhoneNo").value;
    //   let eMail = document.getElementById("advisorEmail").value;
    //   let address = document.getElementById("advisorAddress").value;
    //   // let pancardNo = document.getElementById("advisorPancard").value;
    //   // let experience = document.getElementById("advisorExp").value;
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    var loginCheck = {
      // "Name": Name,
      // "Dob": dob,
      // "Gender": gender,
      // "PhoneNo": phoneNo,
      "Email": loginEmail,
      // "Address": address,
      // "PancardNo": pancardNo,
      // "Experience": experience,
      // "Username": username,
      "Password": loginPassword
    };
    console.log(JSON.stringify(loginCheck));
    // Minimum eight characters, at least one letter, one number and one special character
    // let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // if (pattern.test(passwordKey)) {
    //write the ajax code to send to backend then check the validation there as well.
    // alert("passed the password check " + passwordKey);

    $.ajax({
      url: "https://localhost:7143/advisorLogin",
      type: 'POST',
      // added data type
      data: JSON.stringify(loginCheck),
      headers: {
        "Access-Control-Allow-Origin": "*",
       // "Access-Control-Ällow-Headers": "*",
        "Accept": "*",
        "Content-Type": "application/json"

      },
      success: function (res, status, xhr) {
        alert("Logged in Successfully, Welcome");

        // console.log(JSON.parse(xhr.responseText).Value);
        var tokken = xhr.getResponseHeader("token");
        console.log(xhr);
        sessionStorage.setItem("token", tokken);
        
        // alert(JSON.stringify(res));
        location.href = "advisorHome.html";
      },
      error: function (er) {
        alert("Incorrect Email or Password");
        // alert(JSON.stringify(er));
      }

    });
  });
});
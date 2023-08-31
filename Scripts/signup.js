$(document).ready(function () {
  document.getElementById("submitSignup").addEventListener("click", function (event) {
    
    let Name = document.getElementById("advisorName").value;
    // let dob = document.getElementById("advisorDOB").value;
    // let gender = document.getElementById("advisorGender").value;
    let phoneNo = document.getElementById("advisorPhoneNo").value;
    let eMail = document.getElementById("advisorEmail").value;
    let address = document.getElementById("advisorAddress").value;
    // let pancardNo = document.getElementById("advisorPancard").value;
    // let experience = document.getElementById("advisorExp").value;
    let username = document.getElementById("advisorUsername").value;
    let password = document.getElementById("advisorPassword").value;

    var credentials = {
      "Name": Name,
      // "Dob": dob,
      // "Gender": gender,
      "PhoneNo": phoneNo,
      "Email": eMail,
      "Address": address,
      // "PancardNo": pancardNo,
      // "Experience": experience,
      "Username": username,
      "Password": password,
    };
    console.log(JSON.stringify(credentials));
    // Minimum eight characters, at least one letter, one number and one special character
    // let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // if (pattern.test(passwordKey)) {
    //write the ajax code to send to backend then check the validation there as well.
    // alert("passed the password check " + passwordKey);

    $.ajax({
      url: "https://localhost:7143/advisorSignup",
      type: 'POST',
      // added data type
      data: JSON.stringify(credentials),
      headers: {
        "Access-Control-Allow-Origin": "*",
        //    "Access-Control-Request-Method" : "*",
        "Accept": "*",
        "Content-Type": "application/json"
      },
      success: function (res) {
        alert("Signed up Successfully, Login");
        alert(JSON.stringify(res));
      },
      error: function (er) {
        alert("errrorr");
        alert(JSON.stringify(er));
      }
    });
  });
});


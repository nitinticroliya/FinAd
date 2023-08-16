// const slidePage = document.querySelector(".slide-page");
// const slidePageNext = document.querySelector(".page");
// const nextBtnFirst = document.querySelector(".firstNext");
// const prevBtnSec = document.querySelector(".prev-1");
// const nextBtnSec = document.querySelector(".next-1");
// const prevBtnThird = document.querySelector(".prev-2");
// const nextBtnThird = document.querySelector(".next-2");
// const prevBtnFourth = document.querySelector(".prev-3");
// const submitBtn = document.querySelector(".submit");
// const progressText = document.querySelectorAll(".step p");
// const progressCheck = document.querySelectorAll(".step .check");
// const bullet = document.querySelectorAll(".step .bullet");
// let current = 1;

// nextBtnFirst.addEventListener("click", function(event){
//     event.preventDefault();
//     slidePage.Style.marginleft = "-25%";
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
// });

// nextBtnFirst.onclick = (e) => {
//   e.preventDefault();
//   // slidePage.classList.add("active");
//   // slidePage.Style.marginleft = "-25%";
//   // progressCheck[current - 1].classList.add(active);
//   // progressText[current - 1].classList.add(active);
//   // current += 1;
// }

// nextBtnSec.onclick = (e) => {
//   e.preventDefault();
//   // slidePage.classList.add(äctive);
//   // slidePage.Style.marginleft = "-50%";
//   // progressCheck[current - 1].classList.add(active);
//   // progressText[current - 1].classList.add(active);
//   // current += 1;
// }

// nextBtnThird.onclick = (e) => {
//   e.preventDefault();
//   // slidePage.classList.add(äctive);
//   // slidePage.Style.marginleft = "-75%";
//   // progressCheck[current - 1].classList.add(active);
//   // progressText[current - 1].classList.add(active);
//   // current += 1;
// }

// nextBtnSec.addEventListener("click", function(event){
//     event.preventDefault();
//     slidePage.Style.marginleft = "-50%";
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
// });

// nextBtnThird.addEventListener("click", function(event){
//     event.preventDefault();
//     slidePage.Style.marginleft = "-75%";
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
// });



// prevBtnSec.addEventListener("click", function(event){
//     event.preventDefault();
//     slidePage.Style.marginleft = "0%";
//     bullet[current - 2].classList.remove("active");
//     progressCheck[current - 2].classList.remove("active");
//     progressText[current - 2].classList.remove("active");
//     current -= 1;
// });

// prevBtnSec.onclick = (e) => {
//   e.preventDefault();
//   slidePageNext.classList.remove("active");
// }

// prevBtnThird.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.Style.marginleft = "-25%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });

// prevBtnFourth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.Style.marginleft = "-50%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });



$(document).ready(function () {
  document.getElementById("submitSignup").addEventListener("click", function (event) {
    // bullet[current - 1].classList.add(active);
    // progressCheck[current - 1].classList.add("active");
    // progressText[current - 1].classList.add("active");
    // current += 1;
    // setTimeout(function(){
    //     alert("Sign up successful, Login Now.");
    //     location.reload();
    // },800);



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
// document.getElementById("loginNav").addEventListener("click", () => {
//   let visibility = document.getElementById("loginBox").style.display;
//   console.log(visibility + " answer ");
//   if (visibility === "block") {
//     document.getElementById("loginBox").style.display = "none";
//   } else {
//     document.getElementById("loginBox").style.display = "block";
//   }
// });




//evve
// $(document).ready(function () {
//   document.getElementById("signinBtn").addEventListener("click", function (event) {



//   //   let Name = document.getElementById("advisorName").value;
//   //   // let dob = document.getElementById("advisorDOB").value;
//   //   // let gender = document.getElementById("advisorGender").value;
//   //   let phoneNo = document.getElementById("advisorPhoneNo").value;
//   //   let eMail = document.getElementById("advisorEmail").value;
//   //   let address = document.getElementById("advisorAddress").value;
//   //   // let pancardNo = document.getElementById("advisorPancard").value;
//   //   // let experience = document.getElementById("advisorExp").value;
//     let loginEmail = document.getElementById("loginEmail").value;
//     let loginPassword = document.getElementById("loginPassword").value;

//     var loginCheck = {
//       // "Name": Name,
//       // "Dob": dob,
//       // "Gender": gender,
//       // "PhoneNo": phoneNo,
//       "Email": loginEmail,
//       // "Address": address,
//       // "PancardNo": pancardNo,
//       // "Experience": experience,
//       // "Username": username,
//       "Password": loginPassword,
//     };
//     console.log(JSON.stringify(loginCheck));
//     // Minimum eight characters, at least one letter, one number and one special character
//     // let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//     // if (pattern.test(passwordKey)) {
//     //write the ajax code to send to backend then check the validation there as well.
//     // alert("passed the password check " + passwordKey);

//     $.ajax({
//       url: "https://localhost:7143/advisorLogin",
//       type: 'POST',
//       // added data type
//       data: JSON.stringify(credentials),
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         //    "Access-Control-Request-Method" : "*",
//         "Accept": "*",
//         "Content-Type": "application/json"
//       },
//       success: function (res) {
//         alert("Logged in Successfully, Welcome");
//         alert(JSON.stringify(res));
//       },
//       error: function (er) {
//         alert("Incorrect Email or Password");
//         alert(JSON.stringify(er));
//       }

//     });
//   });
// });

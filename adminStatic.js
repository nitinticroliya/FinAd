var qNo = 1
$(document).ready(function () {
  var addQuestion = document.getElementById('addQuestion')
  var submitQuestion = document.getElementById('submitQuestion')
  var resetQuestion = document.getElementById('resetQuestions')
  var addOption = document.getElementById('addOption')
  var submit = document.getElementById('submit')
  // $.ajax({
  //     url: "https://localhost:7143/existingClientsData",
  //     type: 'GET',
  //     // added data type
  //     // data: JSON.stringify(newClientData),
  //     headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         //    "Access-Control-Request-Method" : "*",
  //         "Accept": "*",
  //         "Content-Type": "application/json",
  //         "Authorization" : "Bearer " + sessionStorage.token
  //     },

  //     success: function printData(res) {
  //         alert("Client list loaded Successfully");
  //         // console.log(res);
  //         res = JSON.parse(res);
  //         console.log(res);
  //         for(var i=0; i<res.length; i++){

  //         }
  //     },
  //     error: function (er) {
  //         alert("errrorr");
  //         alert(JSON.stringify(er));
  //     }
  // });

  addQuestionToTable('value', 'QuestionTable')
  addQuestion.addEventListener('click', function () {
    addQuestionToTable('', 'QuestionTable')
  })
  resetQuestion.addEventListener('click', function () {
    document.getElementById('QuestionTable').innerHTML = ''
    qNo = 1
    addQuestionToTable('value', 'QuestionTable')
  })
  submitQuestion.addEventListener('click', function () {
    submitQuestions()
    addOptionToTable('optionTable')
  })
  addOption.addEventListener("click", function(){
    addOptionToTable('optionTable')
  })
  submit.addEventListener("click", function(){
    addOptionToTable('optionTable')
  })
    
})

function addQuestionToTable (value, Tid) {
  var r = document.createElement('tr')
  r.setAttribute('id', 'q' + qNo)
  var d1 = document.createElement('td')
  d1.innerHTML = 'Question ' + qNo
  var d2 = document.createElement('td')
  var inp = document.createElement('input')
  inp.setAttribute('id', 'inputQ' + qNo)
  inp.setAttribute('type', 'text')
  inp.setAttribute('value', value)
  d2.appendChild(inp)
  r.appendChild(d1)
  r.appendChild(d2)
  document.getElementById(Tid).appendChild(r)
  qNo++
  console.log(r)
}

function addQuestionInDropdown (val) {
  let opt = document.createElement('option')
  opt.setAttribute('value', val)
  opt.innerHTML = val
  return opt
}

function submitQuestions () {
  var len = document.getElementById('QuestionTable').rows.length
  for (var i = 1; i <= len; i++) {
    console.log(document.getElementById('inputQ' + i).value)
  }
}
var oNo = 0
function addOptionToTable (Tid) {
  oNo++
  var r = document.createElement('tr')
  r.setAttribute('id', 'O' + oNo)
  var d1 = document.createElement('td')
  var labl = document.createElement('label')
  labl.setAttribute('for', 'option' + oNo)
  d1.appendChild(labl)
  var select = document.createElement('select')
  select.setAttribute('name', 'option' + oNo)
  select.setAttribute('id', 'option' + oNo)
  res = getQuestList()
  for (var i = 0; i < res.length; i++) {
    select.appendChild(addQuestionInDropdown(res[i]))
  }
  d1.appendChild(select)
  var d2 = document.createElement('td')
  var inp = document.createElement('input')
  inp.setAttribute('id', 'inputO' + oNo)
  inp.setAttribute('type', 'text')
  d2.appendChild(inp)
  var d3 = document.createElement('td')
  inp = document.createElement('input')
  inp.setAttribute('id', 'inputO' + oNo)
  inp.setAttribute('type', 'text')
  d3.appendChild(inp)
  r.appendChild(d1)
  r.appendChild(d2)
  r.appendChild(d3)
  document.getElementById(Tid).appendChild(r)
  qNo++
  console.log(r)
}

function getQuestList () {
  var res = [
    'q12',
    'Q231',
    'q2112',
    'Q23121',
    'q121221',
    'Q2313121',
    'q1213',
    'Q232'
  ]
  return res
}


const student={
    name: 'Mateo Shkurti',
    studentID: 991570115,
    slateID: 'shkurtim'
}

class listData {

  constructor (number, element, imgPath){
    this.number=number; this.element=element; this.imgPath=imgPath;
  };

};

var data= [
  {"number": 19, "element": 'Snake', "imgPath": 'snake.jpg'},
  {"number": 8, "element": 'Himalayas', "imgPath": 'himalaya.jpg'},
  {"number": 11, "element": 'Kangaroo', "imgPath": 'kangaroo.jpg'},
  {"number": 21, "element": 'Umbrella', "imgPath": 'umbrella.jpg' },
  {"number": 18, "element": 'Raptors', "imgPath": 'raptors.jpg'},
  {"number": 20, "element": 'Terry Fox', "imgPath": 'terryFox.jpg'},
  {"number": 9, "element": 'Ice Cream', "imgPath": 'iceCream.jpg'},
  {"number": 13, "element": 'Milan', "imgPath": 'acMilan.jpg'},

];

var dataList= new Array();
for (let x of data){
  dataList.push(new listData(x.number, x.element, x.imgPath));

};

$(document).ready(function(){
  //i found that when resizing the page it wouldn't immediately change the viewport, 
  //but after reloading it would, 
  //maybe it is just for my browser but just in case 
  $(window).resize(function(){location.reload();});  
  
    localStorage.setItem("studentName", student.name);
    localStorage.setItem("studentID", student.studentID);
    localStorage.setItem("slateID", student.slateID);

    $("header").html(`${localStorage.getItem("studentName")} / A01 / SYST24444`)
    $("footer").html(`${localStorage.getItem("studentID")} / ${localStorage.getItem("studentName")}`)
  
    $("#listArea").html(`<h3>List Area</h3>`);
    $("#listArea").append(`<ul>`);
    for (let x of dataList){
    $("#listArea").append(
                          `<li><section title='${x.number}'><img src=img/${x.imgPath} width='25'> ${x.element}</section></li>`
    )};
    $("#listArea").append(`</ul>`);
        var alphaNumber=19;
    $("#toggleFirst").click(function(){
      $(`section [title = ${alphaNumber}] `).toggleClass('effect');
    });

    $("#toggleList").click(function(){
    $("#listArea").toggleClass("rotate");
      });
  });
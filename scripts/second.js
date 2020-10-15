$(document).ready(function(){
  //i found that when resizing the page it wouldn't immediately change the viewport, 
  //but after reloading it would, 
  //maybe it is just for my browser but just in case 
  $(window).resize(function(){location.reload();});  
  

    $("header").html(`${localStorage.getItem("studentName")} / A01 / SYST24444`)
    $("footer").html(`${localStorage.getItem("studentID")} / ${localStorage.getItem("studentName")}`)
    $("#image").html(`<img src='../img/myPicture.jpg' height=200px width=auto>`);
    $("#name").html(`Name: ${localStorage.getItem("studentName")}`);
    $("#sID").html(`Student ID: ${localStorage.getItem("studentID")}`);
    $("#slateID").html( `Slate ID: ${localStorage.getItem("slateID")}`)
  });
function myFunction() {
  var x = document.getElementById("mySelect").value;
    var pro1 = document.getElementById("project1");
     var pro2 = document.getElementById("project2");
     var pro3 = document.getElementById("project3");
     var pro4 = document.getElementById("project4");
     var pro5 = document.getElementById("project5");
     var pro6 = document.getElementById("project6");
     var pro7 = document.getElementById("project7");
     var pro8 = document.getElementById("project8");

    
  if (x == "php") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
      if (x == "all") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "block";
      pro5.style.display = "block";
      pro6.style.display = "block";
      pro7.style.display = "block";
  }
else if(x == "android"){
    pro2.style.display = "block";
    pro1.style.display = "none";
    pro3.style.display = "none";
    pro4.style.display = "none";
    pro5.style.display = "none";
    pro6.style.display = "none";
    pro7.style.display = "none";
    pro8.style.display = "none";
}
 else if (x == "html") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
    
 else if (x == "css") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
    
     else if (x == "js") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
    
     else if (x == "java") {
    pro2.style.display = "block";
    pro3.style.display = "block";
    pro5.style.display = "block";
    pro6.style.display = "block";
    pro7.style.display = "block";
    pro1.style.display = "none";
    pro4.style.display = "none";
    pro8.style.display = "none";
    
  }
    
      else if (x == "sql") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "block";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
    else if (x == "boot") {
    pro1.style.display = "block";
      pro3.style.display = "block";
      pro4.style.display = "block";
      pro8.style.display = "block";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
     else if (x == "jsp") {
     pro1.style.display = "none";
      pro3.style.display = "block";
      pro4.style.display = "none";
      pro8.style.display = "none";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
     else if (x == "networking") {
    pro1.style.display = "none";
      pro3.style.display = "block";
      pro4.style.display = "none";
      pro8.style.display = "none";
      pro2.style.display = "none";
      pro5.style.display = "none";
      pro6.style.display = "none";
      pro7.style.display = "none";
  }
}
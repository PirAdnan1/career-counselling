var btnnum = document.querySelectorAll("btn").length;
for(var i=0;i<btnnum;i++){

  document.querySelectorAll(".btn")[i].addEventListener("click",function clicked(){
    alert("i am clicked");
  });

}

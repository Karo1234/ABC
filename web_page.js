

// function printSentence(id, sentence)
// {

//         var index=0;
//         var intObject= setInterval(function() {
//                document.getElementById(id).innerHTML+=sentence[index]; 
//                index++;
//                if(index==sentence.length){
//                      clearInterval(intObject);
//                 }
//             }, 100);
// }
 


var pic = new Array(

         "necklace/115.jpg",
         "necklace/116.jpg",
         "necklace/113.jpg",
         "necklace/vznoc.jpg"
	);


var i=0;

   function previous(){
   if(i < 0){
   	i = 3; 
   } 
   document.getElementById("icn").src = pic[i];
  i--;

   }

function Next(){
	  if(i == 3){ 
   	 i = 0;
     }
document.getElementById("icn").src = pic[i];
   	i++;

}
    



$(function(){

var width =  '350px';
var height = '350px';

$(".nav-item img").on("click",function(){
  $(this).animate({width,height,opacity:'0.7'});
});

$("body").on("mouseout",function(){
  $(".nav-item img").animate({width:'250px',height:'200px'});
});

});


$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});


   //  function animateWord(word,i){
     
   //   document.getElementById("start").innerHTML = word.slice(0,i);
   //   i++;
   //   if(i > word.length) i=0;
     

   // t = setTimeout("animateWord('"+word+"',"+i+")",500);
   //  }







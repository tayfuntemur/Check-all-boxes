
const checkbox_multiple_select = document.getElementById("checkbox-multiple-select");
const checkbox_select = document.querySelectorAll(".checkbox-select");


checkbox_multiple_select.addEventListener("click",function(e){
   let mark_status=checkbox_multiple_select.checked;

 checkbox_select.forEach( function(checkbox){
  checkbox.checked=mark_status;
 })

});


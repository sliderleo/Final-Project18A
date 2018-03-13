function myPopFunction() {
	// When the user mouse over div, open the popup
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function getwords() {
  text = words.value;
  document.getElementById("para").innerHTML += '<p>'+text
  document.getElementById("words").value = ""
}
function getname() {
  text = cname.value;
  if(text==""){
  	document.getElementById("npara").innerHTML += '<p>'+"By Unknown"
  }else{
  document.getElementById("npara").innerHTML += '<p>'+"By "+text
  }
  document.getElementById("cname").value = ""
}
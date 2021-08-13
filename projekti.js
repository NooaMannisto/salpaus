function checkForBlank(){
  if (document.getElementById("answer").value == "") {
    document.getElementById("subcim_error_message").InnerHTML="You must add a title!";
    return false;
}
}
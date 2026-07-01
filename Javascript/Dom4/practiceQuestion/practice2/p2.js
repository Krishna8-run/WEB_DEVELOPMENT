/*Create an input element on the page with a placeholder "enter your naem" and an H2 heading on the pag einside HTML.
  The purpose of this input element is to enter a user's name so it should only input letters from a-z,A-Z and space (all other characters should not be detected).
  Wheneverr the user inputs their name,their input shoule be dynamically visible inside the heading.
  */

  let inputElement=document.querySelector("input");
    let h2Element=document.querySelector("h2");

  inputElement.addEventListener("input",function(event){
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
    h2Element.innerText=inputElement.value;
  })

  
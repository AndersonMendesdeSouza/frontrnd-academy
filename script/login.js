
 const form = document.getElementById("form-login")
 const link = document.getElementById("link")
 form.addEventListener("submit", (click)=>{
  click.preventDefault();

form.reset();

setTimeout(() => {
    link.click();
},0);
 })
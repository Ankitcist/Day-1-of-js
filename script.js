window.addEventListener("keypress", function(details){
    console.log(details);
    var h1 = this.document.querySelector('h1');
    h1.textContent = details.key;
    var sml = this.document.querySelector('small');
    sml.textContent = details.keyCode;
});


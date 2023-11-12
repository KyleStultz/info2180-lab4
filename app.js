window.onload = function(){
    let searchbutton = document.getElementById("btn")
    searchbutton.addEventListener ('click',function(e) {
        
        e.preventDefault();
        var searchquery = document.getElementById("superheroes").value;
        var herorequest = new XMLHttpRequest();
        var urlcode = "superheroes.php?query=" + searchquery;
        hrequest.onreadystatechange = function() {
            if (herorequest.readyState == XMLHttpRequest.DONE){
                if (herorequest.status == 200) {
                    var hero = herorequest.responseText;
                    var result = document.getElementById("result");
                    result.innerHTML = hero;
                } else{
                    alert("Error Detected");
                }
            }
        }
        herorequest.open("GET" , urlcode, true);
        herorequest.send();

    });
}

function sim () {
    alert ("Eu sei lulu!")
    }

    function desvia(t) {
        var btn = t; 
        btn.style.position = "absolute";
        btn.style.botton = geraPosição(10, 90); 
        btn.style.left = geraPosição(10, 90); 
        console.log("ta querendo enganar quem????");
    }

    
 function geraPosição(min, max){
    return (Math.random() * (max - min) + min) + "%";
 }
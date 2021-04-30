if (document.getElementById) { window.onload = swap };
        function swap() {
        var numimages=4;
        rndimg = new Array("./img/svg1.svg", "./img/svg2.svg", "./img/svg4.svg", "./img/svg5.svg"); 
        x=(Math.floor(Math.random()*numimages));
        randomimage=(rndimg[x]);
        document.getElementById("banner").style.backgroundImage = "url("+ randomimage +")"; 
        }

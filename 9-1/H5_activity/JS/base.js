// JavaScript Document
 window.onload = function(){
        var ohtml = document.documentElement;
        getSize();

        window.onresize = function(){
            getSize();
        }
        function getSize(){

            var screenWidth = ohtml.clientWidth;
            if(screenWidth <= 320){
                ohtml.style.fontSize = '20px';
            }else if(screenWidth >= 640){
                ohtml.style.fontSize = '40px';
            }else{
                ohtml.style.fontSize = screenWidth/(640/40)+'px';
            }
            
        }

    }
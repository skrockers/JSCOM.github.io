
window.onload=function(){
    var navLoginModel=document.getElementById('nav_sign_model');
    var navSignInBtn=document.getElementById('sign_icon');

    // navSignInBtn.addEventListener('click',function(){
    //     navLoginModel.style.visibility="visible"
    // });

    navSignInBtn.addEventListener('mouseover',function(){
        navLoginModel.style.visibility="visible";
    });
    navSignInBtn.addEventListener('mouseout',function(){
        navLoginModel.style.visibility="hidden";
    });

    // -----------------------------------------------------

    document.getElementById('prod1').addEventListener('mouseover',function(){
        document.getElementById('addtobag').style.visibility="visible";
    });
    document.getElementById('prod1').addEventListener('mouseout',function(){
        document.getElementById('addtobag').style.visibility="hidden";
    });





    document.getElementById('prod2').addEventListener('mouseover',function(){
        document.getElementById('addtobag2').style.visibility="visible";
    });
    document.getElementById('prod2').addEventListener('mouseout',function(){
        document.getElementById('addtobag2').style.visibility="hidden";
    });


    document.getElementById('prod3').addEventListener('mouseover',function(){
        document.getElementById('addtobag3').style.visibility="visible";
    });
    document.getElementById('prod3').addEventListener('mouseout',function(){
        document.getElementById('addtobag3').style.visibility="hidden";
    });


    document.getElementById('prod4').addEventListener('mouseover',function(){
        document.getElementById('addtobag4').style.visibility="visible";
    });
    document.getElementById('prod4').addEventListener('mouseout',function(){
        document.getElementById('addtobag4').style.visibility="hidden";
    });

    // Mobile Navigation Script


    var handburger=document.getElementById('handburger');
    var navSideBar=document.getElementById('nav_sidebar');
    var navClose=document.getElementById('nav_close');


    handburger.addEventListener('click',function(){
        navSideBar.style.left="0px";
    })
    navClose.addEventListener('click',function(){
        navSideBar.style.left="-250px";
    })
    
}

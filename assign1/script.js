$(document).ready(function()
{
    //// 1 ////
    $("#border").click(function () { 
        $("#myDiv").css({border:"3px solid red"})        
    });
    //// 2 ////
    var count=0;
    $("span").each(function(){
        if(count==4)
        $(this).html("")
        else
        $(this).html(count+1)
        count++;     
    })
    //// 3 ////
    var userid="";
    $("#userid").change(function () { 
        userid=$(this).val();
        console.log(userid);
        var url="https://reqres.in/api/users/"+userid;
    $.getJSON(url,
        function (vals, textStatus) {
            console.log(vals);
            console.log(textStatus)
            $("#first").text(vals.data.first_name);
            $("#last").text(vals.data.last_name);
            $("#avatar").attr("src",vals.data.avatar);   
        }
    );         
    });
    //// 4 ////
    $(".sq").mouseover(function () {
        $(this).toggleClass("red"); 
        
    });

    //// 5 ////
    $(".opa").mouseover(function()
        {
            var opa= parseInt($(".opa").css("opacity"))
            var int = setInterval(function(){
            opa-=0.3;
            $(".opa").css({opacity:opa})
            if(opa<=0)
            clearInterval(int)
        },200)   

        });

    $(".opa").mouseleave(function () { 
        var opa= parseInt($(".opa").css("opacity"))
        var int = setInterval(function(){
            opa+=0.3;
            $(".opa").css({opacity:opa})
            if(opa>=1)
            clearInterval(int)
        },200)    
    });


})
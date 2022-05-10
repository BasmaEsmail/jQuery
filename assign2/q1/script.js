$(function()
    {
        $("#modal").dialog({
            height:200,
            width:500,
            autoOpen:false,
            modal:true,
            buttons:{
                done:function()
                {
                  var name=$("#name").val()
                  var pass=$("#password").val()
                  $("#welcome").append("Welcome "+name)
                  $("#modal").dialog("close")
                },
                cancel:function ()
                {
                    $("#modal").dialog("close")
                }
            }
        })
        $("#sign").click(function(){

         $("#modal").dialog("open")

    })
}
)

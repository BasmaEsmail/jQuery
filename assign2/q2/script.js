$("#drag").draggable({
    revert:function(event) {
        $(this).data("uiDraggable").originalPosition = {
            top : 0,
            left : 0
        };
        return !event;
        }
});
$("#drop").droppable({
    accept:"#drag",
    drop: function() {
        $(this).css("background-color","deeppink");
    },
})
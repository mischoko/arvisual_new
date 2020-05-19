//show modal on download btn click
$('.dlBtn').on('click',function(){
    $('.dlModal').show();
});

//modal exit
$('.exitBtn').on('click',function(){
    $('.dlModal').hide();
});
$('.menuactive').on('click',function(){
    $('.y').addClass('wow fadeInLeft')
    $('.active').fadeIn('slow');
    $('.active').animate({ height: '50vh'},600);
    $('#c').fadeIn('slow');  
    new WOW().init() 
});
$('.active').on('click',function(){
    $('.active').animate({ height: '0'},600);
    $('#c').fadeOut('slow');   
    $('.active').fadeOut('slow');
    $('.y').removeClass('wow fadeInLeft');
})

new WOW().init()

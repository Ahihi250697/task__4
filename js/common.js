$('.interview-slide').on('init', function(event, slick){
		var _co = slick.slideCount;
		if(_co < 10){
			_co = '0' + _co;
		}	
        $(this).append('<div class="slider-count"><span class="current">01</span><span>/</span><span class="total">'+ _co+'</span></div>');
    });
$('.interview-slide').slick({
	dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.interview-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
            // finally let's do this after changing slides
            var _cu = currentSlide;
            if( _cu < 10){
            	_cu += 1;
            	_cu = '0' + _cu;
            }
            $('.slider-count .current').html(_cu);
        });

$('.footer > .under-bg').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
var _creProSlick = -1;
var _projectImg = [
	'images/img_tech_01.jpg',
	'images/img_tech_02.jpg',
	'images/img_tech_03.jpg',
	'images/img_tech_04.jpg',
	'images/img_tech_05.jpg'
	];
var _projectTitle = [
	'タイトル',
	'タイトル',
	'タイトル',
	'タイトル',
	'タイトル'
	];
var _projectTT = ['01','02','03','04','05'];
var _projectA = '<div class="project-item"><div class="l-mask p-rel"><img src="';
var _projectB = '"></div><div class="w-abs"><span>Project File</span><span>';
var _projectC = '</span><h3>';
var _projectD = '</h3></div></div>';
 
 function __projectAll(){
 	var _code = '<div class="project">';
 	$.each(_projectTT, function(index, val) {
 		var _stt = _projectTT[index],
 			_title = _projectTitle[index],
 			_img = _projectImg[index];

 		_code += _projectA + _img + _projectB + _stt + _projectC + _title + _projectD;
 	});
 	return _code + '</div>';
 }
 // __projectAll();
$(window).on('load resize', function() {
    var _wh = $(window).width();
    if (_wh <= 768) {
        if (_creProSlick == -1) {
            _creProSlick = 0;
            $('.project').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 1500,
			  dots: false,
			  arrows: false
			});
        } 
    }else {
    	if(_creProSlick == 0){
        	$('.project').slick('unslick');
        	$('.project').remove();
        	$('.technical').append(__projectAll());
        	_creProSlick = -1;
    	}	
    }
});
var _toToIsShow = 0;
$(window).on('scroll',function(event) {
	/* Act on the event */
	var _curPage = window.pageYOffset;
	if(_curPage > 300 && _toToIsShow == 0)
	{
		_toToIsShow = -1;
		$('.to-top-button').addClass('active');
		$('.header').addClass('active');
	}
	if(_curPage == 0){
		_toToIsShow = 0;
		$('.to-top-button').removeClass('active');
		$('.header').removeClass('active');
	}
});
// $('.project').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   console.log(nextSlide);
// });
$('.to-top-button').click(function (event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'swing');
});

$('.hambuger').click(function(){
	var _subMenu = $('.sub-menu');
	var _headerH = $('.header').innerHeight();
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		_subMenu.css({
			'padding':_headerH+'px'}).toggle("400");
	}
	else{
		$(this).addClass('active');
		_subMenu.css({
			'padding':_headerH+'px'}).toggle("400").css({
			display: 'flex'
		});
	}
});
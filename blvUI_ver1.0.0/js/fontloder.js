WebFont.load({
custom:{
families:['SourceHanSansJP-Light','SourceHanSansJP-Regular'],
urls:['css/webfont_sourcehansans.css']
},
loading: function(){//Load Start
},
fontloading: function(fontFamily, fontDescription){//fontFamily LoadStart
},
fontactive: function(fontFamily, fontDescription){//fontFamily OK
},
fontinactive: function(fontFamily, fontDescription){//fontFamily Browser NG
},
inactive: function(){//Browser NG
},
active: function(){//Web Font OK
var fontload = $.when($('.webfont').fadeOut(1000));
fontload.done(function() {
$('.webfont').addClass('webfontactive');
$('.webfont').fadeIn(1000);
});
} 
});

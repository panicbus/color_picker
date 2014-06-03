$(window).load(function(){

	cp = ColorPicker(
			document.getElementById('slide'), 
		 	document.getElementById('picker'), 
			function(hex, hsv, rgb, mousePicker, mouseSlide) {
    		currentColor = hex;
    		ColorPicker.positionIndicators(
        	document.getElementById('slide-indicator'),
       	  document.getElementById('picker-indicator'),
        	mouseSlide, 
        	mousePicker
    		);


  	// $('.inner-disc').on('click', function (text){
  	// 	$("<div />")
  	// 		.css({'background-color': hex, "width": "40px", "height": "20px"})
  	// 		.appendTo('.swatch-box');
  	// });



    	document.getElementById('outer-disc').style.backgroundColor = hex;
    	document.getElementById('hex').innerHTML = hex;
    	document.getElementById('rgb').innerHTML = 'rgb(' + rgb.r.toFixed() + ', ' + rgb.g.toFixed() + ', ' + rgb.b.toFixed() + ')';
    	document.getElementById('hsv').innerHTML = 'hsv(' + hsv.h.toFixed() + ', ' + hsv.s.toFixed(2) + ', ' + hsv.v.toFixed(2) + ')';
    });
    cp.setHex('#3fc061');

});
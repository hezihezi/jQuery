for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">'+
						'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
						'<div class="readMore">Read More</div>'+
						'<div class="moreInfo">'+
							'<div class="space"></div>'+
							'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
							'<div class="space"></div>'+
							'<div class="source">'+rowData.source+'</div>'+
							'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
							'<div class="location">'+rowData.location+'</div>'+
						'</div>'+
						'<div class="empty"></div>'+
					'</div>');

$template.find(".readMore").on("click", toggleContent)
$template.find(".readMore").on("mouseover", turnGrey)
$template.find(".readMore").on("mouseleave", turnGreen)

function toggleContent(){
		
	$quoteContainer = $(this).parent();
	
	if($quoteContainer.hasClass("expanded")){// quoteContainer has class .expanded (you can see content!), so remove content!
	   $quoteContainer.removeClass("expanded");
	}else{//quoteContainer does not have calsss expanded (you can't see content), so show content!
	   $quoteContainer.addClass("expanded");
	}
}//end of function toggleContent

function turnGrey(){
	$(this).css({
		"color":"#3e433e",
		"cursor":"pointer"
	})
}//end of function turnGrey

function turnGreen(){
	$(this).css({
		"color":"green",
	})
}//end of function turnGrey

$('#dataContainer').append($template);
	
}//end of for loop

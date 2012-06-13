

	function compruebaBusqueda()
	{
		
		var busqueda = document.getElementById("busqueda").value;
		
		
		if(busqueda === null || busqueda === '')
		{ $("#error").fadeIn("slow");}
		else
		{ $("#error").fadeOut();getImagesFlickr()}
		
		
	}
	
	
	

	function getImagesFlickr()
	{

		$("#images li").remove();
		var busqueda = document.getElementById("busqueda").value;

		if(busqueda === null || busqueda === '')
		{ busqueda = "The Killers"; }
	 
	
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
			lang    : 'en-us',
			tags    : busqueda,
			tagmode : 'all',
			limit   : '1',
			format  : 'json'
			},
			function(data)
			{
				$.each(data.items, function(i,item)
	  							{
	  								$("<img/>").attr({
	  								src:  item.media.m,
	  								title: 'hola',
	  								width: 150,
	  								height: 121
	  								}).appendTo("#images").wrap('<li><a href="' +  item.media.m + '" rel="lightbox[roadtrip]" title="Flickr"></a></li>');
         
     
     
	  							});
			});
  
  
	}	//Funcion getImagesFlickr
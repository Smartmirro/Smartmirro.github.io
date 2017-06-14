	function linkOphalen (){
		var link = ''
		
		//link = **hier op een magische wijze de link die de gebruiker heeft ingevoerd tevoorschijn halen**
		
		//---------------------------------demo-------------------------------------kan later weg
		//video
		//ink ='https://www.youtube.com/watch?v=6z4KK7RWjmk';
		
		//foto
		link ='http://www.realmenrealstyle.com/wp-content/uploads/17-17-Christensen-Knot.jpg';
		//----------------------------------demo------------------------------------kan later weg
		
		checkLink(link);
	}

	function checkLink (origineleLink){
		if (origineleLink.indexOf("www.youtube.com") > -1){
			linkAanpassen(origineleLink);
		} else if (origineleLink === ("")){
			divLeegmaken();
		} else {
			fotoWeergeven(origineleLink);
		}
	}

	function linkAanpassen (ingevoerdeLink){
		var nieuweLink = ingevoerdeLink.replace('watch?v=', 'embed/').concat('?autoplay=1');
		videoWeergeven(nieuweLink);
	}

	function videoWeergeven (link){
		document.getElementById('videoFoto').innerHTML= '<div>' + "<iframe width=100% height=300 src='" + link + "' frameborder=0 allowfullscreen></iframe>" + '</div>';
	}

	function fotoWeergeven (link){
		document.getElementById('videoFoto').innerHTML= '<div>' + '<img width=640" height="440" src= "' + link + '">' + '</div>';
	}

	function divLeegmaken (){
		document.getElementById('videoFoto').innerHTML=""
	}

	linkOphalen();

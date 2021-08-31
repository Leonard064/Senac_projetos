	//--Modal PEÇA JÁ--
    var modalp = document.getElementById('ModalPeca');

	var btnp = document.getElementById("img1");

	var spanp = document.getElementsByClassName("closep")[0];
 
	btnp.onclick = function() {
		modalp.style.display = "block";
	}

	spanp.onclick = function() {
		modalp.style.display = "none";
	}

	
	
	
	
	
   //--Modal CARDAPIO--
    var modalc = document.getElementById('Modalmenu');

	var btnc = document.getElementById("img2");

	var spanc = document.getElementsByClassName("closer")[0];
 
	btnc.onclick = function() {
		modalc.style.display = "block";
	}

	spanc.onclick = function() {
		modalc.style.display = "none";
	}

	
	
	
	
	
	
	
	 //--Modal FALE CONOSCO--

	   var modal = document.getElementById('Modaltel');

	   var btn = document.getElementById("img3");

	   var span = document.getElementsByClassName("close")[0];
 
	   btn.onclick = function() {
		  modal.style.display = "block";
	   }

	   span.onclick = function() {
		  modal.style.display = "none";
	   }

	  
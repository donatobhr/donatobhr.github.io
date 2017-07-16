if(innerWidth > 600){
	var formal_content = document.querySelector(".formal_content");
	var mooc_content = document.querySelector(".mooc_content");
	var language_content = document.querySelector(".language_content");
	var framework_content = document.querySelector(".framework_content");

	if(formal_content.scrollHeight > mooc_content.scrollHeight)
		mooc_content.style.height = formal_content.scrollHeight + 'px';
	else
		formal_content.style.height = mooc_content.scrollHeight + 'px';


	if(language_content.scrollHeight > framework_content.scrollHeight)
		framework_content.style.height = language_content.scrollHeight + 'px';
	else
		language_content.style.height = framework_content.scrollHeight + 'px';
	
}

function redirect(lang){
	if(lang == "spanish"){
		window.location.href = "../index.html"
	}

	if(lang == "english"){
		window.location.href = "./EN/index.html"
	}
}

function form_upload(event){
	event.preventDefault();
	var form = document.getElementById('form');
	var name = document.getElementById('name').value;
	var last_name = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var forBots = document.getElementById('forBots');

	if(name == "" || name == undefined || name == null){
		console.log("completar el campo nombre");
	}else if(last_name == "" || last_name == undefined || last_name == null){
		console.log("completar el campo last_name");
	}else if(email == "" || email == undefined || email == null){
		console.log("completar el campo email");
	}else if(message == "" || message == undefined || message == null){
		console.log("completar el campo message");
	}else if(forBots.checked){
		break;
	}else{
		form.submit();
	}


}
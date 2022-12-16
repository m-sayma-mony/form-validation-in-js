function valid() {
	var uname = document.getElementById("name");
	var gmail = document.getElementById("email");
	var pass = document.getElementById("password");
	var conf_pass = document.getElementById("con-pass");


// condition for name field
	if (uname.value == "") {
		document.getElementById("name-error").innerHTML="Please enter your name";
		uname.focus();
		return false;
	} else{
		document.getElementById("name-error").innerHTML="";
	}
// condition for email address field
	if (gmail.value == "") {
		document.getElementById("email-error").innerHTML="Please enter your email address";
		gmail.focus();
		return false;
	}else{
		document.getElementById("email-error").innerHTML="";
	}

// condition for password field
	if (pass.value == "") {
		document.getElementById("pass-error").innerHTML="Please enter password";
		pass.focus();
		return false;
	} else if(pass.value.length < 8){
		document.getElementById("pass-error").innerHTML="Please enter at least 8 character";
		pass.focus();
		return false;
	} else if(pass.value.length > 12){
		document.getElementById("pass-error").innerHTML="Please enter maxmimun 12 character";
		pass.focus();
		return false;
	}else{
		document.getElementById("pass-error").innerHTML="";
	}

// condition for Confirm password field
	if (conf_pass.value == "") {
		document.getElementById("con-pass-error").innerHTML="Please enter your confirm password";
		conf_pass.focus();
		return false;
	} else if(pass.value != conf_pass.value){
		document.getElementById("con-pass-error").innerHTML="Your password did not match";
		conf_pass.focus();
		return false;
	}else{
		document.getElementById("con-pass-error").innerHTML="";
	}
}
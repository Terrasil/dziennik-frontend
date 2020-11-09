$("#signup").click(function() {
	$("#first").fadeOut("fast", function() {
		document.title = 'Dziennik | Rejestracja';
		$("#second").fadeIn("fast");
	});
});

$("#signin").click(function() {
	$("#second").fadeOut("fast", function() {
		document.title = 'Dziennik | Panel logowania';
		$("#first").fadeIn("fast");
	});
});


  
$(function() {
	$("form[name='login']").validate({
		rules:{
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
			}
		},
		messages: {
			email: "Podaj poprawny adress email",
			password: {
				required: "Podaj hasło",
			}
		   
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
});
         


$(function() {
	$("form[name='registration']").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			firstname: "Podaj swoje imię",
			lastname: "Podaj swoje nazwisko",
			password: {
				required: "Podaj hasło",
				minlength: "Hasło musi mieć conajmniej 5 znaków"
			},
			email: "Podaj poprawny adres email"
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
});
document.addEventListener('DOMContentLoaded', function(e){
	let testimonialForm=document.getElementById('alecaddd-testimonial-form');
	testimonialForm.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('Prevent form to submit');
	})
});
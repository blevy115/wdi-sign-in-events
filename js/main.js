document.addEventListener('DOMContentLoaded', function() {
  var signIn = document.body.querySelector('.signin');
  var modal = document.body.querySelector('.modal');
  var close = modal.querySelector('.close');
  var inputs = modal.querySelectorAll('input');
  var submit = modal.querySelector('.submit')
  signIn.addEventListener('click', function(e){
    modal.style.display='block';
  });
  close.addEventListener('click', function(e){
    modal.style.display='none';
  });
  submit.addEventListener('click', function(e){
    inputs.forEach(function(input){
      input.className = 'error';
        e.stopPropagation();
    });
  });
  inputs.forEach(function(input){
    input.addEventListener('mouseenter', function(e){
      e.target.classList.remove('error');
    });
  });
  modal.addEventListener('click', function(e){
    modal.style.display = 'none';
  });
});

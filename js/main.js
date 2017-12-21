document.addEventListener('DOMContentLoaded', function() {
  var signIn = document.body.querySelector('.signin')
  var modal = document.body.querySelector('.modal')
  signIn.addEventListener('click', function(e){
    modal.style.display='block';
  })
});

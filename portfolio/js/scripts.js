document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const subject=document.getElementById('subject').value.trim();
    const message=document.getElementById('message').value.trim();
    if(!name||!email||!subject||!message){
      alert('Please complete all fields.');
      return;
    }
    form.reset();
    const modalEl=document.getElementById('contactModal');
    const modal=new bootstrap.Modal(modalEl);
    modal.show();
  });
});

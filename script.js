const form=document.getElementById('address-book');

form.addEventListener('submit',function (ev){
    ev.preventDefault();
    const data=new FormData(form);
    fetch('api/addressbook',{method:'POST',body:new FormData(form)});
});
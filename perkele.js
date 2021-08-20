document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);

  document.querySelector('.ilmoitus').innerHTML = document.querySelector('#kentta').value + "</b>";

  
  setTimeout(() => document.querySelector('.ilmoitus').innerHTML='' , 3000);

})

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("perkele toimi");

  if (document.querySelector('#teht_a').checked){
    alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }


  else {
    alert('merkkaa se a >:(')
}


if (document.querySelector('#teht_b').checked){
    alert('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
    }


  else {
    alert('merkkaa se b >:(')
}



  
  
});



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
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>π₯πΆπ πΆ ππΆπ ππ» πΉππππππ, πΆππΉ π₯ ππππ ππππ ππ πΉππππππ οΌπ»ππππ ΓππππΎππ, π£π«π«π¦</li>' ;
}


  else {
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" >π₯πΆπ πΆ ππΆπ ππ» πΉππππππ, πΆππΉ π₯ ππππ ππππ ππ πΉππππππ ples clicc bocks</li>' ;
}


if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>π₯πΆπ πΆ ππΆπ ππ» πΉππππππ, πΆππΉ π₯ ππππ ππππ ππ πΉππππππ οΌπ»ππππ ΓππππΎππ, π£π«π«π¦</li>' ;
}


  else {
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" >οΌπ»ππππ ΓππππΎππ, π£π«π«π¦ ples clicc bocks</li>' ;
}



  
  
});



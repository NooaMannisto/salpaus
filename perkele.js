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
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒 －𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦</li>' ;
}


  else {
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" >𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒 ples clicc bocks</li>' ;
}


if(document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒 －𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦</li>' ;
}


  else {
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" >－𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦 ples clicc bocks</li>' ;
}



  
  
});



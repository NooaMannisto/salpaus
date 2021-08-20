







let pvm="2021/08/18";

function pvmFin( vuosi, kk, pv){

    if (kk==03 || kk==04 || kk==05){
      
      return "kevät: "+pv+"."+kk+"."+vuosi;
    }
    else if(kk==06 || kk==07 || kk==08){
      
      return "kesä: "+pv+"."+kk+"."+vuosi;
    }
    else if(kk==09 || kk==10 || kk==11){
    
      return "syksy: "+pv+"."+kk+"."+vuosi;
    }
    else{
     
      return "talvi: "+pv+"."+kk+"."+vuosi;
    }













    return " :"+pv+"."+kk+"."+vuosi;
}




for(let i=1; i<16; i++){
console.log(i+ " " + pvmFin(pvm.split("/")[0], pvm.split("/")[1],
pvm.split("/")[2]));
}

/*aaa
aaaaa
aaaaaa
aaaaaaa
*/




















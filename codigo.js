function sorteio(){
    
    numeroSorte=prompt('Digier um número');

    while(numeroSorte > 10 || numeroSorte == null || numeroSorte == ""){
      numeroSorte=prompt('O número tem que esta entre 0 e 10, tente novamente')
    
    }
    aleatorio=Math.round(Math.random()*10)
           
    if(numeroSorte == aleatorio){
      paragrafoResultado.innerHTML = `Número sorteado foi ${aleatorio}
      Número digitado foi ${numeroSorte}.
      😎 Parabéns! Você ganhou!`  
      paragrafoResultado.style = 'background: #CC0066; color: white; line-height: 2.5 ';
      
    }else{
      paragrafoResultado.innerHTML = `Número sorteado foi ${aleatorio}
      Número digitado foi ${numeroSorte}.

      😥 Não foi dessa vez!
      Tente novamente!'`
      paragrafoResultado.style = 'background: #CC0066; color: white; line-height: 2.5';
    }
    
  }

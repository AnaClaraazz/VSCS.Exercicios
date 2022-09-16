let n, soma = 0
		for(n = 1; n <= 500; n++){
            if(n%2 !=0 && n%3 == 0){
                soma = n+soma
                alert(" A soma do " + n + "+" + n + "=" + soma);
		}

    }

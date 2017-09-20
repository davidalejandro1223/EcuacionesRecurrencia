function truncar(num){
	num = num*1000;
	num = Math.trunc(num);
	num = num/1000;
	return num;
}

function armarEcuacion (coefC, raices, numRep){
	var cadena = "La ecuacion en recurrencia es: Fn = ";
	if(numRep==0){
		for(i = 0; i < raices.length; i++){
			if(i == 0){
				cadena = cadena + "(" +  truncar(coefC[i]) + ")" + "(" + raices[i] + ")^n" ;
			}else{
				cadena = cadena + " + " + "(" +  truncar(coefC[i]) + ")" + "(" + raices[i] + ")^n" ;
			}
		}
	}else{
		for(i = 0; i < raices.length; i++){
			if (raices[i] == raices[i-1] && i>0){
				cadena = cadena + " + " + "(" +  truncar(coefC[i]) + ")" + "n" + "(" + raices[i] + ")^n" ;
			}else{
				if(i == 0){
					cadena = cadena + "(" +  truncar(coefC[i]) + ")" + "(" + raices[i] + ")^n" ;
				}else{
					cadena = cadena + " + " + "(" +  truncar(coefC[i]) + ")" + "(" + raices[i] + ")^n" ;
				}					
			}	
		}
	}
	console.log("Resultado " + cadena);
	return cadena;
}
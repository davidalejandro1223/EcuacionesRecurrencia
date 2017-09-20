function armarMatriz(raices, numRaices, arregloFn, arregloN) {
	let numRep = raicesRepetidas(raices)[0];
	let raicesRep = raicesRepetidas(raices)[1];
	let matrizCoef = [arregloN.length - 1];
	
	for (let j = 0; j <= arregloN.length; j++) {
		matrizCoef[j] = new Array(numRaices + 1);
	}

	console.log("numero de raices repetidas: " + numRep);
	console.log("raices repetidas: " + raicesRep);

	if (numRep == 0) {
		for (let i = 0; i < arregloN.length; i++) {
			for (let j = 0; j < numRaices; j++) {
				matrizCoef[i][j] = Math.pow(raices[j], arregloN[i]);
				console.log(matrizCoef[i][j]);
			}
			matrizCoef[i][numRaices] = arregloFn[i];
			console.log(matrizCoef[i][numRaices]);
		}
	}else{
		for(let i=0; i<arregloN.length; i++){
			for(let j=0; j<numRep; j++){
				matrizCoef[i][j] = Math.pow(arregloN[i], j)*Math.pow(raices[j], arregloN[i]);
			}
			for(let h = numRep; h<numRaices; h++){
				matrizCoef[i][h]= Math.pow(raices[h], arregloN[i]);
			}
			matrizCoef[i][numRaices] = arregloFn[i];
		}
	}

	return [matrizCoef,numRep];
}

function raicesRepetidas(raices) {
	let numRep = 0;
	let raicesRep = [];
	for (let i = 0; i < raices.length; i++) {
		for (let j = i + 1; j < raices.length; j++) {
			if (raices[i] == raices[j]) {
				if (numRep == 0) {
					numRep += 2;
				} else {
					numRep++;
				}
				raicesRep.push(raices[i]);
			}
		}
	}

	return [numRep, raicesRep];
}
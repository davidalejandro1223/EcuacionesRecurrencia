function armarMatriz(raices, numRaices, arregloFn, arregloN) {
	let numRep = raicesRepetidas(raices)[0];
	let raicesRep = raicesRepetidas(raices)[1];
	let matrizCoef = [arregloN.length - 1];

	for (let j = 0; j <= arregloN.length; j++) {
		matrizCoef[j] = new Array(numRaices + 1);
	}

	console.log("numero de raices repetidas: " + numRep);
	console.log("raices repetidas: " + raicesRep);

	if (numRep.length == 0) {
		for (let i = 0; i < arregloN.length; i++) {
			for (let j = 0; j < numRaices; j++) {
				matrizCoef[i][j] = Math.pow(raices[j], arregloN[i]);
				console.log(matrizCoef[i][j]);
			}
			matrizCoef[i][numRaices] = arregloFn[i];
			console.log(matrizCoef[i][numRaices]);
		}
	} else {
		for (let i = 0; i < arregloN.length; i++) {
			for (let j = 0; j < numRep.length; j++) {
				for (var k=0; k < numRep[j]; k++) {
					if(j==0){
						matrizCoef[i][k] = Math.pow(arregloN[i], k) * Math.pow(raices[k], arregloN[i]);
					}else{
						matrizCoef[i][k+numRep[j-1]] = Math.pow(arregloN[i], k) * Math.pow(raices[k+numRep[j-1]], arregloN[i]);
					}
				}
			}
			for (let h = numRep; h < numRaices; h++) {
				matrizCoef[i][h] = Math.pow(raices[h], arregloN[i]);
			}
			matrizCoef[i][numRaices] = arregloFn[i];
		}
	}

	return [matrizCoef, numRep];
}

function raicesRepetidas(raices) {
	let numRep = [];
	let raicesRep = [];
	let aux = 0;
	let repetido = false;
	let i = 0;
	for (let j = i + 1; j < raices.length; j++) {
		if (raices[i] == raices[j]) {
			repetido = true;
			if (aux == 0) {
				aux += 2;
			} else {
				aux++;
			}
			if (raicesRep.indexOf(raices[i]) == -1) {
				raicesRep.push(raices[i]);
			}
			if (j == (raices.length - 1)) {
				numRep.push(aux);
			}
		} else if (repetido) {
			numRep.push(aux);
			i = j;
			aux = 0;
			repetido = false;
		} else {
			i = j;
		}
	}
	return [numRep, raicesRep];
}
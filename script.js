function solucion(arregloCoef, arregloFn, arregloN, gradEcuacion){
	let raicesEcuacion = division(arregloCoef);
	console.log(raicesEcuacion);
	armarEcuacion(raicesEcuacion, raicesEcuacion.length, arregloFn, arregloN)


}
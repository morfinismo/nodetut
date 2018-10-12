const fs = require('fs');
const colors = require("colors/safe");

let crearArchivo = (base, limite)=>{

	console.log(base);

	return new Promise((resolve, reject)=>{

		if(!Number(base)){
			reject("La base no es un número");
			return;
		}

		let datosTabla = "";
		var nombreArchivo = `../bases-node/tablas/tabla-${base}.txt`;
		for( let i=1; i<=limite; i++){
			let nl = "\r\n";
			datosTabla += `${base} * ${i} = ${base * i} ${nl}`;
		}

		fs.writeFile(nombreArchivo, datosTabla, (err) => {
			if(err){
				reject(err);
			} else{
				resolve(`tabla-${base}.txt`);
			}
		});
	});

}

let listarTabla = (base, limite) => {
	return new Promise((resolve, reject) => {
		if(!Number(base)){
			reject("La base no es un número");
		}

		console.log("======================".green);
		console.log(`Tabla de ${base}`.green);
		console.log("======================".green);

		let i=1;
		let datosTabla = "";
		do{
			let nl = "\r\n";
			datosTabla += `${i} x ${base} = ${i * base}${nl}`;
			i++;
		} while(i<=limite)
		resolve(datosTabla);
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}




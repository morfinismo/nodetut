const argv = require("./config/yargs").argv;
const colors = require("colors");
const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar.js");

//console.log(argv);
const comando = argv._[0];

switch(comando){
	case "listar":
		listarTabla(argv.base, argv.limite)
			.then(tabla => console.log(tabla))
			.catch(err => console.log(err));
		break;
	case "crear":
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo}`))
			.catch(err=> console.log(err));
		break;
	default:
		"Comando no reconocido";	
}



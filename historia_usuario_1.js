const opciones ={

	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'c'
	}
}


const argv = require('yargs')
			.command('inscribir','los datos del aspirante al curso son: ',opciones)
			.argv
const fs=require('fs'); // se importa la libreria interna, la que hace que se cree el archivo





	let cursos = [
	{
		id: '1',
		nombre: 'Node JS',
		duracion: '32 horas',
		valor: 20000
	},
	{
		id: '2',
		nombre: 'Phyton',
		duracion: '40 horas',
		valor: 30000
	},
	{
		id: '3',
		nombre: 'Java',
		duracion: '30 horas',
		valor: 250000
	},
	];

	if(argv.id){

		let cursoabuscar = cursos.find( cursoseleccionado => cursoseleccionado.id == argv.i)
		nombrecurso= cursoabuscar.nombre;
		duracion=cursoabuscar.duracion;
		valor= cursoabuscar.valor;
		let crearArchivo= () =>{

			texto='El nombre del estudiante '+argv.n+'\n'+
			'con cedula numero '+argv.c+'\n'+
			'se ha matriculado en el curso: '+nombrecurso+'\n'+
			'con una duraccion de '+duracion+' horas '+'\n'+
			'el valor del curso es: '+valor;

			fs.writeFile('datos.txt',texto,(err)=>{
			if (err) throw (err);
			console.log('se ha creado el archivo');
		});


		}

		crearArchivo();

	}
	else{

		console.log('Los cursos ofertados son:');
	

	var num=0;

	function lista(){

		if (num < 3){

			console.log('El curso de Id '+cursos[num].id+' con nombre '+cursos[num].nombre+'\n'+
				'tiene una duracion de '+cursos[num].duracion+' horas y con un valor de '+cursos[num].valor);
			num++;
		}
		else{

			process.exit(1);// para salir de la ejecucion
		}

	}

	setInterval(lista,2000);// es un contador de tiempo
}
const empleados = [
    {
        id: 1,
        nombre: 'Hugo'
    },
    {
        id: 2,
        nombre: 'Faby'
    },
    {
        id: 3,
        nombre: 'Sofia'
    }
];

const salarios = [
    {
        id: 1,
        salario: 191200
    },
    {
        id: 2,
        salario: 122400
    }
];


const getEmpleado = (id) => {


    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre

        empleado
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`)


    });


}


const getSalario = (id) => {


    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id)?.salario

        salario
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`)


    });


}


const getInfUsuario = async (id) => {

    const empleado = await getEmpleado(id);
    return empleado;

}


const id = 1;

getInfUsuario(id)
    .then(msg => console.log(msg));

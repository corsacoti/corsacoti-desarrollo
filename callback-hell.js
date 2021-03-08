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

const salario = [
    {
        id: 1,
        salario: 1200
    },
    {
        id: 2,
        salario: 1400
    }
];

const getEmpleado = (id) => {

    const empleado = empleados.find((e) => {
        return e.id === id
    });

    return empleado;

}

console.log( getEmpleado(2) )


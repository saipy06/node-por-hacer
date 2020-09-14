const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion adicional'
}
const completado = {
    demand: true,
    alias: 'd',
    desc: 'descripcion adicional'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado compleatod de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}
const {
    model,
    Schema
} = require('mongoose');


var HorarioSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    horario_inicial: {
        type: String,
        required: true
    },
    horario_final: {
        type: String,
        required: true
    },
    dia_semana: {
        type: String,
        required: false,
        default: "Lunes"
    },
    id_aula: {
        type: Schema.Types.ObjectId,
        ref: 'aula',
        required: true
    },
    id_materia: {
        type: Schema.Types.ObjectId,
        ref: 'materia',
        required: true
    },
}, {
    collection: "horarios"
});


module.exports = model('horarios', HorarioSchema);
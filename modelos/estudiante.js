const {
    model,
    Schema
} = require('mongoose');

var estudianteSchema = new Schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    grado: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        default: new Date(),
        required: true
    },
}, {
    collection: "estudiantes"
})

module.exports = model('estudiante', estudianteSchema);
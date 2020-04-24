const {
    model,
    Schema
} = require('mongoose');


var materiasSchema = new Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }

}, {
    collection: "materias"
});


module.exports = model('materia', materiasSchema);
const {
    model,
    Schema
} = require('mongoose');


var aulasSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    }
}, {
    collection: "aulas"
});


module.exports = model('aula', aulasSchema);
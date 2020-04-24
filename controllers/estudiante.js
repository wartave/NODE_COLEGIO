const estudiante_modelo = require('../modelos/estudiante');
const ctrls = {}

ctrls.getEstudiantes = async (req, res) => {

    try {
        const filtro = {};

        if (req.query.nombre) {
            filtro = {
                nombre: req.query.nombre
            }
        }
        const estudiantes = await estudiante_modelo.find(filtro).sort({
            _id: -1
        });
        console.log(estudiantes)
        res.json({
            results: estudiantes
        });
    } catch (error) {
        console.log(error);

        res.status(500).json(error);
    }
}


ctrls.getEstudiante = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const estudiante = await estudiante_modelo.findById(id, req.body);
        res.json({
            result: estudiante
        });
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addEstudiantes = async (req, res) => {
    try {
        console.log(req.body);

        const estudiante = new estudiante_modelo(req.body);
        await estudiante.save();
        res.json({
            ok: true
        });
    } catch (error) {
        console.log(error);

        res.status(500).json(error);
    }
}

ctrls.UpdateEstudiantes = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await estudiante_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;
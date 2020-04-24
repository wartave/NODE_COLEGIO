const aula_modelo = require('../modelos/aula');
const ctrls = {}

ctrls.getAulas = async (req, res) => {
    try {

        const filtro = {};

        if (req.query.nombre) {
            filtro = {
                nombre: req.query.nombre
            }
        }

        const Aulas = await aula_modelo.find(filtro).sort({
            _id: -1
        });
        res.json({
            results: Aulas
        });
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addAulas = async (req, res) => {
    try {
        const Aulas = new aula_modelo(req.body);
        await Aulas.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

ctrls.UpdateAulas = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await aula_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;
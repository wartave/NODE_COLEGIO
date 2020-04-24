const horario_modelo = require('../modelos/horario');
const materia_modelo = require('../modelos/materia');
const aula = require('../modelos/aula');

const ctrls = {}

ctrls.getHorarios = async (req, res) => {
    try {

        const filtro = {};

        if (req.query.nombre) {
            filtro = {
                nombre: req.query.nombre
            }
        }

        const Horario = await horario_modelo.find(filtro).sort({
            _id: -1
        }).populate("id_materia", "nombre").populate("id_aula", "nombre")

        let horarioInfo = [];
        for (let h of Horario) {
            horarioInfo.push({
                dia_semana: h.dia_semana,
                descripcion: h.descripcion,
                horario_inicial: h.horario_inicial,
                horario_final: h.horario_final,
                id_materia: h.id_materia.nombre,
                id_aula: h.id_aula.nombre,
            })
        }


        res.json({
            results: horarioInfo
        });
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addHorario = async (req, res) => {
    try {
        console.log(req.body);

        const materia_modelos = await materia_modelo.findOne({
            codigo: req.body.id_materia
        })



        if (!materia_modelos) res.status(404).json({
            mensaje: "materia"
        });
        const aula_modelo = await aula.findOne({
            codigo: req.body.id_aula
        })

        if (!aula_modelo) res.status(404).json({
            mensaje: "aula"
        });


        req.body.id_materia = materia_modelos._id;
        req.body.aula_modelo = aula_modelo._id;


        const horarioNuevo = {
            descripcion: req.body.descripcion,
            horario_inicial: req.body.horario_inicial,
            horario_final: req.body.horario_final,
            dia_semana: req.body.dia_semana,
            id_materia: materia_modelos._id,
            id_aula: aula_modelo._id

        }

        const Horario = new horario_modelo(horarioNuevo);
        await Horario.save();
        res.json({
            ok: true
        });
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

ctrls.UpdateHorario = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await horario_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;
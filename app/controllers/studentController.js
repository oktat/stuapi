import Student from '../models/student.js'

const StudentController = {
    async index(req, res) {
        try {
            await StudentController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const students = await Student.findAll()
        res.status(200)
        res.json({
            success: true,
            data: students
        })
    },
    async show(req, res) {
        try {
            await StudentController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const student = await Student.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: student
        })
    },
    async store(req, res) {
        try {
            await StudentController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const student = await Student.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: student
        })
    },
    async update(req, res) {
        try {
            await StudentController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Student.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const student = await Student.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: student
        })
    },
    async destroy(req, res) {
        try {
            await StudentController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const student = await Student.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: student
        })
    }
}

export default StudentController

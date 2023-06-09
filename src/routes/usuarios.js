const express = require("express")
const  router = express.Router()

const usuariosContoller = require("../controllers/usuariosContoller")

router.get("/", usuariosContoller.listar) // acceder a el listar que se encuentra dentro de user controller abrala por si no se acuerda de como es
router.post("/add", usuariosContoller.save)
router.get("/delete/:id", usuariosContoller.delete)
router.get("/update/:id", usuariosContoller.edit)
router.post("/update/:id", usuariosContoller.update)

module.exports = router
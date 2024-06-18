const {QueryTypes}= require('sequelize')
const { mySequelize } = require("./db");



//SEARCH THE INPC IN TABLE INDICES FROM INDEX DATABASE

const consulta = async (par1, par2, par3, par4) => {
    try {
        let respuesta = await mySequelize.query(`SELECT * FROM indices WHERE mes=${par1} AND ejercicio =${par2} OR mes=${par3} AND ejercicio=${par4} ORDER BY ejercicio,mes`, { type: QueryTypes.SELECT });
        console.log(respuesta)
        if (respuesta[0] !== undefined) {
            return respuesta
        } else {
            return 1;
        }
    } catch (error) {
        return error
    }

}


module.exports={consulta}
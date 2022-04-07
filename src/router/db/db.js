const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI_PLANT)
        console.log('MongoDB connected: '+conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB

connectDB()

// Mongoose Schema
const plantSchema = new mongoose.Schema( {
    plant_name: String,
})

// Object model
const Plant = mongoose.model('Plant', plantSchema)

const Kasvi = new Plant({
    plant_name: 'Ruusu'
})

// Function to save plant to DB
async function saveToDB(name) {
    await name.save(function (err) {
        if(err) return console.log(err)
        console.log(`${name.plant_name} added`)
    })
}

saveToDB(Kasvi)
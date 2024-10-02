const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Note-app')
        console.log('DB Connected')
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectDb
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://marianoadm:upo3aqs7@cluster0.30id7um.mongodb.net/apiUsuarios");

        console.log("MongoDB conectado 🚀");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
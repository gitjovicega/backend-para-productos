const { Schema, model } = require('mongoose');

const articulosSchema = new Schema ({
    titulo: {type: String, require: true},
    imagen: String, 
    precio: String, 
    descripcion: String,
    stock: Number
    
});

module.exports = model('Prodcutos', articulosSchema);
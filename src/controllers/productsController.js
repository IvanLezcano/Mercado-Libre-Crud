const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const descuento= (descuento,precio ) =>{
			
	let resultadoParcial =descuento*precio/100
	return precio - resultadoParcial
}  
const controller = {
	// Root - Show all products
	index: (req, res) => {
		
	  return res.render('products',{
		  products,
		  descuento,
		  toThousand
	  })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let producto = products.find(producto => producto.id === +req.params.id);

        return res.render('detail',{
            producto,
			products,
			descuento,
        })
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form',{
			products
		})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		return res.render('product-edit-form',{
			products
		})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;

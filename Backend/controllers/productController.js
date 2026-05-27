const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const createProduct = async (req, res) => {
  try {

    console.log(req.file);
    console.log(req.body);

    const { title, description, category } = req.body;

    const result = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "products",
      }
    );

    const product = await Product.create({
      title : req.body.title,
      description : req.body.description,
      category : req.body.category,
      price : req.body.price,
      image: result.secure_url,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getProduct = async(req, res) =>
{
    try {

    const products = await Product.find();
      res.json(products);

}   catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
}
};

const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let imageUrl = product.image;

    // upload new image if exists
    if (req.file) {

      const result = await cloudinary.uploader.upload(req.file.path);

      imageUrl = result.secure_url;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: imageUrl,
      },
      { new: true }
    );

    res.json({
      message: "Product Updated",
      updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createProduct,
  getProduct, updateProduct , deleteProduct
};
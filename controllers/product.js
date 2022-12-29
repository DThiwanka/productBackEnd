const Product = require("../models/product");

exports.createProduct = async (req, res) => {
//   if (!req.body.sku || !req.body.quantity || !req.body.productname || req.body.image || req.body.productdesc) {
//     return res.status(422).json({
//       status: 422,
//       product: {
//         sku: "SKU is required",
//         quantity: "Quanetity is required",
//         productname: "Name is required",
//         image: "Image is required",
//         productdesc: "Product Desc is required",
//       },
//     });
//   }
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({
      status: 201,
      message: "Create successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "SKU already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.readProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send({
      status: 200,
      response: product,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.readProductById = async (req, res) => {
  const id = req.params.productId;
  try {
    const product = await Product.findById(id);
    res.status(200).send({
      status: 200,
      response: product,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.productId;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    if (!product) {
      return res.status(500).send({
        status: 500,
        message: `product not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Update successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "SKU already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.productId;
  try {
    const product = await Product.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
    if (!product) {
      return res.status(500).send({
        status: 500,
        message: `product not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Delete successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};
const ProductModel = require("../model/products")



exports.CreateProduct = (req, res) => {
  const reqBody = req.body;
  ProductModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(404).json({ status: "Create Fail", data: err });
    } else {
      res.status(200).json({ satus: "Create Successs", data: data });
    }
  });
};


 exports.ReadProduct = (req, res) => {
   const Quarry = {};
   const Projection =
     "ProductName ProductCode ProductImg UnitPrice Quantity TotalPrice";
   ProductModel.find(Quarry, Projection, (err, data) => {
     if (err) {
       res.status(404).json({ status: "Read Fail", data: err });
     } else {
       res.status(200).json({ satus: "Read Successs", data: data });
     }
   });
};


exports.UpdateProduct = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  const reqBody = req.body;
  ProductModel.updateOne(Query, reqBody, (err, data) => {
    if (err) {
      res.status(404).json({ satus: "Update Fail", data: err });
    } else {
      res.status(200).jons({ satus: "Update Success", data: data });
    }
  });
};


exports.DeletProduct = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  ProductModel.remove(Query, (err, data) => {
    if (err) {
      res.status(404).json({ satus: "Remove Fail", data: err });
    } else {
      res.status(200).jons({ satus: "Remove Success", data: data });
    }
  });
};


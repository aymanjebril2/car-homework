import Brand from "../models/brand.js";

const createNewBrand = async (req, res) => {
  try {
    const newBrand = await new Brand(req.body);
    await newBrand.save();
    return res.status(201).send(newBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBrand = async (req, res) => {
  try {
    const allBrand = await Brand.find();
    return res.status(200).send(allBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const brandId = await Brand.findById(id);
    if (brandId) {
      return res.status(200).send(brandId);
    }
    return res.status(404).send("Brand with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updatingBrand = async (req, res) => {
  try {
    const { id } = req.params;
    await Brand.findByIdAndUpdate(id, req.body, { new: true }, (err, brand) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!brand) {
        res.status(404).send("brand not found");
      }
      return res.status(200).json(brand);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deletingBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Brand.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("brand car deleted");
    }
    throw new Error(" brand not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default {
  createNewBrand,
  getAllBrand,
  getBrandById,
  updatingBrand,
  deletingBrand,
};

import Brand from "../models/brand.js";
import Models from "../models/models.js";

const createNewModels = async (req, res) => {
  try {
    //await console.log(req.body);
    const { id } = req.params;
    const brandId = await Models.find({ brand_id: id });
    if (brandId) {
      const newModels = await new Models(req.body);
      await newModels.save();
      return res.status(201).send(newModels);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllModel = async (req, res) => {
  try {
    const { id } = req.params;
    const allModesbyBrand = await Models.find({ brand_id: id });
    return res.status(200).send(allModesbyBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const ModelsId = await Models.findById(id);
    if (ModelsId) {
      return res.status(200).send(ModelsId);
    }
    return res.status(404).send("Models with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatingModel = async (req, res) => {
  try {
    const { id } = req.params;
    await Models.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, model) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!model) {
          res.status(404).send("brand not found");
        }
        return res.status(200).json(model);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deletingModel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Models.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("model  car get deleted");
    }
    throw new Error(" model not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default {
  createNewModels,
  getAllModel,
  getModelById,
  updatingModel,
  deletingModel,
};

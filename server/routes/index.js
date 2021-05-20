import Router from "express";
import controllers from "../controllers/index.js";
import controllersMod from "../controllers/models.js";
const router = Router();

router.get("/", async (req, res) => {
  res.send("this is the routing ");
});

router.post("/brands", controllers.createNewBrand);
router.get("/brands", controllers.getAllBrand);
router.get("/brands/:id", controllers.getBrandById);
router.put("/brands/:id", controllers.updatingBrand);
router.delete("/brands/:id", controllers.deletingBrand);
router.post("/models", controllersMod.createNewModels);
router.get("/models/:id", controllersMod.getAllModel);
router.get("/model/:id", controllersMod.getModelById);
router.put("/model/:id", controllersMod.updatingModel);
router.delete("/model/:id", controllersMod.deletingModel);

export default router;

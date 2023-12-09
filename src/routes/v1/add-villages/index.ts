import { AddVillage, DeleteByPK } from "@client/request";
import { isEmpty, startCase } from "lodash";
import { ClientRequest, Response, Router } from "express";
import { ProfileVillage } from "../../../models";
import { jsonResponse } from "../../../helper/response";

const router: Router = Router();

router.delete(
  "/villages",
  async (req: ClientRequest<DeleteByPK>, res: Response) => {
    try {
      const villageId = req.body.id;

      if (!villageId) {
        res.status(400).json({ message: "Invalid id" });
        return;
      }

      const profileVillage = await ProfileVillage.findByPk(villageId);

      if (!profileVillage) {
        res.status(404).json({ error: "Village not found" });
        return;
      }

      await profileVillage.destroy();
      res.status(200).json({ message: "Village successfully deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post(
  "/villages",
  async (req: ClientRequest<AddVillage>, res: Response) => {
    try {
      if (isEmpty(req.body.name)) {
        res
          .status(400)
          .send({ timestamp: req.timestamp, message: "name is required" });
        return;
      }

      const addProfilevillage = await ProfileVillage.create({
        name: startCase(req.body.name),
      });

      res.status(201).json(
        jsonResponse({
          response: addProfilevillage,
          message: "Village created",
        })
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/villages", async (_, res) => {
  try {
    const profileVillages = await ProfileVillage.findAll();
    res.json(jsonResponse({ response: profileVillages }));
  } catch (error) {
    console.error("Error fetching profile villages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router };

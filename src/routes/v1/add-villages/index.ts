import { AddVillageProps } from "@client/request";
import { isEmpty, startCase } from "lodash";
import { ClientRequest, Response, Router } from "express";
import { ProfileVillage } from "../../../models";

const router: Router = Router();

router.post(
  "/villages",
  async (req: ClientRequest<AddVillageProps>, res: Response) => {
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

      res.status(201).json(addProfilevillage);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/villages", async (_, res) => {
  try {
    const profileVillages = await ProfileVillage.findAll();
    res.json(profileVillages);
  } catch (error) {
    console.error("Error fetching profile villages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router };

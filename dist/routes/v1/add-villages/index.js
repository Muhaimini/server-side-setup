"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const lodash_1 = require("lodash");
const express_1 = require("express");
const models_1 = require("../../../models");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/villages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((0, lodash_1.isEmpty)(req.body.name)) {
            res
                .status(400)
                .send({ timestamp: req.timestamp, message: "name is required" });
            return;
        }
        const addProfilevillage = yield models_1.ProfileVillage.create({
            name: (0, lodash_1.startCase)(req.body.name),
        });
        res.status(201).json(addProfilevillage);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/villages", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileVillages = yield models_1.ProfileVillage.findAll();
        res.json(profileVillages);
    }
    catch (error) {
        console.error("Error fetching profile villages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));

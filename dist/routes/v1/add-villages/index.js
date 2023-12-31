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
const response_1 = require("../../../helper/response");
const router = (0, express_1.Router)();
exports.router = router;
router.delete("/villages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const villageId = req.body.id;
        if (!villageId) {
            res.status(400).json({ message: "Invalid id" });
            return;
        }
        const profileVillage = yield models_1.ProfileVillage.findByPk(villageId);
        if (!profileVillage) {
            res.status(404).json({ error: "Village not found" });
            return;
        }
        yield profileVillage.destroy();
        res.status(200).json({ message: "Village successfully deleted" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
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
        res.status(201).json((0, response_1.jsonResponse)({
            response: addProfilevillage,
            message: "Village created",
        }));
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/villages", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileVillages = yield models_1.ProfileVillage.findAll();
        res.json((0, response_1.jsonResponse)({ response: profileVillages }));
    }
    catch (error) {
        console.error("Error fetching profile villages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));

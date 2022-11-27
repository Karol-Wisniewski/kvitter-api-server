import express from "express";
import UsersService from "./usersService";

const usersService = new UsersService();

const router = express.Router();

router.get("/", async (req, res) => {
	res.json(await usersService.getAll());
});

router.get("/:id", async (req, res) => {
	res.json(await usersService.getById(req.params.id));
});

export default router;

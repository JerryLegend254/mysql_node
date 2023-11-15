const express = require("express")
const { httpCreateSportsplan } = require("./sportsplan.controller")

const SportsplanRouter = express.Router()

SportsplanRouter.post("/", httpCreateSportsplan)

module.exports = SportsplanRouter
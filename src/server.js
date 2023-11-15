const express = require("express")
const SportsplanRouter = require("./routes/sportsplan/sportsplan.routes")
const PORT = 5000
const app = express()

app.use(express.json())

app.use("/sportsplan", SportsplanRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
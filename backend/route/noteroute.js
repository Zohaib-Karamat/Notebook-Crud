import { create, deleteById, read, readById, updateById } from "../controller/notecontroller.js";
import express from "express"


const route = express.Router()

route.post("/createNote",create);
route.get("/getnotes",read)
route.get("/getnotesById/:id",readById)
route.delete("/deletenotesById/:id",deleteById)
route.put("/updatenotesById/:id",updateById)


export default route;
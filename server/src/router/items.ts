// import { deleteItem, updateItem } from "controllers/item"
import express from "express"

import { isOwner } from "../middlewares"
import { addItems, getAllItems } from "../controllers/items"

export default (router: express.Router) => {
  router.get("/items", getAllItems)
  router.post("/items/add", addItems)
  router.delete("/items/:id", isOwner)
  router.patch("/items/update", isOwner)
}

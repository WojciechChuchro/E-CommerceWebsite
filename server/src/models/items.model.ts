import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  count: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
})

export const ItemModel = mongoose.model("Item", ItemSchema)
export const getItems = () => ItemModel.find()
export const getItemById = (id: String) => ItemModel.findById(id)
export const getItemByName = (name: String) => ItemModel.findOne({ name })
export const createItem = (values: Record<string, any>) =>
  new ItemModel(values).save().then((item) => item.toObject())
export const deleteItemById = (id: String) =>
  ItemModel.findOneAndDelete({ _id: id })
export const updateItemById = (id: String, values: Record<string, any>) =>
  ItemModel.findByIdAndUpdate(id, values)

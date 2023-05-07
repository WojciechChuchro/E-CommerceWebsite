import express from "express"
import { createItem, getItemByName, getItems } from "../models/items.model"

export const getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const items = await getItems()
    return res.status(200).json(items)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const addItems = async (req: express.Request, res: express.Response) => {
  try {
    const { name, count, image, price } = req.body
    if (!name || !count || !image || !price) {
      return res.sendStatus(400)
      console.log("1")
    }
    console.log("1")
    const existingItem = await getItemByName(name)

    if (existingItem) {
      res.sendStatus(400)
    }
    const item = await createItem({
      name,
      count,
      image,
      price,
    })
    return res.status(200).json(item).end()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

// export const updateItem = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { password, sessionToken, username, email } = req.body
//     const user = await getUserBySessionToken(sessionToken).select(
//       "+authentication.salt +authentication.password"
//     )
//     console.log("sdf")
//     if (!user) {
//       return res.sendStatus(400)
//     }

//     const expectedHash = authentication(user.authentication.salt, password)

//     if (user.authentication.password !== expectedHash) {
//       console.log("sdf")
//       return res.sendStatus(403)
//     }

//     if (username) user.username = username

//     if (email) user.email = email

//     await user.save()

//     const { username: updatedUsername, email: updatedEmail } = user

//     const userObject = { username: updatedUsername, email: updatedEmail }

//     return res.status(200).json(userObject).end()
//   } catch (error) {
//     console.log(error)
//     return res.sendStatus(400)
//   }
// }

// export const deleteItem = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { password, sessionToken, username, email } = req.body
//     const user = await getUserBySessionToken(sessionToken).select(
//       "+authentication.salt +authentication.password"
//     )
//     console.log("sdf")
//     if (!user) {
//       return res.sendStatus(400)
//     }

//     const expectedHash = authentication(user.authentication.salt, password)

//     if (user.authentication.password !== expectedHash) {
//       console.log("sdf")
//       return res.sendStatus(403)
//     }

//     if (username) user.username = username

//     if (email) user.email = email

//     await user.save()

//     const { username: updatedUsername, email: updatedEmail } = user

//     const userObject = { username: updatedUsername, email: updatedEmail }

//     return res.status(200).json(userObject).end()
//   } catch (error) {
//     console.log(error)
//     return res.sendStatus(400)
//   }
// }

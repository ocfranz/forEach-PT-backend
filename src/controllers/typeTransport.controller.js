import TypeTransport from '../models/TypeTransport'

export const getAllTypes = (req, res, next) => {
  try {
    const items = await TypeTransport.find()
    res.json(items)
  } catch (error) {
    next(error)
  }
}
import { Item } from '../../models/item.model.js'

const itemsController = async (req, res) => {
    try {
        const items = await Item.find({})
        res.json(items)
    } catch (error) {
        console.log(`Error fetching items: ${error}`)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export default itemsController
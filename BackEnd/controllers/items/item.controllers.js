import { Item } from '../../models/item.model.js'

const itemController = async (req, res) => {
    try {
        const itemId = req.params.item
        const item = await Item.findOne(JSON.parse(itemId))
        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json(item);
    } catch (error) {
        console.log(`Error fetching item: ${error}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export default itemController
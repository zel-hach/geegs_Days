import { items } from '../models/menuModel.js';

export async function getMenu(req, res) {
  try {
    const allItems = await items.getAllItems();
    res.json(allItems);
  } catch (error) {
    console.error('Failed to get items:', error);
    res.status(500).json({ error: 'Failed to get items' });
  }
}

export async function addMenuItem(req, res) {
  try {
    const { item_name, item_price } = req.body;
    if (!item_name || item_price == null) {
      return res.status(400).json({ error: 'Missing item_name or item_price' });
    }

    const newItem = await items.createItem(item_name, item_price);
    res.json({
      message: "Item added successfully",
      item: newItem
    });
  } catch (error) {
    console.error('Failed to insert item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
}

export async function getMenuItem(req, res) {
  try {
    const { name } = req.params; 
    const item = await items.getItemByName(name);

    if (!item || item === 'Item not found') {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ item });
  } catch (error) {
    console.error('Failed to get item:', error);
    res.status(500).json({ error: 'Failed to get item' });
  }
}

export async function updateMenuItem(req, res) {
  try {
    const { id } = req.params; 
    const { item_name, item_price } = req.body;

    if (!item_name || item_price == null) {
      return res.status(400).json({ error: 'Missing item_name or item_price' });
    }
    const updatedItem = await items.updateItem(Number(id), item_name, item_price);
    if (!updatedItem || updatedItem === 'Item not found') {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item updated', item: updatedItem });
  } catch (error) {
    console.error('Failed to update item:', error);
    res.status(500).json({ error: 'Failed to update item' });
  }
}

export async function deleteMenuItem(req, res) {
  try {
    const { id } = req.params;
    const deletedItem = await items.deleteItem(Number(id));

    if (!deletedItem || deletedItem === 'Item not found') {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted', item: deletedItem });
  } catch (error) {
    console.error('Failed to delete item:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
}
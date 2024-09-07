let items = [];
let nextId = 1;

function addItem(name) {
    items.push({ id: nextId++, name });
}

function updateItem(id, name) {
    const item = items.find(item => item.id === id);
    if (item) {
        item.name = name;
    }
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
}

module.exports = { items, addItem, updateItem, deleteItem };

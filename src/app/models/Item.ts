export class Item {
    id: number;
    title: string;
    description: string;
    price: number;
    qty: number;
    itemImg: string;

    constructor(id: number, title: string, description: string, price: number, qty: number, itemImg?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.qty = qty;
        this.itemImg = itemImg || '';
    }
}
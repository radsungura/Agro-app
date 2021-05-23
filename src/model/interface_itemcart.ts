
import { Product } from './interface_product';
export interface Itemcart {
    user: string;
    item: Product;
    qty: number;
    amount: number;
    id: number;
}

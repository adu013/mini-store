import biscuit_img from './biscuit.png';
import iced_tea_img from './lipton-iced-tea.png';
import milk_img from './milk.png';
import bread_img from './sliced-bread.png';
import tender_coco_img from './tender-coco-water.png';

let products = [
    {
        id: 1,
        productName: "Biscuit",
        productDescription: "This is Biscuit",
        image: biscuit_img,
        productPrice: 1.20
    },
    {
        id: 2,
        productName: "Lipton Iced Tea",
        productDescription: "This is Iced Tea",
        image: iced_tea_img,
        productPrice: 1.60
    },
    {
        id: 3,
        productName: "Milk",
        productDescription: "This is Milk",
        image: milk_img,
        productPrice: 3.25
    },
    {
        id: 4,
        productName: "Sliced Bread",
        productDescription: "This is sliced bread",
        image: bread_img,
        productPrice: 0.80
    },
    {
        id: 5,
        productName: "Tender Coconut Water",
        productDescription: "This is tender coconut water",
        image: tender_coco_img,
        productPrice: 2.50
    }
];

export default products;

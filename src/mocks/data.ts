import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Microsoft Xbox Series X Console",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 500,
    title: "Xbox Series X",
    image: `https://images.unsplash.com/photo-1621259182978-fbf93132d53d`,
  },
  {
    description: "Microsoft Xbox Series S Digital Edition Console",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 300,
    title: "Xbox Series S",
    image: `https://images.unsplash.com/photo-1604586362304-e75dda43b915`,
  },
  {
    description: "Microsoft Xbox One S Console 1TB - White",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 190,
    title: "Xbox One S",
    image: `https://images.unsplash.com/photo-1700153498368-3f61e094063e`,
  },
  {
    description: `Sony PlayStation 5 Slim Console Digital Edition - Marvel's Spider-Man 2 Bundle`,
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 425,
    title: "Sony PlayStation 5 ",
    image: `https://images.unsplash.com/photo-1606144042614-b2417e99c4e3`,
  },
  {
    description: "Nintendo Switch OLED Console with White Joy-Con",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 350,
    title: "Nintendo Switch",
    image: `https://images.unsplash.com/photo-1612036781124-847f8939b154`,
  },
  {
    description: "Sony PlayStation 4 Console 500GB - Black",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 170,
    title: "Sony PlayStation 4",
    image: `https://images.unsplash.com/photo-1486401899868-0e435ed85128`,
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
      image: ``,
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
      image: ``,
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];

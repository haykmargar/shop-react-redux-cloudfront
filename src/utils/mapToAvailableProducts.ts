export interface ProductsDataInterface {
  product: ProductInterface;
  count: number;
}

interface ProductInterface {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface AvailableProducts extends ProductInterface {
  count: number;
}

export const mapToAvailableProducts = (
  productsData: ProductsDataInterface[]
): AvailableProducts[] => {
  return productsData.map(({ product, count }) => ({
    ...product,
    count: count,
  }));
};

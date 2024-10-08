const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};

//optimised version of getPrice
const productPrices2: Record<"Apple" | "Banana" | "Orange", number> = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice2 = (
  productName: keyof typeof productPrices
): number | undefined => {
  return productPrices[productName];
};
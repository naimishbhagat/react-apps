export const BUY_CAKE = "BUY_CAKE";
export const BUY_ICECREAM = "BUY_ICECREAM";
export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
export function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

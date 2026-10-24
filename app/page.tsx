
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import PriceTag from "./components/PriceTag";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

      <Greeting name="Shopper" />

      <div className="cards">
        <ProductCard
          title="Keyboard"
          price={49}
          inStock={true}
        />

        <ProductCard
          title="Mouse"
          price={25}
          inStock={false}
        />
      </div>

      <PriceTag amount={99} />
    </main>
  );
}


type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  inStock,
}: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

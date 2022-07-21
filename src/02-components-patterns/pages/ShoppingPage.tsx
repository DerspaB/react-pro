import ProductCard, {
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title="Café xd" className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "bold",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

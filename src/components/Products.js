import useFetch from "../hooks/useFetch";
import "./Products.css";

function Products() {
   const { data, loading, error } =
  useFetch("https://dummyjson.com/products?limit=15");


  if (loading) {
    return <p className="status">Loading......</p>;
  }

  if (error) {
    return <p className="status error">{error}</p>;
  }

  return (
    <div className="products">
      {data &&
  data.products.map((item) => (
    <div className="crd" key={item.id}>
      <img src={item.images[0]} alt={item.title} />
      <h4>{item.title}</h4>
      <p>₹ {item.price}</p>
    </div>
))}
    </div>
  );
}

export default Products;
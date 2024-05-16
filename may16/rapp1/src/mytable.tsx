import { useState } from "react";

interface Product {
  name: string;
  price: number;
}

export const MyTable: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>({
    name: "",
    price: 0,
  });

  const addNewProduct = () => {
    setProducts([...products, currentProduct]);
    setCurrentProduct({
        name: "",
        price: 0,
    })
  };

  return (
    <div>
      <input
        placeholder="Product Name"
        value={currentProduct.name}
        onChange={(e) => {
          setCurrentProduct({ ...currentProduct, name: e.target.value });
        }}
      ></input>
      <input placeholder="Product Price" value={currentProduct.price} 
        onChange={(e) => {
          setCurrentProduct({ ...currentProduct, price: parseFloat(e.target.value) });
        }}></input>
      <button onClick={addNewProduct}>Submit</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

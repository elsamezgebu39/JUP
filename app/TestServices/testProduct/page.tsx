"use client";
import React, { use } from "react";
import ProductService, { Product } from "@lib/service/productService";
import {
  useAllProducts,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
  useProduct,
} from "@lib/hooks/useProductHooks";

//* Get products
function ProductList() {
  const { data: products, isLoading, isError, error } = useAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {alert(JSON.stringify(error)) as any}</div>;
  }

  return (
    <div className=" border shadow p-4 m-4 ">
      <h2 className="font-bold text-center">Product List Table</h2>
      <div className="flex flex-wrap gap-4  border ">
        {products &&
          products.map((product) => (
            <div key={product.id} className="">
              <p>Product ID: {product.id}</p>
              <p>user ID: {product.user_id}</p>
              <p>Sub_category: {product.sub_category_id}</p>
              <p>product Name: {product.product_name}</p>
              <p>product description: {product.product_description}</p>
              <p>price: {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

//* Create/post product Data
function CreateProductForm() {
  const createProductMutation = useCreateProduct();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { elements } = event.target;
    const newProduct = {
      user_id: "1",
      sub_category_id: "4",
      product_name: elements.product_name.value,
      product_description: elements.product_description.value,
      price: elements.price.value,
    };

    createProductMutation.mutate(newProduct);
  };

  return (
    <div>
      <h2 className="font-bold text-center">Create Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="mx-4">product Name</label>
          <input
            type="text"
            name="product_name"
            placeholder="product Name"
            required
          />
          <br />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mx-4">product Description</label>
          <textarea
            name="product_description"
            placeholder="product description"
          ></textarea>
          <br />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mx-4">product price</label>
          <input type="number" name="price" placeholder="price" required />
          <br />
        </div>
        <button type="submit" className="b-2 bg-red-500 text-white p-2">
          Create
        </button>
      </form>
      {createProductMutation.isLoading && <div>Creating Product...</div>}
      {createProductMutation.isError && (
        <div>Error: {createProductMutation.error.message}</div>
      )}
      {createProductMutation.isSuccess && (
        <div>Product created successfully!</div>
      )}
    </div>
  );
}

//* Update/delete product Data
function App() {
  const { data: product, isLoading, isError, error } = useProduct("4");
  const deleteProductMutation = useDeleteProduct();
  const updateProductMutation = useUpdateProduct(`${product?.id}`);

  const handleUpdateProduct = () => {
    const updatedProduct = {
      // id: product?.id,
      user_id: product?.user_id,
      sub_category_id: product?.sub_category_id,
      product_description: product?.product_description,
      price: product?.price,
      product_name: `${product?.product_name} updated`,
      //TODO: Add the desired fields
    };
    updateProductMutation.mutate(updatedProduct);
  };

  const handleDeleteProduct = () => {
    deleteProductMutation.mutate(`${product?.id}`);
  };

  if (isLoading) {
    return <div>Loading Product...</div>;
  }

  if (isError) {
    return <div>Error: {error as any}</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-center">Product Details</h2>
      {/* Display user details */}
      {product && (
        <div>
          <p>Name: {product.product_name}</p>
          <p>description: {product.product_description}</p>
          <div className="">
            {updateProductMutation.isLoading && <div>updating Product...</div>}
            {updateProductMutation.isError && (
              <div>Error: {updateProductMutation.error.message}</div>
            )}
            {updateProductMutation.isSuccess && (
              <div>Product updated successfully!</div>
            )}
            {deleteProductMutation.isError && (
              <div>Error: {deleteProductMutation.error.message}</div>
            )}
            {deleteProductMutation.isSuccess && (
              <div>Product deleted successfully!</div>
            )}
          </div>

          {/*TODO:-------------------- */}
          <button
            onClick={handleUpdateProduct}
            className="p-2 bg-red-400 font-bold text-white mx-2 rounded"
          >
            Update Product
          </button>
          <button
            onClick={handleDeleteProduct}
            className="p-2 bg-red-400 font-bold text-white rounded"
          >
            Delete Product
          </button>
        </div>
      )}
    </div>
  );
}

// export default CreateUserForm;
// export default App;
export default ProductList;
// export default CreateProductForm;

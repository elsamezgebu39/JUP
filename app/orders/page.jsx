import OrderCard from "@components/orders/orderCard";

const orders = [
  {
    order_id: "12355",
    ordered_date: "2023-07-25",
    is_completed: true,
    total_price: 15075,
    products: [
      {
        title: "Product A",
        product_image: "image_url_1.jpg",
        product_quantity: 2,
        total_price: 30.5,
        size: "Medium",
        color: "Blue",
      },
      {
        title: "Product B",
        product_image: "image_url_2.jpg",
        product_quantity: 1,
        total_price: 45.25,
        size: "Large",
        color: "Red",
      },
    ],
  },
  {
    order_id: "67890",
    ordered_date: "2023-07-24",
    is_completed: false,
    total_price: 87590,
    products: [
      {
        title: "Product C",
        product_image: "image_url_3.jpg",
        product_quantity: 1,
        total_price: 27.9,
        size: "Small",
        color: "Green",
      },
      {
        title: "Product D",
        product_image: "image_url_4.jpg",
        product_quantity: 3,
        total_price: 60.0,
        size: "X-Large",
        color: "Black",
      },
    ],
  },
];
export default function page() {
  return (
    <>
      <div className="w-full min-h-[70vh] mt-3">
        <div className="max-w-[1100px] mx-auto mt-5">
          <div className="font-bold text-white bg-[#912c2c] p-2 pl-4 mb-3 m-2 capitalize ">
            Order History
          </div>
          {orders.map((order) => (
            <OrderCard order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

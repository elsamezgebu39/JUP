"use client";
import ImagesDisplay from "@components/productDetail/ImagesDisplay";
import CartForm from "@components/productDetail/CartForm";
import RelatedCard from "@components/productDetail/RelatedCard";
import { FaStar } from "react-icons/fa";
import Comments from "@components/productDetail/Comments";
import ProductInfo from "@components/productDetail/ProductInfo";
import RatingStar from "@components/shared/RatingStar";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { tendingProductList } from "@app/utils/trendingProduct";

// import { tendingProductList } from "@app/utils/trendingProduct";

export default function ProductDetail() {
  const { trending } = tendingProductList;

  console.log({ trending });

  const router = useRouter();
  const pathName = usePathname();
  const id = pathName.split("/")[2];
  const product = trending.find((item) => item.id == id);
  // const [cartItem, setCartItem] = useState([]);

  // useEffect(() => {

  // }
  //   , [cartItem]);

  return (
    <section className="mt-5 p-3 max-w-[1200px] mx-auto ">
      {/* <h1>hello there</h1> */}
      {/* product name and price that display on the mobile version */}
      {/* <div className="md:hidden">
        <h1>{ product.title}</h1>
        <p className="font-semibold mb-4">
          <span className="font-bold text-[#912c2c] mr-3 capitalize">
            price:
          </span>
          {product.price} ETB
        </p>
      </div> */}
      {/* detail */}
      <div className="grid md:grid-cols-2">
        <ImagesDisplay primaryImage={product?.src} />
        <div className="">
          <ProductInfo product={product} />
          <CartForm product={product} />
        </div>
      </div>
      {/* related products */}
      <div className="">
        <h1 className="text-xl capitalize font-bold">Related Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <RelatedCard />
          <RelatedCard />
          <RelatedCard />
          <RelatedCard />
        </div>
      </div>
      {/* comments */}
      <div className="my-4">
        <h1 className="text-xl capitalize font-bold mb-3">costumer Reviews</h1>
        <div className="md:flex justify-between mb-4">
          <div className="flex justify-between items-center gap-5">
            <span className="font-bold text-2xl">4.8</span>
            <div className="flex">
              <RatingStar rating={4.5} />
            </div>
          </div>
          {/* add review button */}
          <div className="text-center p-2 bg-[#912c2c] rounded-lg text-white font-semibold">
            Add Review
          </div>
        </div>
        {/* Comments  list */}
        <div className="flex flex-col gap-5">
          <Comments />
          <Comments />
          <Comments />
          <h2 className="text-[#912c2c] text-center font-semibold capitalize">
            see more
          </h2>
        </div>
      </div>
    </section>
  );
}

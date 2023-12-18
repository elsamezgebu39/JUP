
import { Card, Space, Skeleton } from 'antd';
import artifact from "@public/artifacts.jpg"
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';

const ProductCategoryCard = () => (
    <Space direction="vertical" size={16}>
        <Card
            title="Artifacts"
            extra={<a href="#">Explore</a>}

        >
            <Image src={artifact} />
        </Card>
    </Space>
);


let ProductCategorySection = () => {


    let { data, isLoading, isError, error } = useQuery(
        {
            queryKey: ['top_category'],
            queryFn: async () => {
                let response = await fetch('aadaa.omishtujoy.com/api/top_category')
                return await response.json()
            }
        }
    )


    if (isLoading) return <section>
        <div className=" text-center">
            <div className="flex items-center justify-center">
                <iconify-icon icon="ic:outline-category"></iconify-icon>
                <p className="sub_title">Featured Clothes </p>
            </div>
            <p className="text-sm pb-2 font-semibold text-gray-500">Explore our product category</p>
        </div>
        <div className="container grid  gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <Card>
                <Skeleton active />
            </Card>
            <Card>
                <Skeleton active />
            </Card>
            <Card>
                <Skeleton active />
            </Card>
            <Card>
                <Skeleton active />
            </Card>
        </div>
    </section>






    return <section>
        <div className=" text-center">
            <div className="flex items-center justify-center">
                <iconify-icon icon="ic:outline-category"></iconify-icon>
                <p className="sub_title">Featured Clothes </p>
            </div>
            <p className="text-sm pb-2 font-semibold text-gray-500">Explore our featured products</p>
        </div>
        <div className="container grid  gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <ProductCategoryCard />
            <ProductCategoryCard />
            <ProductCategoryCard />
            <ProductCategoryCard />
        </div>
    </section>

}


export default ProductCategorySection;

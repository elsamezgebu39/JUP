

const LoadingProductCard = () => {
    return (
        <div className="max-w-md  mt-8 p-6 bg-white w-full rounded-lg shadow">
            <div className="animate-pulse">
                <div className="bg-gray-500 h-48 mb-4 rounded"></div>
            </div>
            <div className="animate-pulse">
                <div className="bg-gray-500 h-4 mb-4 rounded"></div>
                <div className="bg-gray-500 h-4  mb-4 rounded"></div>
                {/* <div className="bg-gray-500 h-8 w-full mb-4 rounded"></div>
                <div className="bg-gray-500 h-4  rounded"></div> */}
            </div>
        </div>
    )
}

export default LoadingProductCard
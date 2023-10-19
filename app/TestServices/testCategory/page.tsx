"use client";
import {
  useAllTopCategories,
  useDeleteTopCategory,
  useTopCategory,
} from "@lib/hooks/useTopCategoryHooks";
import {
  useAllSubCategories,
  useDeleteSubCategory,
  useSubCategory,
} from "@lib/hooks/useSubCategoryHooks";
 // fetch all Top categories
function TopCategoryList() {
    const { data: TopCategories, isLoading, isError, error } = useAllTopCategories();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error as any}</div>;
    }
  
    return (
      <div className=" border shadow p-4 m-4 ">
        <h2 className="font-bold text-center">Categories List Table</h2>
        <div className="flex flex-wrap gap-4  border ">
          {TopCategories.map((category) => (
            <div key={category.id} className="">
              <p>Top Category ID: {category.id}</p>
              <p>Top Category name: {category.top_category_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

//* Get Top Category by ID
  function TopCategoryDetail() {
    const { data: category, isLoading, isError, error } = useTopCategory("2");
    const deleteProductMutation = useDeleteTopCategory();
 
    if (isLoading) {
      return <div>Loading category...</div>;
    }
  
    if (isError) {
      return <div>Error: {error as any}</div>;
    }
  
    return (
      <div>
        <h2 className="font-bold text-center">Category Details</h2>
        {category && (
          <div>
            <p>Name: {category.top_category_name}</p>
          </div>
        )}
      </div>
    );
  }

  // fetch all sub categories
  function SubCategoryList() {
    const { data: TopCategories, isLoading, isError, error } = useAllSubCategories();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error as any}</div>;
    }
  
    return (
      <div className=" border shadow p-4 m-4 ">
        <h2 className="font-bold text-center">Sub Categories List Table</h2>
        <div className="flex flex-wrap gap-4  border ">
          {TopCategories.map((category) => (
            <div key={category.id} className="">
              <p>Sub Category ID: {category.id}</p>
              <p>Sub Category name: {category.sub_category_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  //* Get Sub Category by ID
  function SubCategoryDetail() {
    const { data: category, isLoading, isError, error } = useSubCategory("1");
    // const deleteProductMutation = useDeleteTopCategory();
 
    if (isLoading) {
      return <div>Loading category...</div>;
    }
  
    if (isError) {
      return <div>Error: {error as any}</div>;
    }
  
    return (
      <div>
        <h2 className="font-bold text-center">Category Details</h2>
        {category && (
          <div>
            <p>Name: {category.sub_category_name}</p>
          </div>
        )}
      </div>
    );
  }

  
  export default TopCategoryList;
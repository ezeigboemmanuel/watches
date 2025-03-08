"use client";
import UpdateForm from "@/components/UpdateForm";
import { useParams } from "next/navigation";

const UpdateProductPage = () => {
  const params = useParams();
  return (
    <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-autp">
        Update product
      </h2>

      {/* Update Form Component */}
      <UpdateForm productId={params.productId as string} />
    </div>
  );
};

export default UpdateProductPage;

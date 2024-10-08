/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AddProductModal from "../components/modal/AddProductModal";
import toast from "react-hot-toast";
// import { imageUpload } from "../utils/imageUpload";
import { useAddProductMutation } from "../redux/features/product/productApi/addProduct";
import { useGetProductsQuery } from "../redux/features/product/productApi/getProducts";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../redux/features/product/productApi/deleteProduct";
import { MdDeleteOutline, MdOutlineSystemUpdateAlt } from "react-icons/md";
import UpdateProductModal from "../components/modal/UpdateProductModal";
import { useUpdateProductMutation } from "../redux/features/product/productApi/updateProduct";
import { IoAddCircleSharp } from "react-icons/io5";
import { TProduct } from "../types";
import Loader from "../components/shared/Loader";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [page, setPage] = useState(1);
  const limit =10

  const params = `page=1&limit=10`;
  const { data, isSuccess, isLoading } = useGetProductsQuery(params);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(false);
  // const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false);
    // setProduct("");
  }

  // const handleImageChange = (image: File) => {
  //   setUploadButtonText(image.name);
  // };

  // const handleImageChange = (file: File | null) => {
  //   if (file) {
  //     setUploadButtonText(file.name); // Update the button text to the selected file name
  //   } else {
  //     setUploadButtonText("Upload Image");
  //   }
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0] || null;
  //   handleImageChange(file);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.product_name.value;
    const brand = form.brand.value;
    const price = Number(form.price.value);
    const description = form.description.value;
    const available_quantity = Number(form.available_quantity.value);
    const rating = Number(form.rating.value);
    const image = form.image.value
    // const image = form.image.files[0];
    // const image_url = await imageUpload(image);
    const ProductData = {
      name,
      brand,
      price,
      description,
      available_quantity,
      rating,
      image
      // image: image_url?.data?.display_url,
    };

    try {
      setLoading(true);
      const res = await addProduct(ProductData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(id);

        Swal.fire({
          title: "Product is deleted",
          text: "",
          icon: "success",
        });
      }
    });
  };

  const openModal = (item: TProduct) => {
    setIsOpen2(true);
    setProduct(item);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.product_name.value;
    const brand = form.brand.value;
    const price = Number(form.price.value);
    const description = form.description.value;
    const available_quantity = Number(form.available_quantity.value);
    const rating = Number(form.rating.value);
    const image = form.image.value
    // const image = form.image.files[0];
    // const image_url = image ? await imageUpload(image) : "";
    // const image_new = image_url ? image_url?.data?.display_url : product?.image;

    const data = {
      name,
      brand,
      price,
      description,
      available_quantity,
      rating,
      image
      // image: image_new,
    };

    const id = product?._id;
    try {
      setLoading(true);
      const res = await updateProduct({ id, data });

      // setUploadButtonText("Uploaded");
      if (res) {
        toast.success(res?.data?.message);
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  if(isLoading)
    return <Loader></Loader>

  const Pginetionclass =
  "join-item  btn text-lg font-bold hover:bg-green-600 hover:text-white font-Montserrat bg-green-200";

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <Helmet>
            <title>E-Shop | Dashboard</title>
            </Helmet>
      <button onClick={() => setIsOpen(true)} className="absolute right-52">
        <IoAddCircleSharp size={40} />
      </button>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="text-center">
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      Available Quantity
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {  
                    data?.data?.result.map((item: TProduct, index: number) => (
                      <tr key={item?._id} className="text-center">
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex justify-center items-center">
                            <div className="avatar">
                              <div className="w-12 rounded-xl">
                                <img src={item?.image} />
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.name}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.brand}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.price}
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.available_quantity}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => openModal(item)}
                            className="relative text-red cursor-pointer"
                          >
                            <MdOutlineSystemUpdateAlt size={20} />
                          </button>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="relative text-red cursor-pointer"
                          >
                            <MdDeleteOutline size={20}></MdDeleteOutline>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isSuccess && (
        <div className="paginetion flex mb-20">
          <div className="join border-green-300 border mx-auto ">
            <button
              onClick={() => setPage((old) => old - 1)}
              disabled={1 === page}
              className={`${Pginetionclass} disabled:bg-green-100`}
            >
              «
            </button>
            {[...Array(Math.ceil(data?.data?.total / limit)).keys()].map(
              (ele) => {
                return (
                  <button
                    onClick={() => setPage(ele + 1)}
                    key={ele + 1}
                    className={`${Pginetionclass} ${ele + 1 === page ? "bg-yellow-300" : ""
                      } `}
                  >
                    {ele + 1}
                  </button>
                );
              }
            )}

            <button
              onClick={() => setPage((old) => old + 1)}
              disabled={page === Math.ceil(data?.data?.total / limit)}
              className={`${Pginetionclass} disabled:bg-green-100`}
            >
              »
            </button>
          </div>
        </div>
      )}

      {
        <AddProductModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleSubmit={handleSubmit}
          loading={loading}
          // uploadButtonText={uploadButtonText}
          // handleFileChange={handleFileChange}
        ></AddProductModal>
      }
      {
        <UpdateProductModal
          closeModal={closeModal}
          isOpen2={isOpen2}
          product={product}
          handleUpdate={handleUpdate}
          loading={loading}
          // uploadButtonText={uploadButtonText}
          // handleFileChange={handleFileChange}
        ></UpdateProductModal>
      }
    </div>
  );
};

export default Dashboard;

import { useState } from 'react'
import AddProductModal from '../components/modal/AddProductModal'
import toast from 'react-hot-toast'
import { imageUpload } from '../utils/imageUpload'
import { useAddProductMutation } from '../redux/features/product/productApi/addProduct'
import { useGetProductsQuery } from '../redux/features/product/productApi/getProducts'
import Swal from 'sweetalert2'
import { useDeleteProductMutation } from '../redux/features/product/productApi/deleteProduct'
import { MdDeleteOutline } from 'react-icons/md'
import UpdateProductModal from '../components/modal/UpdateProductModal'
import { useUpdateProductMutation } from '../redux/features/product/productApi/updateProduct'

const Dashboard = () => {
  const [addProduct] = useAddProductMutation()
  const [updateProduct] = useUpdateProductMutation()
  const [deleteProduct] = useDeleteProductMutation();

  const { data, isLoading } = useGetProductsQuery(undefined);

  if(isLoading){
    <p>loadiii....</p>
  }

  console.log(data?.data);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [product,setProduct] = useState("")
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

  function closeModal() {
    setIsOpen(false)
    setIsOpen2(false)
    setProduct("")
  }
  

  const handleImageChange = (image: File) => {
    setUploadButtonText(image.name)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.product_name.value
    const brand = form.brand.value
    const price = Number(form.price.value)
    const description = form.description.value
    const available_quantity = Number(form.available_quantity.value)
    const rating = Number(form.rating.value)
    const image = form.image.files[0]
    const image_url = await imageUpload(image)
    const ProductData = {
      name,
      brand,
      price,
      description,
      available_quantity,
      rating,
      image: image_url?.data?.display_url,
    }

  
    try {
      setLoading(true)
      const res = await addProduct(ProductData).unwrap()
      if (res?.success) {
        toast.success(res?.message)
      }
    } catch (err: any) {
      toast.error(err)
    } finally {
      setLoading(false)
      setIsOpen(false)
    }
  }


  const handleDelete = (id: string) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
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
 }

 const openModal = (item) =>{
  setIsOpen2(true)
  setProduct(item)
 }



 const handleUpdate = async (e) =>{
  e.preventDefault();
  const form = e.currentTarget
  const name = form.product_name.value
  const brand = form.brand.value
  const price = Number(form.price.value)
  const description = form.description.value
  const available_quantity = Number(form.available_quantity.value)
  const rating = Number(form.rating.value)
  const image = form.image.files[0]
  const image_url = image ?  await imageUpload(image): '' 
  const image_new = image_url ? image_url?.data?.display_url : product.image;
  

  
  const data = {
    name,
    brand,
    price,
    description,
    available_quantity,
    rating,
    image: image_new,
  }

  const id = product._id;
   try{
      setLoading(true)
       await updateProduct({id,data})
      setUploadButtonText('Uploaded')
      toast.success('Product updated');
      
       
     
     }catch(err){
       console.log(err);
       toast.error(err.message);
     }finally{
      setLoading(false);
     }
  
}


  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btn btn-accent">
        Add Product
      </button>
      <div className="container mx-auto px-4 sm:px-8">

        {isLoading ? (
           <p>loading....</p>
        ) : (
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
                        Stocks
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    data?.data.map((item,index)=>(
                      <tr className='text-center'>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
                          <p className='text-gray-900 whitespace-no-wrap'>{index + 1}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <div className='flex justify-center items-center'>
                              <div className="avatar">
                                  <div className="w-12 rounded-xl">
                                      <img src={item?.image} />
                                  </div>
                              </div>
          
                          </div>
                      </td>
          
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>{item?.name}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>{item?.brand}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>{item?.available_quantity}</p>
                      </td>
                      
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <button onClick={() => handleDelete(item?._id)} className='relative text-red cursor-pointer'><MdDeleteOutline></MdDeleteOutline></button>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          
                      <button onClick={() => openModal(item)} className='relative text-red cursor-pointer'><MdDeleteOutline></MdDeleteOutline></button>
                      </td>
                  </tr>
                    ))
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

  
      </div>

      {
        <AddProductModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleSubmit={handleSubmit}
          loading={loading}
          uploadButtonText={uploadButtonText}
          handleImageChange={handleImageChange}
        ></AddProductModal>
      }{
        <UpdateProductModal
          closeModal={closeModal}
          isOpen2={isOpen2}
          product={product}
          handleUpdate={handleUpdate}
          loading={loading}
          uploadButtonText={uploadButtonText}
          handleImageChange={handleImageChange}
        ></UpdateProductModal>
      }
      
    </div>
  )
}

export default Dashboard

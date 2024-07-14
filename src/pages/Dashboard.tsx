import {  useState } from "react";
import AddProductModal from "../components/modal/AddProductModal";
// import { useAddProductMutation } from "../redux/api/api";

import toast from "react-hot-toast";
import { imageUpload } from "../utils/imageUpload";


const Dashboard = () => {
    // const [addProduct] = useAddProductMutation()

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    function closeModal() {
        setIsOpen(false)
    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; 
        const price = Number(form.price.value);
        const description = form.description.value;
        const available_quantity = Number(form.available_quantity.value);
        const rating = Number(form.rating.value);
        const image = form.image.files[0];
        const image_url = await imageUpload(image)
       
      
        const ProductData = {
          name,
          price,
          description,
          available_quantity,
          rating,
          image:image_url?.data?.display_url
        };
      
    console.log(ProductData);
        try{
            setLoading(true)
            // const res = await addProduct(ProductData).unwrap();
          
      
        //    if(res?.success){
        //      toast.success(res?.message)
        //    }
     
         }catch(err:any){
           toast.error(err)
         }finally{
          setLoading(false)
          setIsOpen(false)
         }

         
     

      };
    return (
        <div>
           <button onClick={()=>setIsOpen(true)} className="btn btn-accent">Add Product</button>   
             {
                <AddProductModal
                    closeModal={closeModal}
                    isOpen={isOpen} 
                    handleSubmit={handleSubmit} 
                    loading={loading}
                    uploadButtonText={uploadButtonText}
                    handleImageChange={handleImageChange}
                ></AddProductModal>
             }
        </div>
    );
};

export default Dashboard;
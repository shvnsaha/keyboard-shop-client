import axios from "axios";

export const imageUpload = async (image: File) =>{

   
   
    const formData = new FormData();
     formData.append('image',image)

    console.log(formData);
   
      // const {data} = await axios.post(
      //   `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData
      // )

      // const data =
       await axios.post(`http://localhost:5000/upload`,formData)


    //  return data;
  
    
}
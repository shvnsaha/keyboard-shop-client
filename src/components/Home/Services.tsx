import { TbTruckDelivery } from 'react-icons/tb'
import { RiRefund2Fill } from 'react-icons/ri'
import { MdOutlinePayments } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'

const Services = () => {
  return (
    <div className='px-6 overflow-hidden'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className=" bg-yellow-200 rounded-xl flex flex-col justify-center items-center p-10 space-y-3"
      >
        <div className="bg-white rounded-full p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <TbTruckDelivery size={25} color="blue"></TbTruckDelivery>
        </div>
        <p className="font-semibold">Super Fast and Free Delivery</p>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1200"
        className="bg-green-200  flex flex-col  p-10 space-y-3 rounded-xl justify-center items-center"
      >
        <div className="bg-white rounded-full p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <MdOutlinePayments size={25} color="blue" />
        </div>
        <p className="font-semibold">Payment Online</p>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1400"
        className="bg-pink-200 flex flex-col p-10 space-y-3  rounded-xl  justify-center items-center"
      >
        <div className="bg-white rounded-full p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <RiRefund2Fill size={25} color="blue"></RiRefund2Fill>
        </div>
        <p className="font-semibold">Refund Money</p>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1600"
        className="bg-orange-200  rounded-xl flex flex-col justify-center items-center p-10 space-y-3"
      >
        <div className="bg-white rounded-full p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <BiSupport color="blue" />
        </div>
        <p className="font-semibold">24/7 Support</p>
      </div>
    </div>
    </div>
  )
}

export default Services

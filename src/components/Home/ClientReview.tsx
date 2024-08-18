import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


const ClientReview = () => {
    const client_reviews = [
        {
            "id": 1,
            "client_name": "Alice Johnson",
            "profile_image_url": "https://i.ibb.co/bHWqxhw/avatar.png",
            "review_text": "The Ducky One 2 Mini is an excellent compact keyboard. I love its build quality and the customizable RGB lighting. The Cherry MX switches offer a great typing experience, and the compact size frees up space on my desk. Highly recommended for minimalists!"
        },
        {
            "id": 2,
            "client_name": "Bob Smith",
            "profile_image_url": "https://i.ibb.co/bHWqxhw/avatar.png",
            "review_text": "The Corsair K95 RGB Platinum is packed with features. The programmable macro keys and RGB backlighting are top-notch. The build quality feels premium, and the Cherry MX switches are reliable. Perfect for gamers who need extra functionality."
        },
        {
            "id": 3,
            "client_name": "Charlie Davis",
            "profile_image_url": "https://i.ibb.co/bHWqxhw/avatar.png",
            "review_text": "I’m really impressed with the Razer BlackWidow V3. The Razer Green switches are clicky and satisfying, and the RGB Chroma lighting is stunning. It's a solid keyboard for both gaming and general use. However, it’s a bit pricey."
        },
        {
            "id": 4,
            "client_name": "Dana Lee",
            "profile_image_url": "https://i.ibb.co/bHWqxhw/avatar.png",
            "review_text": "The Keychron K6 has quickly become my favorite keyboard. Its wireless capability and compact design are perfect for my workspace. I also appreciate the hot-swappable switches. Great for those who need flexibility and portability."
        },
        {
            "id": 5,
            "client_name": "Evan Turner",
            "profile_image_url": "https://i.ibb.co/bHWqxhw/avatar.png",
            "review_text": "The Logitech G Pro X is a fantastic tenkeyless keyboard. Its compact size is great for travel, and the swappable switches are a nice touch. The RGB lighting is customizable, and it performs well in gaming scenarios. A bit loud but very effective."
        }
    ]
    return (
        <div className="">
            <div className="text-redFood text-3xl text-center font-bold">
                What Our Clients Say
            </div>
            <div className="text-stone-600 my-3 md:font-medium text-center md:w-2/3 mx-5 md:mx-auto">
                We place huge value on our relationships and have seen the benefit they
                bring to our community. Feedback from our members is vital in helping us
                grow and improve.
            </div>
            <Swiper 
                speed={200}
                grabCursor={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwipe"
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >

                {
                    client_reviews.map((item) => (
                        <SwiperSlide key={item?.id}>
                            <div className="overflow-hidden p-10  bg-white rounded-lg">
                                <div className="flex flex-col items-center p-4 justify-center text-center">
                                    <img
                                        src={item?.profile_image_url}
                                        alt="no photo"
                                        className="w-20 rounded-full"
                                    />
                                    <div className="text-stone-500 m-2">{item?.review_text}</div>
                                    <div className="font-bold text-redFood">{item?.client_name}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default ClientReview;


const BrandDisplay = () => {
    const brandsData = [
        { id: 1, logo: 'https://i.ibb.co/t2NVmFB/logitech2028.jpg', title: 'Logitech' },
        { id: 2, logo: 'https://i.ibb.co/CmmstwM/razer.jpg', title: 'Razer' },
        { id: 3, logo: 'https://i.ibb.co/DgbHPSq/corsiar.webp', title: 'Corsair' },
        { id: 4, logo: 'https://i.ibb.co/f2z22bC/steelseries.webp', title: 'SteelSeries' },
        { id: 5, logo: 'https://i.ibb.co/jWHYVKk/clover.webp', title: 'Ducky' },
        { id: 6, logo: 'https://i.ibb.co/G7V8W8Z/hyperX.webp', title: 'HyperX' },
    ];

    return (
        <div className="mx-auto overflow-hidden">
            <h2 className="text-2xl font-bold text-center mb-6">Top Featured Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 " >
                {
                    brandsData.map(item =>


                        <div key={item.id} className='col-span-1  cursor-pointer group border-2 bg-white hover:shadow-xl rounded-xl p-2' data-aos='fade-left' data-aos-delay='600'>
                            <div className='flex flex-col gap-2 w-full'>
                                <div
                                    className='
                    aspect-square 
                    w-full 
                    relative 
                    overflow-hidden 
                    rounded-xl
                  '
                                >
                                    <img
                                        className='
                      object-cover 
                      h-full 
                      w-full 
                      group-hover:scale-110 
                      transition
                    '
                                        src={item?.logo}
                                        alt='Keyboard'
                                    />
                                    <div
                                        className='
                    absolute
                    top-3
                    right-3
                  '
                                    ></div>
                                </div>
                                <div className='font-semibold text-sm  mg:text-lg text-center bg-green-300 hover:bg-yellow-300 rounded-xl p-2'>{item?.title}</div>



                            </div>
                        </div>


                    )
                }




            </div>
        </div>
    );
};

export default BrandDisplay;
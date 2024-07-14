import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const AddProductModal = ({ closeModal, isOpen, handleSubmit, loading,uploadButtonText,handleImageChange }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update Discount
                </Dialog.Title>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-1 text-sm">
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="flex justify-between gap-2">
                      <div className="space-y-1 text-sm">
                        <input
                          className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                          name="price"
                          id="price"
                          type="text"
                          placeholder="Price"
                          required
                        />
                      </div>

                      <div className="space-y-1 text-sm">
                        <input
                          className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                          name="available_quantity"
                          id="available_quantity"
                          type="text"
                          placeholder="Available quantity"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-sm">
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="rating"
                        id="rating"
                        type="text"
                        placeholder="Rating"
                        required
                      />
                    </div>

                    
                    <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input onChange={(e) => handleImageChange(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                    <div className="space-y-1 text-sm">
                      <textarea
                        id="description"
                        className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                        name="description"
                        placeholder="Description"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
                  >
                    {loading ? (
                      <TbFidgetSpinner
                        className="m-auto animate-spin"
                        size={24}
                      />
                    ) : (
                      "Save & Continue"
                    )}
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddProductModal;

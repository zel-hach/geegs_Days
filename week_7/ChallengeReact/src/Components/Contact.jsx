import React from 'react';

const Contact = () => {
    return (
        <div className='flex-col p-3 '>
            <div className='flex-col'>
                <h1 className='text-center text-3xl text-black'>Contact Us</h1>
                <p className='text-center'>Have any questions? Send us a message and we 'll get back to you as soon as possible</p>
            </div>
            <div  className='shadow-2xl bg-white p-2'>
                <h1 className='text-left text-3xl text-black'>Contact Us</h1>
                <div className='grid grid-cols-2'>
                    <p className='text-left '>Have any questions? Send us a message and we 'll get back to you as soon as possible</p>
                   <form className="grid gap-5">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-3 rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />

                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          rows="4"
                          className="w-full p-3 rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        ></textarea>

                        <button
                          type="submit"
                          className="bg-amber-700 text-white p-3 rounded-lg w-full flex justify-center items-center hover:bg-amber-800 transition">
                          Send Message
                        </button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

import React, { useState } from 'react';

export default function CareerPageForm() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phoneNumber: '',
        email: '',
        resume: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex flex-col gap-5 items-center">
            <h2 className="text-[40px] font-medium mb-4">Apply for a Position</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex  items-center gap-5'>
                    <div className="mb-4">
                        {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
                        <input type="text" id="name" name="name" value={formData.name} placeholder='Your Name' onChange={handleChange} className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" required />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label> */}
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder='Location' className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" required />
                    </div>
                </div>
                <div className='flex  items-center gap-5'>
                    <div className="mb-4">
                        {/* <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label> */}
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone Number' className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" required />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  placeholder='Email' className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" required />
                    </div>
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label> */}
                    <input type="file" id="resume" name="resume" onChange={handleChange} className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" required />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label> */}
                    <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows="4" className="mt-1 p-2 w-full md:w-96 border border-gray-300 rounded-md bg-[#f3f3fb]" />
                </div>
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};


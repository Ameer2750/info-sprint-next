import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
export default function CareerPageForm() {
    const [resume, setResume] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        setResume(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log("Form Data:", {
            name: e.target.yname.value,
            email: e.target.yemail.value,
            phoneNumber: e.target.phoneNumber.value,
            location: e.target.location.value,
            message: e.target.message.value,
            resume: resume
        });
    };

    return (
        <div>
            <div className='flex flex-col relative lg:gap-5 gap-3 mx-20 mt-5 z-50'>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Your Name*</label>
                    <input
                        type='text'
                        name='yname'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='Your Name'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Your Email*</label>
                    <input
                        type='text'
                        name='yemail'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='info@example.com'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Phone Number*</label>
                    <input
                        type='text'
                        name='phoneNumber'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='Phone Number'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Location*</label>
                    <input
                        type='text'
                        name='location'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='Location'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Upload Resume*</label>
                    <input
                        type='file'
                        name='resume'
                        onChange={handleFileChange}
                        className='p-2 border text-sm rounded-md text-gray-400 bg-[#f3f3fb]'
                        accept='.pdf,.doc,.docx' // Allow only specific file types
                        required
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Message</label>
                    <textarea
                        name='message'
                        className='border py-8 pt-1 pl-2 rounded-md bg-[#f3f3fb] text-gray-400 text-sm'
                        placeholder='Write Message'
                    />
                </div>
            </div>

            <div className='text-end pb-10 mx-20 mt-5'>
                <button onClick={handleSubmit} className='py-3 bg-[#3236b7] hover:bg-transparent hover:text-black border hover:border-[#3236b7] rounded-md lg:text-md text-sm text-white lg:px-10 px-5'>Send </button>
            </div>
        </div>
    )
}

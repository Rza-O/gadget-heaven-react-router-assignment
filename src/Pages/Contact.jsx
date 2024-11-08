import React, { useState } from 'react';
import DocumentTitle from '../Utility/DocumentTitle';
import toast from 'react-hot-toast';

const Contact = () => {
    DocumentTitle('Contact Us')

    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevForm) => {
            prevForm[name] = value;
            return {...prevForm}
        })
    }

    const handleSubmitBtn = (e) => {
        e.preventDefault();

        toast.success('Thank You! We have received your message');

        setFormData({name: '', email: '', message: ''});
    }

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-4xl font-bold text-center mb-4'>Contact Us</h1>
            <form onSubmit={handleSubmitBtn} className='space-y-4'>
                <div>
                    <label className='block text-lg font-medium mb-2'>Name</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} required className='w-full p-3 border border-gray-300 rounded-md' />
                </div>
                <div>
                    <label className='block text-lg font-medium mb-2'>Email</label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} required className='w-full p-3 border border-gray-300 rounded-md' />
                </div>
                <div>
                    <label className='block text-lg font-medium mb-2'>Message</label>
                    <textarea name="message" id="" value={formData.message} onChange={handleChange} required className='w-full p-3 border border-gray-300 rounded-md' rows='5'></textarea>
                </div>
                <button type='submit' className='w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90'>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
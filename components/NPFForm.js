'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const schema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Invalid email"),
  mobile: z
    .string()
    .transform((val) => val.replace(/^\+91/, '').replace(/\D/g, '').trim())
    .refine((val) => /^[6-9]\d{9}$/.test(val), {
      message: "Mobile must be 10 digits and a vaild no.",
    }),
});

export default function FormWidget() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const router = useRouter()
const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    setLoading(true)
  const { name, email, mobile } = data;
  
  // Create URL-encoded form data
  let formData = new URLSearchParams({
    Name: name,
    Email: email,
    MobileNo: mobile,
  });

  try {
    const response = await fetch("https://taxila.in/functions/?admissionlandingpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
 const resultText = await response.text();
   if (response.ok && resultText.toLowerCase().includes("success")) {

      router.replace("https://taxila.in/admission-2025/thankyou/")
    } else {
      alert("⚠️ Submission failed: " + resultText);
    }

  } catch (error) {
    console.error("Submission error:", error);
  } finally{
    setLoading(false)
  }
};


  return (
    <div className="px-4 pt-4 bg-white rounded-sm">
      <h2 className="text-xl sm:text-2xl text-center font-sans text-black font-semibold mb-2">PGDM Admission Open 2025-27</h2>
      <p className='text-black text-center black sm:hidden'>PGDM Business Analytics, with Triple Specialization</p>
       <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div>
        <label className="block text-black font-bold">Name:</label>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '5px' }}>
          <span style={{ marginRight: 8 }}>👤</span>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your name"
            style={{ border: 'none', flex: 1, outline: 'none' }}
            className='text-black'
          />
        </div>
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <div className='mt-3'>
        <label className="block text-black font-bold">Email:</label>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '5px' }}>
          <span style={{ marginRight: 8 }}>📧</span>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            style={{ border: 'none', flex: 1, outline: 'none' }}
            className='text-black'
          />
        </div>
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div className='mt-3'>
        <label className="block text-black font-bold">Mobile:</label>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '5px' }}>
          <span style={{ marginRight: 8 }}>📱</span>
          <input
            type="text"
            {...register("mobile")}
            placeholder="+91XXXXXXXXXX"
            style={{ border: 'none', flex: 1, outline: 'none' }}
            className='text-black'
          />
        </div>
        {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
      </div>

      <button disabled={loading} type="submit" className='mt-4 bg-red-600 px-8 py-2 rounded-full'>
        {loading? "Submitting..." : "Submit"}
      </button>
      <p className='text-gray-800 tex-sm text-center mt-3 mb-4'>By proceeding ahead you expressly agree to the Taxila Business School terms & condition and privacy policy</p>
    </form>
    </div>
  );
}

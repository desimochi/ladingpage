import Script from 'next/script';

export default function Footer(){
    return(<>
        <div className="w-full bg-gray-950 dark:bg-black  py-3 mx-auto font-sans">
            <hr className="border border-dashed border-gray-700 text-center mt-4 mb-4"/>
            <p className="text-center font-bold text-gray-50 ">Copyright © 2024-25 Taxila Business School</p>
        </div>
    </>)
}
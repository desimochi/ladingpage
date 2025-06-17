import Script from 'next/script';

export default function Footer(){
    return(<>
        <div className="w-full bg-gray-50 dark:bg-black  py-3 mx-auto">
            <hr className="border border-dashed text-center mt-4 mb-4"/>
            <p className="text-center font-bold ">Copyright © 2024-25 Taxila Business School</p>
        </div>
    </>)
}
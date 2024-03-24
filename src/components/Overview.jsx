import React from 'react';

export default function Overview() {
    return <div className='OverView'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-xl'>Overview</h1>
            <div className='flex gap-3 bg-white text-[#4D4D4D] border rounded px-[14px] py-[6px] items-center'>
                <div className='font-normal'>This Month</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    </div>
}
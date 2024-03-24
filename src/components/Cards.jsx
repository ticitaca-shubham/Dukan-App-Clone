import React from 'react';

export default function Cards() {
    return <div className='flex flex-wrap gap-5'>
        <div className='card-1 rounded-[8px] hover:bg-[#0E4F82] text-white min-w-[300px] bg-[#146EB4] flex-grow '>
            <div className='p-5'>
                <div className='flex gap-3 items-center mb-4'>
                    <h2 className='tracking-wide font-normal'>Next Payout</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className='flex gap-3 items-center justify-between mb-4'>
                    <p className='text-2xl font-medium'>$2,312.23</p>
                    <div className='flex items-center'>
                        <p className='text-base font-medium underline'>23 Orders</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around bg-[#0E4F82] rounded-[8px] py-3'>
                <p>Next Payment Date:</p>
                <p>Today, 4:00PM</p>
            </div>
        </div>
        <div className='card-2 rounded-[8px] text-black min-w-[300px] shadow h-fit flex-grow'>
            <div className='p-4'>
                <div className='flex gap-3 items-center mb-4'>
                    <h2 className='tracking-wide font-normal'>Amount pending</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-2xl font-normal'>$2,312.23</p>
                    <div className='flex items-center'>
                        <p className='text-base font-medium underline'>23 Orders</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-3 rounded-[8px] text-black min-w-[300px] shadow h-fit flex-grow'>
            <div className='p-4'>
                <div className='flex gap-3 items-center mb-4'>
                    <h2 className='tracking-wide font-normal'>Next Payout</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-2xl font-normal'>$2,312.23</p>
                    <div className='flex items-center'>
                        <p className='text-base font-medium underline'>23 Orders</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
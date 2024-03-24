import React from 'react';
import Overview from './Overview';
import Cards from './Cards';
import Transaction from './Transaction';
export default function Main(){
    return<div className='p-8 w-full flex flex-col gap-5'>
        <Overview />
        <Cards />
        <Transaction />
    </div>
}
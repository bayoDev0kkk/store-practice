import React from 'react';
import OneOrder from '../components/OneOrder';
import { useAppSelector } from './../hooks/useAppSelector';

const Orders = () => {

    const {order} = useAppSelector(s => s.menu)

    return (
        <div>
            <h1 className='text-center'>My Orders</h1>
            <div className='flex flex-col justify-center items-center mt-20'>
                {
                    order.map(el => <OneOrder el={el}/>)
                }
            </div>
        </div>
    );
};

export default Orders;
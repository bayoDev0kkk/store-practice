import React from 'react';
import { deleteOrder } from '../store/MenuSlice';
import { useAppDispatch } from './../hooks/useAppDispatch';

interface IOneOrderProps {
    el:any
}

const OneOrder = ({el}:IOneOrderProps) => {

    const dispatch = useAppDispatch()

    return (
        <div className=' my-2 rounded flex justify-between items-center px-4 bg-gray-300 w-[30%]'>
            <img width={80} src={el.photo} alt="" />
            <div>
            <h1 className='text-[20px]'>{el.name}</h1>
            <h3 className=''>{el.price}$</h3>
            </div>
           <div className='flex flex-col'>
            
           <button  onClick={() => dispatch(deleteOrder(el))} className='bg-red-600 px-2 rounded-md' >delete</button>
           <div className='flex justify-between'>
           <button>+</button>
           {el.quantity}
           <button>-</button>
           </div>
           </div>
        </div>
    );
};

export default OneOrder;
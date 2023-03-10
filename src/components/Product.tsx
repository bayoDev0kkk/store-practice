import React from 'react';
import { addToOrder } from '../store/MenuSlice';
import { useAppDispatch } from './../hooks/useAppDispatch';
import { useAppSelector } from './../hooks/useAppSelector';
interface IProductProps {
  el:any;
}
const Product = ({el}:IProductProps) => {
  const dispatch = useAppDispatch()

    return (
        <div className=' ml-10 '>
        <div className=" rounded-xl px-5 py-3 bg-gray-300 mt-[89px]">
          <img className='rounded-xl'height={110} width={301} src={el.photo} alt="" />
            <h1 className='n'>{el.name}</h1>
            <div className='flex items-center justify-between'>
            <h3 className='n'>{el.price}$</h3>
            <button 
            onClick={() => dispatch(addToOrder(el))}
            className='bg-amber-400 rounded-lg py-1 px-3'>to order</button>
            </div>
        </div>
      </div>
    );
};

export default Product;
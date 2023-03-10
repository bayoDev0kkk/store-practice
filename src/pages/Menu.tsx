import React, { FC } from 'react';
import Product from '../components/Product';
import { useAppSelector } from './../hooks/useAppSelector';


const Menu = () => {

    const {foods} = useAppSelector(s => s.menu)
    return (
      <div className="container flex flex-wrap">
        {foods.map((el) => (
          <Product el={el} key={el.id} />
        ))}
      </div>
    );
};

export default Menu;
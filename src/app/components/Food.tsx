"use client";

import React, { useState } from 'react';
import {data} from '../data/Data.js'

const Food = () =>{
    
    const [food, setFood] = useState (data);

        const filterType = (category: string) =>{
            setFood(
                data.filter((item) =>{

                    return item.category === category;
                })
            );
        };

        const filterPrice =(price: string) =>{
            setFood(
                data.filter((item) =>{
                    return item.price === price
                })
            )
        }
    
    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-4xl  text-center '>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between flex-wrap sm:justify-evenly '>
                        <button onClick={()=> setFood(data)} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('pizza')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>Burger</button>
                        <button onClick={()=> filterType('salad')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>Salad</button>
                        <button onClick={()=> filterType('chicken')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>Chicken</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>Fillter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice('$')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>$</button>
                        <button onClick={()=> filterPrice('$$')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
                {food.map((item, idex) =>(
                    <div className='border shadow-lg hover:scale-105 rounded-lg duration-300' key={idex}>
                        <img className='w-full h-[200] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food;
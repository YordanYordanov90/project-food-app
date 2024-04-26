import { categories } from '../data/Data.js';

const Category = () =>{
    return(
        <div className='max-w-[1640px] px-4 m-auto py-12'>
            <h1 className='text-orange font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-2 md:grid-col-4 gap-6 py-6'>
                {categories.map((item, idex)=>(
                    <div key={idex} className='bg-gray-500 rounded-lg p-4 flex justify-between items-center'>
                        <h2 className='font-bold sm:text-xl'>
                            {item.name}
                            <img className='w-20 '
                             src={item.image} alt={item.name} />
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
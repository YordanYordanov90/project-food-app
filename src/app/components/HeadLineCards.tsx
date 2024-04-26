const HeadLineCards = () => {
    return (
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='relative rounded-xl'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>Sun and Out</p>
            <p className='px-2'>Throughout</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
            className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl'
            src='./eggs.avif'
            alt=''
          />
        </div>
        <div className='relative rounded-xl'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>Suns Out, New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
            className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl'
            src='./photo-1.avif'
            alt=''
          />
        </div>
        <div className='relative rounded-xl'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
            className='max-h-[160px] md:max-[200px] w-full object-cover rounded-xl'
            src='./photo-12.avif'
            alt=''
          />
        </div>
      </div>
    );
  };
  
  export default HeadLineCards;
  
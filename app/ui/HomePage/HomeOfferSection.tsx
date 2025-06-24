

const HomeOfferSection = () => {
  const offerItems = [
    {
      id: 1,
      imageUrl: '/assets/images/image-1.png', // Replace with your image URL
    },
    {
      id: 2,
      imageUrl: '/assets/images/image-2.png',
    },
    {
      id: 3,
      imageUrl: '/assets/images/image-3.png',
    },
  ];
  return (
    <div>
      <div className='max-w-[712px] mx-auto mt-10'>
        <img
          src='/assets/images/offer-image.png'
          alt='Offer'
          className='w-full h-auto'
        />
      </div>
      <div className='max-w-[712px] mx-auto mt-8 flex justify-center items-center gap-6 '>
        {offerItems.map((item) => (
          <div key={item.id} className='flex items-center justify-between '>
            <img
              src={item.imageUrl}
              alt={`Offer ${item.id}`}
              className='w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-cover rounded-lg'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOfferSection;

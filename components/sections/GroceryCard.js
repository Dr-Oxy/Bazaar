import Image from 'next/image';

const GroceryCard = ({ item }) => {
  return (
    <div className="cursor-pointer py-5  bg-primary-green/10 lg:bg-white flex flex-col gap-y-2 items-center justify-center rounded-lg  text-cemter">
      <span className="text-xs md:text-sm block text-[#104141] font-medium capitalize">
        {item.title}
      </span>

      <div className="h-16 md:h-20 w-full relative">
        <Image
          className="h-full w-full object-cover"
          src={item.image}
          alt={item.title}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
};

export default GroceryCard;

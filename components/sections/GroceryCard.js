import Image from 'next/image';

const GroceryCard = ({ item }) => {
  return (
    <div className="cursor-pointer py-2 h-32 lg:h-44 bg-primary-green/10 lg:bg-white flex flex-col items-center justify-center rounded-lg  text-cemter">
      <span className="text-xs md:text-sm block text-[#104141] font-medium capitalize">
        {item.title}
      </span>

      <div className="h-16 md:h-24 w-full flex-1 relative">
        <Image
          className="h-full w-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>
    </div>
  );
};

export default GroceryCard;

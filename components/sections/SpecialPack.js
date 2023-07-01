import Image from 'next/image';

const SpecialPack = ({ offer }) => {
  return (
    <div className="bg-[#FFF0F0] px-2 md:px-4 w-[90%] flex items-start gap-x-2 md:gap-x-4">
      <div>
        <h6 className="font-medium text-sm capitalize">{offer.title}</h6>
        <p className="text-sm text-primary-red">{offer.price}</p>
      </div>

      <div className="flex-1">
        <Image src={offer.image} alt={offer.title} />
      </div>
    </div>
  );
};

export default SpecialPack;

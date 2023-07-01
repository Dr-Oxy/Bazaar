import Image from 'next/image';

const SpecialPack = ({ offer }) => {
  return (
    <div className="bg-[#FFF0F0] w-fit flex items-start gap-x-4">
      <div>
        <h6 className="font-medium text-sm capitalize">{offer.title}</h6>
        <p className="text-sm text-primary-red">{offer.price}</p>
      </div>

      <div>
        <Image src={offer.image} alt={offer.title} />
      </div>
    </div>
  );
};

export default SpecialPack;

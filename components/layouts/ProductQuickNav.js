import Image from 'next/image';
import { drinks, toiletries, rice } from '@/public/assets/images';
import { caretLeftDark, caretRightDark } from '@/public/assets/icons';

const ProductQuickNav = () => {
  return (
    <div className="bg-white py-5 fixed top-[24%] lg:top-[22%] z-[999] left-0 w-full">
      <div className="px-4 xl:px-0  max-w-6xl mx-auto flex gap-x-6 items-center justify-between overflow-x-auto">
        <div>
          <div className="cursor-pointer h-10 w-10 rounded-full bg-off-white flex items-center justify-center">
            <Image src={caretLeftDark} alt="left arrow" />
          </div>
        </div>

        <ul className="flex items-center gap-x-10">
          <li className="cursor-pointer flex items-center gap-2">
            <div className=" h-12 w-12 rounded-full bg-off-white flex items-center justify-center">
              <Image src={toiletries} alt="toiletries" />
            </div>
            <span className="block text-base text-black capitalize">
              toiletries
            </span>
          </li>

          <li className="cursor-pointer flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-off-white flex items-center justify-center">
              <Image src={rice} alt="toiletries" />
            </div>
            <span className="block text-base text-black capitalize">
              foodstuff
            </span>
          </li>

          <li className="cursor-pointer flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-off-white flex items-center justify-center">
              <Image src={drinks} alt="foodstuff" />
            </div>
            <span className="block text-base text-black capitalize">drink</span>
          </li>

          <li className="cursor-pointer flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-off-white flex items-center justify-center">
              <Image src={drinks} alt="foodstuff" />
            </div>
            <span className="block text-base text-black capitalize">drink</span>
          </li>

          <li className="cursor-pointer flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-off-white flex items-center justify-center">
              <Image src={rice} alt="toiletries" />
            </div>
            <span className="block text-base text-black capitalize">
              foodstuff
            </span>
          </li>
        </ul>

        <div>
          <div className="cursor-pointer h-10 w-10 rounded-full bg-off-white flex items-center justify-center">
            <Image src={caretRightDark} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickNav;

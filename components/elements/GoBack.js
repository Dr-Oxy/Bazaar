import { useRouter } from 'next/router';
import Image from 'next/image';

const GoBack = ({ url }) => {
  const router = useRouter();

  return (
    <div
      role="button"
      onClick={() => {
        url ? router.push(url) : router.back();
      }}
      className="inner_container flex items-center cursor-pointer mb-3"
    >
      <Image
        src="/assets/icons/caret-left-dark.svg"
        alt="flag icon"
        height={10}
        width={10}
      />
      <p className="ml-4 text-dark-1 text-base">Go back</p>
    </div>
  );
};

export default GoBack;

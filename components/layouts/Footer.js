import Image from 'next/image';
import Link from 'next/link';

import { bazaarIcon } from '@/public/assets/images';

import { socials, support, about } from '@/utils/data';

const Footer = () => {
  return (
    <footer className="text-white">
      <section className="bg-green-1 py-12 lg:py-8">
        <article className="max-w-6xl px-4 xl:px-0 mx-auto lg:flex items-end justify-between gap-x-8">
          <div>
            <Image src={bazaarIcon} alt="bazaar logo" height={38} width={58} />
            <p className="text-base mt-3">
              Subscribe to our newsletter to get <br /> updates on our latest
              offers!
            </p>
          </div>

          <div className=" flex-1 lg:flex items-center">
            <form className="my-6 lg:my-0 flex-1  md:flex items-center justify-center lg:gap-x-1">
              <input
                className="px-4 py-3 w-full lg:w-1/2 bg-white/10 shadow-none border border-white rounded-lg outline-0 text-white text-sm "
                type="email"
                placeholder="Your email address"
              />

              <button className="w-full md:w-fit mt-2 md:mt-0 px-4 py-3 bg-white text-[#125252] text-base capitalize rounded-lg">
                subscribe
              </button>
            </form>

            <ul className=" flex items-center justify-center lg:justify-start  gap-x-8">
              {socials?.map((social) => (
                <Link key={social.id} href={social.link}>
                  <li>
                    <Image src={social.icon} alt={social.link} />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className=" bg-primary-green ">
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-x-12 gap-y-6 max-w-6xl mx-auto py-8 px-4 lg:px-0">
          <div className=" xl:col-span-4">
            <span className="block uppercase text-white/60 text-base">
              about us
            </span>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {about.map((item) => (
                <Link href={item.link} key={item.id}>
                  <l1 className="text-sm block">{item.title}</l1>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block xl:col-span-3">
            <span className="block uppercase text-white/60 text-base">
              support
            </span>

            <div className="mt-2 grid grid-cols-1 gap-2">
              {support.map((item) => (
                <Link href={item.link} key={item.id}>
                  <l1 className="text-sm block">{item.title}</l1>
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:col-span-3">
            <h6 className="text-white font-medium text-lg uppercase">
              Download mytownmart <br /> mobile app
            </h6>
            <p className="text-base font-normal">
              Gain access to amazing offers!
            </p>
          </div>

          <div className="xl:col-span-2 flex lg:block gap-x-2">
            <button className="bg-white text-primary-green font-medium w-full  py-3  rounded-xl">
              Apple store
            </button>
            <button className="lg:mt-2 bg-white text-primary-green font-medium w-full  py-3  rounded-xl">
              Play store
            </button>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;

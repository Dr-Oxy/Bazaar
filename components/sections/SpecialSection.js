import SpecialPack from './SpecialPack';

import Slider from 'react-slick';

import { specialOffers } from '@/utils/data';

const SpecialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: null,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-12 bg-white py-4">
      <Slider {...settings}>
        {specialOffers.map((offer) => (
          <SpecialPack key={offer.id} offer={offer} />
        ))}
      </Slider>
    </section>
  );
};

export default SpecialSection;
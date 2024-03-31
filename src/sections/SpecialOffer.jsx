import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          alt=""
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-rose-500">Special </span>
          <span>Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-gray-500 text-lg leading-7">
          Introducing our exclusive limited-time special offer on the latest
          shoe collection! Step into style with unparalleled savings that
          redefine fashion at your feet. For a short period, immerse yourself in
          the world of premium footwear with discounts that make every step a
          statement. Whether you're craving sleek elegance, athletic prowess, or
          casual comfort, our diverse range has something for everyone.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-gray-500 text-lg leading-7">
          Don't miss out on this extraordinary opportunity to upgrade your shoe
          wardrobe at prices that are as exceptional as the styles themselves.
          Hurry, lace-up luxury awaits—seize the moment and put your best foot
          forward with our special offer!
        </p>
        <div className="mt-11">
          <Button label="Shop Now" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

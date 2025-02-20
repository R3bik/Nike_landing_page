const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe ? "border-rose-500" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-blue-100 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

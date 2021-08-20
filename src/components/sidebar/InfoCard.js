function InfoCard() {
  return (
    <>
      <div className="flex w-80 shadow py-2 bg-light-blue rounded border-2 border-grey border-opacity-10 items-center justify-around">
        <img
          className="cursor-pointer"
          src="https://vasitum.com/static/images/social-media/facebook.svg"
        alt="social"
        />
        <img
          className="cursor-pointer"
          src="https://vasitum.com/static/images/social-media/insta.svg"
        alt="social"
        />
        <img
          className="cursor-pointer"
          src="https://vasitum.com/static/images/social-media/linkedin.svg"
        alt="social"
        />
        <img
          className="cursor-pointer"
          src="https://vasitum.com/static/images/social-media/youtube.svg"
        alt="social"
        />
        <img
          className="cursor-pointer"
          src="https://vasitum.com/static/images/social-media/twitter.svg"
        alt="social"
        />
      </div>
      <div className="flex flex-wrap w-80 bg-light-blue shadow text-sm text-w space-x-4 py-2 px-4 justify-center font-medium text-opacity-40">
        <span className="select-none cursor-pointer p-1">About</span>
        <span className="select-none cursor-pointer p-1">
          Terms and conditions
        </span>
        <span className="select-none cursor-pointer p-1">Our Team</span>
        <span className="select-none cursor-pointer p-1">Blog</span>
        <span className="select-none cursor-pointer p-1">Privacy Policy</span>
        {/* </div> */}
        <div className="flex items-center border-t w-80 py-2 my-2 px-2 ">
          <img
            src="/assets/icons/vasitumblue.svg"
            alt="logo"
            className="w-10 cursor-pointer"
          />
          <span className="text-dark font-semibold pl-1 pr-4  text-lg tracking-tighter">
            Vasitum{" "}
          </span>
          <span>Vasitum © 2021</span>
        </div>
      </div>
    </>
  );
}

export default InfoCard;

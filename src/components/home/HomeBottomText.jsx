import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5">
      <p className="absolute lg:w-[19vw] w-72 right-0 lg:right-10 bottom-18 lg:bottom-25 font-[font1] lg:text-sm text-sm lg:leading-relaxed leading-tight mb-5">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        K72 is an agency that builds brands
        from every angle.
        Today, tomorrow and years
        from now. We think the best sparks fly when
        comfort zones getleft behind and friction
        infuses our strategies, brands and
        communications with real feeling. We’re
        transparent, honest and say whatwe mean,
        and when we believe in something, we’re all in.
      </p>
      <div className="lg:border-3 mb-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-white  rounded-full px-3 pt-2 lg:px-10 uppercase">
        <Link className="text-[6vw] " to="/projects">
          Work
        </Link>
      </div>
      <div className="lg:border-3 mb-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center border-white  rounded-full px-3 pt-2 lg:px-10 uppercase">
        <Link className="text-[6vw] " to="/agence">
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;

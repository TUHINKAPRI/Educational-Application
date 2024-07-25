
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
function Carousels({ autoPlay, infiniteLoop, data }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

 
  return (
    <div className="w-full h-auto">
      <Carousel
        responsive={responsive}
        autoPlay={autoPlay}
        transitionDuration={500}
        infinite={infiniteLoop}
      >
        {data?.map((ele, index) => (
          <div className="p-4 w-full  " key={index}>
            <div className="h-full bg-white  shadow-lg p-8 shadow-slate-200 rounded-md">
              <img src="quote.png" alt="" width={30} />
              <p className="leading-relaxed mb-6">
                {ele?.comment.slice(0, 150)} <span>...</span>
              </p>
              <div className="flex  items-center">
                <div className="flex gap-">
                  <img
                    alt="testimonial"
                    src={ele?.profilePicture}
                    className="w-12 h-12 rounded-full border-2 border-yellow-400 flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {ele?.name}
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;

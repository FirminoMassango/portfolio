import Table from "./Table";

interface FontProps {
  font: string;
}

function Services(props: FontProps) {
  return (
    <section className="h-screen snap-start mb-16 pt-8">
      <h1 className={`text-3xl md:text-5xl mb-8 ${props.font}`}>Services</h1>
      <h2 className="text-xl md:text-2xl font-bold">
        <span className="text-zinc-500 mr-2">1.</span>Visual Design
      </h2>
      <p className="text-justify text-white/70 my-5">
        Craft visually striking products that inspire clients and deeply
        resonate with their intended audience, forging meaningful connections
        through design.
      </p>
      <Table
        firstCol="Interaction Design"
        secondCol="Wireframing"
        thirdCol="Mockup Design"
      />
      <svg
        width="96"
        height="112"
        viewBox="0 0 167 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative left-96 animate-pulse text-white"
      >
        <g clip-path="url(#clip0_14_47)">
          <path
            d="M61.0396 136.872C61.6942 137.264 61.8594 137.513 62.1414 137.613C82.1997 140.059 100.545 135.633 116.304 122.69C120.291 119.431 123.352 115.208 125.46 110.36C130.068 100.009 127.507 88.3856 119.047 80.9314C114.66 77.0213 109.779 74.049 103.771 73.4424C101.78 75.3748 99.864 77.3655 97.8412 79.0321C94.5281 81.7351 90.713 83.0836 86.3734 82.3381C83.1454 81.8601 80.9095 80.1126 80.6508 77.9859C80.3112 75.1946 81.9453 73.1038 84.2565 72.1436C87.4655 70.8027 90.8559 69.844 94.2041 69.093C96.3725 68.6226 98.7384 68.6675 100.955 68.596C106.283 59.168 101.11 49.3512 88.827 45.4049C87.5951 46.3666 86.3049 47.403 84.9985 48.3065C80.0647 51.5471 74.681 52.752 68.9837 50.8252C66.8027 50.0828 64.7644 48.8506 64.4993 46.1176C64.3152 44.0491 65.9492 41.9584 68.7757 40.7996C73.2813 39.0285 77.9971 38.9855 82.703 39.4158C84.3462 39.6175 85.9893 39.8192 87.5741 40.0956C96.2964 25.8633 91.8319 7.45913 76.2693 3.71575C77.1025 2.80329 77.6699 1.92366 78.3182 1.70864C79.0993 1.47719 80.1526 1.81924 80.94 2.19414C88.2088 5.95055 93.513 11.2989 94.7391 19.7146C95.7065 26.0036 94.8978 32.1074 92.8025 38.1678C92.5008 39.0146 92.1992 39.8613 91.9721 40.7664C91.9137 40.841 92.0044 41.0322 92.1274 41.4892C92.8566 41.9388 93.6764 42.5795 94.6129 43.0709C105.825 49.3081 108.941 56.0737 106.267 69.0189C107.395 69.4192 108.672 69.936 109.933 70.3199C117.189 72.8636 123.044 77.1994 127.34 83.6842C134.354 94.218 134.104 107.133 126.722 117.962C122.717 123.854 117.547 128.473 111.449 132.127C96.6676 140.902 80.8567 144.542 63.7057 141.602C62.8177 141.509 61.9135 141.284 61.0255 141.191C60.8926 141.208 60.7013 141.299 60.1276 141.572C62.1947 144.15 64.7547 145.79 67.2564 147.504C69.6251 149.235 72.1851 150.875 74.8358 152.707C73.0949 154.473 71.4679 154.404 69.8508 153.862C68.01 153.145 66.0526 152.578 64.5036 151.487C60.3624 148.491 56.2049 145.362 52.2809 141.935C49.2512 139.206 49.6991 136.789 53.1578 135.283C60.532 132.145 67.9808 129.066 75.4296 125.987C76.6516 125.499 77.906 125.276 79.5428 124.872C79.675 127.621 78.145 128.35 76.7479 129.062C71.5097 131.463 66.4951 134.039 61.0396 136.872ZM68.486 45.6249C74.1537 48.9721 79.9263 48.1913 83.7681 43.7364C78.589 43.2971 73.7341 42.7503 68.486 45.6249ZM84.6311 76.8869C89.8454 79.2782 94.2666 77.9223 97.3793 73.018C92.6797 73.194 88.4695 73.5119 84.6311 76.8869Z"
            fill="#404040"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_47">
            <rect
              width="110.204"
              height="128.571"
              fill="white"
              transform="translate(79.1733) rotate(38.0097)"
            />
          </clipPath>
        </defs>
      </svg>
      <h2 className="text-xl md:text-2xl font-bold -mt-10">
        <span className="text-zinc-500 mr-2">2.</span>Software Development
      </h2>
      <p className="text-justify text-white/70 my-6">
        Proficient in software development, I create powerful solutions that
        help clients achieve their goals. My coding expertise and use of
        frameworks translate ideas into functional, user-friendly applications.
      </p>
      <Table firstCol="Frontend Development" secondCol="Backend Development" />
    </section>
  );
}

export default Services;

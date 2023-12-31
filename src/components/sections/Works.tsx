import Project from "../Project";
import mettical from "../../assets/mettical.png";
import wheatherApp from "../../assets/weather-app.png";
import windbnb from "../../assets/windbnb.png";
import randomQuoteGenerator from "../../assets/random-quote-generator.png";

interface FontProps {
  font: string;
}

export default function Works(props: FontProps) {
  return (
    <section className="-mt-24 md:mt-0 md:h-screen md:snap-start mb-16 pt-8">
      <h1 className={`text-5xl mb-8 ${props.font}`}>Works</h1>
      <div className="md:flex">
        <div className="flex md:flex-col flex-1 md:items-start justify-between mr-8 mb-4 md:mb-0">
          <span className="text-xl font-semibold bg-zinc-800 py-2 px-4 rounded">
            Software Development
          </span>
          <span className="text-white/50 text-xl font-semibold py-2 px-4 md:mt-16">
            UI/UX
          </span>
          <svg
            width="100"
            height="251"
            viewBox="0 0 232 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse hidden md:block"
          >
            <path
              d="M48.5152 198.16C47.0759 197.448 46.4461 197.441 45.9474 197.056C18.7386 164.338 5.64396 126.797 10.5738 84.101C11.792 73.3162 15.7748 63.0691 21.9491 53.7952C35.0105 33.8033 58.5018 25.0492 81.3444 31.5073C93.2688 34.8054 104.096 40.0484 112.023 49.9936C110.874 55.727 109.537 61.395 108.895 66.8817C107.891 75.8376 109.856 84.1338 116.126 90.9651C120.654 96.1338 126.297 98.0949 130.355 96.1218C135.683 93.5321 137.519 88.2489 136.582 83.0593C135.294 75.8447 133.123 68.746 130.633 61.9593C128.992 57.5824 126.214 53.4447 123.811 49.4378C134.419 29.2275 157.693 27.165 178.687 44.4005C178.391 47.681 178.028 51.1501 177.92 54.4959C177.813 66.9358 181.821 77.8453 191.73 85.7299C195.532 88.7429 200.038 90.9432 205.177 88.2881C209.047 86.2497 210.883 80.9664 209.71 74.6373C207.705 64.6355 202.401 56.2369 196.272 48.3968C194.041 45.7181 191.809 43.0394 189.512 40.5494C204.75 8.83666 242.412 -4.29753 266.789 18.9773C267.453 16.459 268.363 14.4489 268.004 13.0553C267.522 11.4076 265.716 9.93381 264.154 8.96812C249.215 0.392782 233.699 -2.8845 217.407 4.56508C205.174 10.0416 195.295 18.4508 186.96 29.0886C185.806 30.5907 184.651 32.0928 183.309 33.5295C183.243 33.7182 182.801 33.7761 181.852 34.0807C180.225 33.3037 178.156 32.5847 176.218 31.4882C152.39 18.7664 136.862 20.9833 117.004 40.5162C115.009 38.977 112.638 37.3071 110.52 35.5139C97.7416 25.5746 83.3892 20.1638 67.0127 19.9709C40.3702 19.5939 17.7987 34.8005 7.0567 60.2509C1.1982 74.0755 -1.07783 88.5107 -0.589336 103.484C0.743186 139.686 12.3365 171.841 37.1034 198.847C38.2803 200.313 39.7109 201.656 40.8878 203.122C41.0103 203.377 41.0673 203.819 41.2381 205.148C34.3182 204.434 28.4958 201.777 22.6078 199.307C16.8424 197.092 11.02 194.434 4.75581 191.835C3.61519 196.936 5.59281 199.739 8.39703 201.982C11.7655 204.421 15.0029 207.238 18.6993 208.734C28.7254 212.642 39.0052 216.426 49.5473 219.455C57.8322 221.7 61.5976 218.144 60.3188 210.298C57.4592 193.655 54.4116 176.947 51.3639 160.239C50.8341 157.517 49.7969 155.042 48.6459 151.681C43.6294 154.59 44.085 158.132 44.4181 161.42C46.1439 173.439 47.3054 185.263 48.5152 198.16ZM201.501 80.6665C189.112 74.4578 183.909 63.3448 187.411 51.4501C194.096 60.1177 200.602 68.0884 201.501 80.6665ZM127.76 87.8182C117.58 81.3198 114.936 71.942 120.065 60.8243C125.114 69.3463 129.354 77.1641 127.76 87.8182Z"
              fill="#333333"
            />
          </svg>
          <a
            href="#"
            className="font-semibold underline decoration-white hidden md:block"
          >
            Contact Me
          </a>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-4">
          <Project name="Mettical" projectCover={mettical} />
          <Project name="Windbnb" projectCover={windbnb} />
          <Project
            name="Random Quote Generator"
            projectCover={randomQuoteGenerator}
          />
          <Project name="Wheather App" projectCover={wheatherApp} />
        </div>
      </div>
    </section>
  );
}

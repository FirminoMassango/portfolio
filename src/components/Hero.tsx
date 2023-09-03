interface FontProps {
  font: string;
}

function Hero(props: FontProps) {
  return (
    <section className="mb-16 pt-24">
      <div className="lg:flex justify-between">
        <h1 className={`text-white text-8xl ${props.font}`}>
          Firmino
          <br /> Massango
        </h1>
        <div>
          <span className="mx-auto text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">
            <br />A UX Developer
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="w-2/3 text-white text-2xl mt-12">
            I am a <span className="font-semibold pr-2">Software Engineer</span>
            and a<span className="font-semibold pl-2">UX Designer</span>. I love
            building better experiences for clients / users.
          </p>
          <button className="flex items-center text-white border-2 border-white transition hover:border-emerald-400 hover:scale-105 duration-300 p-4 rounded mt-16 font-medium">
            <span className="pr-6 animate-pulse">Get in Touch</span>
            <svg
              width="32"
              height="15"
              viewBox="0 0 51 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.7071 8.20711C51.0976 7.81658 51.0976 7.18342 50.7071 6.79289L44.3431 0.428932C43.9526 0.0384078 43.3195 0.0384078 42.9289 0.428932C42.5384 0.819457 42.5384 1.45262 42.9289 1.84315L48.5858 7.5L42.9289 13.1569C42.5384 13.5474 42.5384 14.1805 42.9289 14.5711C43.3195 14.9616 43.9526 14.9616 44.3431 14.5711L50.7071 8.20711ZM0 8.5H50V6.5H0V8.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-between text-white h-auto">
          <div className="">
            <a
              href="https://behance.net/FirminoMassango"
              target="_blank"
              title="Behance"
              className="border-b-4"
            >
              <svg
                width="44"
                height="28"
                viewBox="0 0 58 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition hover:scale-150 duration-300"
              >
                <path
                  d="M52.8 4.8H36V0H52.8V4.8ZM56.9424 28.8C55.8816 31.9128 52.0728 36 44.7 36C37.3224 36 31.3464 31.8504 31.3464 22.38C31.3464 12.996 36.9264 8.172 44.4648 8.172C51.8616 8.172 56.3784 12.4488 57.3648 18.7944C57.552 20.0088 57.6264 21.6456 57.5928 23.9304H38.328C38.64 31.6368 46.6872 31.8792 49.3392 28.8H56.9424ZM38.496 19.2H50.412C50.16 15.4872 47.6856 13.8744 44.4672 13.8744C40.9488 13.8744 39.0024 15.7176 38.496 19.2ZM15.5184 35.9712H0V0.0503998H16.6872C29.8296 0.2448 30.0792 13.116 23.2152 16.6248C31.5216 19.6488 31.8 35.9712 15.5184 35.9712ZM7.2 14.4H15.8016C21.8208 14.4 22.776 7.2 15.0528 7.2H7.2V14.4ZM15.3384 21.6H7.2V28.8384H15.2184C22.5504 28.8384 22.1016 21.6 15.3384 21.6Z"
                  fill="#D2D2D2"
                />
              </svg>
            </a>
          </div>
          <div className="">
            <a
              href="https://github.com/FirminoMassango"
              target="_blank"
              title="GitHub"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition hover:scale-150 duration-300"
              >
                <path
                  d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM30.2792 40.8125C29.4354 40.975 29.1667 40.4562 29.1667 40.0125V35.4396C29.1667 33.8833 28.6208 32.8708 28.0208 32.3542C31.7333 31.9417 35.6333 30.5312 35.6333 24.1313C35.6333 22.3104 34.9833 20.8229 33.9188 19.6583C34.0896 19.2375 34.6604 17.5417 33.7542 15.2479C33.7542 15.2479 32.3562 14.8 29.175 16.9562C27.8417 16.5812 26.4167 16.4 25 16.3917C23.5833 16.3979 22.1583 16.5812 20.8271 16.9521C17.6437 14.7958 16.2437 15.2437 16.2437 15.2437C15.3396 17.5396 15.9104 19.2333 16.0833 19.6562C15.0167 20.8229 14.3667 22.3083 14.3667 24.1292C14.3667 30.5125 18.2563 31.9437 21.9604 32.3667C21.4833 32.7833 21.0521 33.5167 20.9021 34.5958C19.95 35.0208 17.5396 35.7562 16.0521 33.2083C16.0521 33.2083 15.1708 31.6083 13.4958 31.4896C13.4958 31.4896 11.8708 31.4688 13.3812 32.5042C13.3812 32.5042 14.475 33.0167 15.2333 34.9417C15.2333 34.9417 16.1979 37.9167 20.8333 36.9083V40.0104C20.8333 40.45 20.5646 40.9667 19.7333 40.8125C13.1083 38.6104 8.33333 32.3625 8.33333 25C8.33333 15.7937 15.7958 8.33333 25 8.33333C34.2042 8.33333 41.6667 15.7937 41.6667 25C41.6667 32.3604 36.8979 38.6062 30.2792 40.8125Z"
                  fill="#D2D2D2"
                />
              </svg>
            </a>
          </div>
          <div className="">
            <a
              href="https://www.linkedin.com/in/firminomassango"
              target="_blank"
              title="/LinkedIn"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition hover:scale-150 duration-300"
              >
                <path
                  d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM16.6667 39.5833H10.4167V16.6667H16.6667V39.5833ZM13.5417 14.025C11.5292 14.025 9.89583 12.3792 9.89583 10.35C9.89583 8.32083 11.5292 6.675 13.5417 6.675C15.5542 6.675 17.1875 8.32083 17.1875 10.35C17.1875 12.3792 15.5562 14.025 13.5417 14.025ZM41.6667 39.5833H35.4167V27.9083C35.4167 20.8917 27.0833 21.4229 27.0833 27.9083V39.5833H20.8333V16.6667H27.0833V20.3438C29.9917 14.9563 41.6667 14.5583 41.6667 25.5021V39.5833Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="grid place-content-center animate-bounce ">
        <svg
          width="24"
          height="48"
          viewBox="0 0 24 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 80.0607C11.5251 80.6464 12.4749 80.6464 13.0607 80.0607L22.6066 70.5147C23.1924 69.9289 23.1924 68.9792 22.6066 68.3934C22.0208 67.8076 21.0711 67.8076 20.4853 68.3934L12 76.8787L3.51472 68.3934C2.92894 67.8076 1.97919 67.8076 1.3934 68.3934C0.807615 68.9792 0.807615 69.9289 1.3934 70.5147L10.9393 80.0607ZM10.5 6.55671e-08L10.5 79L13.5 79L13.5 -6.55671e-08L10.5 6.55671e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;

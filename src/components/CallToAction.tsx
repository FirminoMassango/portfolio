interface MarginTopProps {
  marginTopDefault?: string;
  marginTopMedium?: string;
}

export default function CallToAction(props: MarginTopProps) {
  return (
    <a
      href="mailto:massango.fr@gmail.com"
      target="_blank"
      className={`w-full sm:w-56 px-16 sm:px-32 md:px-4 h-14 flex justify-between items-center text-white border-2 border-white animate-pulse transition hover:border-emerald-400 hover:scale-105 duration-300 p-4 rounded font-medium ${props.marginTopDefault} ${props.marginTopMedium}`}
    >
      <span className="md:pr-6">Get in Touch</span>
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
    </a>
  );
}

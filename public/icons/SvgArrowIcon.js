const SvgArrowIcon = ({ direction }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="ml-auto size-4 shrink-0 rotate-180 cursor-pointer transition-all"
      style={{ rotate: direction === "up" ? "180deg" : "0" }}
    >
      <path
        d="M1.99305 4.91999C1.66638 5.24666 1.66638 5.77332 1.99305 6.09999L7.53305 11.64C7.79305 11.9 8.21305 11.9 8.47305 11.64L14.013 6.09999C14.3397 5.77332 14.3397 5.24666 14.013 4.91999C13.6864 4.59332 13.1597 4.59332 12.833 4.91999L7.99971 9.74666L3.16638 4.91333C2.84638 4.59333 2.31305 4.59332 1.99305 4.91999Z"
        fill="#5B6170"
      ></path>
    </svg>
  );
};

export default SvgArrowIcon;

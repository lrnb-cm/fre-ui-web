function DashIcon({ fill }: { fill: string }) {
  console.log('checked', fill);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.79 22.7402H6.21C3.47 22.7402 1.25 20.5102 1.25 17.7702V10.3602C1.25 9.00021 2.09 7.29021 3.17 6.45021L8.56 2.25021C10.18 0.990208 12.77 0.930208 14.45 2.11021L20.63 6.44021C21.82 7.27021 22.75 9.05021 22.75 10.5002V17.7802C22.75 20.5102 20.53 22.7402 17.79 22.7402ZM9.48 3.43021L4.09 7.63021C3.38 8.19021 2.75 9.46021 2.75 10.3602V17.7702C2.75 19.6802 4.3 21.2402 6.21 21.2402H17.79C19.7 21.2402 21.25 19.6902 21.25 17.7802V10.5002C21.25 9.54021 20.56 8.21021 19.77 7.67021L13.59 3.34021C12.45 2.54021 10.57 2.58021 9.48 3.43021Z"
        fill={fill}
      />
      <path
        d="M7.49994 17.2499C7.30994 17.2499 7.11994 17.1799 6.96994 17.0299C6.67994 16.7399 6.67994 16.2599 6.96994 15.9699L10.1699 12.7699C10.3299 12.6099 10.5399 12.5299 10.7699 12.5499C10.9899 12.5699 11.1899 12.6899 11.3199 12.8799L12.4099 14.5199L15.9599 10.9699C16.2499 10.6799 16.7299 10.6799 17.0199 10.9699C17.3099 11.2599 17.3099 11.7399 17.0199 12.0299L12.8199 16.2299C12.6599 16.3899 12.4499 16.4699 12.2199 16.4499C11.9999 16.4299 11.7999 16.3099 11.6699 16.1199L10.5799 14.4799L8.02994 17.0299C7.87994 17.1799 7.68994 17.2499 7.49994 17.2499Z"
        fill={fill}
      />
      <path
        d="M16.5 14.25C16.09 14.25 15.75 13.91 15.75 13.5V12.25H14.5C14.09 12.25 13.75 11.91 13.75 11.5C13.75 11.09 14.09 10.75 14.5 10.75H16.5C16.91 10.75 17.25 11.09 17.25 11.5V13.5C17.25 13.91 16.91 14.25 16.5 14.25Z"
        fill={fill}
      />
    </svg>
  );
}

export default DashIcon;

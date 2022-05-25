function ActivityReportIcon({ fill }: { fill: string }) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 0.5C10.25 0.361929 10.1381 0.25 10 0.25H3C1.48122 0.25 0.25 1.48122 0.25 3V17C0.25 18.5188 1.48122 19.75 3 19.75H13C14.5188 19.75 15.75 18.5188 15.75 17V7.14706C15.75 7.00899 15.6381 6.89706 15.5 6.89706H11C10.5858 6.89706 10.25 6.56127 10.25 6.14706V0.5ZM11 10.25C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11C4.25 10.5858 4.58579 10.25 5 10.25H11ZM11 14.25C11.4142 14.25 11.75 14.5858 11.75 15C11.75 15.4142 11.4142 15.75 11 15.75H5C4.58579 15.75 4.25 15.4142 4.25 15C4.25 14.5858 4.58579 14.25 5 14.25H11Z"
        fill={fill}
      />
      <path
        d="M11.75 0.824135C11.75 0.63964 11.9426 0.522496 12.0862 0.638386C12.2071 0.735999 12.3158 0.850358 12.4085 0.979549L15.4217 5.17745C15.4903 5.27302 15.416 5.39706 15.2983 5.39706H12C11.8619 5.39706 11.75 5.28513 11.75 5.14706V0.824135Z"
        fill={fill}
      />
    </svg>
  );
}
export default ActivityReportIcon;

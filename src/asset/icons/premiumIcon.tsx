import { useTheme } from "@material-ui/core";

function PremiumIcon({ fill }: { fill?: string }) {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_98_42238)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7912 1.56289C8.36705 1.56289 5.59121 4.33873 5.59121 7.76289C5.59121 11.1871 8.36705 13.9629 11.7912 13.9629C15.2154 13.9629 17.9912 11.1871 17.9912 7.76289C17.9912 4.33873 15.2154 1.56289 11.7912 1.56289ZM3.99121 7.76289C3.99121 3.45507 7.48339 -0.0371094 11.7912 -0.0371094C16.099 -0.0371094 19.5912 3.45507 19.5912 7.76289C19.5912 12.0707 16.099 15.5629 11.7912 15.5629C7.48339 15.5629 3.99121 12.0707 3.99121 7.76289Z"
          fill={fill || theme.palette.text.primary}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.4762 12.8508C15.9142 12.7927 16.3164 13.1006 16.3745 13.5386L17.3117 20.6024C17.5099 22.0966 15.8937 23.1582 14.6012 22.3827L12.4088 21.0672C12.0288 20.8392 11.554 20.8392 11.174 21.0672L8.98195 22.3825C7.68936 23.158 6.07306 22.0963 6.27153 20.602L7.20838 13.5485C7.26655 13.1105 7.66877 12.8026 8.10675 12.8608C8.54473 12.919 8.85262 13.3212 8.79445 13.7592L7.8576 20.8127C7.83555 20.9787 8.01514 21.0967 8.15876 21.0105L10.3508 19.6952C11.2375 19.1632 12.3453 19.1632 13.232 19.6952L15.4244 21.0107C15.568 21.0968 15.7476 20.9789 15.7256 20.8129L14.7884 13.7491C14.7303 13.3111 15.0382 12.9089 15.4762 12.8508Z"
          fill={fill || theme.palette.text.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_98_42238">
          <rect
            width="24"
            height="24"
            fill={fill || theme.palette.text.primary}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PremiumIcon;

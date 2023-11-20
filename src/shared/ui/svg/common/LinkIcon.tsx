import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const LinkIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_37_10967)">
                    <path
                        d="M5.5 6.49998C5.71473 6.78705 5.98868 7.02457 6.30328 7.19645C6.61787 7.36833 6.96575 7.47054 7.32333 7.49615C7.6809 7.52176 8.03979 7.47017 8.37567 7.34487C8.71155 7.21958 9.01656 7.02352 9.27 6.76998L10.77 5.26998C11.2254 4.79848 11.4774 4.16697 11.4717 3.51148C11.466 2.85599 11.2031 2.22896 10.7395 1.76544C10.276 1.30192 9.64899 1.03899 8.9935 1.0333C8.33801 1.0276 7.70651 1.27959 7.235 1.73498L6.375 2.58998"
                        stroke="#2C80FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.49912 5.49999C7.2844 5.21293 7.01044 4.9754 6.69585 4.80352C6.38125 4.63164 6.03337 4.52943 5.6758 4.50382C5.31823 4.47822 4.95933 4.52981 4.62345 4.6551C4.28757 4.78039 3.98257 4.97646 3.72912 5.22999L2.22912 6.72999C1.77373 7.2015 1.52174 7.833 1.52744 8.48849C1.53313 9.14399 1.79606 9.77102 2.25958 10.2345C2.7231 10.6981 3.35013 10.961 4.00562 10.9667C4.66111 10.9724 5.29262 10.7204 5.76412 10.265L6.61912 9.40999"
                        stroke="#2C80FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_37_10967">
                        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </SvgContainer>
    );
};

export default LinkIcon;

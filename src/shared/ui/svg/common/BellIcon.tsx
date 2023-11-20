import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

export const BellIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9C6 16 3 18 3 18H21C21 18 18 16 18 9Z"
                    stroke="#777777"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="18" cy="4" r="3.5" fill="#D84444" stroke="#F6F7F8" />
                <path
                    d="M13.7295 22C13.5537 22.3031 13.3014 22.5547 12.9978 22.7295C12.6941 22.9044 12.3499 22.9965 11.9995 22.9965C11.6492 22.9965 11.3049 22.9044 11.0013 22.7295C10.6977 22.5547 10.4453 22.3031 10.2695 22"
                    stroke="#777777"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

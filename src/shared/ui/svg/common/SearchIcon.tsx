import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SearchIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                    stroke="#777777"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M21.0004 21.5L16.6504 17.15"
                    stroke="#777777"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

export default SearchIcon;

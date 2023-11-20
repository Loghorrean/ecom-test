import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const DropdownBigArrow = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 8.50005L11.9999 16.5L20 8.5"
                    stroke="#262B39"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

export default DropdownBigArrow;

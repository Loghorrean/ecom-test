import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const DoubleLeftIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_20, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.625 16.25L9.375 10L15.625 3.75"
                    stroke="black"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.375 16.25L3.125 10L9.375 3.75"
                    stroke="black"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

export default DoubleLeftIcon;

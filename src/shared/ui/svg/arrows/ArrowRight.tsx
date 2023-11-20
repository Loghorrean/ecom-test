import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const ArrowRight = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8L3 8M13 8L9 12M13 8L9 4" stroke="#262B39" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </SvgContainer>
    );
};

export default ArrowRight;

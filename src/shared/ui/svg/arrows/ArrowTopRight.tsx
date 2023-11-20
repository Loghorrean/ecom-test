import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowTopRight = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.76915 2.29578L0.769151 0.295777L10.7692 0.295776C11.3214 0.295777 11.7692 0.743492 11.7692 1.29578L11.7692 11.2958H9.76915V3.69524L1.63354 11.7042L0.230469 10.2789L8.33987 2.29578L0.76915 2.29578Z"
                    fill={props.fill ?? "#005CB3"}
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowTopRight;

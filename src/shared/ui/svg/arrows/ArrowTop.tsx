import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowTop = () => {
    return (
        <SvgContainer size={SVG_CONTAINER_SIZE.SIZE_16}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99989 3.82844L12.5729 8.40146L13.9871 6.98724L7.70709 0.707215H6.29288L0.0309653 6.96913L1.44518 8.38334L5.99989 3.82864L5.99989 14.676L7.99989 14.676L7.99989 3.82844Z"
                    fill="white"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowTop;

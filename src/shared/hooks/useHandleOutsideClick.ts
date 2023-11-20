import { MutableRefObject, useCallback } from "react";
import { Nullable } from "@/src/shared/utils/types";

export const useHandleOutsideClick = (
    callback: (...values: unknown[]) => unknown,
    elem: MutableRefObject<HTMLElement | null>
): ((e: MouseEvent) => void) => {
    return useCallback((e: MouseEvent): void => {
        if (e.target instanceof HTMLElement) {
            let element: Nullable<HTMLElement> = e.target;
            while (element && element !== elem.current) {
                element = element.parentElement;
            }
            if (element === null) {
                callback();
            }
        }
    }, []);
};

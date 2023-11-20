import { dropIsoTimezone } from "../date";
import { isNotEmpty } from "@/src/shared/utils/functions";

export type QueryObject = {
    [key: string]: unknown;
};

export const buildQuery = (data: QueryObject, prefix?: string): string => {
    const arr: Array<string> = [];
    if (data instanceof Array) {
        if (!prefix) {
            throw new Error("Passed an array without prefix");
        }
        data.forEach(value => {
            const key: string = prefix + "[]";
            arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        });
    } else if (data !== null && typeof data === "object") {
        Object.keys(data).forEach(name => {
            const key: string = prefix ? prefix + "[" + name + "]" : name;
            let value: unknown = data[name];
            if (value === null) {
                return;
            }
            if (value instanceof Date) {
                //Dropping the timezone part
                value = dropIsoTimezone(value);
            }
            if (typeof value === "object" && isNotEmpty(value)) {
                const res = buildQuery({ ...value }, key);
                res && arr.push(res);
            } else if (value !== undefined) {
                let encodedValue = encodeURIComponent(value as string | number | boolean);
                if (encodedValue === "") {
                    encodedValue = '""';
                }
                arr.push(`${encodeURIComponent(key)}=${encodedValue}`);
            }
        });
    }
    return arr.join("&");
};

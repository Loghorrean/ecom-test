import { default as dayjs } from "dayjs";
import { isNotEmpty, isValueEmpty } from "@/src/shared/utils/functions";

const defaultTimeout = 5000;
const defaultDelay = 50;
const storagePrefix = "lock:";

export class Lock {
    private delayTimeout?: number;

    constructor(private readonly key: string, private readonly storage: Storage) {}

    acquire(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            return this.waitAndSave(() => resolve(true), reject);
        });
    }

    release(): void {
        this.unlock();
    }

    private waitAndSave(resolve: () => void, reject: (reason: string) => void): void {
        try {
            if (this.isLocked()) {
                clearTimeout(this.delayTimeout);
                this.delayTimeout = window.setTimeout(() => this.waitAndSave(resolve, reject), defaultDelay);
            } else {
                this.lock();
                resolve();
            }
        } catch (error: unknown) {
            if (typeof error === "object" && isNotEmpty(error) && "reason" in error) {
                const reason = error.reason;
                if (typeof reason === "string") {
                    reject(reason);
                }
            }
        }
    }

    private isLocked(): boolean {
        const isoDate = this.storage.getItem(storagePrefix + this.key);
        if (isValueEmpty(isoDate)) {
            return false;
        }
        return dayjs().isAfter(dayjs(isoDate)) as boolean;
    }

    private lock(): void {
        this.storage.setItem(storagePrefix + this.key, dayjs().add(defaultTimeout, "milliseconds").toISOString());
    }

    private unlock(): void {
        this.storage.removeItem(storagePrefix + this.key);
    }
}

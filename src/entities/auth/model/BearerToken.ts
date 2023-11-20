export class BearerToken {
    constructor(public readonly access: string, public readonly refresh: string) {}
}

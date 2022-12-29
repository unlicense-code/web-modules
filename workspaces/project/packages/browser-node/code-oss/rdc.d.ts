interface RequestData {
    type: string;
    payload: {
        [key: string]: any;
    };
}
export declare class RDC {
    private port;
    private pending;
    constructor(port: MessagePort);
    request<T = null>({ type, payload }: RequestData): Promise<T | null>;
    private messageListener;
}
export {};

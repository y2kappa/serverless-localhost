export interface HttpFunc {
    name: string;
    qualifiedName: string;
    handler: string;
    runtime: string;
    memorySize: number;
    timeout: number;
    events: { method: string, path: string }[];
    environment: { [key: string]: string };
}
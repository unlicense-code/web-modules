// A Pure mans repl.


// using a client that uses a protocol  is designed to be singlton wtf
// export declare const WebContainer: {  boot(): Promise<WebContainer>; };
// export interface WebContainer {
    // fs: FileSystemAPI;
    // run(options: RunOptions, eventListeners?: RunListeners): Promise<WebContainerProcess>;
    // on(event: 'port', listener: (port: number, type: 'open' | 'close', url: string) => void): () => void;
    // on(event: 'server-ready', listener: (port: number, url: string) => void): () => void;
    // on(event: 'error', listener: (error: {
        // message: string;
    // }) => void): () => void;
// 
    // loadFiles(tree: FileSystemTree, options?: {
        // mountPoints?: string | string[];
    // }): Promise<void>;
    // teardown(): void; // dispose
// }

// declare type BufferEncoding = Exclude<string, 'buffer'>;

// export interface FileSystemAPI {
//     readdir(path: string, options: 'buffer' | {
//         encoding: 'buffer';
//     }): Promise<Uint8Array[]>;
//     readdir(path: string, options?: {
//         encoding?: BufferEncoding | null;
//     } | BufferEncoding | null): Promise<string[]>;
//     readFile(path: string, encoding?: null): Promise<Uint8Array>;
//     readFile(path: string, encoding: BufferEncoding): Promise<string>;
//     rm(path: string, options?: {
//         force?: boolean;
//         recursive?: boolean;
//     }): Promise<void>;
// }
// export interface FileSystemTree {
//     [name: string]: DirectoryEntry | FileEntry;
// }
// export interface DirectoryEntry {
//     directory: FileSystemTree;
// }
// export interface FileEntry {
//     file: {
//         contents: string | Uint8Array;
//     };
// }
// spawnedProcess
// export interface WebContainerProcess {
//     /**
//      * A promise for the exit code of the process.
//      */
//     onExit: Promise<number>;
//     /**
//      * Kills the process.
//      */
//     kill(): void;
// }
// export interface RunOptions { /** 'node', 'npm', 'ls', etc.  */
//     command: string;  args?: string[];  env?: Record<string, string | number | boolean>;
// }

// export interface RunListeners {
//     stdout?: (data: string) => void;
//     stderr?: (data: string) => void;
//     output?: (data: string) => void;
// }

// export declare function load(): Promise<typeof WebContainer>;
export {};

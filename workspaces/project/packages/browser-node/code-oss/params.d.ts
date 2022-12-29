import type { EmbedOptions, OpenOptions } from './interfaces';
declare type Options = Omit<OpenOptions & EmbedOptions, 'origin' | 'newWindow' | 'height' | 'width'>;
export declare function buildParams(options?: Options): string;
export {};

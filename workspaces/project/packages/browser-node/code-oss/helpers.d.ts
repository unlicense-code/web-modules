import type { EmbedOptions, OpenOptions } from './stackblitz-project-interfaces';
/** Pseudo-random id string length 8, and collisions around 1 per million. */
export declare function genID(): string;
export declare function openUrl(route: string, options?: OpenOptions): string;
export declare function embedUrl(route: string, options?: EmbedOptions): string;
export declare function replaceAndEmbed(parent: HTMLElement, frame: HTMLIFrameElement, options?: EmbedOptions): void;
export declare function findElement(elementOrId: string | HTMLElement): HTMLElement;
export declare function openTarget(options?: OpenOptions): "_self" | "_blank";

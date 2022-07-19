/**
 * Returns if the checked value is null or undefined.
 *
 * @param       { any }      value
 * @returns     { null | undefined }
 */
export const isNullOrUndefined = (value: any): value is null | undefined => value === null || value === undefined;

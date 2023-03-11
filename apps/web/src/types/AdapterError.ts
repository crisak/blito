export type ErrorAdapterResponse = {
  hasError: () => boolean;
  getFormatError: () => boolean;
};

export type ErrorAdapter = {
  message?: string | null;
  type?: string | 'exception' | 'business' | null;
  code?: string | null;
};

export type ListErrorAdapter = Array<ErrorAdapter>;

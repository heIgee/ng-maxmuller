declare global {
  interface Array<T> {
    random(): T | undefined;
  }
}

export {};

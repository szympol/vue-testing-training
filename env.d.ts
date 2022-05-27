/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_PRODUCTS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_PATH: string;
  readonly VITE_IMG_PATH: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
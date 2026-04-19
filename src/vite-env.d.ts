/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HONORIFIC: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

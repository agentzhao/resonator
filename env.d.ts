/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_YOUTUBE_API_KEY: string;
  readonly VITE_API_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

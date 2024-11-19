declare interface Env {
  readonly NG_APP_TEMPLATE_ID: string;
  readonly NG_APP_SERVICE_ID: string;
  readonly NG_APP_PUBLIC_KEY: string;
  readonly NG_APP_USER_NAME: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

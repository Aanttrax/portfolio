export interface IEnviroment {
  TEMPLATE_ID: string;
  SERVICE_ID: string;
  PUBLIC_KEY: string;
  NG_APP_USER_NAME: string;
}

export const environment: IEnviroment = {
  TEMPLATE_ID: import.meta.env.NG_APP_TEMPLATE_ID,
  SERVICE_ID: import.meta.env.NG_APP_SERVICE_ID,
  PUBLIC_KEY: import.meta.env.NG_APP_PUBLIC_KEY,
  NG_APP_USER_NAME: import.meta.env.NG_APP_USER_NAME,
};

// in oder to use the env variables we import getConfig---time2:14

import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

// export const API = publicRuntimeConfig.PRODUCTION?
//  'https://magimamodernartgallery.org' : 'http://localhost:8000';
// export const APP_NAME = publicRuntimeConfig.APP_NAME; 

//newer code--

export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
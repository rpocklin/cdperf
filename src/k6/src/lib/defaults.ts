import * as types from './types';

export class ENV {
    public static readonly CLOUD_VENDOR = __ENV.CLOUD_VENDOR || 'ocis';
    public static readonly CLOUD_ID = __ENV.CLOUD_ID || 'default';
    public static readonly CLOUD_HOST = __ENV.CLOUD_HOST || 'https://localhost:9200';
    public static readonly CLOUD_LOGIN = __ENV.CLOUD_LOGIN;
    public static readonly CLOUD_PASSWORD = __ENV.CLOUD_PASSWORD;
    public static readonly CLOUD_OIDC_ISSUER = __ENV.CLOUD_OIDC_ISSUER || ENV.CLOUD_HOST;
    public static readonly CLOUD_OIDC_ENABLED = __ENV.CLOUD_OIDC_ENABLED === 'true' || false;
}

export class ACCOUNTS {
    public static readonly ADMIN = 'admin';
    public static readonly EINSTEIN = 'einstein';
    public static readonly MARIE = 'marie';
    public static readonly RICHARD = 'richard';
    public static readonly ALL: { [key: string]: types.Account } = {
        admin: {
            login: 'admin',
            password: 'admin',
        },
        einstein: {
            login: __ENV.CLOUDSTOR_USER1,
            password: __ENV.CLOUDSTOR_PASS1,
        },
        marie: {
            login: __ENV.CLOUDSTOR_USER2,
            password: __ENV.CLOUDSTOR_PASS2,
        },
        richard: {
            login: 'richard',
            password: 'superfluidity',
        },
    };
}

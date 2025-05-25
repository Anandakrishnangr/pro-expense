import * as Keychain from 'react-native-keychain';

export type Tokens = {
    service: string; // used for grouping in secure storage
    token: string;
};

// Save token
export const saveToken = async ({ service, token }: Tokens) => {
    console.log('Saving token:', { service, token });
    const result = await Keychain.setGenericPassword('auth', token, { service });
    console.log('Token saved:', result);
    return { service, token };
};

// Retrieve token
export const getToken = async (service?: string) => {
    console.log('Retrieving token for service:', service);
    const creds = await Keychain.getGenericPassword({ service });
    console.log('Retrieved creds:', creds);
    if (creds) {
        return { service, token: creds.password };
    }
    return null;
};


export const deleteToken = async () => {
    await Keychain.resetGenericPassword();
};

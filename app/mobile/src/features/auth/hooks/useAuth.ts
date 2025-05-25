import {useSignupMutation, useLoginMutation} from '../../../graphql/graphql.ts';
import {getToken, saveToken} from '../../../lib/keychain.config.ts';
import {useAuthStore} from '../store/authStore.ts';

export const useAuth = () => {
  const [loginMutation] = useLoginMutation();
  const [createUserMutation, {data, loading, error}] = useSignupMutation();
  const {signin} = useAuthStore();

  const login = async (email: string, password: string) => {
    const response = await loginMutation({
      variables: {
        data: {email, password},
      },
    });
    const loginData = response?.data?.login;
    if (loginData) {
      const {accessToken, refreshToken} = loginData;
      await saveToken({
        service: 'access',
        token: accessToken,
      });
      await saveToken({
        service: 'refresh',
        token: refreshToken,
      });
      const access = await getToken('access');
      const refresh = await getToken('refresh');

      console.log('User token:', refresh, access);
      signin(email);
      return {accessToken, refreshToken};
    }
    console.log(response);
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await createUserMutation({
        variables: {
          data: {email, password, name},
        },
      });
      const signupData = response?.data?.signup;
      console.log('Signup response:', signupData);
      if (signupData) {
        const {accessToken, refreshToken} = signupData;

        console.log('Access Token:', accessToken);

        await saveToken({
          service: 'access',
          token: accessToken,
        });
        await saveToken({
          service: 'refresh',
          token: refreshToken,
        });

        const access = await getToken('access');
        const refresh = await getToken('refresh');

        console.log('User token:', refresh, access);
        signin(email);
        return {accessToken, refreshToken};
      }
    } catch (error) {
      console.log('Error during signup:', error);
    }
  };

  return {login, signUp};
};

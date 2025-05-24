import { loginApi } from '../services/auth';
import { useAuthStore } from '../store/authStore';

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const login = async (email: string, password: string) => {
    const data = await loginApi(email, password);
    setToken(data.token);
  };

  return { login };
};

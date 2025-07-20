import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ILoginPayload {
  uuid: string;
  username: string;
  role: string;
}

interface ILoginState {
  uuid: string;
  username: string;
  role: string;
  isLogin: boolean;
  onAuthSuccess: (user: ILoginPayload) => void;
  onLogOut: () => void;
}

const useAuthStore = create<ILoginState>()(
  persist(
    (set) => ({
      uuid: "",
      username: "",
      role: "",
      isLogin: false,
      onAuthSuccess: (payload) =>
        set(() => ({
          uuid: payload.uuid,
          username: payload.username,
          role: payload.role,
          isLogin: true,
        })),
      onLogOut: () =>
        set(() => ({
          uuid: "",
          username: "",
          role: "",
          isLogin: false,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

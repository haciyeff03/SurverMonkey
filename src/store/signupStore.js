import { create } from 'zustand';

const useSignupStore = create((set) => ({
    email: '',
    setEmail: (email) => set({ email }),
    clearEmail: () => set({ email: '' }),
}));

export default useSignupStore; 
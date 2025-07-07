import { create } from 'zustand';

type CheckIn = {
    users: global.CheckInData[];
    addUserCheckIn: (data: global.CheckInData) => void;
    updateUser: (
        name: string,
        updatedFields: Partial<global.CheckInData>,
    ) => void;
};

export const useCheckIn = create<CheckIn>((set) => ({
    users: [],
    addUserCheckIn: (data) =>
        set((state) => ({ users: [...state.users, data] })),
    updateUser: (name, updatedFields) =>
        set((state) => ({
            users: state.users.map((user) =>
                user.name === name ? { ...user, ...updatedFields } : user,
            ),
        })),
}));

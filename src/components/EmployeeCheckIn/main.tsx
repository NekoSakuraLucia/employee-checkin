// react
import { useMemo, useRef, useState } from 'react';

// component
import { TableContainer } from '@/components/EmployeeCheckIn/Table/TableContainer';
import { SearchInput } from '@/components/EmployeeCheckIn/Search_Add_Button/SearchInput';
import { AddCheckIn } from '@/components/EmployeeCheckIn/Search_Add_Button/AddCheckIn';

// Type
export interface CheckInData {
    id: string;
    name: string;
    dateAt: string;
    timer: string;
}

export const EmployeeCheckin = () => {
    const IdInitial = useRef<string>(Date.now().toString());
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [checkInData, setIsCheckIn] = useState<CheckInData[]>([]);
    const [formData, setFormData] = useState<CheckInData>({
        id: IdInitial.current,
        name: '',
        dateAt: '',
        timer: '',
    });

    const handleChangeInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const filteredUser = useMemo((): CheckInData[] => {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        return checkInData.filter((user) => {
            const name = user.name || '';
            return name.toLowerCase().trim().includes(normalizedQuery);
        });
    }, [searchQuery, checkInData]);

    const updateUser = (id: string, updatedFields: Partial<CheckInData>) => {
        setIsCheckIn((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, ...updatedFields } : user,
            ),
        );
    };

    return (
        <div className='p-6 space-y-6 w-full max-w-6xl mx-auto'>
            {/* Search & Add Button */}
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    checkInData={checkInData}
                />
                <AddCheckIn
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    setIsCheckIn={setIsCheckIn}
                />
            </div>

            {/* Table */}
            <TableContainer checkInData={filteredUser} onUpdate={updateUser} />
        </div>
    );
};

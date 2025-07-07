// react
import { useMemo, useState } from 'react';

// store
import { useCheckIn } from '@/store/useCheckIn';

// component
import { TableContainer } from '@/components/EmployeeCheckIn/Table/TableContainer';
import { SearchInput } from '@/components/EmployeeCheckIn/Search_Add_Button/SearchInput';
import { AddCheckIn } from '@/components/EmployeeCheckIn/Search_Add_Button/AddCheckIn';

export const EmployeeCheckin = () => {
    // Zustand State
    const { users: checkInData, updateUser, addUserCheckIn } = useCheckIn();

    // React State
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [formData, setFormData] = useState<global.CheckInData>({
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

    const filteredUser = useMemo((): global.CheckInData[] => {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        return checkInData.filter((user) => {
            const name = user.name || '';
            return name.toLowerCase().trim().includes(normalizedQuery);
        });
    }, [searchQuery, checkInData]);

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
                    addUserCheckIn={addUserCheckIn}
                />
            </div>

            {/* Table */}
            <TableContainer checkInData={filteredUser} onUpdate={updateUser} />
        </div>
    );
};

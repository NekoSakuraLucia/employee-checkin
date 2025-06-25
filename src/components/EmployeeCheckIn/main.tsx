// react
import { useRef, useState } from 'react';

// component
import { TableContainer } from '@/components/EmployeeCheckIn/Table/TableContainer';
import { SearchInput } from '@/components/EmployeeCheckIn/Search_Add_Button/SearchInput';
import { AddCheckIn } from '@/components/EmployeeCheckIn/Search_Add_Button/AddCheckIn';

export interface CheckInData {
    id: string;
    name: string;
    dateAt: string;
    timer: string;
}

export const EmployeeCheckin = () => {
    const IdInitial = useRef(Date.now().toString());
    const [checkInData, setIsCheckIn] = useState<CheckInData[]>([]);
    const [formData, setFormData] = useState<CheckInData>({
        id: IdInitial.current,
        name: '',
        dateAt: '',
        timer: '',
    });

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='p-6 space-y-6 w-full max-w-6xl mx-auto'>
            {/* Search & Add Button */}
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
                <SearchInput />
                <AddCheckIn
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    setIsCheckIn={setIsCheckIn}
                />
            </div>

            {/* Table */}
            <TableContainer checkInData={checkInData} />
        </div>
    );
};

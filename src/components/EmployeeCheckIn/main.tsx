// component
import { TableContainer } from '@/components/EmployeeCheckIn/Table/TableContainer';
import { SearchInput } from '@/components/EmployeeCheckIn/Search_Add_Button/SearchInput';
import { AddCheckIn } from '@/components/EmployeeCheckIn/Search_Add_Button/AddCheckIn';

export const EmployeeCheckin = () => {
    return (
        <div className='p-6 space-y-6 w-full max-w-6xl mx-auto'>
            {/* Search & Add Button */}
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
                <SearchInput />
                <AddCheckIn />
            </div>

            {/* Table */}
            <TableContainer />
        </div>
    );
};

// Shadcn-ui component
import { Input } from '@/components/ui/input';

// Icon
import { Search } from 'lucide-react';

// Type
type SearchInputProps = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    checkInData: global.CheckInData[];
};

export const SearchInput = ({
    searchQuery,
    setSearchQuery,
    checkInData,
}: SearchInputProps) => {
    const isUserListEmpty = checkInData.length === 0;

    return (
        <div className='relative w-full md:max-w-sm'>
            <Input
                placeholder='ค้นหาชื่อพนักงาน...'
                className='pl-8'
                value={searchQuery}
                disabled={isUserListEmpty}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='absolute top-1/2 -translate-y-1/2 left-2'>
                <Search className='w-4 h-4 text-zinc-600' />
            </div>
        </div>
    );
};

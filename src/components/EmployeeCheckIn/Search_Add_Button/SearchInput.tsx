// Shadcn-ui component
import { Input } from '@/components/ui/input';

// Icon
import { Search } from 'lucide-react';

export const SearchInput = () => {
    return (
        <div className='relative w-full md:max-w-sm'>
            <Input placeholder='ค้นหาชื่อพนักงาน...' className='pl-8' />
            <div className='absolute top-1/2 -translate-y-1/2 left-2'>
                <Search className='w-4 h-4 text-zinc-600' />
            </div>
        </div>
    );
};

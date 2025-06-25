// Shadcn-ui component
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Icon
import { Plus } from 'lucide-react';

export const AddCheckIn = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full md:w-auto cursor-pointer'>
                    <Plus />
                    เพิ่มเช็คอิน
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>เพิ่มเช็คอินใหม่</DialogTitle>
                </DialogHeader>

                <div className='space-y-4 py-2'>
                    <div className='space-y-2'>
                        <Label htmlFor='name'>ชื่อพนักงาน</Label>
                        <Input id='name' placeholder='กรอกชื่อพนักงาน' />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='date'>วันที่</Label>
                        <Input id='date' type='date' />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='time'>เวลา</Label>
                        <Input id='time' type='time' />
                    </div>
                </div>

                <DialogFooter className='mt-4'>
                    <DialogClose asChild>
                        <Button variant='outline'>ยกเลิก</Button>
                    </DialogClose>
                    <Button type='submit'>บันทึก</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

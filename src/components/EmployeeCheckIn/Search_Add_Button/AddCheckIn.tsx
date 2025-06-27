// Shadcn-ui component
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Icon
import { Plus } from 'lucide-react';

// Type
type AddCheckInProps = {
    formData: global.CheckInData;
    setIsCheckIn: React.Dispatch<React.SetStateAction<global.CheckInData[]>>;
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AddCheckIn = ({
    formData,
    handleChangeInput,
    setIsCheckIn,
}: AddCheckInProps) => {
    const handleAdd = (data: global.CheckInData): void => {
        setIsCheckIn((prev) => [...prev, data]);
    };

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
                    <DialogDescription>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </DialogDescription>
                </DialogHeader>

                <div className='space-y-4 py-2'>
                    <div className='space-y-2'>
                        <Label htmlFor='name'>ชื่อพนักงาน</Label>
                        <Input
                            name='name'
                            id='name'
                            placeholder='กรอกชื่อพนักงาน'
                            value={formData.name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='date'>วันที่</Label>
                        <Input
                            name='dateAt'
                            id='date'
                            type='date'
                            value={formData.dateAt}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='time'>เวลา</Label>
                        <Input
                            name='timer'
                            id='time'
                            type='time'
                            value={formData.timer}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>

                <DialogFooter className='mt-4'>
                    <DialogClose asChild>
                        <Button className='cursor-pointer' variant='outline'>
                            ยกเลิก
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            className='cursor-pointer'
                            onClick={() => handleAdd(formData)}
                        >
                            บันทึก
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

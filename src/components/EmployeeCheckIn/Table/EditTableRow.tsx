// react
import { useState } from 'react';

// shadcn-ui component
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
import { Edit } from 'lucide-react';
import type { CheckInData } from '@/components/EmployeeCheckIn/main';

// Type
type EditTableRowProps = {
    user: CheckInData;
    onUpdate: (id: string, updatedFields: Partial<CheckInData>) => void;
};

export const EditTableRow = ({ user, onUpdate }: EditTableRowProps) => {
    const [editUser, setEditUser] = useState<Partial<CheckInData>>({
        dateAt: user.dateAt,
        timer: user.timer,
    });

    const handleChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm' className='cursor-pointer'>
                    <Edit />
                    แก้ไข
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>แก้ไขข้อมูลเช็คอิน</DialogTitle>
                    <DialogDescription>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </DialogDescription>
                </DialogHeader>

                <div className='space-y-4 py-2'>
                    <div className='space-y-2'>
                        <Label htmlFor='edit-date'>วันที่</Label>
                        <Input
                            name='dateAt'
                            id='edit-date'
                            type='date'
                            value={editUser.dateAt}
                            onChange={handleChangeEdit}
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='edit-time'>เวลา</Label>
                        <Input
                            name='timer'
                            id='edit-time'
                            type='time'
                            value={editUser.timer}
                            onChange={handleChangeEdit}
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
                            onClick={() => onUpdate(user.name, editUser)}
                        >
                            บันทึก
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

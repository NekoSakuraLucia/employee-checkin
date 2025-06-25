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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Icon
import { User, Calendar, Timer, Settings, Edit, Trash } from 'lucide-react';

export const TableContainer = () => {
    return (
        <div className='overflow-x-auto rounded-lg border'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <div className='flex items-center gap-2'>
                                <User className='w-4 h-4' />
                                <span>ชื่อ</span>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className='flex items-center gap-2'>
                                <Calendar className='w-4 h-4' />
                                <span>วันที</span>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className='flex items-center gap-2'>
                                <Timer className='w-4 h-4' />
                                <span>เวลา</span>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className='flex justify-end items-center gap-2'>
                                <Settings className='w-4 h-4' />
                                <span>การจัดการ</span>
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* ตัวอย่างข้อมูล */}
                    <TableRow>
                        <TableCell>เนโกะ ผู้น่ารัก</TableCell>
                        <TableCell>2025-06-24</TableCell>
                        <TableCell>09:00</TableCell>
                        <TableCell className='text-right space-x-2'>
                            {/* ปุ่มแก้ไข */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        className='cursor-pointer'
                                    >
                                        <Edit />
                                        แก้ไข
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className='sm:max-w-md'>
                                    <DialogHeader>
                                        <DialogTitle>
                                            แก้ไขข้อมูลเช็คอิน
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className='space-y-4 py-2'>
                                        <div className='space-y-2'>
                                            <Label htmlFor='edit-date'>
                                                วันที่
                                            </Label>
                                            <Input id='edit-date' type='date' />
                                        </div>
                                        <div className='space-y-2'>
                                            <Label htmlFor='edit-time'>
                                                เวลา
                                            </Label>
                                            <Input id='edit-time' type='time' />
                                        </div>
                                    </div>

                                    <DialogFooter className='mt-4'>
                                        <DialogClose asChild>
                                            <Button variant='outline'>
                                                ยกเลิก
                                            </Button>
                                        </DialogClose>
                                        <Button type='submit'>บันทึก</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            {/* ปุ่มลบ */}
                            <Button
                                variant='destructive'
                                size='sm'
                                className='cursor-pointer'
                            >
                                <Trash />
                                ลบ
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

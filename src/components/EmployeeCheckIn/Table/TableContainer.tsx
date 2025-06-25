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
import {
    User,
    Calendar,
    Timer,
    Settings,
    Edit,
    Trash,
    Info,
} from 'lucide-react';
import type { CheckInData } from '@/components/EmployeeCheckIn/main';

type TableProps = {
    checkInData: CheckInData[];
};

export const TableContainer = ({ checkInData }: TableProps) => {
    return (
        <div className='overflow-x-auto rounded-lg border'>
            {checkInData.length > 0 ? (
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
                        {checkInData.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.dateAt}</TableCell>
                                <TableCell>{user.timer}</TableCell>
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
                                                <DialogDescription>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry.
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className='space-y-4 py-2'>
                                                <div className='space-y-2'>
                                                    <Label htmlFor='edit-date'>
                                                        วันที่
                                                    </Label>
                                                    <Input
                                                        id='edit-date'
                                                        type='date'
                                                    />
                                                </div>
                                                <div className='space-y-2'>
                                                    <Label htmlFor='edit-time'>
                                                        เวลา
                                                    </Label>
                                                    <Input
                                                        id='edit-time'
                                                        type='time'
                                                    />
                                                </div>
                                            </div>

                                            <DialogFooter className='mt-4'>
                                                <DialogClose asChild>
                                                    <Button variant='outline'>
                                                        ยกเลิก
                                                    </Button>
                                                </DialogClose>
                                                <Button type='submit'>
                                                    บันทึก
                                                </Button>
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
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <div className='flex flex-col items-center justify-center pt-5 pb-8 space-y-2 text-center'>
                    <Info className='w-32 h-32 text-zinc-800' />
                    <p className='text-zinc-400 text-lg'>ไม่พบข้อมูล</p>
                    <p className='text-zinc-400 text-xs sm:text-sm'>
                        คุณยังไม่ได้เพิ่มข้อมูล
                        กรุณาเพิ่มข้อมูลเช็คอินก่อนองค์ประกอบจึงจะแสดง หรือ
                        ไม่พบผลลัพธ์จากการค้นหา
                    </p>
                </div>
            )}
        </div>
    );
};

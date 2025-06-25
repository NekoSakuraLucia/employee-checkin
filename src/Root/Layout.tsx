type RootProps = {
    children: React.ReactNode;
};

export function Layout({ children }: RootProps) {
    return (
        <div className='pt-[130px] flex items-center justify-center w-full'>
            {children}
        </div>
    );
}

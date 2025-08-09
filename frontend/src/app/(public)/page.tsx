import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='bg-[#5dc9a8] min-h-screen flex items-center justify-center gap-10'>
            <Image
                src={
                    'https://i.etsystatic.com/41364786/r/il/3a87bb/5032255252/il_1080xN.5032255252_n6vg.jpg'
                }
                alt='Public Logo'
                width={519}
                height={519}
            />
            <div>
                <div>
                    <h1 className='text-[28px]'>
                        Manage your{' '}
                        <span className='font-bold'>PhotoCameras</span>{' '}
                        Inventory Easy
                    </h1>
                    <p className='text-[20px] mt-3'>
                        Easily organize, track, and manage your photo camera
                        collection in one place.
                    </p>
                </div>
                <div className='mt-10 space-x-3'>
                    <Button>
                        <Link href={'/login'}>Log In</Link>
                    </Button>
                    <Button variant={'secondary'}>
                        <Link href='/register'>Sign Up</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}

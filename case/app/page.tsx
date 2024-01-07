import { Button } from '@/components/ui/button';
import { Heading } from './_components/heading';
import { Heroes } from './_components/heroes';
import 'tailwindcss/tailwind.css';


export default function Home() {
  return (
    <div className='min-h-full flex flex-col font-ttfont'>
      <div className='flex flex-col items-center
      justify-center text-center gap-y-8
      flex-1 px-3 pb-5 md:pt-0 sm:pt-0 pt-20'>
        <Heading />
        <Heroes />
      </div>
    </div>

  );
}


{/* <Button variant="mine">
        Delete
      </Button> */}
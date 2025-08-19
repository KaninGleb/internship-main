import { Button, Header } from '@/common/components'
import { cn } from '@/common/utils'
import Image from 'next/image'
import { gitlByTheWall } from '@/assets/images'

//

export const SignUpCongratulations = () => {
  const commonClasses = 'font-[var(--font-family-primary)] text-center'

  return (
    <div className={'overflow-hidden'}>
      <Header isAuth notifCounter={0} />

      <div className='bg-dark-700 flex min-h-screen flex-col items-center pt-8.75 text-white'>
        <h1
          className={cn(
            commonClasses,
            'pb-5 text-[20px] leading-[var(--line-height-l)] font-[var(--font-weight-bold)]',
          )}
        >
          Congratulations!
        </h1>
        <p
          className={cn(
            commonClasses,
            'pb-14 text-[16px] leading-[var(--line-height-m)] font-[var(--font-weight-regular)]',
          )}
        >
          Your email has been confirmed.
        </p>
        <Button variant={'primary'} className={'w-[182px]'} children={'Sign In'} />

        <div className='relative mt-20 flex justify-center'>
          <Image src={gitlByTheWall} alt='Girl by the wall' className='object-contain' unoptimized priority={true} />
        </div>
      </div>
    </div>
  )
}

export default SignUpCongratulations

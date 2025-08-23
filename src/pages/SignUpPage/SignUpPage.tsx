import { useState } from 'react'
import { Checkbox } from '@headlessui/react'
import { Icon, Input, Button, Typography, Card } from '@/common/components'

const SignUpPage = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className='m-auto flex max-w-[378px] items-center justify-center bg-black'>
      <Card className={'w-full max-w-md p-8'}>
        <Typography className='mb-4 flex flex-col items-center justify-center text-xl text-[20px] font-semibold text-white'>
          Sign Up
        </Typography>

        <div className='mb-6 flex justify-center gap-15'>
          <a href={'https://www.google.com/'}>
            <Icon iconId='google' size={36} className='transition hover:scale-110' />
          </a>
          <a href={'https://github.com/'}>
            <Icon iconId='github' size={36} color={'white'} className='transition hover:scale-110' />
          </a>
        </div>

        <Input className={'w-full'} label={'Name'} placeholder={'Epam11'} />

        <Input className={'w-full'} type={'email'} label='Email' placeholder={'Epam@epam.com'} />

        <Input className={'w-full'} type={'password'} label={'Password'} />

        <Input className={'w-full'} type={'password'} label={'Password confirmation'} />

        <div className='mb-4 flex items-center'>
          <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className='group mr-2 block size-4 rounded-[2px] border bg-white data-checked:bg-white'
          >
            <svg className='stroke-black opacity-0 group-data-checked:opacity-100' viewBox='0 0 14 14' fill='none'>
              <path d='M3 8L6 11L11 3.5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </Checkbox>

          <Typography
            as='p'
            variant='p'
            className='w-full text-[12px] font-[var(--font-family-primary)] text-white italic'
          >
            I agree to the{' '}
            <Typography as='a' href={'#'} variant='link'>
              Terms of Service
            </Typography>{' '}
            and{' '}
            <Typography as='a' href={'#'} variant='link'>
              Privacy Policy
            </Typography>
          </Typography>
        </div>

        <Button className={'w-full'} variant={'primary'} size={'large'} children={'Sign up'} />

        <div className='m-auto mt-4 text-center'>
          <Typography as={'a'} href={'#'} variant='p' className='mb-1 text-white'>
            Do you have an account?
          </Typography>
          <Button className={'text-info-500 w-full'} size={'large'} children={'Sign in'} />
        </div>
      </Card>
    </div>
  )
}

export default SignUpPage

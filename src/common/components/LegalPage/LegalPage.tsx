import { Icon, Typography } from '@/common/components'

export const LegalPage = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className='text-light-100 min-h-screen px-4 pt-6 pl-16 font-normal md:pl-16'>
      <div className='w-full'>
        <Typography as='a' href='#' variant='p' className='aria-label="Back to Sign Up" no-underline'>
          <span aria-hidden='true'>
            <Icon iconId={'arrow-back'} color={'white'} size={24} className='mr-3 inline-block' />
          </span>
          Back to Sign Up
        </Typography>
      </div>
      <Typography variant='h1' as='h1' className='text-light-100 w-full pt-10 pb-5 text-center'>
        {title}
      </Typography>

      <div className={'m-auto max-w-4xl'}>
        <Typography
          className={'text-light-100 text-center text-sm leading-7 font-normal whitespace-pre-wrap'}
          variant={'p'}
        >
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default LegalPage

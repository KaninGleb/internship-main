import Link from 'next/link'
import { Button, FeedbackLayout } from '@/common/components'
import { gitlByTheWall } from '@/assets/images'

export const SignUpCongratulations = () => {
  return (
    <FeedbackLayout.Root>
      <FeedbackLayout.Title>Congratulations!</FeedbackLayout.Title>

      <FeedbackLayout.Message className='pb-14'>Your email has been confirmed.</FeedbackLayout.Message>

      <Link href={'/sign-in'}>
        <Button variant={'primary'} className={'mb-[72px] w-[182px]'}>
          Sign In
        </Button>
      </Link>

      <FeedbackLayout.Image src={gitlByTheWall} alt='Girl by the wall' />
    </FeedbackLayout.Root>
  )
}

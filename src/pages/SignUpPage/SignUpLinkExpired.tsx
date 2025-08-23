import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, FeedbackLayout, Input } from '@/common/components'
import { emailVerificationLinkExpired } from '@/assets/images'

// Заглушка
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

const SignUpLinkExpired = () => {
  const [isLinkSent, setIsLinkSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLinkSent(true)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    setError('')
  }

  return (
    <FeedbackLayout.Root>
      <FeedbackLayout.Title>Email verification link expired</FeedbackLayout.Title>

      <FeedbackLayout.Message className='max-w-[294px] pb-7'>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </FeedbackLayout.Message>

      <FeedbackLayout.Actions
        className={`mb-9 ${isLinkSent ? 'max-w-[294px]' : 'max-w-[230px]'} `}
        onSubmit={handleSubmit}
      >
        {isLinkSent ? (
          <Button type={'submit'} variant={'primary'} className={'w-full'}>
            Resend link
          </Button>
        ) : (
          <>
            <Input
              className={'w-full'}
              value={email}
              error={error}
              onChange={handleInput}
              type={'email'}
              label={'Email'}
              placeholder={'Enter you email...'}
            />
            <Button type={'submit'} variant={'primary'} className={'mt-6 w-full'}>
              Resend verification link
            </Button>
          </>
        )}
      </FeedbackLayout.Actions>

      <FeedbackLayout.Image src={emailVerificationLinkExpired} alt='Girl by the wall' />
    </FeedbackLayout.Root>
  )
}

export default SignUpLinkExpired

import type { FC } from 'react'
import { LegalPage } from '@/common/components'
import { termsContent } from '@/assets/content'

export const TermsOfService: FC = () => {
  return <LegalPage title='Terms of Service' content={termsContent} />
}

export default TermsOfService

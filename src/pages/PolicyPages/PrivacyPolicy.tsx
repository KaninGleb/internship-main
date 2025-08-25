import type { FC } from 'react'
import { LegalPage } from '@/common/components'
import { privacyContent } from '@/assets/content'

export const PrivacyPolicy: FC = () => {
  return <LegalPage title='Privacy Policy' content={privacyContent} />
}

export default PrivacyPolicy

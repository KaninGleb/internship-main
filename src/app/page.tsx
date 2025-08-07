export default function Home() {
  return (
    <>
      <div className='text-4xl font-bold text-[var(--color-accent-100)]'>Tailwind работает! 🚀</div>
      <div className='text-accent-100 text-4xl font-bold'>Tailwind работает! 🚀</div>
      <div className='bg-danger-100 p-4 text-white'>Test</div>
      <div style={{ width: '50px', height: '50px', color: 'var(--color-accent-100)' }}>123123123213</div>
      <div className='text-accent-500 text-4xl font-bold'>Тест цвета Accent</div>
      <div className='bg-danger-300 p-4 text-white'>Тест фона Danger</div>
    </>
  )
}

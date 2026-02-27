import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Данная страница находится в разработке </h2>
      <p>Приносим свои извенения, ожидайте</p>
      <Link href="/">На главную</Link>
    </div>
  )
}
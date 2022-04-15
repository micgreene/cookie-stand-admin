import Link from 'next/link'

export default function Header(){
  return (
    <header>
      <div className='p-2 flex justify-between bg-emerald-500'>
        <h1 className ="font-normal text-black text-3xl">Cookie Stand Admin</h1>
        <nav>
          <Link href="/overview">
            <button className="px-2 h-5 w-full bg-slate-100 font-semibold text-black text-xs rounded-sm">Overview</button>
          </Link>
        </nav>
      </div>      
    </header>
  )
}
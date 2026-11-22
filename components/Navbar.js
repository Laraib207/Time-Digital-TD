'use client';
import Link from 'next/link';import {usePathname} from 'next/navigation';import {useState} from 'react';import {nav} from '@/lib/data';
export default function Navbar(){const p=usePathname();const [o,setO]=useState(false);
return(<header><div className="w nv"><Link href="/" aria-label="Time Digital home"><img src="/logo.png" alt="Time Digital"/></Link>
<button className="bg" onClick={()=>setO(!o)} aria-label="Menu">{o?'×':'☰'}</button>
<nav className={'lk'+(o?' open':'')} onClick={()=>setO(false)}>{nav.filter(([h])=>h!=='/contact').map(([h,l])=><Link key={h} href={h} className={p===h?'on':''}>{l}</Link>)}<Link href="/contact" className="btn b1">Get a free quote</Link></nav></div></header>);}

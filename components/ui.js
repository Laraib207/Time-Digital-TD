import Link from 'next/link';import {site,nav,services,faqs} from '@/lib/data';
export const PageHero=({t,x})=>(<section className="ph"><div className="w"><h1>{t}</h1><p>{x}</p></div></section>);
export const Marquee=()=>{const a=services.map(s=>s.t);return(<div className="mq" aria-hidden="true"><div>{[...a,...a,...a,...a].map((s,i)=><span key={i}>{s}</span>)}</div></div>);};
export const Tiles=({items})=>(<div className="tl">{items.map(w=>(<div className="tile" key={w.t}><div className="im">{w.image&&<img src={w.image} alt={w.t}/>}</div><div><h3>{w.t}</h3><span>{w.c}</span></div></div>))}</div>);
export const Faq=()=>(<div>{faqs.map(([q,a])=>(<details key={q}><summary>{q}</summary><p>{a}</p></details>))}</div>);
export const Cta=()=>(<section className="cta"><div className="w"><div><h2>Have a project in mind?</h2><p style={{marginTop:8}}>Tell us what you need. We reply with scope, timeline and price.</p></div><div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><a href={`https://wa.me/${site.wa}`} className="btn b3">Chat on WhatsApp</a></div></div></section>);
export const Footer=()=>(<footer><div className="w f"><div><div className="fl"><img src="/logo.png" alt="Time Digital"/></div><p>{site.name} is a web development and 360° digital solutions company in Noida. {site.tag}.</p></div>
<div><h3>Pages</h3>{nav.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</div>
<div><h3>Contact</h3><p>{site.addr}</p><a href={`tel:${site.phone.replace(/\s/g,'')}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.hours}</p></div></div>
<div className="w cp">© {new Date().getFullYear()} {site.name}. All rights reserved.</div></footer>);

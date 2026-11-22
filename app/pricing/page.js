import Link from 'next/link';import {PageHero,Faq,Cta} from '@/components/ui';import {plans} from '@/lib/data';
export const metadata={title:'Pricing'};
export default function P(){return(<><PageHero t="Simple pricing" x="Starting prices for our most popular packages. Custom projects are quoted after a short call."/>
<section className="sec"><div className="w"><div className="pr">{plans.map(p=>(<div className={'pl'+(p.hot?' hot':'')} key={p.n}><h3>{p.n}</h3><b style={{marginTop:14}}>{p.a}</b><span>{p.u}</span><ul>{p.f.map(f=><li key={f}>{f}</li>)}</ul><Link href="/contact" className={'btn '+(p.hot?'b1':'b2')}>Choose {p.n}</Link></div>))}</div></div></section>
<section className="sec so"><div className="w"><div className="hd"><h2>Pricing questions</h2></div><Faq/></div></section><Cta/></>);}

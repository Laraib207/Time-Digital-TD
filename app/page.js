// import Link from 'next/link';import {services,work} from '@/lib/data';import {Marquee,Tiles,Faq,Cta} from '@/components/ui';
// const why=[['One team for everything','Website, marketing, apps, branding and video, so nothing gets lost between vendors.'],['Built to bring in customers','Every page and campaign has a job: calls, enquiries or sales.'],['Clear communication','Plain updates, fixed timelines and a price you know before we start.'],['Support after launch','We stay on for fixes, updates and growth once you go live.']];
// const steps=[['Discover','We learn your business, customers and goals.'],['Plan','We agree on scope, design direction and timeline.'],['Build','We design, develop and shoot, with check-ins on the way.'],['Grow','We launch, measure and keep improving results.']];
// export default function Home(){return(<>
// <section className="hero"><div className="w"><div><h1>Websites, marketing and brands that bring you customers.</h1><p className="lead" style={{color:'#2b2b2f'}}>Time Digital is a Noida agency for web development, SEO, apps, branding, video shooting and editing. We serve you better.</p>
// <div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><Link href="/portfolio" className="btn b3">See our work</Link></div>
// <div className="facts"><div><b>360°</b><span>digital solutions</span></div><div><b>6</b><span>core services</span></div><div><b>Noida</b><span>Sector 62 office</span></div></div></div>
// <div className="ringbox"><div className="ring"/><img src="/bulb.png" alt="Time Digital logo"/></div></div></section>
// <Marquee/>
// <section className="sec"><div className="w"><div className="hd"><h2>What we do</h2><p>Six services, one team. Pick one or combine them.</p></div>
// {services.map(s=>(<Link href="/services" className="sv" key={s.t}><div><h3>{s.t}</h3></div><p>{s.d}</p></Link>))}</div></section>
// <section className="sec dk"><div className="w"><div className="hd"><h2>Why businesses choose Time Digital</h2></div><div className="g2">{why.map(([a,b])=>(<div className="pt" key={a}><h3>{a}</h3><p>{b}</p></div>))}</div></div></section>
// <section className="sec so"><div className="w"><div className="hd"><h2>How we work</h2></div><div className="st">{steps.map(([a,b],i)=>(<div key={a}><i>{i+1}</i><h3>{a}</h3><p style={{color:'#5c5c63',marginTop:6}}>{b}</p></div>))}</div></div></section>
// <section className="sec"><div className="w"><div className="hd"><h2>Recent work</h2><p>Add your project images in lib/data.js to replace these placeholders.</p></div><Tiles items={work.slice(0,3)}/><div style={{marginTop:34}}><Link href="/portfolio" className="btn b2">View full portfolio</Link></div></div></section>
// <section className="sec so"><div className="w"><div className="hd"><h2>Questions we hear often</h2></div><Faq/></div></section>
// <Cta/></>);}



import Link from 'next/link';import {services,work} from '@/lib/data';import {Marquee,Tiles,Faq,Cta} from '@/components/ui';
const why=[['One team for everything','Website, marketing, apps, branding and video, so nothing gets lost between vendors.'],['Built to bring in customers','Every page and campaign has a job: calls, enquiries or sales.'],['Clear communication','Plain updates, fixed timelines and a price you know before we start.'],['Support after launch','We stay on for fixes, updates and growth once you go live.']];
const steps=[['Discover','We learn your business, customers and goals.'],['Plan','We agree on scope, design direction and timeline.'],['Build','We design, develop and shoot, with check-ins on the way.'],['Grow','We launch, measure and keep improving results.']];
export default function Home(){return(<>
<section className="hero"><div className="w"><div><p style={{fontWeight:700,fontSize:20,marginBottom:14}}>Welcome to the authentic digital services of Time Digital</p><h1>Websites, marketing and brands that bring you customers.</h1><p className="lead" style={{color:'#2b2b2f'}}>Time Digital is a Noida agency for web development, SEO, apps, branding, video shooting and editing. We serve you better.</p>
<div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><Link href="/portfolio" className="btn b3">See our work</Link></div>
<div className="facts"><div><b>360°</b><span>digital solutions</span></div><div><b>6</b><span>core services</span></div><div><b>Noida</b><span>Sector 62 office</span></div></div></div>
<div className="ringbox"><div className="ring"/><img src="/logo-hero.png" alt="Time Digital logo" style={{width:"78%",height:"auto",background:"none",border:0,borderRadius:0,padding:0}}/></div></div></section>
<Marquee/>
<section className="sec"><div className="w"><div className="hd"><h2>What we do</h2><p>Six services, one team. Pick one or combine them.</p></div>
{services.map(s=>(<Link href="/services" className="sv" key={s.t}><div><h3>{s.t}</h3></div><p>{s.d}</p></Link>))}</div></section>
<section className="sec dk"><div className="w"><div className="hd"><h2>Why businesses choose Time Digital</h2></div><div className="g2">{why.map(([a,b])=>(<div className="pt" key={a}><h3>{a}</h3><p>{b}</p></div>))}</div></div></section>
<section className="sec so"><div className="w"><div className="hd"><h2>How we work</h2></div><div className="st">{steps.map(([a,b],i)=>(<div key={a}><i>{i+1}</i><h3>{a}</h3><p style={{color:'#5c5c63',marginTop:6}}>{b}</p></div>))}</div></div></section>
<section className="sec"><div className="w"><div className="hd"><h2>Recent work</h2><p>Add your project images in lib/data.js to replace these placeholders.</p></div><Tiles items={work.slice(0,3)}/><div style={{marginTop:34}}><Link href="/portfolio" className="btn b2">View full portfolio</Link></div></div></section>
<section className="sec so"><div className="w"><div className="hd"><h2>Questions we hear often</h2></div><Faq/></div></section>
<Cta/></>);}
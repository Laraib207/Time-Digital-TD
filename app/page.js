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



// import Link from 'next/link';import {services,work} from '@/lib/data';import {Marquee,Tiles,Faq,Cta} from '@/components/ui';
// const why=[['One team for everything','Website, marketing, apps, branding and video, so nothing gets lost between vendors.'],['Built to bring in customers','Every page and campaign has a job: calls, enquiries or sales.'],['Clear communication','Plain updates, fixed timelines and a price you know before we start.'],['Support after launch','We stay on for fixes, updates and growth once you go live.']];
// const steps=[['Discover','We learn your business, customers and goals.'],['Plan','We agree on scope, design direction and timeline.'],['Build','We design, develop and shoot, with check-ins on the way.'],['Grow','We launch, measure and keep improving results.']];
// export default function Home(){return(<>
// <section className="hero"><div className="w"><div><p style={{fontWeight:700,fontSize:20,marginBottom:14}}>Welcome to the authentic digital services of Time Digital</p><h1>Websites, marketing and brands that bring you customers.</h1><p className="lead" style={{color:'#2b2b2f'}}>Time Digital is a Noida agency for web development, SEO, apps, branding, video shooting and editing. We serve you better.</p>
// <div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><Link href="/portfolio" className="btn b3">See our work</Link></div>
// <div className="facts"><div><b>360°</b><span>digital solutions</span></div><div><b>6</b><span>core services</span></div><div><b>Noida</b><span>Sector 62 office</span></div></div></div>
// <div className="ringbox"><div className="ring"/><img src="/logo-hero.png" alt="Time Digital logo" style={{width:"78%",height:"auto",background:"none",border:0,borderRadius:0,padding:0}}/></div></div></section>
// <Marquee/>
// <section className="sec"><div className="w"><div className="hd"><h2>What we do</h2><p>Six services, one team. Pick one or combine them.</p></div>
// {services.map(s=>(<Link href="/services" className="sv" key={s.t}><div><h3>{s.t}</h3></div><p>{s.d}</p></Link>))}</div></section>
// <section className="sec dk"><div className="w"><div className="hd"><h2>Why businesses choose Time Digital</h2></div><div className="g2">{why.map(([a,b])=>(<div className="pt" key={a}><h3>{a}</h3><p>{b}</p></div>))}</div></div></section>
// <section className="sec so"><div className="w"><div className="hd"><h2>How we work</h2></div><div className="st">{steps.map(([a,b],i)=>(<div key={a}><i>{i+1}</i><h3>{a}</h3><p style={{color:'#5c5c63',marginTop:6}}>{b}</p></div>))}</div></div></section>
// <section className="sec"><div className="w"><div className="hd"><h2>Recent work</h2><p>Add your project images in lib/data.js to replace these placeholders.</p></div><Tiles items={work.slice(0,3)}/><div style={{marginTop:34}}><Link href="/portfolio" className="btn b2">View full portfolio</Link></div></div></section>
// <section className="sec so"><div className="w"><div className="hd"><h2>Questions we hear often</h2></div><Faq/></div></section>
// <Cta/></>);}




// import Link from 'next/link';import {services,work} from '@/lib/data';import {Marquee,Tiles,Faq,Cta} from '@/components/ui';
// const why=[['One team for everything','Website, marketing, apps, branding and video, so nothing gets lost between vendors.'],['Built to bring in customers','Every page and campaign has a job: calls, enquiries or sales.'],['Clear communication','Plain updates, fixed timelines and a price you know before we start.'],['Support after launch','We stay on for fixes, updates and growth once you go live.']];
// const steps=[['Discover','We learn your business, customers and goals.'],['Plan','We agree on scope, design direction and timeline.'],['Build','We design, develop and shoot, with check-ins on the way.'],['Grow','We launch, measure and keep improving results.']];
// const chips=[['Websites','6%','8%'],['SEO','2%','66%'],['Apps','48%','90%'],['Branding','88%','62%'],['Video','76%','0%'],['Marketing','30%','-4%']];
// const css=`
// .xh{position:relative;overflow:hidden;background:#FFDE59;border-bottom:3px solid #131416;padding:84px 0 96px}
// .xh:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#13141614 1px,transparent 1px),linear-gradient(90deg,#13141614 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 92%);mask-image:linear-gradient(180deg,#000,transparent 92%)}
// .xh .o1{position:absolute;right:-150px;top:-150px;width:470px;height:470px;border-radius:50%;background:#131416}
// .xh .o2{position:absolute;left:-100px;bottom:-130px;width:320px;height:320px;border-radius:50%;border:34px solid #13141614}
// .xh .w{position:relative;display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:center}
// .xwel{display:inline-flex;align-items:center;gap:12px;background:#131416;color:#FFDE59;padding:11px 22px;border-radius:99px;font-weight:700;font-size:15px;margin-bottom:28px;box-shadow:5px 5px 0 #FFF6C7;animation:xup .8s both}
// .xwel i{width:10px;height:10px;border-radius:50%;background:#FFDE59;animation:xpulse 1.8s infinite}
// .xh h1{font-size:clamp(40px,6.4vw,84px);line-height:1;animation:xup .8s .12s both}
// .xh h1 em{font-style:normal;display:inline-block;background:#131416;color:#FFDE59;padding:0 18px 8px;margin-top:10px;transform:rotate(-1.5deg);border-radius:10px}
// .xh .lead{animation:xup .8s .24s both;font-size:19px}.xh .row{animation:xup .8s .36s both}
// .xf{display:flex;gap:40px;margin-top:46px;flex-wrap:wrap;animation:xup .8s .48s both}.xf b{display:block;font:800 40px/1 var(--fh)}.xf span{font-size:14px;font-weight:600}
// .xv{position:relative;aspect-ratio:1;width:100%;max-width:430px;margin:auto}
// .xv .r1{position:absolute;inset:2%;border:3px dashed #131416;border-radius:50%;animation:xspin 38s linear infinite}
// .xv .r2{position:absolute;inset:15%;border-radius:50%;background:#FFDE59;border:3px solid #131416;box-shadow:12px 12px 0 #131416;display:grid;place-items:center}
// .xv .r2 img{width:88%;height:auto}
// .xc{position:absolute;background:#fff;border:2px solid #131416;border-radius:99px;padding:8px 18px;font-weight:700;font-size:14px;box-shadow:4px 4px 0 #131416;animation:xfloat 4s ease-in-out infinite}
// .xhd{max-width:680px;margin-bottom:48px}.xhd h2{font-size:clamp(30px,4.6vw,54px)}.xhd h2:after{content:"";display:block;width:96px;height:9px;background:#FFDE59;border:2px solid #131416;border-radius:6px;margin-top:16px}
// .xhd p{color:#5c5c63;margin-top:14px;font-size:18px}.xdk .xhd h2:after{border-color:#FFDE59}.xdk .xhd p{color:#c9c9cf}
// .xs{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
// .xk{position:relative;display:flex;flex-direction:column;gap:12px;padding:30px;min-height:240px;border:2px solid #131416;border-radius:22px;background:#fff;overflow:hidden;transition:transform .35s,background .35s,box-shadow .35s}
// .xk:nth-child(1),.xk:nth-child(4),.xk:nth-child(5){grid-column:span 2}.xk:nth-child(1){background:#FFDE59}
// .xk b{font:800 66px/1 var(--fh);color:transparent;-webkit-text-stroke:2px #131416}
// .xk h3{font-size:24px}.xk p{color:#4a4a50;max-width:420px}.xk span{margin-top:auto;font-weight:700}
// .xk:hover{background:#131416;color:#fff;transform:translateY(-8px) rotate(-.6deg);box-shadow:10px 10px 0 #FFDE59}
// .xk:hover p{color:#c9c9cf}.xk:hover b{-webkit-text-stroke-color:#FFDE59}.xk:hover span{color:#FFDE59}
// .xdk{position:relative;background:#131416;color:#fff;padding:100px 0;overflow:hidden}
// .xdk:before{content:"";position:absolute;right:-180px;top:-180px;width:520px;height:520px;border-radius:50%;background:radial-gradient(#FFDE5955,transparent 68%)}
// .xdk .w{position:relative}.xy{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:44px 56px}
// .xi{display:flex;gap:22px;align-items:flex-start;padding-bottom:26px;border-bottom:1px solid #ffffff2b}.xi b{font:800 54px/1 var(--fh);color:#FFDE59}.xi h3{font-size:23px}.xi p{color:#c9c9cf;margin-top:6px}
// .xp{display:grid;grid-template-columns:repeat(4,1fr);position:relative}
// .xp:before{content:"";position:absolute;top:27px;left:12%;right:12%;height:3px;background:repeating-linear-gradient(90deg,#131416 0 10px,transparent 10px 20px)}
// .xq{text-align:center;padding:0 16px;position:relative}.xq i{display:grid;place-items:center;width:56px;height:56px;margin:0 auto 18px;border-radius:50%;background:#FFDE59;border:3px solid #131416;font:800 21px var(--fh);font-style:normal;transition:transform .3s,background .3s}
// .xq:hover i{transform:scale(1.18) rotate(8deg);background:#131416;color:#FFDE59}.xq h3{font-size:22px}.xq p{color:#5c5c63;margin-top:6px}
// @keyframes xup{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
// @keyframes xpulse{0%{box-shadow:0 0 0 0 #FFDE59aa}100%{box-shadow:0 0 0 12px transparent}}
// @keyframes xspin{to{transform:rotate(360deg)}}@keyframes xfloat{50%{transform:translateY(-12px)}}
// @media(max-width:960px){.xh .w{grid-template-columns:1fr}.xv{max-width:340px}.xs{grid-template-columns:1fr 1fr}.xk:nth-child(n){grid-column:auto}.xk:nth-child(1){grid-column:span 2}.xp{grid-template-columns:1fr 1fr;gap:34px 0}.xp:before{display:none}}
// @media(max-width:600px){.xs{grid-template-columns:1fr}.xk:nth-child(n){grid-column:auto}.xh{padding:60px 0 70px}.xc{display:none}}
// @media(prefers-reduced-motion:reduce){.xwel,.xh h1,.xh .lead,.xh .row,.xf,.xv .r1,.xwel i,.xc{animation:none}}
// `;
// export default function Home(){return(<>
// <style dangerouslySetInnerHTML={{__html:css}}/>
// <section className="xh"><div className="o1"/><div className="o2"/><div className="w"><div>
// <div className="xwel"><i/>Welcome to the authentic world of best-in-class service</div>
// <h1>Websites, marketing and brands that <em>bring you customers.</em></h1>
// <p className="lead" style={{color:'#2b2b2f'}}>Time Digital is a Noida agency for web development, SEO, apps, branding, video shooting and editing. We serve you better.</p>
// <div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><Link href="/portfolio" className="btn b3">See our work</Link></div>
// <div className="xf"><div><b>360°</b><span>digital solutions</span></div><div><b>6</b><span>core services</span></div><div><b>Noida</b><span>Sector 62 office</span></div></div></div>
// <div className="xv"><div className="r1"/><div className="r2"><img src="/logo-hero.png" alt="Time Digital logo"/></div>
// {chips.map(([t,top,left],i)=>(<div key={t} className="xc" style={{top,left,animationDelay:(i*.5)+'s'}}>{t}</div>))}</div></div></section>
// <Marquee/>
// <section className="sec"><div className="w"><div className="xhd"><h2>What we do</h2><p>Six services, one team. Pick one or combine them.</p></div>
// <div className="xs">{services.map((s,i)=>(<Link href="/services" className="xk" key={s.t}><b>{String(i+1).padStart(2,'0')}</b><h3>{s.t}</h3><p>{s.d}</p><span>Learn more →</span></Link>))}</div></div></section>
// <section className="xdk"><div className="w"><div className="xhd"><h2>Why businesses choose Time Digital</h2></div><div className="xy">{why.map(([a,b],i)=>(<div className="xi" key={a}><b>{i+1}</b><div><h3>{a}</h3><p>{b}</p></div></div>))}</div></div></section>
// <section className="sec so"><div className="w"><div className="xhd"><h2>How we work</h2><p>Four simple steps from first call to real results.</p></div><div className="xp">{steps.map(([a,b],i)=>(<div className="xq" key={a}><i>{i+1}</i><h3>{a}</h3><p>{b}</p></div>))}</div></div></section>
// <section className="sec"><div className="w"><div className="xhd"><h2>Recent work</h2><p>Add your project images in lib/data.js to replace these placeholders.</p></div><Tiles items={work.slice(0,3)}/><div style={{marginTop:34}}><Link href="/portfolio" className="btn b2">View full portfolio</Link></div></div></section>
// <section className="sec so"><div className="w"><div className="xhd"><h2>Questions we hear often</h2></div><Faq/></div></section>
// <Cta/></>);}



import Link from 'next/link';import {services,work} from '@/lib/data';import {Marquee,Tiles,Faq,Cta} from '@/components/ui';
const why=[['One team for everything','Website, marketing, apps, branding and video, so nothing gets lost between vendors.'],['Built to bring in customers','Every page and campaign has a job: calls, enquiries or sales.'],['Clear communication','Plain updates, fixed timelines and a price you know before we start.'],['Support after launch','We stay on for fixes, updates and growth once you go live.']];
const steps=[['Discover','We learn your business, customers and goals.'],['Plan','We agree on scope, design direction and timeline.'],['Build','We design, develop and shoot, with check-ins on the way.'],['Grow','We launch, measure and keep improving results.']];
const duo=[['Web Development','Fast, modern websites, online stores and apps that look sharp and turn visitors into enquiries.',['Business websites','E-commerce stores','Web apps']],['Digital Marketing','SEO, Meta and Google Ads, social media and lead generation that put your brand in front of buyers.',['SEO and local SEO','Meta & Google Ads','Lead generation']]];
const chips=[['Websites','4%','6%'],['Digital Marketing','0%','56%'],['SEO','46%','92%'],['Meta Ads','86%','60%'],['Apps','76%','-2%'],['Branding','28%','-6%']];
const css=`
.xh{position:relative;overflow:hidden;background:#FFDE59;border-bottom:3px solid #131416;padding:84px 0 96px}
.xh:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#13141614 1px,transparent 1px),linear-gradient(90deg,#13141614 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 92%);mask-image:linear-gradient(180deg,#000,transparent 92%)}
.xh .o1{position:absolute;right:-130px;top:-130px;width:340px;height:340px;border-radius:50%;background:#131416}
.xh .o2{position:absolute;left:-100px;bottom:-130px;width:320px;height:320px;border-radius:50%;border:34px solid #13141614}
.xh .w{position:relative;z-index:1;display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:center}
.xwel{display:inline-flex;align-items:center;gap:12px;background:#131416;color:#FFDE59;padding:11px 22px;border-radius:99px;font-weight:700;font-size:15px;line-height:1.4;margin-bottom:28px;animation:xup .8s both}
.xwel i{flex:none;width:10px;height:10px;border-radius:50%;background:#FFDE59;animation:xpulse 1.8s infinite}
.xh h1{font-size:clamp(34px,6vw,80px);line-height:1.08;animation:xup .8s .12s both}
.xh h1 em{font-style:normal;background:#131416;color:#FFDE59;padding:0 14px;border-radius:8px;box-decoration-break:clone;-webkit-box-decoration-break:clone;line-height:1.3}
.xh .lead{animation:xup .8s .24s both;font-size:19px;color:#2b2b2f}.xh .row{animation:xup .8s .36s both}
.xf{display:flex;gap:40px;margin-top:46px;flex-wrap:wrap;animation:xup .8s .48s both}.xf b{display:block;font:800 40px/1 var(--fh)}.xf span{font-size:14px;font-weight:600}
.xv{position:relative;aspect-ratio:1;width:100%;max-width:430px;margin:auto}
.xv .r1{position:absolute;inset:2%;border:3px dashed #131416;border-radius:50%;animation:xspin 38s linear infinite}
.xv .r2{position:absolute;inset:15%;border-radius:50%;background:#FFDE59;border:3px solid #131416;box-shadow:12px 12px 0 #131416;display:grid;place-items:center}
.xv .r2 img{width:88%;height:auto}
.xc{position:absolute;background:#fff;border:2px solid #131416;border-radius:99px;padding:8px 18px;font-weight:700;font-size:14px;white-space:nowrap;box-shadow:4px 4px 0 #131416;animation:xfloat 4s ease-in-out infinite}
.xd{display:grid;grid-template-columns:1fr 1fr;border-bottom:3px solid #131416}
.xd a{display:block;padding:56px 44px;transition:background .3s,color .3s}.xd a:nth-child(1){background:#131416;color:#fff}.xd a:nth-child(2){background:#fff;border-left:3px solid #131416}
.xd a:hover{background:#FFDE59;color:#131416}.xd h3{font-size:clamp(28px,3.4vw,40px)}.xd p{margin:12px 0 20px;max-width:460px;opacity:.88}
.xd ul{list-style:none;display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}.xd li{border:2px solid currentColor;border-radius:99px;padding:5px 16px;font-size:14px;font-weight:600}.xd span{font-weight:700}
.xhd{max-width:680px;margin-bottom:48px}.xhd h2{font-size:clamp(28px,4.6vw,54px)}.xhd h2:after{content:"";display:block;width:96px;height:9px;background:#FFDE59;border:2px solid #131416;border-radius:6px;margin-top:16px}
.xhd p{color:#5c5c63;margin-top:14px;font-size:18px}.xdk .xhd h2:after{border-color:#FFDE59}
.xs{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.xk{position:relative;display:flex;flex-direction:column;gap:12px;padding:30px;min-height:240px;border:2px solid #131416;border-radius:22px;background:#fff;overflow:hidden;transition:transform .35s,background .35s,box-shadow .35s}
.xk:nth-child(-n+2){background:#FFDE59}
.xk b{font:800 66px/1 var(--fh);color:transparent;-webkit-text-stroke:2px #131416}
.xk h3{font-size:24px}.xk p{color:#4a4a50}.xk span{margin-top:auto;font-weight:700}
.xk:hover{background:#131416;color:#fff;transform:translateY(-8px) rotate(-.6deg);box-shadow:10px 10px 0 #FFDE59}
.xk:hover p{color:#c9c9cf}.xk:hover b{-webkit-text-stroke-color:#FFDE59}.xk:hover span{color:#FFDE59}
.xdk{position:relative;background:#131416;color:#fff;padding:100px 0;overflow:hidden}
.xdk:before{content:"";position:absolute;right:-180px;top:-180px;width:520px;height:520px;border-radius:50%;background:radial-gradient(#FFDE5955,transparent 68%)}
.xdk .w{position:relative}.xy{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:44px 56px}
.xi{display:flex;gap:22px;align-items:flex-start;padding-bottom:26px;border-bottom:1px solid #ffffff2b}.xi b{font:800 54px/1 var(--fh);color:#FFDE59}.xi h3{font-size:23px}.xi p{color:#c9c9cf;margin-top:6px}
.xp{display:grid;grid-template-columns:repeat(4,1fr);position:relative}
.xp:before{content:"";position:absolute;top:27px;left:12%;right:12%;height:3px;background:repeating-linear-gradient(90deg,#131416 0 10px,transparent 10px 20px)}
.xq{text-align:center;padding:0 16px;position:relative}.xq i{display:grid;place-items:center;width:56px;height:56px;margin:0 auto 18px;border-radius:50%;background:#FFDE59;border:3px solid #131416;font:800 21px var(--fh);font-style:normal;transition:transform .3s,background .3s}
.xq:hover i{transform:scale(1.18) rotate(8deg);background:#131416;color:#FFDE59}.xq h3{font-size:22px}.xq p{color:#5c5c63;margin-top:6px}
@keyframes xup{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes xpulse{0%{box-shadow:0 0 0 0 #FFDE59aa}100%{box-shadow:0 0 0 12px transparent}}
@keyframes xspin{to{transform:rotate(360deg)}}@keyframes xfloat{50%{transform:translateY(-12px)}}
@media(max-width:960px){.xh .w{grid-template-columns:1fr}.xh .o1{display:none}.xv{max-width:320px}.xs{grid-template-columns:1fr 1fr}.xp{grid-template-columns:1fr 1fr;gap:34px 0}.xp:before{display:none}.xd{grid-template-columns:1fr}.xd a:nth-child(2){border-left:0;border-top:3px solid #131416}.xd a{padding:40px 24px}}
@media(max-width:600px){.xs{grid-template-columns:1fr}.xh{padding:48px 0 64px}.xc{display:none}.xwel{border-radius:16px;font-size:14px;padding:10px 16px;margin-bottom:22px}.xh .lead{font-size:17px}.xf{gap:26px;margin-top:34px}.xf b{font-size:32px}.xh .btn{padding:13px 22px}.xdk,.sec{padding-top:64px;padding-bottom:64px}}
@media(prefers-reduced-motion:reduce){.xwel,.xh h1,.xh .lead,.xh .row,.xf,.xv .r1,.xwel i,.xc{animation:none}}
`;
export default function Home(){return(<>
<style dangerouslySetInnerHTML={{__html:css}}/>
<section className="xh"><div className="o1"/><div className="o2"/><div className="w"><div>
<div className="xwel"><i/>Welcome to the authentic world of best-in-class service</div>
<h1>Websites and digital marketing that <em>bring you customers.</em></h1>
<p className="lead">Time Digital is a Noida agency for web development and digital marketing, backed by SEO, apps, branding, video shooting and editing. We serve you better.</p>
<div className="row"><Link href="/contact" className="btn b1">Get a free quote</Link><Link href="/portfolio" className="btn b3">See our work</Link></div>
<div className="xf"><div><b>360°</b><span>digital solutions</span></div><div><b>6</b><span>core services</span></div><div><b>Noida</b><span>Sector 62 office</span></div></div></div>
<div className="xv"><div className="r1"/><div className="r2"><img src="/logo-hero.png" alt="Time Digital logo"/></div>
{chips.map(([t,top,left],i)=>(<div key={t} className="xc" style={{top,left,animationDelay:(i*.5)+'s'}}>{t}</div>))}</div></div></section>
<Marquee/>
<section className="xd">{duo.map(([t,d,l])=>(<Link href="/services" key={t}><h3>{t}</h3><p>{d}</p><ul>{l.map(x=><li key={x}>{x}</li>)}</ul><span>Explore {t} →</span></Link>))}</section>
<section className="sec"><div className="w"><div className="xhd"><h2>What we do</h2><p>Six services, one team. Pick one or combine them.</p></div>
<div className="xs">{services.map((s,i)=>(<Link href="/services" className="xk" key={s.t}><b>{String(i+1).padStart(2,'0')}</b><h3>{s.t}</h3><p>{s.d}</p><span>Learn more →</span></Link>))}</div></div></section>
<section className="xdk"><div className="w"><div className="xhd"><h2>Why businesses choose Time Digital</h2></div><div className="xy">{why.map(([a,b],i)=>(<div className="xi" key={a}><b>{i+1}</b><div><h3>{a}</h3><p>{b}</p></div></div>))}</div></div></section>
<section className="sec so"><div className="w"><div className="xhd"><h2>How we work</h2><p>Four simple steps from first call to real results.</p></div><div className="xp">{steps.map(([a,b],i)=>(<div className="xq" key={a}><i>{i+1}</i><h3>{a}</h3><p>{b}</p></div>))}</div></div></section>
<section className="sec"><div className="w"><div className="xhd"><h2>Recent work</h2><p>Add your project images in lib/data.js to replace these placeholders.</p></div><Tiles items={work.slice(0,3)}/><div style={{marginTop:34}}><Link href="/portfolio" className="btn b2">View full portfolio</Link></div></div></section>
<section className="sec so"><div className="w"><div className="xhd"><h2>Questions we hear often</h2></div><Faq/></div></section>
<Cta/></>);}
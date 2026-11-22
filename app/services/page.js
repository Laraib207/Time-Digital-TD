import {PageHero,Cta} from '@/components/ui';import {services} from '@/lib/data';
export const metadata={title:'Services'};
export default function S(){return(<><PageHero t="Our services" x="Everything your business needs online, handled by one team."/>
<section className="sec"><div className="w">{services.map(s=>(<div className="sv" key={s.t}><div><h3>{s.t}</h3><p style={{marginTop:8}}>{s.d}</p></div><ul>{s.p.map(i=><li key={i}>{i}</li>)}</ul></div>))}</div></section><Cta/></>);}

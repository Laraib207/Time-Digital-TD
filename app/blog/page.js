import {PageHero,Cta} from '@/components/ui';import {posts} from '@/lib/data';
export const metadata={title:'Blog'};
export default function B(){return(<><PageHero t="Blog" x="Practical tips on websites, SEO and marketing."/><section className="sec"><div className="w">{posts.map(p=>(<article className="bl" key={p.t}><span>{p.c}</span><div><h3>{p.t}</h3><p>{p.x}</p></div></article>))}</div></section><Cta/></>);}

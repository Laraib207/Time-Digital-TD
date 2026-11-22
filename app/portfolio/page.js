import {PageHero,Tiles,Cta} from '@/components/ui';import {work} from '@/lib/data';
export const metadata={title:'Portfolio'};
export default function P(){return(<><PageHero t="Our work" x="A look at the websites, campaigns, brands and videos we create."/><section className="sec"><div className="w"><Tiles items={work}/></div></section><Cta/></>);}

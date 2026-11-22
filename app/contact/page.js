import {PageHero} from '@/components/ui';import ContactForm from '@/components/ContactForm';import {site} from '@/lib/data';
export const metadata={title:'Contact'};
export default function C(){return(<><PageHero t="Let's talk about your project" x="Share your requirement and we will reply with scope, timeline and price."/>
<section className="sec"><div className="w"><div className="ct"><dl><h2>Contact details</h2><dt>Address</dt><dd>{site.addr}</dd><dt>Phone</dt><dd><a href={`tel:${site.phone.replace(/\s/g,'')}`}>{site.phone}</a></dd><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd><dt>Hours</dt><dd>{site.hours}</dd></dl><ContactForm/></div>
<iframe className="map" title="Time Digital office map" loading="lazy" src="https://www.google.com/maps?q=Ithum+Tower+Sector+62+Noida&output=embed"/></div></section></>);}

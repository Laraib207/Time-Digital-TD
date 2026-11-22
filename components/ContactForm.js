'use client';
import {services,site} from '@/lib/data';
export default function ContactForm(){
function send(e){e.preventDefault();const f=Object.fromEntries(new FormData(e.target));
const t=`Hello ${site.short}, I am ${f.name}.\nPhone: ${f.phone}\nEmail: ${f.email}\nService: ${f.service}\n${f.msg}`;
window.open(`https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`,'_blank');}
return(<form onSubmit={send}><input name="name" placeholder="Your name" required/><input name="phone" placeholder="Phone number" required/><input name="email" type="email" placeholder="Email"/>
<select name="service">{services.map(s=><option key={s.t}>{s.t}</option>)}</select><textarea name="msg" rows="5" placeholder="Tell us about your project"/>
<button className="btn b1" type="submit">Send on WhatsApp</button></form>);}

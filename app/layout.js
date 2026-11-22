import './globals.css';import {Archivo,Plus_Jakarta_Sans} from 'next/font/google';import Navbar from '@/components/Navbar';import {Footer} from '@/components/ui';
const h=Archivo({subsets:['latin'],weight:['700','800'],variable:'--fh'});const b=Plus_Jakarta_Sans({subsets:['latin'],weight:['400','500','600','700'],variable:'--fb'});
export const metadata={title:{default:'Time Digital | Web Development & 360° Digital Solutions, Noida',template:'%s | Time Digital'},description:'Time Digital Pvt Ltd builds websites, apps, SEO and marketing campaigns, brands and videos from Noida. We serve you better.'};
export default function L({children}){return(<html lang="en"><body className={`${h.variable} ${b.variable}`}><Navbar/><main>{children}</main><Footer/></body></html>);}

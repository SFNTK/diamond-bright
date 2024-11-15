import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Why from "./components/why";
import Testimontials from "./components/testimontials";
import { ChevronDown, Star, Phone, Mail, Clock, Facebook, Instagram, Sparkles, Building, Truck, Briefcase, PlusCircle, Zap } from 'lucide-react'

import Gellery from "./components/gellery";
import Contact from "./components/contact";
import Pricingtier from "./components/pricingtier";
import Layoutclient from "./components/layoutclient";
import Sectionnn from "./components/sectionnn";

export default function Home() {
  return (
    <>
    <Layoutclient>
    <Hero/>
<About/>
<Services/>
<Why/>

<Sectionnn/>
<Gellery/>
<Contact/>
    </Layoutclient>

 


    </>
  );
}

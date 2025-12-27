
import React from 'react';
import { Rocket, Target, Users, Zap, Briefcase, Camera, Globe, Layers, Search, ShieldCheck, Trophy, Landmark, Sparkles } from 'lucide-react';
import { JourneyStage, Feature } from './types';
import { ins } from 'framer-motion/client';

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 1,
    title: "The Creator Node",
    description: "Transformation from dreamer to high-impact authority. We scale your presence through elite production and attention strategy.",
    icon: "Camera",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Service Architecture",
    description: "Turning attention into cash-flow agencies. We architect creator-led service businesses that monetize influence at scale.",
    icon: "Layers",
    accent: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: "Product Legacy",
    description: "The ultimate scale. We transition service models into D2C products or Tech platforms that exist independently of the founder.",
    icon: "Globe",
    accent: "from-orange-500 to-yellow-400"
  }
];

export const CREATOR_COHORT = [
  {
    name: "Rohan Azad",
    handle: "rohanazad_",
    agency: "AnM Studios",
    agencyHandle: "anmstudios",
    description: "Architecting elite recording environments specifically for the next generation of independent rappers.",
    image: "/images/Rohan_Azad.jpeg",
    role: "Hip-Hop Infrastructure",
    instagram: "https://www.instagram.com/iamrdyno?igsh=MWFzMjZtbTQ3eWM4dw%3D%3D&utm_source=qr",
    second_link: "https://www.instagram.com/anm_studioss?igsh=emoxNzdvMHg1ZzNr"
  },
  {
    name: "Harshal & Kalpit Mathur",
    handle: "harshalmathur",
    agency: "Verse Studios",
    agencyHandle: "verse.studios",
    description: "Developing original sonic identities and creative jingles for global brands, commercials, and B2B giants.",
    image: "/images/Harshal_Kalpit_Mathur.jpeg",
    role: "Sonic Branding",
    second_link: "https://www.instagram.com/versestudios_?igsh=MTlkcWZvdXRlam83Yg=="
  },
  {
    name: "Palak Yogi",
    handle: "palakyogi",
    agency: "Algorhythm",
    agencyHandle: "algorhythm.music",
    description: "Building a recommendation powerhouse and playlist curation ecosystem for the global indie music scene.",
    image: "/images/Palak_Yogi.PNG",
    role: "Indie Curation",
    instagram: "https://www.instagram.com/palakyogi__?igsh=bHVzbDA1dzg4MnA0",
    second_link: "https://www.instagram.com/algo.rhythm__?igsh=ZDNocmVxOWJ3eHcz"
  
  }
];

export const PIPELINE_STAGES = [
  {
    id: "I",
    title: "The Dreamer",
    subtitle: "Inbound Funnel",
    description: "We filter for individuals with 'Endless Passion'. We select only those with the highest content ceiling.",
    icon: <Sparkles className="w-5 h-5" />,
    details: ["Application & Audit", "Passion Verification", "High-Ceiling Selection"]
  },
  {
    id: "II",
    title: "The Creator",
    subtitle: "Discovery & Map",
    description: "Strategy mapping to transition from private individual to public IP. We build your niche category.",
    icon: <Search className="w-5 h-5" />,
    details: ["Brand Architecture", "Media Strategy", "Category Creation"]
  },
  {
    id: "III",
    title: "The Residency",
    subtitle: "Infrastructure",
    description: "5-10 year operational support. MNA provides everything—studio, crew, and editing—in a 50/50 partnership.",
    icon: <ShieldCheck className="w-5 h-5" />,
    details: ["Production Ecosystem", "Elite Editing Crew", "Growth Algorithms"]
  },
  {
    id: "IV",
    title: "The Service",
    subtitle: "Agency Build",
    description: "Building Path B: A service-based agency that leverages your Path A media influence.",
    icon: <Briefcase className="w-5 h-5" />,
    details: ["Agency Ops", "Service Productization", "Client Acquisition"]
  },
  {
    id: "V",
    title: "The Gate",
    subtitle: "Validation",
    description: "Reaching the 1M+ follower milestone. Distribution power is verified for standalone product launch.",
    icon: <Trophy className="w-5 h-5" />,
    details: ["Mass Distribution", "Trust Index", "Market Demand"]
  },
  {
    id: "VI",
    title: "The Product",
    subtitle: "Final Scale",
    description: "Maturity phase. Launching D2C goods or SaaS tech. Scaling towards global acquisition.",
    icon: <Landmark className="w-5 h-5" />,
    details: ["D2C / Tech SaaS", "Operational Scale", "Exit Strategy"]
  }
];

export const CORE_FEATURES: Feature[] = [
  {
    title: "Production Crew",
    description: "Full use of MNA Studios' specialized production teams and facilities.",
    icon: <Camera className="w-6 h-6" />
  },
  {
    title: "Viral Frameworks",
    description: "Access to proprietary growth algorithms that have generated 50M+ views.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "50/50 Partner",
    description: "Total alignment. We invest our infrastructure 50/50 with your talent.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Exit Expertise",
    description: "Consultancy on architecting your business for eventual tech or D2C acquisition.",
    icon: <Globe className="w-6 h-6" />
  }
];

export const IMPACT_STATS = [
  { label: "Elite Creators", value: "5", suffix: "", sub: "Active Residency" },
  { label: "Viral Views", value: "50", suffix: "M+", sub: "Organic Reach" },
  { label: "Active Agencies", value: "3", suffix: "", sub: "Creator-Led" },
  { label: "Business Model", value: "50/50", suffix: "", sub: "Equity Alignment" }
];

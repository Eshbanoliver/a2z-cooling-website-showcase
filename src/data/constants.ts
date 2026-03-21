export interface Business {
  name: string;
  phone: string;
  phoneClean: string;
  email: string;
  address: string;
  city: string;
  whatsappMessage: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Metric {
  icon: string;
  value: string;
  label: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export const BUSINESS: Business = {
  name: 'A2Z Cooling Point',
  phone: '+91 9782861818',
  phoneClean: '919782861818',
  email: 'a2zcoolingpointjpr@gmail.com',
  address: 'New Sanganer Road, Heera Path, Opp. Indian Petrol Pump, Mansarovar, Jaipur – 302020',
  city: 'Jaipur',
  whatsappMessage: 'Hello! I need cooling & appliance service. Please assist me.',
}

export const SERVICES: Service[] = [
  {
    id: 'ac-repair',
    icon: 'ac-repair',
    title: 'AC Repair & Service',
    description: 'Complete AC repair, gas refilling, installation, and annual maintenance services for all brands. We ensure your AC runs at peak performance.',
  },
  {
    id: 'geyser-repair',
    icon: 'geyser-repair',
    title: 'Geyser Repair & Service',
    description: 'Expert geyser repair, thermostat replacement, element fixing, and regular maintenance for all types of water heaters.',
  },
  {
    id: 'washing-machine',
    icon: 'washing-machine',
    title: 'Washing Machine Repair',
    description: 'Professional washing machine repair and service for top-load, front-load, and semi-automatic models of all major brands.',
  },
  {
    id: 'solar-ac',
    icon: 'solar-ac',
    title: 'Solar AC Selling',
    description: 'Energy-efficient solar-powered air conditioning systems. Go green while staying cool with our eco-friendly solar AC solutions.',
  },
  {
    id: 'cruise-ac',
    icon: 'cruise-ac',
    title: 'Cruise AC',
    description: 'Authorized sales, installation, and service for Cruise AC. Premium cooling solutions with advanced technology and energy efficiency.',
  },
  {
    id: 'voltas-ac',
    icon: 'voltas-ac',
    title: 'Voltas AC',
    description: 'Complete Voltas AC sales and service center. Expert installation, repair, and maintenance for all Voltas air conditioner models.',
  },
  {
    id: 'godrej-ac',
    icon: 'godrej-ac',
    title: 'Godrej AC',
    description: 'Trusted Godrej AC dealer. Sales, installation, and comprehensive after-sales service for Godrej cooling products.',
  },
  {
    id: 'lloyd-ac',
    icon: 'lloyd-ac',
    title: 'Lloyd AC',
    description: 'Lloyd AC authorized dealer with full-range sales, expert installation, and reliable servicing for all Lloyd AC models.',
  },
  {
    id: 'lg-ac',
    icon: 'lg-ac',
    title: 'LG AC',
    description: 'LG AC sales and service. Dual inverter technology, smart connectivity, and expert maintenance for LG air conditioners.',
  },
  {
    id: 'daikin-ac',
    icon: 'daikin-ac',
    title: 'Daikin AC',
    description: 'Premium Daikin AC solutions. Japanese technology, superior cooling, and professional service for all Daikin models.',
  },
  {
    id: 'samsung-ac',
    icon: 'samsung-ac',
    title: 'Samsung AC',
    description: 'Samsung AC authorized dealer. Wind-Free cooling, AI auto comfort, and comprehensive service for Samsung ACs.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    text: 'Excellent service! The technician was very professional and fixed my AC within an hour. The pricing was transparent with no hidden charges. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Gupta',
    text: 'Got my geyser repaired during peak winter. The team came on the same day and fixed the issue quickly. Very reliable and affordable service.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Jain',
    text: 'Purchased a Daikin AC from A2Z Cooling Point. Installation was done perfectly and they provided great after-sales support. Very happy customer!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sunita Agarwal',
    text: 'My washing machine was making strange noises. A2Z team diagnosed and fixed the problem same day. The technician was knowledgeable and courteous.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    text: 'Best AC service center in Jaipur! They handle all brands efficiently. I have been their customer for 3 years and never been disappointed.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Neha Verma',
    text: 'Bought a solar AC from A2Z. It has significantly reduced my electricity bills. The team guided me through everything. Amazing experience!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Karan Mehta',
    text: 'Prompt response and quality repair work. My LG AC was leaking water and they fixed it permanently. Fair pricing too. Will use their services again.',
    rating: 4,
  },
  {
    id: 8,
    name: 'Deepa Rathore',
    text: 'Very professional team. They maintained my entire office AC system. Regular servicing keeps everything running smoothly. Trustworthy service providers.',
    rating: 5,
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'What areas in Jaipur do you serve?',
    answer: 'We serve all major areas of Jaipur including Mansarovar, Vaishali Nagar, Malviya Nagar, Tonk Road, Ajmer Road, and surrounding areas. Contact us for service availability in your locality.',
  },
  {
    question: 'Do you provide emergency AC repair services?',
    answer: 'Yes, we offer same-day emergency AC repair services. For urgent requirements, please call us directly or reach out via WhatsApp for the fastest response.',
  },
  {
    question: 'What brands do you service?',
    answer: 'We service all major brands including Voltas, Godrej, Lloyd, LG, Daikin, Samsung, Cruise, Hitachi, Blue Star, Carrier, and many more.',
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, we provide a service warranty on all repairs. The duration depends on the type of repair. Genuine spare parts are used with manufacturer warranty.',
  },
  {
    question: 'How can I schedule a service appointment?',
    answer: 'You can schedule by calling us at +91 9782861818, messaging on WhatsApp, or filling out the contact form on our website. We will confirm your appointment within an hour.',
  },
  {
    question: 'What is the cost of AC servicing?',
    answer: 'AC servicing costs vary based on the type of service needed. Basic servicing starts at affordable rates. Contact us for a detailed quote after inspecting your unit.',
  },
]

export const METRICS: Metric[] = [
  { icon: 'trophy', value: '10+', label: 'Years Experience' },
  { icon: 'smile', value: '5000+', label: 'Happy Clients' },
  { icon: 'wrench', value: '8000+', label: 'Projects Done' },
  { icon: 'star', value: '4.9', label: 'Average Rating' },
]

export const VALUES: Value[] = [
  {
    icon: 'target',
    title: 'Quality First',
    description: 'We use genuine spare parts and deliver top-quality service ensuring long-lasting solutions for every customer.',
  },
  {
    icon: 'clock',
    title: 'Punctual Service',
    description: 'We respect your time. Our technicians arrive on schedule and aim to complete every job efficiently.',
  },
  {
    icon: 'rupee',
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden charges. We provide upfront quotes before starting any work.',
  },
  {
    icon: 'shield',
    title: 'Trusted Experts',
    description: 'Our certified technicians are trained and experienced to handle all brands and complex repairs.',
  },
  {
    icon: 'handshake',
    title: 'Customer Care',
    description: 'We build lasting relationships with customers through exceptional service and post-service support.',
  },
  {
    icon: 'leaf',
    title: 'Eco Friendly',
    description: 'We promote energy-efficient and eco-friendly cooling solutions including solar AC systems.',
  },
]

import {
  Palette,
  Code2,
  ShoppingCart,
  Wrench,
  Search,
  Gauge,
  Rocket,
  Smartphone,
  TrendingUp,
  Headphones,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'website-design',
    icon: Palette,
    title: 'Website Design',
    description:
      'Custom, conversion-focused designs built around your brand and your customers — not a recycled template.',
    features: [
      'Custom UI/UX design',
      'Brand-aligned visuals',
      'Mobile-first layouts',
      'Conversion-optimized',
    ],
  },
  {
    slug: 'wordpress-development',
    icon: Code2,
    title: 'WordPress Development',
    description:
      'Powerful, easy-to-manage WordPress sites you can update yourself, built on clean and secure code.',
    features: [
      'Custom themes',
      'Easy content editing',
      'Plugin integration',
      'Secure & scalable',
    ],
  },
  {
    slug: 'ecommerce-development',
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description:
      'Online stores that turn browsers into buyers, with smooth checkout and effortless product management.',
    features: [
      'Shopify & WooCommerce',
      'Secure checkout',
      'Inventory management',
      'Payment integration',
    ],
  },
  {
    slug: 'website-maintenance',
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, backups, and monitoring that keep your site secure, fast, and always online.',
    features: [
      'Security updates',
      'Daily backups',
      'Uptime monitoring',
      'Content updates',
    ],
  },
  {
    slug: 'seo-optimization',
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Get found by the customers searching for you with technical, on-page, and local SEO that ranks.',
    features: [
      'Keyword strategy',
      'On-page SEO',
      'Local SEO',
      'Performance tracking',
    ],
  },
  {
    slug: 'speed-optimization',
    icon: Gauge,
    title: 'Website Speed Optimization',
    description:
      'Lightning-fast load times that keep visitors engaged and boost your search rankings.',
    features: [
      'Core Web Vitals',
      'Image optimization',
      'Caching & CDN',
      'Code minification',
    ],
  },
]

export type WhyChoose = {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChoose: WhyChoose[] = [
  {
    icon: Rocket,
    title: 'Fast Loading Websites',
    description:
      'Speed-optimized builds that load in under two seconds to keep visitors engaged.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description:
      'Flawless experiences on every device, from phones to widescreen desktops.',
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    description:
      'Built on clean, structured code so search engines rank you higher.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description:
      'Every layout decision is designed to turn visitors into paying customers.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'A dedicated team that keeps your site secure, updated, and growing.',
  },
]

export type Project = {
  title: string
  category: string
  image: string
  result: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Northpeak Outfitters',
    category: 'E-Commerce',
    image: '/images/project-ecommerce.png',
    result: '+182% online sales',
    tags: ['Shopify', 'SEO', 'Design'],
  },
  {
    title: 'Summit Builders',
    category: 'Contractor',
    image: '/images/project-contractor.png',
    result: '3x more leads',
    tags: ['WordPress', 'Local SEO'],
  },
  {
    title: 'Olive & Ember',
    category: 'Restaurant',
    image: '/images/project-restaurant.png',
    result: '+240% reservations',
    tags: ['Design', 'Speed'],
  },
  {
    title: 'Brightsmile Dental',
    category: 'Healthcare',
    image: '/images/project-dental.png',
    result: '+95% bookings',
    tags: ['WordPress', 'SEO'],
  },
  {
    title: 'Forge Fitness',
    category: 'Fitness',
    image: '/images/project-fitness.png',
    result: '+310% sign-ups',
    tags: ['Design', 'Conversion'],
  },
  {
    title: 'Anchor Realty',
    category: 'Real Estate',
    image: '/images/project-realestate.png',
    result: '+128% inquiries',
    tags: ['WordPress', 'Local SEO'],
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'WebPursuit rebuilt our site and within three months our lead volume tripled. The team genuinely understood our business.',
    name: 'Marcus Reid',
    role: 'Owner, Summit Builders',
    initials: 'MR',
  },
  {
    quote:
      'Our new store loads instantly and sales are up 180%. Best investment we have made in the business this year.',
    name: 'Elena Torres',
    role: 'Founder, Northpeak Outfitters',
    initials: 'ET',
  },
  {
    quote:
      'Professional, responsive, and incredibly talented. They handled everything from design to SEO and ongoing support.',
    name: 'Dr. Priya Shah',
    role: 'Brightsmile Dental',
    initials: 'PS',
  },
  {
    quote:
      'They translated our vision into a website that actually books reservations. Reservations are up 240%.',
    name: 'James Okafor',
    role: 'Owner, Olive & Ember',
    initials: 'JO',
  },
]

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We learn your business, goals, and audience to map out a strategy that drives results.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We craft a custom, on-brand design focused on clarity, trust, and conversions.',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'We build fast, secure, responsive code that works flawlessly on every device.',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'We rigorously test, optimize, and launch your site for maximum performance.',
  },
  {
    step: '05',
    title: 'Support',
    description:
      'We provide ongoing maintenance and improvements so your site keeps growing.',
  },
]

export const stats = [
  { value: '150+', label: 'Websites Launched' },
  { value: '98%', label: 'Client Retention' },
  { value: '2.4x', label: 'Avg. Lead Growth' },
  { value: '10+', label: 'Years Experience' },
]

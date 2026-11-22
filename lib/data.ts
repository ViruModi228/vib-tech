export const company = {
  name: 'VIB Tech',
  legal: 'VIB Tech Pty Ltd',
  phone: '0404 441 610',
  phoneHref: 'tel:0404 441 610',
  email: 'vibtechpty@gmail.com',
  address: '92 Kapinka Pde, Riverlea Park SA 5120',
  hours: 'Mon–Fri 7:30am – 5:30pm ACST',
  abn: '11 623 997 571',
  acn: '623 997 571',
};

// Formspree form ID (the part after /f/ in https://formspree.io/f/xxxxxxxx). Every form on the site posts here.
// The address enquiries are emailed to is set in the Formspree dashboard, not in this code.
export const formspreeId = 'xoedndvz';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/about/', label: 'About' },
  { href: '/careers/', label: 'Careers' },
  { href: '/contact/', label: 'Contact' },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'cabling',
    icon: 'Cable',
    title: 'Structured Data Cabling',
    short: 'Cat6A copper and backbone cabling designed, installed and certified to Australian standards.',
    image: '/images/cabling-panel.jpg',
    points: ['Cat6 / Cat6A installs and certification', 'Comms rooms and rack builds', 'Moves, adds and changes', '25-year manufacturer warranty options'],
  },
  {
    slug: 'fibre',
    icon: 'Waypoints',
    title: 'Fibre Optic Networks',
    short: 'Single and multimode fibre for campuses, buildings and long-haul runs, spliced and OTDR tested.',
    image: '/images/fibre-rack.jpg',
    points: ['Fusion splicing and termination', 'OTDR and loss testing', 'Underground and aerial reticulation', 'Campus backbone design'],
  },
  {
    slug: 'wireless',
    icon: 'Wifi',
    title: 'Enterprise Wi-Fi',
    short: 'Predictive and on-site surveys, then high-density Wi-Fi 6/6E/7 networks that simply work.',
    image: '/images/antennas.jpg',
    points: ['Predictive and active site surveys', 'High-density design for schools and venues', 'Guest and BYOD onboarding', 'Cloud-managed controllers'],
  },
  {
    slug: 'links',
    icon: 'RadioTower',
    title: 'Point-to-Point Wireless Links',
    short: 'Licensed and unlicensed microwave bridges that connect sites where fibre can’t reach.',
    image: '/images/microwave-towers.jpg',
    points: ['Path and line-of-sight analysis', 'Licensed and unlicensed microwave', 'Tower and mast installation', 'Link redundancy and failover'],
  },
  {
    slug: 'connectivity',
    icon: 'Globe',
    title: 'Business Connectivity',
    short: 'NBN Enterprise Ethernet, dedicated fibre and 4G/5G failover from one accountable provider.',
    image: '/images/earth-night.jpg',
    points: ['NBN business-grade services', 'Dedicated fibre internet', '4G / 5G backup links', 'SD-WAN for multi-site teams'],
  },
  {
    slug: 'planning',
    icon: 'Map',
    title: 'Network Planning & Design',
    short: 'Feasibility, route planning, loss budgets and design packs that carriers and councils approve first time.',
    image: '/images/planning-drawings.jpg',
    points: ['Desktop and field feasibility studies', 'Pit, conduit and route plans', 'Optical loss and capacity budgets', 'Council and asset-owner approvals'],
  },
  {
    slug: 'testing',
    icon: 'Activity',
    title: 'Testing & Commissioning',
    short: 'Acceptance testing, equipment configuration and handover packs your auditors will thank you for.',
    image: '/images/engineers-comms-room.jpg',
    points: ['OTDR, power and splice-loss testing', 'ONT, router and switch commissioning', 'As-built mark-ups and test certificates', 'Calibrated, registered test equipment'],
  },
  {
    slug: 'managed',
    icon: 'ServerCog',
    title: 'Fault Restoration & Maintenance',
    short: 'Root-cause fault finding, rapid repairs and preventive maintenance within your service-level timeframes.',
    image: '/images/field-technician.jpg',
    points: ['24/7 fault response', 'Cable repair, re-splicing and re-routing', 'Preventive maintenance programs', 'SLA-backed restoration times'],
  },
];

export const industries = [
  { icon: 'GraduationCap', title: 'Education', text: 'Campus-wide Wi-Fi and cabling for schools, TAFEs and universities, built for thousands of devices at once.' },
  { icon: 'HeartPulse', title: 'Healthcare', text: 'Reliable clinical networks, nurse-call integration and secure guest access for hospitals and clinics.' },
  { icon: 'Landmark', title: 'Government', text: 'Secure, compliant infrastructure for councils and agencies, delivered by security-cleared technicians.' },
  { icon: 'Pickaxe', title: 'Mining & Resources', text: 'Ruggedised wireless and fibre for remote sites, camps and processing plants across regional Australia.' },
  { icon: 'Building2', title: 'Commercial Property', text: 'Base-building cabling, tenant fit-outs and smart-building networks for developers and managers.' },
  { icon: 'TrainFront', title: 'Transport & Utilities', text: 'Mission-critical communications for rail corridors, depots, substations and water infrastructure.' },
];

export const stats = [
  { value: 10, suffix: '+', label: 'Years in the field' },
  { value: 10, suffix: 'k+', label: 'Projects delivered' },
  { value: 99.98, suffix: '%', label: 'Network uptime', decimals: 2 },
  { value: 24, suffix: '/7', label: 'Local support' },
];

export const reasons = [
  { icon: 'BadgeCheck', title: 'Standards-compliant', text: 'ACMA-registered cablers working to the Wiring Rules (AS/CA S009) and carrier standards on every job.' },
  { icon: 'MapPin', title: 'Australian owned', text: 'Local engineers and a local help desk. No offshore call centres, no runaround.' },
  { icon: 'Handshake', title: 'One accountable partner', text: 'Design, install, connectivity and support from a single team that owns the outcome.' },
  { icon: 'Timer', title: 'On time, on budget', text: 'Fixed-price proposals, clear milestones and a project manager you can actually reach.' },
];

export const process = [
  { step: '01', title: 'Plan', text: 'Site surveys, feasibility and a network design checked against carrier rules and Australian standards.' },
  { step: '02', title: 'Approve', text: 'We prepare and lodge council, traffic and asset-owner approvals so works start on time.' },
  { step: '03', title: 'Build', text: 'Supervised crews install fibre, copper and wireless to the approved design, safely and tidily.' },
  { step: '04', title: 'Test & hand over', text: 'Acceptance testing, commissioning and a complete as-built pack for your sign-off.' },
];

export const testimonials = [
  {
    quote: 'VIB Tech rebuilt our wireless across three campuses over the school holidays. Day one of term, 1,800 students logged on without a single complaint.',
    name: 'Sarah M.',
    role: 'IT Manager, Independent School, NSW',
  },
  {
    quote: 'They linked our depot and head office with a microwave link in under two weeks. Faster than the fibre quote and it hasn’t dropped once.',
    name: 'Daniel K.',
    role: 'Operations Director, Logistics, VIC',
  },
  {
    quote: 'Clear pricing, tidy work and proper documentation at handover. Our comms rooms have never looked this good.',
    name: 'Priya R.',
    role: 'Facilities Lead, Commercial Property, QLD',
  },
  {
    quote: 'Moving 250 staff onto a cloud phone system was painless. The help desk picks up in seconds and actually solves things.',
    name: 'Tom W.',
    role: 'CFO, Professional Services, WA',
  },
];

// Technologies shown in the scrolling strip on the home page
export const technologies = [
  'Single-mode & multimode fibre', 'Cat6 / Cat6A copper', 'Wi-Fi 6E / 7', 'Licensed microwave links', 'NBN Enterprise Ethernet',
  'OTDR & splice-loss testing', '4G / 5G failover', 'SD-WAN', 'Comms rooms & racks', 'Aerial & underground reticulation',
];

export const accreditations = ['ACMA-registered cablers', 'AS/CA S009 Wiring Rules', 'Fully insured', 'Australian owned & operated'];

export const values = [
  { title: 'Do it properly', text: 'Every cable labelled, every link tested, every job documented. Shortcuts become someone else’s problem, so we don’t take them.' },
  { title: 'Say it plainly', text: 'No jargon walls and no surprise invoices. You’ll always know what we’re doing, why, and what it costs.' },
  { title: 'Stay accountable', text: 'We own the outcome from first survey to final sign-off, and we answer the phone after that too.' },
];

export const team = [
  { name: 'Piyush Gajera', role: 'Director', initials: 'PG' },
  { name: 'Vibhuti Gajera', role: 'Director', initials: 'VG' },
];

export type Job = {
  slug: string;
  title: string;
  icon: string;
  type: string;
  location: string;
  summary: string;
  duties: { area: string; pct: number; items: string[] }[];
};

export const jobs: Job[] = [
  {
    slug: 'field-engineer',
    title: 'Telecommunications Field Engineer',
    icon: 'HardHat',
    type: 'Full-time',
    location: 'Riverlea Park, SA · Field based',
    summary: 'Lead installation, testing and fault restoration on fibre, copper and wireless networks, and direct crews and subcontractors on site.',
    duties: [
      { area: 'Site assessment & field engineering', pct: 25, items: ['Survey pits, conduits, risers, comms rooms and customer premises', 'Interpret designs and as-builts, and solve field variances with the Network Planner', 'Prepare work methodologies, access, traffic and isolation plans'] },
      { area: 'Installation, commissioning & testing', pct: 30, items: ['Direct installation of fibre, copper and wireless cabling and equipment', 'Verify OTDR, optical power, splice loss and insulation resistance results', 'Commission links, certify works and authorise handover'] },
      { area: 'Fault diagnosis & maintenance', pct: 20, items: ['Find root cause using test instruments, alarms and network records', 'Repair, re-splice and re-route within SLA timeframes', 'Plan preventive maintenance and recommend improvements'] },
      { area: 'Technical supervision & coordination', pct: 15, items: ['Allocate and inspect work for crews and subcontractors', 'Liaise with clients, carriers, councils and property managers', 'Advise the Director on resources and scheduling'] },
      { area: 'Documentation, compliance & WHS', pct: 10, items: ['Prepare as-built mark-ups, test reports and completion packs', 'Ensure compliance with ACMA rules and AS/CA S009', 'Prepare and review SWMS and risk assessments'] },
    ],
  },
  {
    slug: 'network-planner',
    title: 'Telecommunications Network Planner',
    icon: 'Map',
    type: 'Full-time',
    location: 'Riverlea Park, SA · Hybrid',
    summary: 'Turn work orders into buildable network designs: feasibility, routes, loss budgets, estimates and the approvals to make it happen.',
    duties: [
      { area: 'Requirements analysis & feasibility', pct: 20, items: ['Analyse work orders, demand and existing capacity to set scope', 'Run desktop and field feasibility using carrier records, GIS and BYDA data', 'Recommend the preferred network solution'] },
      { area: 'Network planning & design', pct: 35, items: ['Prepare route plans, pit and conduit layouts and splice schedules', 'Calculate optical loss budgets and capacity', 'Produce design drawings in CAD / GIS tools'] },
      { area: 'Estimating, materials & scheduling', pct: 15, items: ['Prepare bills of materials and cost estimates for quotes and tenders', 'Build project schedules with the Field Engineer and Director'] },
      { area: 'Approvals & stakeholder liaison', pct: 15, items: ['Lodge council, road authority and asset owner applications', 'Resolve design and access issues with carriers and landowners'] },
      { area: 'Design support & network records', pct: 15, items: ['Issue design packs and answer queries during construction', 'Update records from as-built information', 'Improve design standards and templates'] },
    ],
  },
  {
    slug: 'technical-officer',
    title: 'Telecommunications Technical Officer',
    icon: 'Activity',
    type: 'Full-time',
    location: 'Riverlea Park, SA · Office & field',
    summary: 'Own testing, equipment configuration and quality assurance, and help our engineers and crews get it right first time.',
    duties: [
      { area: 'Technical testing & analysis', pct: 30, items: ['Acceptance and diagnostic testing of fibre, copper and wireless links', 'Analyse results, flag non-conformances and recommend fixes', 'Maintain the calibrated test equipment register'] },
      { area: 'Equipment configuration & commissioning', pct: 20, items: ['Configure and commission NTEs, ONTs, routers, switches and wireless gear', 'Apply firmware updates and confirm service activation'] },
      { area: 'Engineering support', pct: 20, items: ['Support calculations, drawings and equipment selection', 'Evaluate new equipment, materials and tools'] },
      { area: 'Quality assurance & documentation', pct: 20, items: ['Audit completed works and track defects to close-out', 'Compile handover packs and test certificates', 'Maintain technical procedures and work instructions'] },
      { area: 'Technical guidance & training', pct: 10, items: ['Advise staff and subcontractors on test procedures and standards', 'Deliver toolbox talks and on-the-job training'] },
    ],
  },
];

export const perks = [
  { icon: 'GraduationCap', title: 'Paid training & certification', text: 'Vendor courses, fibre splicing and testing tickets funded by us.' },
  { icon: 'Truck', title: 'Vehicle & tools supplied', text: 'Field roles come with a fitted-out vehicle and calibrated test gear.' },
  { icon: 'ShieldCheck', title: 'Safety first, always', text: 'A real WHS culture: SWMS, toolbox talks and the right PPE.' },
  { icon: 'TrendingUp', title: 'A clear path to grow', text: 'Move from technical officer to engineer to project lead.' },
];

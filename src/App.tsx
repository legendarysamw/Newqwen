import { useState } from 'react';

// ============ ICONS (SVG Components) ============
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ============ HEADER ============
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#areas', label: 'Areas We Serve' },
    { href: '#why-sam', label: 'Why Sam' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-charcoal text-lg leading-tight">OAKVILLE HANDYMAN</span>
              <span className="block text-green font-semibold text-xs -mt-0.5">SAM</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-charcoal font-medium text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+12899811471" className="flex items-center gap-2 bg-green hover:bg-green-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
              <PhoneIcon />
              <span>CALL / TEXT</span>
              <span className="font-bold">289-981-1471</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="block text-gray-700 hover:text-charcoal font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a href="tel:+12899811471" className="flex items-center justify-center gap-2 bg-green text-white px-4 py-3 rounded-lg font-semibold">
                <PhoneIcon /> Call 289-981-1471
              </a>
              <a href="sms:+12899811471" className="flex items-center justify-center gap-2 border-2 border-green text-green px-4 py-3 rounded-lg font-semibold">
                <MessageIcon /> Text Sam
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ============ MOBILE BOTTOM BAR ============
function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center">
        <a href="tel:+12899811471" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 bg-green text-white font-semibold text-sm">
          <PhoneIcon />
          <span>CALL SAM</span>
        </a>
        <a href="sms:+12899811471" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 bg-charcoal text-white font-semibold text-sm">
          <MessageIcon />
          <span>TEXT SAM</span>
        </a>
        <a href="#quote" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 bg-white text-charcoal font-semibold text-sm border-l border-gray-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>GET QUOTE</span>
        </a>
      </div>
    </div>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section id="home" className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight mb-6">
              Your Local Oakville Handyman — Without the Headache.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From drywall and painting to toilets, faucets, fixtures, furniture assembly and those annoying little repairs you've been putting off — Sam gets it done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green/20">
                GET A QUOTE
              </a>
              <a href="tel:+12899811471" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                <PhoneIcon />
                CALL / TEXT 289-981-1471
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {[
                'Local Oakville Service',
                'Clear, Honest Pricing',
                'Small & Large Jobs Welcome',
                'Fast Response'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://image.qwenlm.ai/generated-images/8e319b11-ac05-4c40-bb9a-bb81a078fddc/_result.png" 
                alt="Professional handyman working on home repairs in Oakville" 
                className="w-full h-64 sm:h-80 lg:h-[480px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ QUICK PROBLEM SECTION ============
function QuickProblemSection() {
  const problems = [
    { icon: '🚰', label: 'Leaky faucet' },
    { icon: '🚽', label: 'Loose toilet' },
    { icon: '🕳️', label: 'Damaged drywall' },
    { icon: '📺', label: 'TV to mount' },
    { icon: '🪑', label: 'Furniture to assemble' },
    { icon: '🎨', label: 'Wall to paint' },
    { icon: '💡', label: 'Light fixture to install' },
    { icon: '🪵', label: 'Trim to repair' },
    { icon: '🔌', label: 'Appliance to hook up' },
    { icon: '🏠', label: 'Flooring to repair' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Something Around the House Needs Fixing?
          </h2>
          <p className="text-lg text-gray-600">
            Not every home project needs a big contractor. Sometimes you just need someone reliable who can show up, diagnose the problem and get the job done properly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {problems.map(problem => (
            <div key={problem.label} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-green-light transition-colors cursor-default">
              <span className="text-3xl">{problem.icon}</span>
              <span className="text-sm font-medium text-gray-700 text-center">{problem.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#quote" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            Tell Sam What You Need
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    {
      title: 'Plumbing & Fixtures',
      icon: '🚿',
      items: ['Faucet installation', 'Toilet installation', 'Faucet replacement', 'Minor plumbing repairs', 'Toilet repairs', 'Sink-related repairs', 'Appliance hookups', 'Caulking and sealing'],
      cta: 'Need a Plumbing Fix?',
      note: 'Handyman-level fixture work. Regulated plumbing requires a licensed plumber.'
    },
    {
      title: 'Drywall & Wall Repair',
      icon: '🧱',
      items: ['Drywall patches', 'Hole repairs', 'Cracks', 'Minor wall damage', 'Wall preparation', 'Sanding', 'Touch-ups'],
      cta: 'Repair My Wall'
    },
    {
      title: 'Painting',
      icon: '🎨',
      items: ['Interior painting', 'Room painting', 'Accent walls', 'Touch-ups', 'Trim painting', 'Door painting', 'Rental turnover painting'],
      cta: 'Get a Painting Quote'
    },
    {
      title: 'Furniture Assembly',
      icon: '🪑',
      items: ['IKEA furniture', 'Beds', 'Dressers', 'Shelving', 'Desks', 'Cabinets', 'Tables', 'Home-office furniture'],
      cta: 'Book Assembly'
    },
    {
      title: 'TV Mounting & Home Installation',
      icon: '📺',
      items: ['TV mounting', 'Shelving', 'Curtain rods', 'Mirrors', 'Wall-mounted items', 'Home accessories'],
      cta: 'Book an Installation'
    },
    {
      title: 'Flooring & Trim',
      icon: '🪵',
      items: ['Baseboards', 'Trim', 'Minor flooring repairs', 'Transitions', 'Door trim', 'Finishing work'],
      cta: 'Fix My Trim/Flooring'
    },
    {
      title: 'Doors & Hardware',
      icon: '🚪',
      items: ['Door adjustments', 'Handles', 'Locks/hardware', 'Hinges', 'Cabinet hardware', 'Minor door repairs'],
      cta: 'Fix My Door'
    },
    {
      title: 'General Handyman',
      icon: '🔧',
      items: ['Odd jobs', 'Home maintenance', 'Small repairs', 'Assembly', 'Installation', 'Move-in preparation', 'Move-out repairs', 'Rental maintenance'],
      cta: 'Ask About My Job'
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Home Repairs. Installations. Maintenance.
          </h2>
          <p className="text-lg text-gray-600">
            One local handyman for the jobs that keep your home running properly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="font-bold text-charcoal text-lg mb-3">{service.title}</h3>
              <ul className="space-y-1.5 mb-5">
                {service.items.map(item => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="text-xs text-gray-400 italic mb-4">{service.note}</p>
              )}
              <a href="#quote" className="inline-flex items-center gap-1 text-green font-semibold text-sm hover:text-green-dark transition-colors">
                {service.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ NO JOB TOO SMALL ============
function NoJobTooSmallSection() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Yes — We Take the Small Jobs.
        </h2>
        <div className="text-lg text-gray-300 leading-relaxed space-y-4 mb-10">
          <p>
            That loose cabinet handle. The hole in the wall. The shelf that's been sitting in the box for three months. The toilet that needs replacing. The TV still leaning against the wall.
          </p>
          <p className="font-semibold text-white text-xl">
            Small jobs matter.
          </p>
          <p>
            If it's on your home to-do list, ask Sam.
          </p>
        </div>
        <a href="#quote" className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
          Send Your To-Do List
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'TELL US WHAT YOU NEED',
      desc: 'Call, text, or send a quote request.'
    },
    {
      num: '02',
      title: 'GET A CLEAR PLAN',
      desc: "We'll discuss the job, what needs to be done, and the expected cost."
    },
    {
      num: '03',
      title: 'GET IT DONE',
      desc: 'We arrive, complete the work, clean up, and leave you with a finished job.'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Getting Help Is Simple.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map(step => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-green-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="font-bold text-charcoal text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#quote" className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            START WITH A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ WHY SAM ============
function WhySamSection() {
  const reasons = [
    { icon: '📍', title: 'LOCAL', desc: 'Serving Oakville and surrounding Halton communities.' },
    { icon: '🤝', title: 'HONEST', desc: 'Straightforward communication and pricing.' },
    { icon: '🔧', title: 'PRACTICAL', desc: 'We focus on solving the actual problem.' },
    { icon: '🏠', title: 'SMALL JOBS WELCOME', desc: "You don't need a giant renovation to call us." },
    { icon: '📋', title: 'ONE CALL', desc: 'Handle multiple home-maintenance tasks in one visit when possible.' },
    { icon: '✨', title: 'RESPECT FOR YOUR HOME', desc: 'Clean work, professional communication, and care for the space.' },
  ];

  return (
    <section id="why-sam" className="py-16 lg:py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Why Homeowners Call Sam
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(reason => (
            <div key={reason.title} className="bg-white rounded-2xl p-6 border border-gray-100">
              <span className="text-3xl mb-3 block">{reason.icon}</span>
              <h3 className="font-bold text-charcoal text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SPECIAL AUDIENCES ============
function AudiencesSection() {
  const audiences = [
    { icon: '👴', title: 'Seniors & Busy Homeowners', desc: "Don't let the little repairs pile up. Send Sam your home-maintenance list." },
    { icon: '🏡', title: 'New Homeowners', desc: 'Just bought a home? Create a punch list and get those little projects finished.' },
    { icon: '🏢', title: 'Landlords', desc: 'Get rental units ready for tenants with repairs, touch-ups and installations.' },
    { icon: '🔑', title: 'Realtors', desc: 'Need a property looking its best before listing or closing? We can help with the punch list.' },
    { icon: '📊', title: 'Property Managers', desc: 'Reliable help for ongoing maintenance and smaller repair jobs.' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Built Around Real Homeowners' Needs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {audiences.map(audience => (
            <div key={audience.title} className="bg-gray-50 rounded-2xl p-6 hover:bg-green-light transition-colors">
              <span className="text-3xl mb-3 block">{audience.icon}</span>
              <h3 className="font-bold text-charcoal text-lg mb-2">{audience.title}</h3>
              <p className="text-gray-600">{audience.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#quote" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            Talk to Sam About Your Property
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICE AREA ============
function ServiceAreaSection() {
  const oakvilleAreas = [
    'Oakville', 'Kerr Village', 'River Oaks', 'Glen Abbey', 'Bronte',
    'Morrison', 'Joshua Creek', 'Iroquois Ridge', 'Uptown Core', 'Clearview'
  ];
  
  const secondaryAreas = ['Burlington', 'Milton', 'Halton Hills'];

  return (
    <section id="areas" className="py-16 lg:py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Proudly Serving Oakville
          </h2>
          <p className="text-lg text-gray-600">
            Oakville Handyman Sam provides home repair, installation and maintenance services throughout Oakville and surrounding Halton communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Primary Area */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-bold text-charcoal text-xl mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-green rounded-full"></span>
              Primary Service Area
            </h3>
            <div className="flex flex-wrap gap-2">
              {oakvilleAreas.map(area => (
                <span key={area} className="bg-green-light text-green-dark px-3 py-1.5 rounded-lg text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Areas */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-bold text-charcoal text-xl mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              Secondary Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {secondaryAreas.map(area => (
                <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Service availability in secondary areas may vary. Contact us to confirm.
            </p>
          </div>
        </div>

        {/* Map-style visual */}
        <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-100 text-center">
          <div className="relative max-w-md mx-auto">
            <div className="w-48 h-48 mx-auto relative">
              {/* Simple map visualization */}
              <div className="absolute inset-0 bg-green-light rounded-full opacity-30"></div>
              <div className="absolute inset-6 bg-green-light rounded-full opacity-50"></div>
              <div className="absolute inset-12 bg-green rounded-full opacity-70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">OAKVILLE</span>
              </div>
              {/* Surrounding dots */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full" title="Milton"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full" title="Burlington"></div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full" title="Halton Hills"></div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Handyman services throughout the Halton Region
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ TRUST SECTION ============
function TrustSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
          Know Who You're Hiring.
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Home repairs require trust. We believe homeowners should know who they're dealing with, what work is being discussed, and what they're paying for. Ask questions, send photos, and get the details clearly explained before work begins.
        </p>
      </div>
    </section>
  );
}

// ============ FAQ SECTION ============
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What kind of jobs does Oakville Handyman Sam do?',
      a: 'We handle a wide range of home repairs, installations, maintenance tasks and small renovation-related jobs including drywall repair, painting, furniture assembly, TV mounting, fixtures, trim, doors, flooring repairs and general handyman work.'
    },
    {
      q: 'Do you take small handyman jobs?',
      a: 'Yes. Small jobs are welcome. If something has been sitting on your home to-do list, contact us and tell us what you need.'
    },
    {
      q: 'Do you serve areas outside Oakville?',
      a: 'Yes. Oakville is our primary service area, and service may also be available in Burlington, Milton and Halton Hills.'
    },
    {
      q: 'How do I get a quote?',
      a: 'Call or text 289-981-1471 or use the quote request form. Tell us what needs to be done and, when helpful, send photos.'
    },
    {
      q: 'Can I send pictures of the job?',
      a: 'Yes. Photos are often helpful for understanding the job before providing an estimate or discussing next steps.'
    },
    {
      q: 'Do you work for landlords and realtors?',
      a: 'Yes. We can help with property maintenance, punch-list items, move-in/move-out repairs and preparation work.'
    },
    {
      q: 'What areas of Oakville do you serve?',
      a: 'We serve homeowners throughout Oakville, including Kerr Village, River Oaks, Glen Abbey, Bronte, Morrison, Joshua Creek, Iroquois Ridge, Uptown Core and surrounding neighbourhoods.'
    },
    {
      q: 'Are you a licensed plumber?',
      a: 'Oakville Handyman Sam provides handyman-level fixture installation and home-maintenance services. Regulated plumbing work that legally requires a licensed plumbing contractor should be handled through the appropriate licensed plumbing service.'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-charcoal pr-4">{faq.q}</span>
                <ChevronDown open={openIndex === index} />
              </button>
              <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Oakville Homeowners Are Talking
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600">Real reviews from real customers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 italic text-sm mb-3">YOUR CUSTOMER REVIEW HERE</p>
              <div className="w-16 h-1 bg-gray-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ QUOTE FORM ============
function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Tell Sam What You Need.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Or call / text directly: <a href="tel:+12899811471" className="font-bold text-green hover:text-green-dark">289-981-1471</a>
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Thanks!</h3>
            <p className="text-gray-600">
              Your request has been received. Sam will review the details and get back to you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none" placeholder="Your phone number" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Area</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none bg-white">
                  <option value="">Select area</option>
                  <option>Oakville</option>
                  <option>Burlington</option>
                  <option>Milton</option>
                  <option>Halton Hills</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none bg-white">
                <option value="">Select a service</option>
                <option>Plumbing & Fixtures</option>
                <option>Drywall & Wall Repair</option>
                <option>Painting</option>
                <option>Furniture Assembly</option>
                <option>TV Mounting & Installation</option>
                <option>Flooring & Trim</option>
                <option>Doors & Hardware</option>
                <option>General Handyman</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description of Job</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none resize-none" placeholder="Tell us what needs to be done..."></textarea>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photos</label>
                <input type="file" multiple accept="image/*" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-green-light file:text-green-dark" />
              </div>
            </div>
            <button type="submit" className="w-full bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green/20">
              REQUEST A QUOTE
            </button>
          </form>
        )}

        {/* Direct contact below form */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">Prefer to talk directly?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12899811471" className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-charcoal-light">
              <PhoneIcon /> CALL 289-981-1471
            </a>
            <a href="sms:+12899811471" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-charcoal hover:text-white">
              <MessageIcon /> TEXT SAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
          Let's Get That Job Off Your List.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Have a repair, installation, or home project you've been putting off? Tell Sam what you need.
        </p>

        <div className="bg-offwhite rounded-2xl p-8 mb-8">
          <div className="flex flex-col items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <a href="tel:+12899811471" className="text-2xl font-bold text-charcoal hover:text-green transition-colors">
                289-981-1471
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Website</p>
              <span className="text-lg font-medium text-gray-700">oakvillehandymansam.ca</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+12899811471" className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            <PhoneIcon /> CALL SAM
          </a>
          <a href="sms:+12899811471" className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            <MessageIcon /> TEXT SAM
          </a>
          <a href="#quote" className="inline-flex items-center justify-center gap-2 border-2 border-green text-green hover:bg-green hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Your Home To-Do List Starts Here.
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          One call. One text. One less thing to worry about.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+12899811471" className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            <PhoneIcon /> CALL 289-981-1471
          </a>
          <a href="sms:+12899811471" className="inline-flex items-center justify-center gap-2 bg-white text-charcoal hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            <MessageIcon /> TEXT SAM
          </a>
          <a href="#quote" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            REQUEST A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm">OAKVILLE HANDYMAN</span>
                <span className="block text-green font-semibold text-xs">SAM</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Reliable Home Repairs Without the Headache.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Oakville</li>
              <li>Burlington</li>
              <li>Milton</li>
              <li>Halton Hills</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Handyman Services</li>
              <li>Drywall Repair</li>
              <li>Painting</li>
              <li>Furniture Assembly</li>
              <li>TV Mounting</li>
              <li>Fixtures</li>
              <li>Trim & Flooring</li>
              <li>General Home Repairs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+12899811471" className="hover:text-green transition-colors">289-981-1471</a>
              </li>
              <li>oakvillehandymansam.ca</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="tel:+12899811471" className="w-10 h-10 bg-gray-800 hover:bg-green rounded-lg flex items-center justify-center transition-colors">
                <PhoneIcon />
              </a>
              <a href="sms:+12899811471" className="w-10 h-10 bg-gray-800 hover:bg-green rounded-lg flex items-center justify-center transition-colors">
                <MessageIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <a href="#home" className="hover:text-green transition-colors">Home</a>
            <a href="#services" className="hover:text-green transition-colors">Services</a>
            <a href="#areas" className="hover:text-green transition-colors">Service Areas</a>
            <a href="#why-sam" className="hover:text-green transition-colors">About</a>
            <a href="#" className="hover:text-green transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-green transition-colors">Contact</a>
            <a href="#" className="hover:text-green transition-colors">Privacy Policy</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Oakville Handyman Sam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="font-sans text-charcoal">
      <Header />
      <main>
        <HeroSection />
        <QuickProblemSection />
        <ServicesSection />
        <NoJobTooSmallSection />
        <HowItWorksSection />
        <WhySamSection />
        <AudiencesSection />
        <ServiceAreaSection />
        <TrustSection />
        <FAQSection />
        <ReviewsSection />
        <QuoteFormSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}

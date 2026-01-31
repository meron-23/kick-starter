import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  Database,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  Globe,
  ShieldCheck,
  LineChart,
  Mail,
  Calendar,
  ExternalLink,
  BookOpen,
  PlayCircle,
  Download,
  Linkedin,
  HelpCircle,
  FileText,
  Map,
  Compass
} from 'lucide-react';

const Navbar = () => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'white', borderBottom: '1px solid var(--border-light)',
    padding: '1.25rem 0'
  }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: '4px', height: '24px', background: 'var(--primary)' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
          SAP BDC
        </span>
      </div>
      <div className="nav-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#vision" className="nav-link">Vision</a>
        <a href="#resources" className="nav-link">Resources</a>
        <a href="#ai" className="nav-link">AI & Databricks</a>
        <a href="https://dam.sap.com/mac/app/p/pdf/asset/preview/PV8yhLX?ltr=a&rc=10&doi=SAP1182500" target="_blank" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>Discovery Kit</a>
      </div>
    </div>
  </nav>
);

const SectionHeader = ({ title, subtitle, light = false }) => (
  <div style={{ marginBottom: '3rem', maxWidth: '800px' }}>
    <div className="divider" />
    <h2 style={{ fontSize: '2.5rem', color: light ? 'white' : 'var(--secondary)', marginBottom: '1rem' }}>{title}</h2>
    {subtitle && <p style={{ fontSize: '1.1rem', color: light ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>{subtitle}</p>}
  </div>
);

const ResourceList = ({ items, light = false }) => (
  <ul className={`resource-list ${light ? 'light' : ''}`}>
    {items.map((item, idx) => (
      <li key={idx} className={`resource-item ${item.featured ? 'featured' : ''}`}>
        {item.tag && <span className="tag">{item.tag}</span>}
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="resource-link">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const Hero = () => (
  <header className="hero-minimal">
    <div className="container">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px' }}
      >
        <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Business Data Cloud Kick Starter
        </span>
        <h1 className="text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginTop: '1.5rem', lineHeight: 1.1 }}>
          The Open Era of <span className="highlight">Enterprise Intelligence</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginTop: '2rem', maxWidth: '700px', fontWeight: 300 }}>
          Stop moving your data. Start reasoning over it. SAP Business Data Cloud unifies rich business semantics with industry-leading lakehouse intelligence.
        </p>

        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          <div className="hide-mobile" style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderLeft: '2px solid var(--primary)' }}>
            <h4 className="text-white" style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Core Overview</h4>
            <ResourceList light={true} items={[
              { label: 'Introducing SAP BDC', url: 'https://news.sap.com/?p=231446', tag: 'Article' },
              { label: 'Solution Brief', url: 'https://www.sap.com/documents/2025/02/ee86321d-f37e-0010-bca6-c68f7e60039b.html', tag: 'PDF' },
              { label: 'Overview Video', url: 'https://www.sap.com/assetdetail/2025/02/2ac6681b-f37e-0010-bca6-c68f7e60039b.html', tag: 'Video' }
            ]} />
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderLeft: '2px solid #FFF' }}>
            <h4 className="text-white" style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Join the Strategy</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Waitlist <ArrowRight size={16} /></a>
              <a href="https://www.linkedin.com/groups/13112863/" target="_blank" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderColor: 'white', color: 'white' }}>Community <Linkedin size={16} /></a>
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  </header>
);

const GettingStarted = () => (
  <section id="vision" className="section-padding">
    <div className="container">
      <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
        <div>
          <SectionHeader
            title="Getting Started"
            subtitle="Begin your journey with SAP Business Data Cloud through guided tours, trials, and learning paths."
          />
          <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="service-card" style={{ padding: '2rem' }}>
              <Compass size={32} className="highlight" style={{ marginBottom: '1rem' }} />
              <h3>Assessment & Learning</h3>
              <ResourceList items={[
                { label: 'Migration Assessment', url: 'https://www.sap.com/products/data-cloud/sap-migration-assessment.html', featured: true },
                { label: 'Official Learning Journey', url: 'https://learning.sap.com/learning-journeys/introducing-sap-business-data-cloud' },
                { label: 'Guided Product Tour', url: 'https://www.sap.com/products/data-cloud/product-tour.html' },
                { label: 'Basic Trial Access', url: 'https://www.sap.com/products/data-cloud/trial.html' }
              ]} />
            </div>
          </div>
        </div>
        <div style={{ background: 'var(--bg-light)', padding: '3rem', borderTop: '4px solid var(--primary)' }}>
          <SectionHeader
            title="Intelligent Applications"
            subtitle="The next step in analytics evolution: from traditional content to AI-driven apps."
          />
          <ResourceList items={[
            { label: 'Intelligent Applications Home', url: 'https://www.sap.com/products/data-cloud/intelligent-applications.html' },
            { label: 'Rethinking People Intelligence', url: 'https://community.sap.com/t5/product-and-customer-updates/rethinking-people-analytics-for-ai-introducing-people-intelligence-in-sap/ba-p/14141389' },
            { label: 'Tech Behind Out-of-the-box Apps', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/understand-tech-behind-sap-business-data-cloud-bdc-out-of-the-box/ba-p/14045868' },
            { label: 'Data Products vs. Intelligent Apps', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/the-differentiation-sap-data-products-and-intelligent-applications-in-sap/ba-p/14048577' },
            { label: 'Evolution of Analytics Content', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/analytics-evolution-from-traditional-business-content-to-sap-bdc/ba-p/14035000' }
          ]} />
        </div>
      </div>
    </div>
  </section>
);

const TechnicalDeepDive = () => (
  <section id="resources" className="section-padding bg-light">
    <div className="container">
      <SectionHeader
        title="Technical Enablement Hub"
        subtitle="Deep dives into Data Products and Capacity Planning."
      />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))' }}>
        <div className="service-card">
          <Layers size={32} className="highlight" style={{ marginBottom: '1rem' }} />
          <h3>Data Products Series</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Understanding the metadata and resource discovery behind professional data products.</p>
          <ResourceList items={[
            { label: 'Part 1: Intro to Data Products', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-series-part-1-introduction-to-data-products/ba-p/14142919' },
            { label: 'Part 2: Extending S/4HANA Data', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-series-part-2-extend-sap-s-4hana-managed-data/ba-p/14174030' },
            { label: 'Metadata Exploration', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/the-metadata-behind-sap-data-products-in-sap-business-data-cloud/ba-p/14016947' },
            { label: 'Open Resource Discovery', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/why-we-created-open-resource-discovery/ba-p/14172057' },
            { label: 'BW Data Product Generator', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/the-sap-bw-data-product-generator-for-sap-business-data-cloud/ba-p/14072413' }
          ]} />
        </div>
        <div className="service-card">
          <LineChart size={32} className="highlight" style={{ marginBottom: '1rem' }} />
          <h3>Capacity Unit Estimator</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Master the tools for sizing and quota management across Databricks and Datasphere.</p>
          <ResourceList items={[
            { label: 'Using the Capacity Estimator', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/how-to-use-sap-business-data-cloud-capacity-unit-estimator/ba-p/14181530' },
            { label: 'Estimator for Databricks & Datasphere', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/how-to-use-sap-business-data-cloud-capacity-unit-estimator-for-sap/ba-p/14184447' },
            { label: 'Editing Quota Assignments', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/how-to-edit-a-quota-assignment-in-sap-business-data-cloud-bdc/ba-p/14181937' }
          ]} />
        </div>
      </div>
    </div>
  </section>
);

const AIAndIntegration = () => (
  <section id="ai" className="section-padding bg-charcoal">
    <div className="container">
      <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem' }}>
        <div>
          <SectionHeader
            title="Databricks & AI"
            light={true}
            subtitle="Building the intelligent enterprise by unifying business data and lakehouse intelligence."
          />
          <ResourceList light={true} items={[
            { label: 'Learn about SAP Databricks', url: 'https://www.sap.com/products/data-cloud/databricks.html' },
            { label: 'Unlocking AI Foundation', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/unlocking-sap-ai-foundation-capabilities-in-sap-databricks-a-technical-deep/ba-p/14162430' },
            { label: 'AI Unleashed: Part 1', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-databricks-building-an-intelligent-enterprise-with-ai-unleashed-part-1/ba-p/14166813' },
            { label: 'Unifying Lakehouse Intelligence', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-databricks-in-sap-business-data-cloud-unifying-sap-business-data-with/ba-p/14097709' },
            { label: 'End-to-End Integration Check', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-databricks-building-an-intelligent-enterprise-with-ai-unleashed-part-4/ba-p/14178056' }
          ]} />
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderTop: '4px solid var(--primary)' }}>
          <h3 className="text-white" style={{ marginBottom: '2rem' }}>Architecture & Security</h3>
          <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <ResourceList light={true} items={[
              { label: 'Architecture Overview', url: 'https://community.sap.com/t5/enterprise-architecture-discussions/architecture-overview-of-sap-business-data-cloud-bdc/m-p/14034914' },
              { label: 'Provisioning Guide', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/introductory-guide-to-provisioning-of-sap-business-data-cloud/ba-p/14117460' },
              { label: 'Data Security Deep Dive', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/securing-data-journey-with-sap-business-data-cloud/ba-p/14139300' }
            ]} />
            <ResourceList light={true} items={[
              { label: 'Detailed FAQs', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-faqs/ba-p/14022781' },
              { label: '3rd Party Integration', url: 'https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-bdc-integration-with-sap-apps-and-3rd-party-apps/ba-p/14060921' }
            ]} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="section-padding" style={{ borderTop: '1px solid var(--border-light)' }}>
    <div className="container">
      <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: '6rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '4px', height: '24px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
              SAP BDC
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '400px' }}>
            Leading the open era of data intelligence. Strategic partner for SAP and Databricks digital transformation.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
            <a href="https://www.linkedin.com/groups/13112863/" target="_blank" className="highlight"><Linkedin size={24} /></a>
            <a href="https://dam.sap.com/mac/app/p/pdf/asset/preview/PV8yhLX?ltr=a&rc=10&doi=SAP1182500" target="_blank" className="highlight"><Download size={24} /></a>
          </div>
        </div>

        <div className="hide-mobile">
          <h4 style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Enablement Resources</h4>
          <div className="nav-menu" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <a href="mailto:ams-support@protiviti.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>
              <Mail size={18} className="highlight" /> Contact Support
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>
              <Calendar size={18} className="highlight" /> Schedule Demo
            </a>
            <a href="https://dam.sap.com/mac/app/p/pdf/asset/preview/PV8yhLX?ltr=a&rc=10&doi=SAP1182500" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>
              <FileText size={18} className="highlight" /> Discovery Kit (PDF)
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Stay Informed</h4>
          <p className="hide-mobile" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Join the SAP BDC community and get the latest technical updates.
          </p>
          <form style={{ display: 'flex', gap: '0' }}>
            <input type="email" placeholder="Business Email" required style={{
              background: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              padding: '16px 20px',
              flex: 1,
              outline: 'none',
              fontSize: '1rem'
            }} />
            <button type="submit" className="btn btn-primary" style={{ padding: '0 24px' }}>JOIN</button>
          </form>
        </div>
      </div>

      <div style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <span>© 2026 SAP BDC Kickstarter.</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>SAP Community</span>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GettingStarted />
      <TechnicalDeepDive />
      <AIAndIntegration />
      <Footer />
    </div>
  );
}

export default App;

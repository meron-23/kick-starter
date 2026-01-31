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
  ExternalLink
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
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#vision" className="nav-link">Vision</a>
        <a href="#solutions" className="nav-link">Solutions</a>
        <a href="#ai" className="nav-link">Agentic AI</a>
        <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>Get Started</a>
      </div>
    </div>
  </nav>
);

const SectionHeader = ({ title, subtitle, light = false }) => (
  <div style={{ marginBottom: '4rem', maxWidth: '700px' }}>
    <div className="divider" />
    <h2 style={{ fontSize: '2.75rem', color: light ? 'white' : 'var(--secondary)', marginBottom: '1rem' }}>{title}</h2>
    {subtitle && <p style={{ fontSize: '1.125rem', color: light ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>{subtitle}</p>}
  </div>
);

const Hero = () => (
  <header className="hero-minimal">
    <div className="container">
      <Motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '850px' }}
      >
        <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          SAP Business Data Cloud (BDC)
        </span>
        <h1 className="text-white" style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginTop: '1.5rem', lineHeight: 1.05 }}>
          The Open Era of <span className="highlight">Data Intelligence</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', marginTop: '2rem', maxWidth: '650px', fontWeight: 300 }}>
          The future is Zero-Copy. The future is Open. Unlock the operating system for the AI-driven enterprise.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}>
          <a href="#contact" className="btn btn-primary">Join the Waitlist <ArrowRight size={18} /></a>
          <a href="#vision" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Learn More</a>
        </div>
      </Motion.div>
    </div>
  </header>
);

const Vision = () => (
  <section id="vision" className="section-padding">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <div>
          <SectionHeader
            title="Move Beyond Modernization. Lead with Intelligence."
            subtitle="The days of complex ETL and fragile data pipelines are over. SAP BDC unifies SAP’s rich business semantics with Databricks’ power."
          />
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            SAP Business Data Cloud isn't just a cloud data warehouse; it's the foundation for your most ambitious innovation goals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Zero-Copy Architecture</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Access SAP data bi-directionally without the cost of physical movement using Delta Sharing.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Unified Governance</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Secure your entire data estate through Databricks Unity Catalog for enterprise-wide compliance.</p>
            </div>
          </div>
        </div>
        <div style={{ background: 'var(--bg-light)', padding: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }} />
          <h3 style={{ marginBottom: '1.5rem' }}>Strategic campaign focus</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <Zap size={24} className="highlight" />
              <span><strong>First-Party Integration</strong>: Databricks as a first-party citizen within the SAP cloud.</span>
            </li>
            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <Globe size={24} className="highlight" />
              <span><strong>RISE with SAP</strong>: The essential move for companies already on the RISE journey.</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
              <ShieldCheck size={24} className="highlight" />
              <span><strong>Open Standard</strong>: Technical leadership with an "open-source friendly" approach.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="section-padding bg-light">
    <div className="container">
      <SectionHeader
        title="From Data Warehousing to Data Products"
        subtitle="Shift from managing infrastructure to delivering high-value business outcomes."
      />
      <div className="card-grid">
        <div className="service-card">
          <Database size={40} className="highlight" style={{ marginBottom: '1.5rem' }} />
          <h3>Marketplace Ready</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Discover and deploy curated SAP Data Products that maintain original business context and logic.</p>
        </div>
        <div className="service-card">
          <LineChart size={40} className="highlight" style={{ marginBottom: '1.5rem' }} />
          <h3>Pre-Built Insight Apps</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Deploy out-of-the-box applications for working capital and supply chain optimization immediately.</p>
        </div>
        <div className="service-card">
          <Layers size={40} className="highlight" style={{ marginBottom: '1.5rem' }} />
          <h3>Capacity Estimator</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Accurately size your BDC environment based on your current data estate and future AI ambitions.</p>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
            LAUNCH ESTIMATOR <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const AISection = () => (
  <section id="ai" className="section-padding bg-charcoal">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div className="divider" style={{ margin: '0 auto 2rem' }} />
        <h2 style={{ fontSize: '3rem', color: 'white' }}>The Foundation for <span className="highlight">Agentic AI</span></h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '1.5rem auto 0' }}>
          AI is only as good as the data that feeds it. SAP Business Data Cloud provides the context-rich foundation required for high-performance AI agents.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <div style={{ padding: '3rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
          <Cpu className="highlight" size={48} style={{ marginBottom: '2rem' }} />
          <h3 className="text-white" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Domain-Specific AI</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            Combine mission-critical SAP data (Finance, HR, Supply Chain) with non-SAP data to build models that truly understand your unique business logic and processes.
          </p>
        </div>
        <div style={{ padding: '3rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
          <Zap className="highlight" size={48} style={{ marginBottom: '2rem' }} />
          <h3 className="text-white" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Joule Integration</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            Power your AI copilot with a harmonized knowledge graph, enabling truly autonomous decision-making across complex, cross-functional enterprise workflows.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="section-padding" style={{ borderTop: '1px solid var(--border-light)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: '6rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '4px', height: '24px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
              SAP BDC
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '400px' }}>
            Leading the open era of data intelligence. Partnering with global enterprises to unlock the full potential of SAP and Databricks.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Contact Our Team</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="mailto:ams-support@protiviti.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>
              <Mail size={20} className="highlight" /> ams-support@protiviti.com
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>
              <Calendar size={20} className="highlight" /> Schedule a Personalized Demo
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Secure Your Spot</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Join the waiting list for our staged rollout on AWS, Azure, and Google Cloud.
          </p>
          <div style={{ display: 'flex', gap: '0' }}>
            <input type="email" placeholder="Business Email" style={{
              background: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              padding: '16px 20px',
              flex: 1,
              outline: 'none',
              fontSize: '1rem'
            }} />
            <button className="btn btn-primary" style={{ padding: '0 24px' }}>JOIN</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <span>© 2026 Protiviti. All rights reserved. Strategic Enabler for SAP Business Data Cloud.</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Contact Us</span>
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
      <Vision />
      <Solutions />
      <AISection />
      <Footer />
    </div>
  );
}

export default App;

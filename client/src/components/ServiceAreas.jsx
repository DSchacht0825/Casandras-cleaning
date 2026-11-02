import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CITIES, cityPath } from '../siteData';
import './ServiceAreas.css';

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };

export default function ServiceAreas({ currentSlug }) {
  return (
    <section className="service-areas" id="areas">
      <motion.div
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2>Areas We Serve</h2>
        <p>Professional cleaning across Arlington and the DFW Metroplex</p>
      </motion.div>
      <div className="areas-grid">
        {CITIES.map((c, i) => (
          <motion.a
            key={c.slug}
            href={cityPath(c)}
            className={`area-chip${c.slug === currentSlug ? ' active' : ''}`}
            aria-current={c.slug === currentSlug ? 'page' : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            variants={fadeInUp}
          >
            <FaMapMarkerAlt />
            <span>{c.name}, TX</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { openSource } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import { FiBook, FiUsers, FiAward, FiShield } from 'react-icons/fi';

const icons = [FiBook, FiUsers, FiAward, FiShield];

export default function OpenSource() {
  const { t, lang } = useI18n();

  return (
    <section className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('opensource.title')}</h2>
          <p className="section-subtitle">{t('opensource.subtitle')}</p>
          <div className="glow-line" />
        </motion.div>

        <div className="opensource-grid">
          {openSource.map((item, i) => {
            const Icon = icons[i] || FiAward;
            const title = (lang === 'en' && item.titleEn) ? item.titleEn : item.title;
            const items = (lang === 'en' && item.itemsEn) ? item.itemsEn : item.items;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
              >
                <div className="opensource-card-icon"><Icon size={24} /></div>
                <h3 className="opensource-card-title">{title}</h3>
                {item.period && (
                  <p className="opensource-card-period">{item.period}</p>
                )}
                <ul className="opensource-card-items">
                  {items.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

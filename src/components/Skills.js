import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import {
  SiPython, SiDjango, SiNodedotjs, SiRuby, SiGo, SiCplusplus, SiGnubash,
  SiReact, SiRedux, SiGraphql, SiAngular, SiSass, SiBootstrap, SiWebpack, SiD3,
  SiTerraform, SiAnsible, SiDocker, SiNginx, SiDigitalocean,
  SiApachekafka, SiElasticsearch, SiPostgresql, SiMysql, SiMongodb, SiApachecouchdb, SiMqtt,
} from 'react-icons/si';
import { FiTerminal, FiCloud } from 'react-icons/fi';

const iconMap = {
  'Python': <SiPython />,
  'Django': <SiDjango />,
  'Node.js': <SiNodedotjs />,
  'Ruby': <SiRuby />,
  'Java': <FiTerminal />,
  'Go': <SiGo />,
  'C++': <SiCplusplus />,
  'Bash': <SiGnubash />,
  'React.js': <SiReact />,
  'React Native': <SiReact />,
  'Redux': <SiRedux />,
  'GraphQL': <SiGraphql />,
  'Angular': <SiAngular />,
  'SASS/LESS': <SiSass />,
  'Bootstrap': <SiBootstrap />,
  'Webpack': <SiWebpack />,
  'd3.js': <SiD3 />,
  'AWS (EC2, S3, RDS, Lambda)': <FiCloud />,
  'Terraform': <SiTerraform />,
  'Ansible': <SiAnsible />,
  'Docker': <SiDocker />,
  'Docker Compose': <SiDocker />,
  'Nginx': <SiNginx />,
  'Digital Ocean': <SiDigitalocean />,
  'Kafka': <SiApachekafka />,
  'Elasticsearch': <SiElasticsearch />,
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'MongoDB': <SiMongodb />,
  'CouchDB': <SiApachecouchdb />,
  'MQTT': <SiMqtt />,
};

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
          <div className="glow-line" />
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, techs], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-items">
                {techs.map((tech) => (
                  <span key={tech} className="skill-item">
                    <span className="skill-item-icon">{iconMap[tech] || <FiTerminal size={14} />}</span>
                    <span className="skill-item-name">{tech}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

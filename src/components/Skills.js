import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';
import {
  SiPython, SiDjango, SiNodedotjs, SiRuby, SiGo, SiCplusplus, SiGnubash, SiC,
  SiReact, SiRedux, SiGraphql, SiAngular, SiSass, SiD3, SiExpress, SiTypescript,
  SiTerraform, SiAnsible, SiDocker, SiNginx, SiRedis,
  SiApachekafka, SiElasticsearch, SiPostgresql, SiMysql, SiMongodb, SiApachecouchdb,
  SiOllama, SiLangchain, SiN8N,
} from 'react-icons/si';
import { FiTerminal, FiCloud, FiDatabase, FiGitMerge, FiCpu, FiZap } from 'react-icons/fi';

const iconMap = {
  'Python': <SiPython />,
  'Django': <SiDjango />,
  'Node.js': <SiNodedotjs />,
  'Ruby': <SiRuby />,
  'Go': <SiGo />,
  'C': <SiC />,
  'C++': <SiCplusplus />,
  'Bash': <SiGnubash />,
  'SQL': <FiDatabase />,
  'TypeScript': <SiTypescript />,
  'React': <SiReact />,
  'React.js': <SiReact />,
  'React Native': <SiReact />,
  'Redux': <SiRedux />,
  'GraphQL': <SiGraphql />,
  'Angular': <SiAngular />,
  'Express.js': <SiExpress />,
  'SASS': <SiSass />,
  'LESS': <FiTerminal />,
  'D3.js': <SiD3 />,
  'AWS (EC2, S3, RDS, Lambda)': <FiCloud />,
  'Terraform': <SiTerraform />,
  'Ansible': <SiAnsible />,
  'Docker': <SiDocker />,
  'Docker Compose': <SiDocker />,
  'Nginx': <SiNginx />,
  'Kafka': <SiApachekafka />,
  'CI/CD (GitHub Actions, GitLab CI)': <FiGitMerge />,
  'Elasticsearch': <SiElasticsearch />,
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'MongoDB': <SiMongodb />,
  'Redis': <SiRedis />,
  'CouchDB': <SiApachecouchdb />,
  'Qdrant': <FiDatabase />,
  'Ollama': <SiOllama />,
  'LangChain': <SiLangchain />,
  'n8n': <SiN8N />,
  'Langfuse': <FiCpu />,
  'Flowise': <FiZap />,
  'RAG': <FiCpu />,
  'pgvector': <FiDatabase />,
  'Prompt Engineering': <FiZap />,
};

export default function Skills() {
  const { t, lang } = useI18n();
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
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
            >
              <h3 className="skill-category-title">
                {lang === 'en' && category.titleEn ? category.titleEn : category.title}
              </h3>
              <div className="skill-items">
                {category.items.map((tech) => (
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

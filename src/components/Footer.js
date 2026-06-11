import { FiGithub, FiLinkedin, FiGitlab, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { useI18n } from '../context/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={18} /></a>
          <a href={personalInfo.social.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab"><FiGitlab size={18} /></a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {personalInfo.name}. {t('footer.builtWith')} <FiHeart size={12} color="#ef4444" /> y React
        </p>
      </div>
    </footer>
  );
}

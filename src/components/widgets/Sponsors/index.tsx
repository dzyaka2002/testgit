import { iconsSponsors } from 'mocks/sponsors';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <div className={s.sponsors}>
      <p className={s.sponsors__title}>{t('sponsors.title')}</p>
      <div className={s.sponsors__container}>
        {iconsSponsors.map((icon) => (
          <div key={icon.id} className={s.sponsors__container__item}>
            <img className={s.sponsors__container__img} src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

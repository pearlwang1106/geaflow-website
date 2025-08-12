// import { Button } from 'antd';
// import MainButton from '@/components/MainButton';
import { Button } from 'antd';
import styles from './index.module.css';
import FadeInSection from "@site/src/components/FadeInSection";
import MainButton from '@site/src/components/MainButton';
import { translate } from '@docusaurus/Translate';


const Banner = () => {
  // const { search } = useLocation();
  // const lang = getSearch(search)?.lang || '';
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/qm9aTJHOJGIAAAAAAAAAAAAADh8WAQFr/original)';

  // const getCurrentLanguage = () => {
  //   return lang === 'en-US' ? 'en' : 'zh';
  // };


  const bannerDetail = {
    title: translate({ message: 'header.product.desc2' }),
    desc: translate({ message: 'product_analytics.description' }),
    btn: (
      <FadeInSection transition={{ duration: 1, delay: 0.3 }}>

        <div className={styles.buttonContainer}>
          <MainButton
            style={{ height: 48 }}
            btnText={translate({ message: 'product.btn.desc' })}
          />

          <Button
            size="large"
            shape="round"
            className={styles.enterpriseConsultationButton}
            onClick={() => {
              // history.push(
              // historyPushLinkAt(
              //   `/docs/tugraph-analytics/${getCurrentLanguage()}/guide/`,
              // ),
              // );
            }}
          >
            {translate({ message: 'product.btn.desc1' })}
          </Button>
        </div>
      </FadeInSection>
    ),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9VjfR7exPyQAAAAAAAAAAAAADh8WAQFr/original',
  }



  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '567px',
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <FadeInSection>
            <span className={styles.titleText}>{bannerDetail.title}</span>
          </FadeInSection>
          <FadeInSection>
            <span className={styles.descriptionText}>{bannerDetail.desc}</span>
          </FadeInSection>
          {bannerDetail?.btn}
        </div>
        <img src={bannerDetail.icon} alt="" className={styles.icon} />

      </div>
    </div>
  );
};

export default Banner;

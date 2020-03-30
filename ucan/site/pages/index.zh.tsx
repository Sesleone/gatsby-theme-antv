import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Cases from '@antv/gatsby-theme-antv/site/components/Cases';
import Header from '@antv/gatsby-theme-antv/site/components/Header';
import Footer from '@antv/gatsby-theme-antv/site/components/Footer';
import BannerSVG from '@antv/gatsby-theme-antv/site/components/BannerSVG';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: t('简单方便'),
      description: t(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: t('无限可能'),
      description: t(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const companies = [
    {
      name: 'Woolworths',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'Mass Mart',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'Shopright Checkers',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'NetCare',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },

  ];

  const cases = [
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      isAppLogo: true,
      title: 'Optimised Booking',
      description:
        'description',
      link: '#',
      image:require('../images/screens.png')
        ,
    },
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ekkhR7ISzUsAAAAAAAAAAABkARQnAQ',
      title: 'Ensure cleanliness',
      description:
        'description',
      image: require('../images/screens.png'),
    },
  ];

  const bannerButtons = [
    {
      text: 'Why Ucan',//t('图表示例'),
      link: '#features',
      type: 'primary',
    },
   
  ];


  //to translate 
  //t('让数据栩栩如生')
  const desimage  = <img width='100%' src={require('../images/screens.png')} alt='Screens' />
  const coverImage = <img width='100%' src='https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*o40BRo-ANLoAAAAAAAAAAABkARQnAQ' alt='cover' />
  return (
    <>
      <SEO title={'Ucan'} lang={i18n.language} titleSuffix={'Staff Transport'}/>

      <Banner
        coverImage={coverImage}
        //coverImage={<BannerSVG />}
        title={'Ucan Get your Staff on Time'}
        description={t(
          'Platform for enterprises to manage and automate their staff transportation.',
        )}
        notifications={[]}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        
        onCloseVideo={() => {
          console.log('close'); // eslint-disable-line no-console
        }}
        onPlayVideo={() => {
          console.log('play'); // eslint-disable-line no-console
        }}


      />

      <Features
        id="features"
        features={features}
        title="Why Ucan?"
        style={{ width: '100%' }}
      />

      <Cases cases={cases} />
   {/**
    <Companies title={'Fellas enjoying our awesome service'} companies={companies} />
   */} 

    </>
  );
};

export default IndexPage;


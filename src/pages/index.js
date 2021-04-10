import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const AboutMe = () => <div className={clsx('container')}>
  <div className='center smallContent'>
    <div className='smallGray'>About Me</div>
    <h2 className='pageH2'>
      Full Stack Developer
    </h2>
    <p className='contentText'>
      I have a bachelor’s degree in Computer Engineer
      from <Link to='http://international.uach.cl/'>
        University Austral of Chile
      </Link>.
    </p>
    <p className='contentText'>
      I love programming and I am very excited to
      create good code and architecture. My code is
      clear and flexible, easy to read and understandable
      for other people. I like to create excellent quality
      software that is easy to maintain and scale. The
      user should have a very good experience
      with the final product.
    </p>
  </div>

  <div className={clsx(styles.homeStackTags, 'center')}>
    <ul>
      <li><span>Javascript</span></li>
      <li><span>TypeScript</span></li>
      <li><span>React JS</span></li>
      <li><span>React Native</span></li>
      <li><span>Vue</span></li>
      <li><span>NodeJS</span></li>
      <li><span>ES6</span></li>
      <li><span>Redux</span></li>
      <li><span>SVG</span></li>
      <li><span>CSS</span></li>
      <li><span>Sass</span></li>
      <li><span>Tailwindcss</span></li>
      <li><span>Bootstrap</span></li>
      <li><span>PHP</span></li>
      <li><span>Laravel</span></li>
      <li><span>Wordpress</span></li>
      <li><span>Zend Framework 2</span></li>
      <li><span>MySQL</span></li>
      <li><span>SQL Server</span></li>
      <li><span>Postgress</span></li>
      <li><span>SQLite</span></li>
      <li><span>GraphQL</span></li>
      <li><span>API Rest</span></li>
      <li><span>Linux</span></li>
      <li><span>Java</span></li>
      <li><span>Nginx</span></li>
      <li><span>Continous Integration</span></li>
      <li><span>Continous Delivery</span></li>
      <li><span>RSA SSH</span></li>
      <li><span>Git</span></li>
      <li><span>AntDesign</span></li>
      <li><span>Photoshop</span></li>
      <li><span>Adobe Illustrator</span></li>
      <li><span>Figma</span></li>
    </ul>
  </div>
</div>;

const Experience = () => <div className="container">
  <div className='center smallContent'>
    <div className='smallGray'>Where I've Worked </div>
    <h2 className='pageH2'>
      Previous Experience
    </h2>
  </div>
  <div className="row">
    <div className={clsx('col','col--3', styles.homePosition)}>
    <h3>Fullstack Software Engineer</h3>
      <div className={styles.homePositionCompany}>
        Gradguard |
        2020 - present
      </div>
      <p>
      In the company I have been in charge of the implementation of the
      new administration system for our clients, written in VueJS (TS)
      and Laravel. I have also collaborated implementing workflow
      improvements by adding various stages (QA, ACC, PROD) and
      rules to improve the quality of the source code, such as code
      style and static analysis for both Typescript and PHP.
      </p>
    </div>
    <div className={clsx('col','col--3', styles.homePosition)}>
      <h3>Software Engineer</h3>
      <div className={styles.homePositionCompany}>
        Le Cordon Bleu |
        2017 - 2019
      </div>
      <p>
        As part of the Development Team in <Link
          to="https://www.cordonbleu.edu/usa/home/en"
          title="Go to Le Cordon Bleu webpage"
        >
          Le Cordon Bleu
        </Link> I
        made sure that the Client Relationship Management (CRM)
        and the web page were working in optimal conditions.
        The main work that I did was to add new features to the
        system and fix issues. I worked with the Quality Assurance
        Team so that our users could use quality products. In
        general I worked with jQuery, Lucee and Microsoft SQL Server.
      </p>
    </div>
    <div className={clsx('col','col--3', styles.homePosition)}>
      <h3>Founding Principal</h3>
      <div className={styles.homePositionCompany}>
        Miaum | 2016 - 2017
      </div>
      <p>
        I was the team leader and worked with a multidisciplinary team to create an educational app for kids.
        I was in charge of the project coordination and that the project was successfully done.

        Some technologies used in this project were: Swift,
        Laravel, Postgress, GraphQL, ReactJS, TypeScript.
        The <Link
          to="https://apps.apple.com/us/app/granja-4-a%C3%B1os-prekinder-matem%C3%A1ticas/id1218637527?l=es"
          title="Download Miaum App for iOS"
        >
          original app
        </Link> was coded in Swift and Java for Android.
        Currently I am updating the code to make it works with
        Expo React Native and TypeScript.
        You can see a demo <Link
          to='https://expo.io/@albertcito/miaum-beta'
          title="Download Miaum App Beta"
        >
          here
        </Link>.
      </p>
    </div>
    <div className={clsx('col','col--3', styles.homePosition)}>
      <h3>Full Stack Developer</h3>
      <div className={styles.homePositionCompany}>
        Independent Consultant | 2010 - 2015
      </div>
      <p>
        I worked as an independent consultant for more than 5 years
        with clients in different areas, implementing software with
        the following technologies: MySQL, PHP, JavaScript, CSS,
        jQuery, Bootstrap, Zend Framework 2, Wordpress, eCommerce,
        WooCommerce, PrestaShop, Photoshop, Adobe Illustrator, among others.
      </p>
    </div>
  </div>
</div>;


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      description={siteConfig.tagline}
      image={useBaseUrl("img/code-miaum-albert-tjornehoj.jpg")}
    >
      <header className={styles.header}>
        <div className={styles.bgImage}>
          <div className={clsx('container')} style={{paddingBottom: '70px', }}>
            <div className={clsx('center smallContent', styles.homeHello)}>
              <div className='smallGray'>Hello, my name is</div>
              <h1 className='pageH1'>
                {siteConfig.title}
              </h1>
              <p className='contentText' style={{margin: 0}}>
                {siteConfig.tagline}
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.homeMain}>
        <AboutMe />
        <Experience />
      </main>
    </Layout>
  );
}

export default Home;

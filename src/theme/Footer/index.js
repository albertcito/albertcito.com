/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  if (!footer) {
    return null;
  }

  return (
    <footer
      id="footer"
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
        <div className={clsx('container')}>
          <div className='center smallContent'>
            <div className='smallGray'>
              Let's talk!
            </div>
            <h1 className='pageH1'>
              Get in touch
            </h1>
            <p className='contentText'>
              Please
              feel free to contact me with any questions or just to say hello.
              I will reply as soon as possible.
            </p>
            <Link
              to="mailto:me@albertcito.com"
              className='button button--primary'
              style={{color: 'white'}}
            >
              me@albertcito.com
            </Link>
          </div>

          <div className={styles.rrss}>
            <ul>
              <li>
                <Link to="https://www.linkedin.com/in/albertcito/?locale=en_US">
                  <svg width="100%" height="100%" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555V347.444C0 366.529 15.471 382 34.555 382H347.444C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0ZM118.207 329.844C118.207 335.398 113.705 339.9 108.151 339.9H65.345C59.791 339.9 55.289 335.398 55.289 329.844V150.403C55.289 144.849 59.791 140.347 65.345 140.347H108.151C113.705 140.347 118.207 144.849 118.207 150.403V329.844ZM86.748 123.432C64.289 123.432 46.082 105.225 46.082 82.766C46.082 60.307 64.289 42.1 86.748 42.1C109.207 42.1 127.414 60.307 127.414 82.766C127.414 105.225 109.208 123.432 86.748 123.432ZM341.91 330.654C341.91 335.76 337.77 339.9 332.664 339.9H286.73C281.624 339.9 277.484 335.76 277.484 330.654V246.486C277.484 233.93 281.167 191.465 244.671 191.465C216.362 191.465 210.62 220.531 209.467 233.575V330.654C209.467 335.76 205.328 339.9 200.221 339.9H155.795C150.689 339.9 146.549 335.76 146.549 330.654V149.593C146.549 144.487 150.689 140.347 155.795 140.347H200.221C205.327 140.347 209.467 144.487 209.467 149.593V165.248C219.964 149.495 235.564 137.336 268.779 137.336C342.331 137.336 341.91 206.052 341.91 243.808V330.654Z"
                      fill="#ffffff"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="http://github.com/albertcito/">
                  <svg width="100%" height="100%" viewBox="0 0 312 283" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="white"
                      d="M156.516 0C69.9105 0 0 64.9004 0 145.299C0 209.231 44.8679 263.476 107.474 282.849C115.822 283.818 117.909 279.943 117.909 276.069V250.884C74.0842 259.602 64.6933 231.51 64.6933 231.51C57.3892 215.043 46.9548 210.2 46.9548 210.2C32.3466 201.482 47.9982 201.482 47.9982 201.482C63.6498 202.45 71.9973 216.012 71.9973 216.012C85.5621 238.291 108.518 231.51 117.909 227.636C118.952 217.949 123.126 212.137 128.343 208.262C93.9096 204.388 57.3892 191.795 57.3892 136.581C57.3892 121.083 63.6498 107.522 73.0408 97.8349C70.9539 93.9603 65.7367 79.4303 74.0842 59.0884C74.0842 59.0884 87.6489 55.2138 116.865 73.6184C129.387 70.7124 142.951 68.775 156.516 68.775C170.081 68.775 183.645 70.7124 196.167 73.6184C226.426 55.2138 238.948 59.0884 238.948 59.0884C247.295 79.4303 242.078 93.9603 239.991 97.8349C250.426 107.522 255.643 121.083 255.643 136.581C255.643 192.764 219.122 204.388 184.689 208.262C189.906 213.106 195.123 221.824 195.123 235.385V275.1C195.123 278.975 198.254 283.818 205.558 281.881C268.164 262.508 311.988 208.262 311.988 144.331C313.032 64.9004 243.121 0 156.516 0Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className={clsx('holaTest', styles.copy)}>
            © {new Date().getFullYear()} Made with ♥ by Albert Tjornehoj
            – Built  with <Link to="https://www.docusaurus.io/">Docusaurus</Link>
          </div>
        </div>
    </footer>
  );
}

export default Footer;

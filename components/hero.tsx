/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Image from 'next/image';
import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <section className={styles['section_1']}>
        <div className={styles['hero_background']} aria-hidden="true">
          <div className={styles['section_background_container']} >
          </div>
        </div>
        <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          Chào mừng bạn đến
          <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
        </h1>
        <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
          <p>Cộng đồng</p>
          <div className={styles['description-separator']} />
          <p>
            <strong>Trực tuyến</strong>
          </p>
        </div>
        <h2
          className={cn(
            styleUtils.appear,
            styleUtils['appear-third'],
            styleUtils['show-on-tablet'],
            styles.description
          )}
        >
          {SITE_DESCRIPTION}
        </h2>
        <h2
          className={cn(
            styleUtils.appear,
            styleUtils['appear-third'],
            styleUtils['show-on-mobile'],
            styles.description
          )}
        >
          {SITE_DESCRIPTION}
        </h2>
        <div className="md:block text-center">
          <div style={{ minWidth: '300px' }}>
            <Image
              alt={'homescreen'}
              title={'home_screen'}
              src="/PixelTrueMockup.png"
              className={styles.image}
              loading="lazy"
              height={553}
              width={553}
            />
          </div>
        </div>
      </section>
      <section className={styles['section_2']}>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          Sứ mệnh
          {/* <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
         */}
          <br></br>
          <span className={styles['text_text-gradient']}>của {BRAND_NAME}</span>
        </h2>
        <h3 className={cn(styleUtils.appear, styleUtils['appear-third'], styles['text_statistic_center'])} >
          Là nơi kết nối những ai đang tìm
          <span className={styles['text_text_gradient']}> định hướng</span>, cùng nhau tìm thấy công việc trong lĩnh vực
          <span className={styles['text_text_gradient']}> công nghệ</span> phù hợp với bản thân.
        </h3>
        <div className="md:block text-center">
          <div style={{ minWidth: '300px' }}>
            <Image
              alt={'homescreen'}
              title={'home_screen'}
              src="/counting_stars.svg"
              className={styles.image}
              loading="lazy"
              height={400}
              width={300}
            />
          </div>
        </div>
      </section>
      <section className={styles['section_3']}>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          Chúng tôi hướng đến
          <br className={styleUtils['show-on-desktop']} /> cộng đồng
        </h2>
        <h2
          className={cn(
            styleUtils.appear,
            styleUtils['appear-third'],
            styleUtils['show-on-mobile'],
            styles.description
          )}
        >
          Phát triển năng lực, kỹ năng và tính sáng tạo cùng nhau
        </h2>
        <a className={styles['base-card_card']} target="_blank" rel="noopener" href="https://www.facebook.com/TabBookVietNam">
          <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles['base-card_gradient'])} aria-hidden="true">
          </div>
          <div className={styles['community-section_nextConf'] + " " + styles['community-section_card']}>
            <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles['community-section_content'])}>
              <h4 className={styles['community-section_card_h4']}>Cộng đồng trực tuyến sôi động để tất cả mọi người cùng tham gia.</h4>
            </div>
            <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles['community-section_attendees'])}>
              <span className={styles['text_text-gradient-40k']}>1.6K</span>
              <div className={styles['text_secondary']}>
                thành viên
              </div>
            </div>
          </div>
        </a>
      </section>

    </div>
  );
}

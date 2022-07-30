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
          <a href="#communitySection">Cộng đồng</a>
          <div className={styles['description-separator']} />
          <a href="https://qa.tabbook.vn/public/" target="_blank"><strong>Hỏi Đáp</strong></a>
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
              alt={'homescreen product demo'}
              title={'home_screen_product_demo'}
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
        <div className={styles['commnunity_vertical_line']} >
          <span className={cn(styles['path_line'], styles['path_line_gradient_mission'])}></span>
          <div className={styles['section_label']}>
            <span className={cn(styles['section_label_number_mission'])}>💌</span>
            <h3 className={styles['section_label_heading']}  >
              <span className={styles['section_label_text_mission']}>Mission</span>
            </h3>
          </div>
        </div>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          Sứ mệnh
          {/* <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
         */}
          <br></br>
          <span className={styles['text_text-gradient']}>của {BRAND_NAME}</span>
        </h2>
        <h3 className={cn(styleUtils.appear, styleUtils['appear-third'], styles['text_statistic_center'])} >
          Là nơi kết nối những ai đang tìm
          <span className={styles['text_text_gradient']}> định hướng</span>, cùng nhau tìm thấy cơ hội trong lĩnh vực
          <span className={styles['text_text_gradient']}> công nghệ</span> phù hợp với bản thân.
        </h3>
        <div className="md:block text-center">
          <div style={{ minWidth: '300px', padding: '10px 0' }}>
            <Image
              alt={'homescreen mission of TAB'}
              title={'home_screen_mission'}
              src="/counting_stars_tab.png"
              className={styles.image}
              loading="lazy"
              height={300}
              width={1200}
            />
          </div>
          <a className={cn(styles.teamLink, styles.text_text_gradient)} href="/teams">Đội ngũ của TAB</a>
          <h4 className={cn(styleUtils.appear, styleUtils['appear-third'], styles['team-section_h4'])}>Chúng tôi là một tập thể gồm <strong className={styles['team-section_highlight_h4']}>những sinh viên tuyệt vời,</strong> luôn nỗ lực để tạo ra những sản phẩm thú vị. Chúng tôi luôn nổ lực không ngừng để phát triển bản thân và mong muốn có thể giúp mọi người khám phá cơ hội của họ trong thế giới công nghệ</h4>
        </div>
      </section>
      <section id="communitySection" className={styles['section_3']}>
        <div className={styles['commnunity_vertical_line']} >
          <span className={cn(styles['path_line'], styles['path_line_gradient'])}></span>
          <div className={styles['section_label']}>
            <span className={cn(styles['section_label_number'])}>🧿</span>
            <h3 className={styles['section_label_heading']}  >
              <span className={styles['section_label_text']}>Community</span>
            </h3>
          </div>
        </div>
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
          Phát triển một cộng đồng cùng nhau sáng tạo và dám khác biệt
        </h2>
        <a className={styles['base-card_card']} target="_blank" rel="noopener" href="https://www.facebook.com/TabBookVietNam">
          <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles['base-card_gradient'])} aria-hidden="true">
          </div>
          <div className={styles['community-section_nextConf'] + " " + styles['community-section_card']}>
            <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles['community-section_content'])}>
              <h4 className={styles['community-section_card_h4']}>Cộng đồng trực tuyến sôi động để tất cả mọi người cùng tham gia.</h4>
              <span style={{ alignSelf: 'center', fontSize: '20px' }}>Tham gia ngay</span>
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

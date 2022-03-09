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
        <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          Welcome to the
          <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
        </h1>
        <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
          <p>{DATE}</p>
          <div className={styles['description-separator']} />
          <p>
            <strong>Online</strong>
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
      </section>

      {/* <div className={styles['section_team_image_desktop']}>
        <div className={styles['team_section_01']}>
          <div className={styles['team_section_02']}>
            <img alt="Vercel Team" src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_7680/front/blog/2021-year-in-review/team/team-desktop.png" decoding="async" data-nimg="intrinsic" />
          </div>
        </div>
      </div> */}
      <section className={styles['section_2']}>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          mission
          {/* <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
         */}
          <br></br>
          <span className={styles['text_text-gradient']}>of {BRAND_NAME}</span>
        </h2>
        <h3 className={styles['text_statistic_center']}>
          We hired
          <span className={styles['text_text_gradient']}> 131</span> new teammates from
          <span className={styles['text_text_gradient']}> 25</span> states and
          <span className={styles['text_text_gradient']}> 22</span> countries.
        </h3>
      </section>

      <section className={styles['section_3']}>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          We kept working
          <br className={styleUtils['show-on-desktop']} /> for our community
        </h2>
        <a className={styles['base-card_card']} target="_blank" rel="noopener" href="https://www.facebook.com/TabBookVietNam">
          <div className={styles['base-card_gradient']} aria-hidden="true">
          </div>
          <div className={styles['community-section_nextConf'] + " " + styles['community-section_card']}>
            <div className={styles['community-section_content']}>
              <h4 className={styles['community-section_card_h4']}>We hosted the largest virtual gathering of Next.js developers.</h4>
            </div>
            <div className={styles['community-section_attendees']}>
              <span className={styles['text_text-gradient-40k']}>40k</span>
              <div className={styles['text_secondary']}>
                attendees
              </div>
            </div>
          </div>
        </a>
      </section>

    </div>
  );
}

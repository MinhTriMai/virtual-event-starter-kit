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

export const SITE_URL = 'https://tabbook.vn';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'tabbook';
export const BRAND_NAME = 'TABBOOK';
export const SITE_NAME_MULTILINE = ['TABBOOK', 'Community'];
export const SITE_NAME = 'TABBOOK';
export const META_DESCRIPTION =
  'Tabbook là một dự án của những sinh viên, hướng đến mục tiêu giúp mọi người tìm được định hướng nghề nghiệp, rèn luyện kỹ năng cần thiết cho những công việc tiềm năng trong lĩnh vực công nghệ.';
export const SITE_DESCRIPTION =
  'Một trải nghiệm trực tuyến tương tác của cộng đồng, miễn phí cho tất cả mọi người.';
export const DATE = 'Community';
export const SHORT_DATE = 'Mar 15 - 9:00am PST';
export const FULL_DATE = 'Mar 15th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://tabbook.vn';
export const BLOG = 'https://tabbook.vn/blog';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  // {
  //   name: 'Live Stage',
  //   route: '/stage/a'
  // },
  // {
  //   name: 'Vercel Stage',
  //   route: '/stage/c'
  // },
  // {
  //   name: '100ms Stage',
  //   route: '/stage/m'
  // },
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Teams',
    route: '/teams'
  },
  // {
  //   name: 'Explore',
  //   route: '/explore'
  // },
  {
    name: 'Jobs',
    route: '/jobs'
  },
  {
    name: 'Docs',
    route: 'https://doc.tabbook.vn'
  },
  {
    name: 'Blogs',
    route: 'https://tabbook.vn/blog'
  }
];

export type TicketGenerationState = 'default' | 'loading';

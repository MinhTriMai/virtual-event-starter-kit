import { ArrowRightIcon } from '@100mslive/react-icons';
import HmsLogo from '@components/icons/icon-hms';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';
import LinkButton from '../LinkButton';

const data = [
  {
    name: 'Blog',
    roleName: 'blog',
    link: 'https://tabbook.vn/blog',
    role: 'backstage',
    desc: `Đây là sản phẩm cung cấp những bài viết chất lượng về nghề nghiệp công nghệ tiềm năng trong thời đại số. Bạn có thể tìm hiểu được nghề nghiệp nào phù hợp với bản thân mình tại đây.`
  },
  {
    name: 'Explore',
    roleName: 'explore',
    link: 'https://explore.tabbook.vn',
    role: 'stage',
    desc:
      'Sản phẩm này là một công cụ giúp bạn tìm thấy được những nghề nghiệp cụ thể nào phù hợp với bản thân, từ đó bạn có thể tìm hiểu thêm và dấn thân vào sự nghiệp tương lai của mình.'
  },
  {
    name: 'Docs',
    roleName: 'docs',
    link: 'https://docs.tabbook.vn',
    role: 'viewer',
    desc: `Đây được xem như cuốn Bách khoa toàn tập dành cho những ai muốn có được 1 công việc trong lĩnh vực công nghệ, mọi thứ cần biết và chuẩn bị đều có ở đây!`
  }
];

const DemoModal = () => {
  const [stage, setStage] = React.useState(``);
  const router = useRouter();
  React.useEffect(() => {
    if (router.query.slug) {
      setStage(router.query.slug as string);
    }
  }, [router]);
  return (
    <div className="font-sans">
      <p className="text-[32px] font-semibold my-0">Chọn sản phẩm bạn muốn trải nghiệm</p>
      <p className="text-gray-300 text-[15px] my-0">
        Chúng tôi đã phát triển nhiều sản phẩm để bạn dễ dàng trải nghiệm. Sử dụng ngay bằng một cú nhấp chuột!
      </p>
      <div>
        {data.map(m => (
          <div
            className="flex md:flex-row flex-col justify-between py-4"
            style={{ borderBottom: '1px solid #323232' }}
            key={`${m.roleName}-${m.name}`}
          >
            <div className="text-left max-w-xs">
              <span className={`badge ${m.roleName}-badge`}>{m.roleName}</span>
              <p className="text-gray-300 text-xs">{m.desc}</p>
            </div>
            <div className="flex items-center space-x-6">
              {/* <CopyButton text={`${m.link}`} /> */}
              <LinkButton className="w-[200px]" href={`${m.link}`} target="blank_">
                Đến {m.name} <ArrowRightIcon height={20} />
              </LinkButton>
            </div>
          </div>
        ))}
        {/* <div className="flex items-center justify-center mt-4 ">
          Powered by <HmsLogo />
        </div> */}
      </div>
    </div>
  );
};

export default DemoModal;

export const CopyButton = ({ text = '' }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="relative">
      {copied ? (
        <p className="absolute top-10 left-0 flex bg-gray-600 justify-center  rounded-lg w-48 p-2">
          Đã sao chép!
        </p>
      ) : null}
      <Button variant="secondary" onClick={copy}>
        Mời bạn
      </Button>
    </div>
  );
};

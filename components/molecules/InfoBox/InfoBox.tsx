import Link from 'next/link';
import { InfoBoxProps } from './InfoBoxProps';

const InfoBox = ({
  heading,
  description,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{description}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors transition-duration-300 ease-in-out`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;

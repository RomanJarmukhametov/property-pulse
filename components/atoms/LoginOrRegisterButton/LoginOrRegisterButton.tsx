import { FaGoogle } from 'react-icons/fa';

interface LoginOrRegisterButtonProps {
  isForMobileMenu?: boolean;
}

const LoginOrRegisterButton = ({ isForMobileMenu }: LoginOrRegisterButtonProps) => {
  const buttonClass =
    'flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  const mobileClass = isForMobileMenu ? 'my-5' : '';

  return (
    <button className={`${buttonClass} ${mobileClass}`}>
      <FaGoogle className="text-white mr-2" />
      <span>Login or Register</span>
    </button>
  );
};

export default LoginOrRegisterButton;

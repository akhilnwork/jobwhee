import Logo from './Logo';
import Link from 'next/link';
import Button from '../buttons/Button';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

const menuItems = [
  { id: 1, name: 'Post a Job', link: '/post-a-job' },
  { id: 2, name: 'Find a Job', link: '/find-a-job' },
  { id: 3, name: 'How It Works', link: '/how-it-works' },
];

const Header = () => {
  return (
    <header className="pt-[1.563rem]">
      <div className="container mx-auto">
        <div className="box-border flex h-11 rounded-full bg-black p-1.5 sm:h-14 sm:p-4 xl:h-16 2xl:h-20">
          <div className="flex flex-1/5 items-center pl-1.5 sm:pl-3 lg:flex-1/3">
            <Logo />
          </div>
          <div className="hidden flex-4/5 sm:flex lg:flex-2/3">
            <div className="flex w-full items-center justify-center">
              <nav>
                <ul className="menu flex sm:gap-4 lg:gap-9">
                  {menuItems.map(({ id, name, link }) => (
                    <li key={id} className="flex">
                      <Link
                        href={link}
                        className="menu-item hover:text-primary-400 text-xs font-semibold text-white xl:text-sm 2xl:text-base"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex w-full items-center justify-end gap-x-[0.375rem]">
              <LanguageSwitcher />
              <Button
                text=" Sign In"
                css="bg-transparent border border-white text-white"
                link="/sign-in"
              />
              <Button
                text=" Sign Up"
                css="bg-white text-black"
                link="/sign-up"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-end gap-x-1 sm:hidden">
            <Button
              text=" Sign Up"
              css="bg-white border border-white text-black"
              link="/sign-up"
            />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <Image
                src="/menu.svg"
                width={24}
                height={24}
                alt="Menu Icon"
                className="h-3.5 w-3.5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

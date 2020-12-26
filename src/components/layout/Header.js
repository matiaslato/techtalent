import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="py-3 px-3 mx-1 md-py-3 md-px-8 bg-primary hover:bg-primary-darker hover:text-white rounded-full text-white" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="py-3 px-3 mx-1 md-py-3 md-px-8 bg-primary hover:bg-primary-darker hover:text-white rounded-full text-white" href="#services">
          Services
        </AnchorLink>
        {/* <AnchorLink className="py-3 px-3 mx-1 md-py-3 md-px-8 bg-primary hover:bg-primary-darker hover:text-white rounded-full text-white" href="#stats">
          Stats
        </AnchorLink> */}
        <AnchorLink className="py-3 px-3 mx-1 md-py-3 md-px-8 bg-primary hover:bg-primary-darker hover:text-white rounded-full text-white" href="#testimonials">
          Contact Us
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;

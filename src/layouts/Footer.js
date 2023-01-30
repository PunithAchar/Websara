import React from 'react';
import classNames from 'classnames';

const Footer = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a to="#0">Contact</a>
        </li>
        <li>
          <a to="#0">About us</a>
        </li>
        <li>
          <a to="#0">FAQ's</a>
        </li>
        <li>
          <a to="#0">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
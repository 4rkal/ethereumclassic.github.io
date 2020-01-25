import React from 'react';

import LocalizedLink from './localizedLink';

function isHash(str) {
  return /^#/.test(str);
}

function isInternal(str) {
  return /^\/(?!\/)/.test(str);
}

const Link = ({ to, text, children, icon, fullIcon, ...props }) => {
  const iconText = fullIcon || (icon ? `fas fa-${icon}` : null);
  const content = (
    <>
      {text || children}
      {iconText && <i className={iconText} />}
    </>
  );
  if (isHash(to)) {
    return (
      <a {...props} href={to}>
        {content}
      </a>
    );
  }
  if (!isInternal(to) || to.indexOf('/static/') === 0 || to.endsWith('.pdf')) {
    const showIcon = !['card', 'button-link'].find(s => `${props.className}`.indexOf(s) > -1);
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {content}
        {showIcon && <i className="fas fa-external-link-alt fa-xs external-icon" />}
      </a>
    );
  }
  return (
    <LocalizedLink {...props} to={to}>
      {content}
    </LocalizedLink>
  );
};

export default Link;

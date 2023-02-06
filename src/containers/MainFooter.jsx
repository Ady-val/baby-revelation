import React from 'react';

function MainFooter({text, location}) {
  return (
    <div className="text-sm text-secondary h-12 flex items-end grow mb-4">
      Alex / {text} <span className="text-primary">&nbsp;{location}</span>
    </div>
  );
}

export default MainFooter;

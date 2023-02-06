import React from 'react';
import TooltipInfo from '../../components/misc/TooltipInfo';

function SubtitlesText({text, tooltipText}) {
  return (
    <div className="flex justify-start items-center">
      <div className="tool-subtitles">
        {text}
      </div>
      {tooltipText &&
        <div className="ml-3 text-fonttext">
          <TooltipInfo text={tooltipText}/>
        </div>
      }
    </div>
  );
}

export default SubtitlesText;

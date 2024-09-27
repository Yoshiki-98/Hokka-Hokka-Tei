import React from 'react';
import { TriggerProps } from '@/types/element-prop';

const RightArrowButton: React.FC<TriggerProps> = ({ onClick, disabled, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative inline-block ${className}`}
        style={{ width: '216px', height: '71px' }}
      >
        <div className="red-board relative h-full">
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6317 6.98959C15.2258 5.39553 17.3878 4.5 19.6421 4.5H53.9722C56.1689 4.5 58.2803 5.3504 59.8637 6.87292L66.8914 13.6304C68.5581 15.2329 69.5 17.4453 69.5 19.7575V52.8579C69.5 55.1122 68.6045 57.2742 67.0104 58.8683L58.8683 67.0104C57.2742 68.6045 55.1122 69.5 52.8579 69.5H20.3607C17.9971 69.5 15.7403 68.5159 14.1319 66.7838L6.77125 58.8569C5.31135 57.2847 4.5 55.2186 4.5 53.0731V19.6421C4.5 17.3878 5.39553 15.2258 6.98959 13.6317L13.6317 6.98959Z" fill="#DF9100" stroke="#DF9100" strokeWidth="3"/>
            <path d="M10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5H50.9722C53.1689 1.5 55.2803 2.3504 56.8637 3.87292L63.8914 10.6304C65.5581 12.2329 66.5 14.4453 66.5 16.7575V49.8579C66.5 52.1122 65.6045 54.2742 64.0104 55.8683L55.8683 64.0104C54.2742 65.6045 52.1122 66.5 49.8579 66.5H17.3607C14.9971 66.5 12.7403 65.5159 11.1319 63.7838L3.77125 55.8569C2.31135 54.2847 1.5 52.2186 1.5 50.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959Z" fill="#EE0026" stroke="#FFA600" strokeWidth="3"/>
          </svg>
        </div>
        <div className="right-arrow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2595_17198)">
              <path d="M0.000255537 1.10045L1.23078 0.00195268L3.21652 2.0141L5.21283 4.0685L7.19328 6.13874L9.42196 7.96076L11.3496 10.0574L9.37971 12.096L7.42566 14.1979L5.20754 16.0305L3.41721 18.2908L1.20438 20.002L0.0055362 19.0144L2.42962 16.8702L4.72167 14.6626L6.97147 12.4128L8.99946 10.0574L6.97675 7.70198L4.55795 5.62118L2.29231 3.38722L0.000255537 1.10045Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_2595_17198">
                <rect width="20" height="11.3494" fill="white" transform="translate(11.3496 0.00195312) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default RightArrowButton;

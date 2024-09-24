import React from 'react';
import { IndicatorProps } from '@/types/element-prop';

const MobileOrderIndicator: React.FC<IndicatorProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '166px', height: '51px' }}
    >
      <svg width="166" height="51" viewBox="0 0 166 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6317 6.98959C15.2258 5.39553 17.3878 4.5 19.6421 4.5H148.972C151.169 4.5 153.28 5.3504 154.864 6.87292L161.891 13.6304C163.558 15.2329 164.5 17.4453 164.5 19.7575V32.8579C164.5 35.1122 163.604 37.2742 162.01 38.8683L153.868 47.0104C152.274 48.6045 150.112 49.5 147.858 49.5H20.3607C17.9971 49.5 15.7403 48.5159 14.1319 46.7838L6.77125 38.8569C5.31135 37.2847 4.5 35.2186 4.5 33.0731V19.6421C4.5 17.3878 5.39553 15.2258 6.98959 13.6317L13.6317 6.98959Z" fill="#DF9100" stroke="#DF9100" strokeWidth="3"/>
        <path d="M10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5H145.972C148.169 1.5 150.28 2.3504 151.864 3.87292L158.891 10.6304C160.558 12.2329 161.5 14.4453 161.5 16.7575V29.8579C161.5 32.1122 160.604 34.2742 159.01 35.8683L150.868 44.0104C149.274 45.6045 147.112 46.5 144.858 46.5H17.3607C14.9971 46.5 12.7403 45.5159 11.1319 43.7838L3.77125 35.8569C2.31135 34.2847 1.5 32.2186 1.5 30.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959Z" fill="#EE0026" stroke="#FFA600" strokeWidth="3"/>
        <path d="M41.064 19.18C41.412 19.204 41.796 19.24 42.228 19.24H48C48.408 19.24 48.804 19.216 49.08 19.18V20.68C48.768 20.668 48.432 20.644 48 20.644H45.18V22.684H48.804C49.056 22.684 49.656 22.66 49.968 22.636L49.98 24.172C49.644 24.136 49.104 24.136 48.84 24.136H45.18V25.972C45.18 26.632 45.588 26.872 46.548 26.872C47.628 26.872 48.684 26.8 49.644 26.704L49.536 28.324C48.756 28.372 47.4 28.42 46.272 28.42C44.076 28.42 43.536 27.664 43.536 26.452V24.136H41.58C41.232 24.136 40.632 24.172 40.272 24.196V22.624C40.608 22.648 41.208 22.684 41.58 22.684H43.536V20.644H42.228C41.796 20.644 41.412 20.656 41.064 20.68V19.18ZM60.36 18.424C60.66 18.868 61.08 19.624 61.308 20.068L60.348 20.488C60.096 19.996 59.736 19.276 59.412 18.82L60.36 18.424ZM61.776 17.884C62.088 18.34 62.532 19.096 62.748 19.516L61.788 19.924C61.548 19.432 61.152 18.724 60.828 18.28L61.776 17.884ZM53.304 24.268C53.844 22.924 54.3 21.232 54.444 19.708L56.196 20.068C56.088 20.416 55.956 21.004 55.908 21.268C55.74 22.108 55.308 23.764 54.888 24.88C54.456 26.044 53.748 27.412 53.112 28.312L51.432 27.604C52.188 26.62 52.896 25.324 53.304 24.268ZM59.232 24.016C58.776 22.756 57.996 20.98 57.492 20.068L59.088 19.552C59.58 20.476 60.408 22.324 60.864 23.488C61.284 24.568 61.92 26.488 62.256 27.676L60.48 28.252C60.144 26.824 59.712 25.312 59.232 24.016ZM63.744 23.332C65.892 22.78 67.656 22 68.988 21.184C70.224 20.416 71.592 19.216 72.372 18.268L73.668 19.504C72.756 20.404 71.604 21.34 70.44 22.108V26.956C70.44 27.484 70.464 28.228 70.548 28.528H68.652C68.7 28.24 68.736 27.484 68.736 26.956V23.116C67.5 23.764 65.976 24.412 64.5 24.844L63.744 23.332ZM81.036 27.736C81.084 27.508 81.132 27.172 81.132 26.848V19.852C81.132 19.312 81.048 18.856 81.036 18.82H82.824C82.812 18.856 82.74 19.324 82.74 19.864V26.14C83.712 25.72 84.9 24.772 85.704 23.608L86.628 24.928C85.632 26.224 83.904 27.52 82.56 28.204C82.296 28.348 82.152 28.468 82.044 28.564L81.036 27.736ZM75.48 27.556C76.536 26.812 77.184 25.708 77.52 24.688C77.856 23.656 77.868 21.388 77.868 19.936C77.868 19.456 77.832 19.132 77.76 18.832H79.524C79.512 18.892 79.44 19.42 79.44 19.924C79.44 21.34 79.404 23.872 79.08 25.084C78.72 26.44 77.964 27.616 76.944 28.528L75.48 27.556ZM95.208 18.388C95.16 18.76 95.136 19.228 95.136 19.6C95.136 19.864 95.148 20.152 95.148 20.464H96.648C97.044 20.464 97.608 20.416 97.896 20.368V21.964C97.512 21.952 97.056 21.928 96.732 21.928H95.184C95.22 23.68 95.268 25.684 95.292 27.304C95.304 28.072 94.86 28.516 93.948 28.516C93.216 28.516 92.544 28.492 91.86 28.444L91.728 26.884C92.268 26.98 92.916 27.028 93.324 27.028C93.624 27.028 93.744 26.872 93.744 26.524C93.744 25.72 93.744 24.52 93.72 23.284C92.664 24.664 90.72 26.332 88.824 27.34L87.72 26.092C90.06 24.988 92.04 23.296 93 21.928H89.724C89.292 21.928 88.776 21.952 88.356 21.976V20.38C88.704 20.428 89.28 20.464 89.688 20.464H93.66C93.648 20.152 93.636 19.864 93.624 19.6C93.588 19.084 93.552 18.7 93.504 18.388H95.208ZM100.104 22.444C100.536 22.48 101.412 22.516 102.036 22.516H108.48C109.044 22.516 109.572 22.468 109.884 22.444V24.328C109.596 24.316 108.984 24.268 108.48 24.268H102.036C101.352 24.268 100.548 24.292 100.104 24.328V22.444ZM120.348 18.148C120.648 18.58 121.08 19.348 121.296 19.792L120.624 20.08L121.5 20.62C121.368 20.86 121.212 21.184 121.104 21.484C120.792 22.456 120.192 23.74 119.328 24.94C119.844 25.312 120.312 25.66 120.672 25.948L119.52 27.304C119.196 27.004 118.752 26.632 118.26 26.236C117.204 27.352 115.848 28.372 113.976 29.08L112.584 27.868C114.66 27.232 115.992 26.26 116.976 25.252C116.196 24.688 115.404 24.148 114.792 23.752L115.86 22.66C116.496 23.02 117.252 23.512 118.02 24.028C118.632 23.152 119.148 22.12 119.328 21.376H115.896C115.056 22.492 113.94 23.644 112.728 24.484L111.432 23.476C113.532 22.18 114.648 20.536 115.26 19.492C115.44 19.204 115.692 18.652 115.8 18.244L117.54 18.784C117.252 19.204 116.94 19.744 116.796 20.008H119.244C119.568 20.008 119.916 19.972 120.18 19.9C119.952 19.444 119.664 18.916 119.4 18.532L120.348 18.148ZM121.764 17.596C122.076 18.052 122.52 18.808 122.736 19.228L121.788 19.648C121.536 19.144 121.152 18.448 120.816 17.992L121.764 17.596ZM124.104 22.444C124.536 22.48 125.412 22.516 126.036 22.516H132.48C133.044 22.516 133.572 22.468 133.884 22.444V24.328C133.596 24.316 132.984 24.268 132.48 24.268H126.036C125.352 24.268 124.548 24.292 124.104 24.328V22.444Z" fill="white"/>
      </svg>
    </button>
  );
};

export default MobileOrderIndicator;

import React from 'react';
import { IndicatorProps } from '@/types/element-prop';

const DemaeKanIndicator: React.FC<IndicatorProps> = ({ onClick, className }) => {
  return (
    <a
      onClick={onClick}
      className={`relative inline-block ${className}`}
      style={{ width: '166px', height: '51px' }}
    >
      <svg width="166" height="51" viewBox="0 0 166 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M13.6317 6.98959C15.2258 5.39553 17.3878 4.5 19.6421 4.5H148.972C151.169 4.5 153.28 5.3504 154.864 6.87292L161.891 13.6304C163.558 15.2329 164.5 17.4453 164.5 19.7575V32.8579C164.5 35.1122 163.604 37.2742 162.01 38.8683L153.868 47.0104C152.274 48.6045 150.112 49.5 147.858 49.5H20.3607C17.9971 49.5 15.7403 48.5159 14.1319 46.7838L6.77125 38.8569C5.31135 37.2847 4.5 35.2186 4.5 33.0731V19.6421C4.5 17.3878 5.39553 15.2258 6.98959 13.6317L13.6317 6.98959Z" fill="#DF9100" stroke="#DF9100" strokeWidth="3"/>
        <path d="M10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5H145.972C148.169 1.5 150.28 2.3504 151.864 3.87292L158.891 10.6304C160.558 12.2329 161.5 14.4453 161.5 16.7575V29.8579C161.5 32.1122 160.604 34.2742 159.01 35.8683L150.868 44.0104C149.274 45.6045 147.112 46.5 144.858 46.5H17.3607C14.9971 46.5 12.7403 45.5159 11.1319 43.7838L3.77125 35.8569C2.31135 34.2847 1.5 32.2186 1.5 30.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959Z" fill="#EE0026" stroke="#FFA600" strokeWidth="3"/>
        <path d="M72.336 24.956H73.824V30.032H72.336V29.348H65.688V30.044H64.236V24.956H65.688V27.944H68.196V24.32H64.716V19.964H66.132V22.928H68.196V18.956H69.66V22.928H71.844V19.964H73.344V24.32H69.66V27.944H72.336V24.956ZM77.58 26.504H79.584V25.724H77.58V26.504ZM79.584 23.924H77.58V24.668H79.584V23.924ZM80.964 22.724V28.628C80.964 29.24 80.844 29.576 80.436 29.78C80.052 29.984 79.5 30.008 78.768 30.008C78.696 29.648 78.492 29.12 78.312 28.796C78.756 28.82 79.236 28.82 79.392 28.808C79.536 28.808 79.584 28.76 79.584 28.616V27.548H77.58V29.972H76.224V22.724H80.964ZM84.384 28.448V22.508H85.788V28.472C85.788 29.18 85.656 29.528 85.176 29.756C84.72 29.972 84.072 30.008 83.208 29.996C83.136 29.612 82.908 29.024 82.692 28.652C83.304 28.676 83.928 28.676 84.132 28.664C84.324 28.664 84.384 28.616 84.384 28.448ZM83.304 22.844V27.74H81.996V22.844H83.304ZM83.988 20.612H86.424V21.896H75.564V20.612H78.12C77.904 20.204 77.556 19.688 77.22 19.292L78.576 18.824C79.008 19.28 79.488 19.928 79.692 20.384L79.032 20.612H82.368C82.728 20.06 83.112 19.352 83.352 18.8L84.9 19.256C84.612 19.724 84.288 20.192 83.988 20.612ZM96.888 27.248H94.44V28.292H96.888V27.248ZM97.152 21.248H93.732V22.1H97.152V21.248ZM96.384 24.2V23.216H94.44V24.2H96.384ZM90.864 23.12H89.388V23.696H90.864V23.12ZM89.388 25.22H90.864V24.608H89.388V25.22ZM97.704 25.328H94.44V26.072H98.208V29.972H96.888V29.492H94.44V30.044H93.144V22.34H92.46V21.008L91.692 21.896C91.404 21.38 90.792 20.588 90.204 20.048C89.832 20.696 89.328 21.416 88.656 22.1H89.7V21.104H90.864V22.1H92.112V26.24H89.388V27.968C89.796 27.872 90.228 27.776 90.66 27.668C90.504 27.38 90.348 27.104 90.192 26.84L91.308 26.36C91.884 27.224 92.472 28.364 92.688 29.144L91.476 29.696C91.404 29.42 91.296 29.096 91.152 28.736C89.964 29.084 88.752 29.42 87.78 29.672L87.396 28.364C87.612 28.328 87.852 28.28 88.116 28.232V22.604L88.032 22.676C87.852 22.4 87.444 21.932 87.156 21.752C88.236 20.912 88.956 19.784 89.352 18.848H90.636C91.272 19.352 92.028 20.06 92.46 20.66V20.084H94.716V18.836H96.084V20.084H98.472V22.34H97.704V25.328ZM99.828 20.768C100.308 20.756 100.776 20.732 101.004 20.708C102.012 20.624 103.992 20.444 106.188 20.264C107.424 20.156 108.732 20.084 109.584 20.048L109.596 21.584C108.948 21.596 107.916 21.596 107.28 21.752C105.828 22.136 104.736 23.684 104.736 25.112C104.736 27.092 106.584 27.8 108.624 27.908L108.06 29.552C105.54 29.384 103.164 28.04 103.164 25.436C103.164 23.708 104.136 22.34 104.952 21.728C103.824 21.848 101.376 22.112 99.984 22.412L99.828 20.768ZM107.88 22.76C108.18 23.192 108.612 23.924 108.84 24.392L107.928 24.8C107.628 24.14 107.376 23.672 106.992 23.132L107.88 22.76ZM109.224 22.208C109.524 22.628 109.98 23.336 110.232 23.804L109.332 24.236C109.008 23.588 108.732 23.144 108.348 22.616L109.224 22.208ZM115.224 20.108L114.384 21.272C113.928 20.852 112.932 20.276 112.152 19.952L112.932 18.884C113.7 19.172 114.72 19.688 115.224 20.108ZM114.432 23.252L113.64 24.452C113.16 24.032 112.152 23.504 111.36 23.192L112.092 22.112C112.872 22.376 113.916 22.856 114.432 23.252ZM114.132 25.16L115.188 26.12C114.552 27.368 113.796 28.736 113.076 29.9L111.864 28.94C112.512 28.04 113.424 26.552 114.132 25.16ZM119.508 28.304H122.616V29.648H114.876V28.304H118.02V26.108H115.728V24.764H118.02V22.796H115.296V21.428H118.848C118.224 20.9 117.3 20.312 116.508 19.916L117.456 18.812C118.428 19.256 119.688 20.012 120.3 20.6L119.604 21.428H122.364V22.796H119.508V24.764H121.932V26.108H119.508V28.304ZM131.076 22.124H126.864C127.38 23.42 128.088 24.572 129.012 25.544C129.876 24.608 130.56 23.48 131.076 22.124ZM134.484 22.124H132.756C132.108 23.9 131.232 25.352 130.128 26.552C131.364 27.5 132.876 28.208 134.7 28.616C134.352 28.964 133.896 29.636 133.68 30.044C131.748 29.552 130.188 28.748 128.928 27.68C127.62 28.724 126.072 29.504 124.248 30.08C124.08 29.708 123.636 29.036 123.348 28.688C125.124 28.22 126.624 27.536 127.836 26.612C126.756 25.376 125.928 23.876 125.28 22.124H123.564V20.732H128.268V18.836H129.72V20.732H134.484V22.124Z" fill="white"/>
        <rect x="28" y="9" width="30" height="30" rx="15" fill="url(#pattern0_1013_7861)"/>
        <defs>
        <pattern id="pattern0_1013_7861" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1013_7861" transform="scale(0.0025)"/>
        </pattern>
        <image id="image0_1013_7861" width="400" height="400" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </a>
  );
};

export default DemaeKanIndicator;

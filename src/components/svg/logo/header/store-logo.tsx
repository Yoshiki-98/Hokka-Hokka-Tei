import React from 'react';
import { LogoProps } from '@/types/element-prop';

const StoreLogo: React.FC<LogoProps> = ({ onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-block ${className}`}
      style={{
        width: '59px',
        height: '30px',
        marginBottom: '2px'
      }}
    >
      <svg width="59" height="30" viewBox="0 0 59 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.804 13.892H11.34V15.164H6.804V13.892ZM4.236 19.376H9.876V20.648H4.236V19.376ZM6.12 12.764H7.584V17.216H6.12V12.764ZM3.48 16.472H10.644V21.068H9.168V17.744H4.884V21.08H3.48V16.472ZM5.628 9.812H7.128V11.996H5.628V9.812ZM2.028 11.216H11.508V12.584H2.028V11.216ZM1.32 11.216H2.76V14.252C2.76 16.196 2.58 19.172 1.488 21.056C1.224 20.816 0.588 20.396 0.24 20.252C1.248 18.524 1.32 15.992 1.32 14.252V11.216ZM17.436 11.396H23.52V12.632H17.436V11.396ZM18.192 15.404H22.8V16.556H18.192V15.404ZM18.192 17.336H22.8V18.5H18.192V17.336ZM19.824 9.8H21.108V20.972H19.824V9.8ZM22.092 13.424H23.34V19.712C23.34 20.252 23.268 20.6 22.944 20.804C22.608 21.02 22.2 21.044 21.624 21.044C21.588 20.696 21.432 20.156 21.264 19.82C21.552 19.832 21.852 19.832 21.948 19.832C22.044 19.832 22.092 19.796 22.092 19.676V13.424ZM17.652 13.424H22.788V14.636H18.888V21.044H17.652V13.424ZM21.264 10.448L22.092 9.812C22.56 10.1 23.148 10.544 23.436 10.868L22.56 11.588C22.296 11.252 21.72 10.772 21.264 10.448ZM12.948 17.036H17.148V20.828H15.852V18.2H14.196V21.068H12.948V17.036ZM14.388 12.392H15.696V15.764H14.388V12.392ZM13.032 13.4H17.076V14.504H13.032V13.4ZM12.636 15.32H17.34V16.484H12.636V15.32ZM13.416 19.268H16.56V20.432H13.416V19.268ZM14.22 9.812H15.012V10.076H15.432V10.472C14.952 11.348 14.22 12.548 13.068 13.604C12.864 13.304 12.432 12.836 12.156 12.644C13.14 11.816 13.836 10.712 14.22 9.812ZM14.484 9.812H15.456C16.176 10.436 17.076 11.336 17.508 11.984L16.62 13.076C16.236 12.44 15.396 11.372 14.712 10.796H14.484V9.812Z" fill="#EE0026"/>
        <path d="M46.064 18.0595L42.0764 16.376L40.5869 12.3885L42.2006 8.51724L46.0718 6.80273L50.0283 8.43966L51.6342 12.3962L49.9585 16.283L46.0718 18.0673L46.064 18.0595ZM46.6536 9.57232L44.047 10.4179L43.3798 13.1177L45.1331 15.2899L48.1432 14.7934L48.8336 11.667L46.6536 9.56456V9.57232Z" fill="#FFA600"/>
        <path d="M46.0636 2.38169L49.9891 2.90923L53.232 5.2211L55.4352 8.50272L56.0791 12.3817L55.5438 16.5167L52.9915 19.8526L49.4926 23.2351L46.0714 26.4469L42.6579 23.2273L39.2289 19.8293L39.0737 19.9302L36.7851 16.4313L36.0016 12.3739L36.9015 8.57254L38.8565 5.15128L42.1459 2.8782L46.0791 2.27308M46.0636 0L42.3088 0.837859L38.8565 2.46703L36.149 5.18231L34.2793 8.56478L34 12.3972L34.8922 17.277L37.6074 21.5206L40.5167 24.2048L43.3173 27.0132L46.0636 30L48.8177 27.0287L51.6804 24.2901L54.3879 21.3887L57.142 17.2304L58.3289 12.3972L57.7936 8.58805L56.1567 5.06594L53.232 2.53685L49.8185 0.861133L46.0636 0.0930954V0Z" fill="#EE0026"/>
      </svg>
    </div>
  );
};

export default StoreLogo;

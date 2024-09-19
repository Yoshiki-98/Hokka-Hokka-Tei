import React from 'react';
import { IndicatorProps } from '@/types/element-prop';

const UberEatsIndicator: React.FC<IndicatorProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '166px', height: '51px' }}
    >
      <svg width="166" height="51" viewBox="0 0 166 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M13.6317 6.98959C15.2258 5.39553 17.3878 4.5 19.6421 4.5H148.972C151.169 4.5 153.28 5.3504 154.864 6.87292L161.891 13.6304C163.558 15.2329 164.5 17.4453 164.5 19.7575V32.8579C164.5 35.1122 163.604 37.2742 162.01 38.8683L153.868 47.0104C152.274 48.6045 150.112 49.5 147.858 49.5H20.3607C17.9971 49.5 15.7403 48.5159 14.1319 46.7838L6.77125 38.8569C5.31135 37.2847 4.5 35.2186 4.5 33.0731V19.6421C4.5 17.3878 5.39553 15.2258 6.98959 13.6317L13.6317 6.98959Z" fill="#DF9100" stroke="#DF9100" strokeWidth="3"/>
        <path d="M10.6317 3.98959C12.2258 2.39553 14.3878 1.5 16.6421 1.5H145.972C148.169 1.5 150.28 2.3504 151.864 3.87292L158.891 10.6304C160.558 12.2329 161.5 14.4453 161.5 16.7575V29.8579C161.5 32.1122 160.604 34.2742 159.01 35.8683L150.868 44.0104C149.274 45.6045 147.112 46.5 144.858 46.5H17.3607C14.9971 46.5 12.7403 45.5159 11.1319 43.7838L3.77125 35.8569C2.31135 34.2847 1.5 32.2186 1.5 30.0731V16.6421C1.5 14.3878 2.39553 12.2258 3.98959 10.6317L10.6317 3.98959Z" fill="#EE0026" stroke="#FFA600" strokeWidth="3"/>
        <path d="M57.6465 29.168C55.4865 29.168 54.1905 27.956 54.1905 25.004V20.108H55.9665V25.16C55.9665 27.008 56.6145 27.632 57.6465 27.632C58.7025 27.632 59.3745 27.008 59.3745 25.16V20.108H61.0785V25.004C61.0785 27.956 59.8185 29.168 57.6465 29.168ZM66.443 29.168C65.843 29.168 65.195 28.856 64.655 28.292H64.607L64.451 29H63.071V19.424H64.835V21.836L64.787 22.916C65.315 22.436 65.987 22.112 66.647 22.112C68.303 22.112 69.299 23.468 69.299 25.52C69.299 27.836 67.919 29.168 66.443 29.168ZM66.047 27.716C66.863 27.716 67.487 27.02 67.487 25.556C67.487 24.272 67.079 23.564 66.155 23.564C65.699 23.564 65.291 23.792 64.835 24.26V27.212C65.255 27.584 65.687 27.716 66.047 27.716ZM73.7217 29.168C71.8377 29.168 70.3737 27.86 70.3737 25.64C70.3737 23.468 71.9097 22.112 73.5057 22.112C75.3537 22.112 76.3137 23.468 76.3137 25.316C76.3137 25.652 76.2777 25.976 76.2297 26.132H72.0897C72.2337 27.236 72.9537 27.812 73.9497 27.812C74.5017 27.812 74.9817 27.644 75.4617 27.344L76.0617 28.424C75.4017 28.88 74.5497 29.168 73.7217 29.168ZM72.0657 24.956H74.8017C74.8017 24.056 74.3937 23.48 73.5297 23.48C72.8217 23.48 72.1977 23.984 72.0657 24.956ZM77.7664 29V22.28H79.2064L79.3384 23.468H79.3744C79.8664 22.592 80.5864 22.112 81.2824 22.112C81.6544 22.112 81.8704 22.172 82.0744 22.256L81.7744 23.78C81.5344 23.708 81.3424 23.672 81.0664 23.672C80.5384 23.672 79.9024 24.02 79.5304 24.992V29H77.7664ZM85.8557 29V20.108H91.3037V21.596H87.6317V23.648H90.7517V25.136H87.6317V27.512H91.4357V29H85.8557ZM94.7505 29.168C93.5505 29.168 92.7585 28.316 92.7585 27.176C92.7585 25.736 93.9225 24.98 96.6345 24.692C96.5985 24.032 96.3105 23.528 95.4825 23.528C94.8585 23.528 94.2585 23.804 93.6345 24.164L92.9985 23C93.7905 22.508 94.7505 22.112 95.8065 22.112C97.5105 22.112 98.3865 23.132 98.3865 25.076V29H96.9465L96.8265 28.28H96.7785C96.1905 28.784 95.5185 29.168 94.7505 29.168ZM95.3265 27.788C95.8305 27.788 96.2025 27.548 96.6345 27.128V25.772C94.9905 25.976 94.4385 26.432 94.4385 27.032C94.4385 27.56 94.8105 27.788 95.3265 27.788ZM102.422 29.168C100.826 29.168 100.214 28.148 100.214 26.648V23.672H99.2657V22.364L100.31 22.28L100.514 20.468H101.978V22.28H103.634V23.672H101.978V26.648C101.978 27.416 102.29 27.776 102.89 27.776C103.106 27.776 103.37 27.704 103.55 27.632L103.838 28.916C103.478 29.036 103.01 29.168 102.422 29.168ZM106.78 29.168C105.88 29.168 104.896 28.772 104.224 28.22L105.028 27.116C105.628 27.584 106.204 27.848 106.828 27.848C107.5 27.848 107.8 27.56 107.8 27.14C107.8 26.636 107.104 26.408 106.396 26.132C105.544 25.808 104.596 25.292 104.596 24.164C104.596 22.964 105.568 22.112 107.104 22.112C108.076 22.112 108.832 22.52 109.384 22.94L108.592 24.008C108.112 23.66 107.644 23.432 107.152 23.432C106.54 23.432 106.252 23.696 106.252 24.08C106.252 24.572 106.876 24.752 107.584 25.016C108.472 25.352 109.456 25.796 109.456 27.044C109.456 28.22 108.532 29.168 106.78 29.168ZM110.682 20.768C111.162 20.756 111.63 20.732 111.858 20.708C112.866 20.624 114.846 20.444 117.042 20.264C118.278 20.156 119.586 20.084 120.438 20.048L120.45 21.584C119.802 21.596 118.77 21.596 118.134 21.752C116.682 22.136 115.59 23.684 115.59 25.112C115.59 27.092 117.438 27.8 119.478 27.908L118.914 29.552C116.394 29.384 114.018 28.04 114.018 25.436C114.018 23.708 114.99 22.34 115.806 21.728C114.678 21.848 112.23 22.112 110.838 22.412L110.682 20.768ZM118.734 22.76C119.034 23.192 119.466 23.924 119.694 24.392L118.782 24.8C118.482 24.14 118.23 23.672 117.846 23.132L118.734 22.76ZM120.078 22.208C120.378 22.628 120.834 23.336 121.086 23.804L120.186 24.236C119.862 23.588 119.586 23.144 119.202 22.616L120.078 22.208ZM126.078 20.108L125.238 21.272C124.782 20.852 123.786 20.276 123.006 19.952L123.786 18.884C124.554 19.172 125.574 19.688 126.078 20.108ZM125.286 23.252L124.494 24.452C124.014 24.032 123.006 23.504 122.214 23.192L122.946 22.112C123.726 22.376 124.77 22.856 125.286 23.252ZM124.986 25.16L126.042 26.12C125.406 27.368 124.65 28.736 123.93 29.9L122.718 28.94C123.366 28.04 124.278 26.552 124.986 25.16ZM130.362 28.304H133.47V29.648H125.73V28.304H128.874V26.108H126.582V24.764H128.874V22.796H126.15V21.428H129.702C129.078 20.9 128.154 20.312 127.362 19.916L128.31 18.812C129.282 19.256 130.542 20.012 131.154 20.6L130.458 21.428H133.218V22.796H130.362V24.764H132.786V26.108H130.362V28.304ZM141.93 22.124H137.718C138.234 23.42 138.942 24.572 139.866 25.544C140.73 24.608 141.414 23.48 141.93 22.124ZM145.338 22.124H143.61C142.962 23.9 142.086 25.352 140.982 26.552C142.218 27.5 143.73 28.208 145.554 28.616C145.206 28.964 144.75 29.636 144.534 30.044C142.602 29.552 141.042 28.748 139.782 27.68C138.474 28.724 136.926 29.504 135.102 30.08C134.934 29.708 134.49 29.036 134.202 28.688C135.978 28.22 137.478 27.536 138.69 26.612C137.61 25.376 136.782 23.876 136.134 22.124H134.418V20.732H139.122V18.836H140.574V20.732H145.338V22.124Z" fill="white"/>
        <rect x="18" y="9" width="30" height="30" fill="url(#pattern0_1013_7848)"/>
        <defs>
        <pattern id="pattern0_1013_7848" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1013_7848" transform="scale(0.00195312)"/>
        </pattern>
        <image id="image0_1013_7848" width="512" height="512" xlinkHref="data:image/png;base64,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UHQCXgmwcH8hax2A9jc770+FVwhAAAIQgAAE8kBgWluPA5CH6sJGCEAAAhCAQDoE6joA3gQIgQAEIAABCECguASmtfX0ABS3kikZBCAAAQhAYDCBuj0A024ODs01BCAAAQhAAAKFIDCtre/vAfCygJGFKBqFgAAEIAABCECgEYHphgDmU8jZGoXmPgQgAAEIQAAChSAwp0oxt0vS3wOwaCGKRSEgAAEIQAACEGhFoNrm4wC0wsRzCEAAAhCAQLEI4AAUqz4pDQQgAAEIQCAWgcUcih6AWKwIBAEIQAACECgMgQE9AIsUplgUBAIQgAAEIACBZgQGOAAjmoXkGQQgAAEIQAAChSGwkEsypK84CxSmWBQEAgUkMO+880af/OQno6WXXjpacMEFoznnnDOaddZZoznmmCN64403oilTplT1xRdfjJ544onokUceiSZMmFBAEsmKNPfcc0ejRo2Khg8fHs0222zRXHPNFc0+++zTuL355pvRK6+8Ej3++OPRs88+mywTYkEgPwSqbT4OQH4qDEtLRGC55ZaLNt5442ijjTaK1l9//WiBBdr30SdNmhTdfffd0bXXXhtdffXV0W233Ra98847hafohn306NHRJptsEq211lrRsssuG80///yxyz158uTof//7XzR27Ngqu2uuuSZ67rnnYsfvRsAhQ4ZUnb5203Z92zmMK7PMMku0wgorRCuvvHKV2dChQyM7T4PlnHPOia644orBt7nOD4Fp/xAzyuYPpBU0nwwOP/zwSlIZMWJEbutdv+iSFrty6KGHxi73RRddlCif3XffPXYe/t9bbLHFKt///vcrDz30UKL8WkVSw1Y5/fTTK2PGjKnMMMMMbdkW+neDekQqe++9d0WOTmXq1KmtULT9/P77768cdthhlcUXX7wn3OQItm2zI/z9739vaa+cy8rBBx9cZffuu+/Gyqed/5/QPzslte99lXuIVwHYE/BWwAgEINADAuutt150ySWXRE8++WT085//PFpmmWW6YoV/Ge+xxx7Rv/71r+iZZ56JfvKTn0TzzedNQPMr/qV66qmnRi+88EL0l7/8pdprMtNMM6VeoOWXXz762c9+Vq0j9whss8020cc+lu+vzUUXXTQ67rjjonHjxkXHHntslZ17GpBSEHDbP2+/A1CKElNICIREYIMNNqh2Md94443Rpz/96ejj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lgejIBAOAe+xn2dJav+8885bt9iN7tcNXLKbQ4cOLVmJKW4ABN50DwAOQAA10SsTkmzJ2itbB+cbuu3PP//8YJNzdZ103X2jJW2N7ucKSpeMnX322buUMslCoCGBqgPAEEBDPvl40MksX5/nnlcJ3fbJkyfnFW3V7qQTyHwuQD3BAahH5cN7sGnMhiddI8AQQNfQZpiw95pPKrPNNlvSqD2PF/qXZr2lcD2H1oYBST9XjT5TM888cxu5lyto6M5suWqjNKWt9gDk+2dKaeqqcUG9D3lSyfPYY5I15Uk5JYmX9y/1Rg15KxaNHIdG91ulV4bnoQ9nlaEOSljGKZ4DMLGEBS9UkTtxABZbbLHcshg5cmTQtjfqCg/a6BrjktrfaOgg70MiNWh4C4EiEHgVB6AA1djoCzdO0UJvRJuVIXTbF1pooWbmB/9sxIgRiWxs9HnEAUiEk0gQ6BaBid4JkB6AbuHNKN3x48cnzslbkOZVvO1syGK2d911V8gmNrUt6cY9r7zySt10G92vG7jmpocOfB4AAgEIpEpgEg5Aqjx7k5hPIUsqa6+9dtKoPY3nLWdDtz10B6VVBS633HKtgtR9/uijj9a9/9hjj9W93+rmUUcdFf3whz9sFYznEIBAewReYwigPWBBhn799dejl19+OZFt3p1t+PDhieL2MtIKK6yQ6GCZLG1OevRtljY2yssTAFdfffVGj5vef/jhh+s+b+QY1A1cc3PNNdesueItBCCQEoGJdgBeSykxkukhgaSnkHn28VZbbdVDy5Nlvc022ySLmGEsN1yhL1VshGO99daLkizb854UjXqkku4suM466ySypVHZuA8BCFQJTLID8BIw8k/gtttuS1yIHXbYIXHcXkXcaaedepV17HxnmmmmaNttt40dPqSAn/3sZxOZc8899zQcr3/yySej115r//eGVyNsvPHGiewhEgQg0JDABDsAExo+5kFuCNx0002JbR0zZkyUp33a3f2/8sorJy5vlhH33HPPLLNLJS87LkkdrKuvvrqhDR988EF0/fXXN3ze7MFuu+3W7DHPIACB9gm82N8D8EH7cYkREoFOjp71me/77rtvSMVpasshhxwS5WXjlC222CLK2yl4u+66a2KH8Jprrmlad9ddd13T540e7rLLLtHcc8/d6DH3IQCB9gi8r+Cv2AF4T/pqe3EJHRqBCRMmRI0mX8Wx9aCDDor8yy908dr6PfbYI3Qzp9k3wwwzRN/+9renXYf+xqsrvve97yUy02fPt3JEr7rqqkRpe1fF/fffP1FcIkEAAtMR8Kzx9+0AWF788IW/eSZwzjnnJDbfOwLaCQhdfvrTn0Z522L3i1/8YrTUUkuFjrZq3+677x4tu+yyiWy9+OKLo0abAPUneO+990YPPPBA/2Vbr9/61reipLsTtpURgSFQfALVof9+B4B5AAWo8LPOOqujUhx22GGJu347yjhm5FVWWSXaa6+9YoYOJ5hn0//hD38Ix6AGlrhx/dWvftXgaevbp59+eutACnHmmWfGCjc4kOep+DOKQAACHROo/ujvdwDyfXB5xyyKkcB9990XPfjgg4kL4y/Y448/PnH8bkZ0I3rqqadG7lLPo3gugH9dhyxHHnlklHT7X+9D8e9//ztW8ewoVCqVWGEHB/rGN74RrbjiioNvB3Wd9y2gg4KJMd0iUG3z+x2Ap7uVC+lmS+BPf/pTRxl6slWIM9d//etfR579n2c58cQTo6WXXjrIInjW/5e//OXEttlxfOedd2LF99bVl156aaywgwPNOOOM0RlnnBElPalwcHppXx944IGR9+TIY09V2ixIL2gCT9Va58Ffu+RozhmoG7eitdb6gZVcdI59Zd111w3ms6AVCskL0yDmoYceGrt8F110UYNU2r+tMfDKXHPNFTvvLP4n9Yu6MnHixPYL0xdD4/4V9R61VSZt7pM4P0f829/+VtFKkLby7DbLTTfdtPLuu+9OK9dpp51W0UZQqdi40UYbTUu3nTd33nlnKvl3mx3pZ972HiDm02Q7veODUhAGGsdt5zuibtgXX3yxol/cPf9M6JfpgC/VusYmuNkrB8CmXnvttRUtvew5W//PL7744pVnn302AcGPoqh3JlFZtGfAR4kkePeTn/wkUb7d+K7Tro91HW/tfljRnhUd24kDQPuU8ud2a6U3TVbRu44/pKQRBkON41Z09GqCr9SBUV566aXKaqut1rPPhWbPV957772BRqV01UsHwEVw4zd06NCesfX/qoYjKuPGjeuIqE74q+gsiUTlWH/99SvaHKij/HVIUKK80/yuGj16dGXSpEkNy+EeNa2w6chOHIAwvlvT/Nz0OK0B46nz9tiYjv45sH36f44f/OAHDb+Q2nmgo1gr++yzT6b1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"/>
        </defs>
      </svg>
    </button>
  );
};

export default UberEatsIndicator;

import { motion } from "framer-motion";
import React from "react";

export default function HelmetSvg() {
  return (
    <div>
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='h-10'
        variants={{rest: {opacity: 0.6}, hover: {opacity: 1}}}
      >
        <g clip-path="url(#clip0_820_170)">
          <path
            d="M49.9999 30.1837C49.9999 29.7364 49.6373 29.3737 49.19 29.3737H30.9935V25.0138L42.5253 20.892C43.4199 20.5723 44.1464 19.8866 44.5182 19.0111C44.8875 18.1415 44.8773 17.151 44.4899 16.2934C42.5326 11.9603 39.3408 8.37101 35.2597 5.91335C31.046 3.37589 26.198 2.25732 21.2397 2.67838C15.6529 3.153 10.4095 5.68312 6.47539 9.80275C2.54452 13.9189 0.252198 19.2736 0.0205576 24.8801C-0.243588 31.2746 2.04506 37.3361 6.46589 41.9525C6.66653 42.1812 6.9823 42.2807 7.28241 42.2008C10.924 41.2333 12.7867 42.1325 15.1452 43.2713C15.455 43.4209 15.7753 43.5756 16.1075 43.7299C17.0204 44.1541 17.9942 44.3641 18.965 44.3641C20.2397 44.3641 21.5093 44.0021 22.6287 43.2879C24.6207 42.017 25.81 39.85 25.81 37.4912V36.1772H29.3737V40.5508C29.3737 44.332 32.4499 47.4082 36.2311 47.4082H45.2386C46.9296 47.4082 48.3437 46.1951 48.6008 44.5238L49.9905 35.4902C49.9911 35.4864 49.9909 35.4824 49.9914 35.4787C49.9965 35.4422 49.9999 35.4051 49.9999 35.3672C49.9999 35.3672 49.9999 35.3672 49.9999 35.3671V30.1837ZM48.3801 30.9936V34.5573H30.9935V30.9936H48.3801ZM29.3737 29.3737H26.0805C26.5875 27.7306 27.7767 26.3485 29.3737 25.6174V29.3737ZM43.0272 18.378C42.8288 18.8452 42.4569 19.1962 41.9801 19.3666L29.3125 23.8944C26.8243 24.7838 24.9992 26.877 24.4011 29.3737H19.8012C20.0975 26.4295 22.0604 23.8487 24.8716 22.8076L42.6708 16.2376C42.7892 16.4761 42.9035 16.7169 43.0135 16.9604C43.2182 17.4134 43.2231 17.9169 43.0272 18.378ZM24.1901 34.5573H20.6804C20.1742 34.5573 19.7625 34.1455 19.7625 33.6394V30.9936H24.1935C24.1923 31.0496 24.1901 31.1055 24.1901 31.1616V34.5573ZM1.63902 24.9471C1.85435 19.734 3.98803 14.7529 7.64687 10.9215C11.308 7.08786 16.184 4.73366 21.3767 4.29252C25.9926 3.90051 30.5044 4.94079 34.424 7.30104C37.5206 9.16582 40.0667 11.7307 41.8887 14.7996L24.31 21.2881C20.6211 22.6544 18.1426 26.2153 18.1426 30.1491V30.1836V33.6393C18.1426 35.0386 19.2811 36.177 20.6804 36.177H20.7344V37.4911C20.7344 38.6034 19.8143 39.2919 18.9618 39.2919C18.7226 39.2919 18.4818 39.2364 18.2462 39.1269C17.9476 38.9882 17.6545 38.8467 17.3711 38.7099L17.3518 38.7006C15.4204 37.7681 13.2313 36.7111 10.1377 36.7111C9.52419 36.7111 8.88996 36.7537 8.25195 36.8377C8.17689 36.8477 6.60455 37.0639 5.21902 37.8187C2.70359 34.0447 1.44712 29.5904 1.63902 24.9471ZM24.1901 37.4912C24.1901 39.2939 23.2807 40.9505 21.7574 41.9223C20.2544 42.8811 18.3976 43.0079 16.7901 42.2609C16.4689 42.1117 16.154 41.9596 15.8494 41.8127C14.1154 40.9755 12.45 40.1712 10.1262 40.1712C9.2933 40.1712 8.37517 40.2747 7.33975 40.517C6.931 40.0732 6.54407 39.615 6.17701 39.1451C7.2458 38.6141 8.45141 38.4454 8.46426 38.4437C9.03175 38.3689 9.59481 38.331 10.1378 38.331C12.8608 38.331 14.8725 39.3024 16.6475 40.1594L16.6667 40.1687C16.9555 40.3082 17.2541 40.4524 17.5637 40.5961C18.0146 40.8056 18.4851 40.9119 18.9618 40.9119C20.5933 40.9119 22.3543 39.6041 22.3543 37.4912V36.1772H24.1901V37.4912ZM25.81 34.5573V31.1616C25.81 31.1054 25.8117 31.0495 25.8133 30.9936H29.3737V34.5573H25.81ZM48.2459 36.1772L47.6977 39.7409H30.9935V36.1772H48.2459ZM45.2386 45.7883H36.2311C33.6185 45.7883 31.4469 43.8655 31.0564 41.3607H47.4484L46.9997 44.2774C46.8651 45.1529 46.1244 45.7883 45.2386 45.7883Z"
            fill="white"
          />
          <path
            d="M11.6091 34.4493C13.723 34.4493 15.4427 32.7296 15.4427 30.6156C15.4427 28.5017 13.723 26.782 11.6091 26.782C9.49515 26.782 7.77539 28.5017 7.77539 30.6156C7.77539 32.7296 9.49515 34.4493 11.6091 34.4493ZM11.6091 28.4018C12.8298 28.4018 13.8229 29.3949 13.8229 30.6156C13.8229 31.8364 12.8298 32.8294 11.6091 32.8294C10.3883 32.8294 9.39525 31.8364 9.39525 30.6156C9.39525 29.3949 10.3883 28.4018 11.6091 28.4018Z"
            fill="white"
          />
        </g>
      </motion.svg>
    </div>
  );
}
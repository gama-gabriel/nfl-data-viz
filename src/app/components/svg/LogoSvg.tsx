"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LogoSvg({ view }: { view: boolean }) {
  const variants = {
    hidden: {
      y: 0,
    },
    show: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
      },
    },
  };

  const ballVariants = {
    hidden: { scale: 0, opacity: 0, x: -300, y: 200, rotate: -2500 },
    rest: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
    hover: {
      rotate: 2000,
      x: 300,
      y: -200,
      transition: { duration: 2, ease: "easeIn" },
    },
  };

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className=''>
      <motion.svg
        variants={variants}
        initial="hidden"
        animate={view ? "rest" : "hidden"}
        whileHover="hover"
        viewBox="0 0 50 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='h-80'
      >
        <g id="logo">
          <motion.g
            id="football"
            variants={{
              hidden: { scale: 0, opacity: 0, x: -300, y: 200, rotate: -2500 },
              rest: {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 2 },
              },
            }}
          >
            <path
              id="Vector"
              d="M27.63 26.4532L15.5021 37.1646C15.5021 37.1646 19.1453 38.3606 25.0556 36.2463C31.1185 34.0769 36.2716 28.3788 36.8675 21.2025C37.3849 14.97 36.244 14.2511 35.8899 13.7909C35.5442 13.3413 34.9611 13.2841 34.9611 13.2841L27.63 26.4532Z"
              fill="#632106"
            />
            <path
              id="Vector_2"
              d="M16.8063 18.064C11.721 23.6306 11.9267 30.2279 12.0391 32.707C12.1133 34.3611 12.3996 35.2008 13.2033 36.0851C13.954 36.9101 15.5212 37.6481 18.7127 36.9716C22.0358 36.2675 27.0935 33.9433 31.6741 28.7265C36.5325 23.1917 36.9311 14.461 35.6163 13.5216C34.3015 12.5821 31.6359 11.8696 29.0466 12.0201C26.4573 12.1707 21.5756 12.8451 16.8063 18.064Z"
              fill="#842801"
            />
            <path
              id="Vector_3"
              d="M13.1672 36.0534C13.1057 36.0937 12.6116 35.7735 12.5904 35.1882C12.5523 34.1999 13.2203 31.3604 14.1661 29.191C15.0546 27.1488 15.6908 26.2348 15.6908 26.2348C15.6908 26.2348 15.0907 25.6495 15.1119 24.5595C15.1331 23.4695 15.5105 21.387 19.6606 17.3769C24.0546 13.125 25.5369 13.5683 26.241 13.5852C26.8199 13.6001 27.7254 13.9436 27.7933 13.9627C27.7933 13.9627 29.1865 13.0529 30.6201 12.7518C32.0536 12.4507 33.4957 12.6182 33.7311 12.6415C33.9686 12.6649 34.3757 12.7985 34.7002 12.9533C35.0098 13.0996 35.3767 13.3583 35.3767 13.3583C35.3767 13.3583 32.8319 13.0423 31.1757 13.4665C29.5195 13.8906 28.4804 14.5098 28.4804 14.5098C28.4804 14.5098 28.9469 15.3326 28.9045 15.9031C28.843 16.711 28.3192 17.3769 26.8241 18.9123C25.52 20.2525 20.8397 25.5287 20.2608 26.1203C19.5143 26.888 18.5855 27.2506 17.7563 27.17C16.9293 27.0894 16.4245 26.7671 16.4245 26.7671C16.4245 26.7671 15.5148 28.3215 14.8489 29.9587C14.183 31.5958 13.7377 33.2711 13.3539 35.1691C13.2584 35.6483 13.2818 35.977 13.1672 36.0534Z"
              fill="#632104"
            />
            <path
              id="Vector_4"
              d="M16.5518 26.0037C17.0926 26.3239 18.541 26.4914 19.3638 25.8277C20.1866 25.166 21.2723 23.6243 23.7344 20.8951C25.6006 18.8295 27.7445 17.0758 27.8463 16.0727C27.9799 14.7452 26.7839 14.2681 25.4988 14.3677C24.2158 14.4674 21.7877 16.2339 19.7815 18.3206C17.7754 20.4073 16.2104 22.3922 15.8902 23.7961C15.6929 24.6592 15.8965 25.6135 16.5518 26.0037Z"
              fill="#842801"
            />
            <path
              id="Vector_5"
              d="M25.3228 12.6118C25.3228 12.6118 26.945 12.9045 28.6097 14.0072C30.2744 15.1099 32.0897 16.5477 33.2009 17.7671C33.8308 18.4584 35.5866 20.7084 35.6884 20.7084C35.7902 20.7084 35.9917 19.3639 36.0532 18.8634C36.1126 18.363 36.2144 17.8795 36.1529 17.6992C36.0935 17.519 34.9208 15.9518 33.0228 14.268C30.8661 12.3552 28.8642 12.0159 28.8642 12.0159C28.8642 12.0159 28.3447 11.9968 27.0362 12.1665C26.0883 12.2916 25.3228 12.6118 25.3228 12.6118Z"
              fill="#F2F0EE"
            />
            <path
              id="Vector_6"
              d="M12.6498 25.764C12.6498 25.764 13.7249 26.0228 15.5699 27.3057C17.6481 28.752 18.9396 29.8929 20.5046 31.4982C21.9912 33.023 23.588 35.0503 23.588 35.1712C23.588 35.2921 22.9561 35.5444 22.0294 35.9516C21.5755 36.1509 20.7124 36.5242 20.5704 36.4627C20.4304 36.4033 19.2916 34.675 17.5145 32.9615C16.3906 31.8778 15.167 30.7157 13.6019 29.7508C12.601 29.1359 12.092 29.0171 12.092 29.0171C12.092 29.0171 12.0878 28.2876 12.2977 27.1827C12.4865 26.2051 12.6498 25.764 12.6498 25.764Z"
              fill="#F2F0EE"
            />
            <path
              id="Vector_7"
              d="M22.1736 18.2039C19.5058 20.7317 16.4797 24.7355 16.3122 24.9794C16.0216 25.3992 16.0153 25.7322 16.3906 25.9655C16.766 26.1987 17.0374 25.8255 17.2749 25.5201C17.5379 25.1829 19.9257 21.7284 22.4196 19.3279C25.3037 16.5562 27.2843 15.2499 27.5261 15.0102C27.7042 14.8321 28.1686 14.6285 27.7869 14.268C27.4964 13.9923 26.9238 14.3486 26.6842 14.5288C26.4425 14.7091 24.9962 15.5298 22.1736 18.2039Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_8"
              d="M24.9389 14.0157C24.5593 14.3104 24.5953 14.8491 25.0492 15.2053C25.3948 15.4768 26.1328 16.06 26.4848 16.3823C26.9132 16.7746 27.3225 16.8488 27.6385 16.6028C27.9693 16.3462 28.141 15.7079 27.5536 15.1184C26.9705 14.5352 26.6333 14.1853 26.0204 13.9414C25.6217 13.7824 25.2103 13.8078 24.9389 14.0157Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_9"
              d="M24.4511 15.4683C24.1012 15.3325 23.5117 15.0675 23.0494 15.4873C22.5871 15.9072 22.831 16.448 23.2466 16.7491C23.6623 17.0502 24.2603 17.644 24.8541 18.066C25.1934 18.3057 25.7787 18.5029 26.1943 18.0448C26.5378 17.6652 26.2452 17.0375 25.9865 16.7216C25.6853 16.3504 25.0661 15.7058 24.4511 15.4683Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_10"
              d="M22.8289 17.2051C22.3751 16.9485 21.6138 16.7025 21.0985 17.2305C20.5344 17.8094 20.8525 18.2357 21.406 18.5792C21.8704 18.8676 22.8162 19.682 23.1237 19.8919C23.6263 20.2354 24.2667 20.0849 24.5106 19.7074C24.9156 19.0818 24.3621 18.3544 23.9465 18.0151C23.5414 17.6843 23.0134 17.3111 22.8289 17.2051Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_11"
              d="M19.3213 18.9716C18.9799 19.3682 18.929 19.7945 19.4571 20.3713C19.9851 20.9481 20.9097 21.6246 21.4441 21.8069C22.057 22.0148 22.3517 21.7815 22.5723 21.4379C22.7928 21.0944 22.6189 20.3204 22.0548 19.8178C21.6986 19.4997 21.0624 18.9356 20.2778 18.7638C19.8515 18.6705 19.5419 18.715 19.3213 18.9716Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_12"
              d="M18.4752 20.6787C18.1804 20.596 17.8009 20.7148 17.5803 20.9862C17.3598 21.2555 17.2537 21.7899 17.5188 22.0911C17.7881 22.3986 17.9514 22.511 18.4031 22.9012C18.8569 23.2935 19.3107 23.7727 19.8515 23.8342C20.2311 23.8767 20.5746 23.6879 20.7358 23.4419C20.8949 23.1959 20.8779 22.6488 20.441 22.178C20.1314 21.843 19.3447 20.9226 18.4752 20.6787Z"
              fill="#FDFFFF"
            />
            <path
              id="Vector_13"
              d="M16.0132 22.9839C15.5657 23.5671 15.8117 24.3581 16.9166 25.0558C17.8221 25.6305 18.6194 26.0334 19.1623 25.3739C19.6713 24.7546 19.175 24.1227 18.0341 23.338C16.9653 22.6043 16.4182 22.458 16.0132 22.9839Z"
              fill="#FDFFFF"
            />
          </motion.g>

          <motion.g id="graphic">
            <motion.rect
              id="bar 7"
              x="39"
              y="43"
              width="2"
              height="30"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 30,
                  transition: { delay: 1.1, duration: 0.5 },
                },
                hover: {
                  height: 25,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 40 58)"
            />
            <motion.rect
              id="bar 6"
              x="34"
              y="55.5"
              width="2"
              height="17.5"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 17.5,
                  transition: { delay: 1, duration: 0.5 },
                },
                hover: {
                  height: 27.5,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 35 64.25)"
            />
            <motion.rect
              id="bar 5"
              x="29"
              y="48"
              width="2"
              height="25"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 25,
                  transition: { delay: 0.9, duration: 0.5 },
                },
                hover: {
                  height: 20,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 30 60.5)"
            />
            <motion.rect
              id="bar 4"
              x="24"
              y="60.5"
              width="2"
              height="12.5"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 12.5,
                  transition: { delay: 0.8, duration: 0.5 },
                },
                hover: {
                  height: 22.5,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 25 66.75)"
            />
            <motion.rect
              id="bar 3"
              x="19"
              y="53"
              width="2"
              height="20"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 20,
                  transition: { delay: 0.7, duration: 0.5 },
                },
                hover: {
                  height: 15,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 20 63)"
            />
            <motion.rect
              id="bar 2"
              x="14"
              y="63"
              width="2"
              height="10"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 10,
                  transition: { delay: 0.6, duration: 0.5 },
                },
                hover: {
                  height: 20,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 15 68)"
            />
            <motion.rect
              id="bar 1"
              x="9"
              y="58"
              width="2"
              height="15"
              fill="#0F6292"
              variants={{
                hidden: { height: 0 },
                rest: {
                  height: 15,
                  transition: { delay: 0.5, duration: 0.5 },
                },
                hover: {
                  height: 10,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              transform="rotate(180 10 65.5)"
            />
          </motion.g>
          <g id="goal posts">
            <motion.rect
              variants={{
                hidden: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
                rest: { height: 79, opacity: 1, transition: { delay: 0.2 } },
              }}
              id="left bar"
              width="6"
              height="79"
              fill="#FFED00"
              transform="rotate (180 3 39.5)"
            />
            <motion.rect
              variants={{
                hidden: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
                rest: { height: 79, opacity: 1, transition: { delay: 0.2 } },
              }}
              transform="rotate (180 47 39.5)"
              id="right bar"
              x="44"
              width="6"
              height="79"
              fill="#FFED00"
            />
            <motion.rect
              variants={{
                hidden: {
                  width: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
                rest: {
                  opacity: 1,
                  width: 40,
                },
              }}
              id="bottom bar"
              x="5"
              y="73"
              width="40"
              height="6"
              fill="#FFED00"
            />
            <motion.rect
              variants={{
                hidden: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
                rest: { height: 22, opacity: 1 },
              }}
              id="middle bar"
              x="22"
              y="78"
              width="6"
              height="22"
              fill="#FFED00"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
}
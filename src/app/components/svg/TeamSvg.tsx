import { motion } from "framer-motion";
import React from "react";

export default function TeamSvg() {
  return (
    <div>
      <motion.svg

        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='h-10'
        variants={{rest: {opacity: 0.6}, hover: {opacity: 1}}}
      >
        <path
          d="M30.8106 19.6429C33.0296 19.6429 34.8285 21.4417 34.8285 23.6607V34.8196C34.8285 40.2448 30.4304 44.6429 25.0052 44.6429C19.5799 44.6429 15.1819 40.2448 15.1819 34.8196V23.6607C15.1819 21.4417 16.9807 19.6429 19.1997 19.6429H30.8106ZM30.8106 22.3214H19.1997C18.4601 22.3214 17.8604 22.9211 17.8604 23.6607V34.8196C17.8604 38.7655 21.0592 41.9643 25.0052 41.9643C28.9511 41.9643 32.1499 38.7655 32.1499 34.8196V23.6607C32.1499 22.9211 31.5503 22.3214 30.8106 22.3214ZM7.58915 19.6429L15.0114 19.6433C14.3066 20.3779 13.7932 21.2975 13.5513 22.322L7.58915 22.3214C6.84948 22.3214 6.24986 22.9211 6.24986 23.6607V33.0335C6.24986 35.9934 8.64933 38.3929 11.6092 38.3929C12.3965 38.3929 13.1441 38.2231 13.8175 37.9182C14.0557 38.7922 14.3969 39.6248 14.8246 40.4031C13.8407 40.8326 12.7528 41.0714 11.6092 41.0714C7.16999 41.0714 3.57129 37.4727 3.57129 33.0335V23.6607C3.57129 21.4417 5.37014 19.6429 7.58915 19.6429ZM42.4106 19.6429C44.6296 19.6429 46.4284 21.4417 46.4284 23.6607V33.0357C46.4284 37.4737 42.8307 41.0714 38.3927 41.0714C37.2515 41.0714 36.1659 40.8335 35.1827 40.4046L35.2822 40.2239C35.6644 39.4985 35.9721 38.7277 36.1951 37.9217C36.8638 38.2244 37.6086 38.3929 38.3927 38.3929C41.3514 38.3929 43.7499 35.9944 43.7499 33.0357V23.6607C43.7499 22.9211 43.1502 22.3214 42.4106 22.3214L36.459 22.322C36.2172 21.2975 35.7037 20.3779 34.999 19.6433L42.4106 19.6429ZM24.9999 5.35715C28.4516 5.35715 31.2499 8.15537 31.2499 11.6071C31.2499 15.0589 28.4516 17.8571 24.9999 17.8571C21.5481 17.8571 18.7499 15.0589 18.7499 11.6071C18.7499 8.15537 21.5481 5.35715 24.9999 5.35715ZM39.2909 7.14286C42.2496 7.14286 44.648 9.54134 44.648 12.5C44.648 15.4587 42.2496 17.8571 39.2909 17.8571C36.3322 17.8571 33.9338 15.4587 33.9338 12.5C33.9338 9.54134 36.3322 7.14286 39.2909 7.14286ZM10.7088 7.14286C13.6675 7.14286 16.066 9.54134 16.066 12.5C16.066 15.4587 13.6675 17.8571 10.7088 17.8571C7.75015 17.8571 5.35167 15.4587 5.35167 12.5C5.35167 9.54134 7.75015 7.14286 10.7088 7.14286ZM24.9999 8.03572C23.0274 8.03572 21.4284 9.6347 21.4284 11.6071C21.4284 13.5796 23.0274 15.1786 24.9999 15.1786C26.9723 15.1786 28.5713 13.5796 28.5713 11.6071C28.5713 9.6347 26.9723 8.03572 24.9999 8.03572ZM39.2909 9.82143C37.8116 9.82143 36.6123 11.0207 36.6123 12.5C36.6123 13.9793 37.8116 15.1786 39.2909 15.1786C40.7702 15.1786 41.9695 13.9793 41.9695 12.5C41.9695 11.0207 40.7702 9.82143 39.2909 9.82143ZM10.7088 9.82143C9.22948 9.82143 8.03025 11.0207 8.03025 12.5C8.03025 13.9793 9.22948 15.1786 10.7088 15.1786C12.1882 15.1786 13.3874 13.9793 13.3874 12.5C13.3874 11.0207 12.1882 9.82143 10.7088 9.82143Z"
          fill="white"
        />
      </motion.svg>
    </div>
  );
}
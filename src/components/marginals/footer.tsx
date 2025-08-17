import { Typography } from '@/components';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <main className="min-h-screen mt-50 w-full flex flex-col justify-end relative">
      <div className="w-full flex justify-between items-center px-18 pt-6 mb-35">
        <div className=" gap-15 flex items-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 text-black"
          >
            <Instagram className="w-6 h-6 " />
            <Typography.H6
              className="text-[50px] leading-none relative -top-[-5px]"
              style={{ fontSize: '32px' }}
            >
              {' '}
              INSTAGRAM
            </Typography.H6>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 text-black"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <title>X</title>
              <path
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 
             7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 
             20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>
            <Typography.H6
              className="text-[36px] leading-none relative -top-[-5px]"
              style={{ fontSize: '32px' }}
            >
              TWITTER
            </Typography.H6>
          </a>
        </div>

        <div className="flex gap-15 items-center">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-black"
              viewBox="0 0 56.693 56.693"
            >
              <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
              <path
                d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12
      c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z
      M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88
      C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078
      c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179
      c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"
              />
            </svg>

            <Typography.H6
              className="text-[36px] leading-none relative -top-[-5px]"
              style={{ fontSize: '32px' }}
            >
              LINKEDIN
            </Typography.H6>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-black"
              viewBox="0 0 32 32"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997
        c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777
        c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973
        c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139
        c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634
        c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538
        c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292
        c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746
        C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              />
            </svg>

            <Typography.H6
              className="leading-none relative -top-[-5px]"
              style={{ fontSize: '32px' }}
            >
              GITHUB
            </Typography.H6>
          </a>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pb-12 mb-8 relative z-0">
        <div className="relative flex items-center justify-center">
          <div className="flex items-center gap-6 relative -translate-y-13">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[17vw] leading-none">
              Hack
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[17vw] leading-none">
              NITR
            </Typography.Display>
          </div>

          <img
            src="https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png"
            alt="HackNITR Logo Overlay"
            className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-[70%] w-[37vw] pointer-events-none"
          />
        </div>
      </div>

      <div className="absolute bottom-[6%] w-full flex justify-between items-center px-20">
        <div className="flex items-center gap-2">
          <span className="text-[30px] leading-none relative top-[-9px]">
            ©
          </span>
          <Typography.Lead className=" text-black leading-none">
            Copyright HackNITR 2025
          </Typography.Lead>
        </div>

        <Typography.Lead className="text-[30px] text-black">
          Crafted with <span className="text-pink-500">💖</span> by DSC NIT
          Rourkela
        </Typography.Lead>
      </div>
    </main>
  );
}

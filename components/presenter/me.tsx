import { Step, stepClosedCaptions } from '@helpers/step';
import React, { useEffect, useRef } from 'react';

interface MeProps {
  step: Step;
}

const SPEAK_DUR = 0.3;
const SPEAK_START_END = 0.1;
const SMILE_DUR = 0.2;
const DELAY = 4;

export const Me: React.FC<MeProps> = ({ step }) => {
  const startAnimateRef = useRef<SVGAnimationElement>(null);
  const mouthMovement = stepClosedCaptions[step]?.split(' ').length ?? 0;
  const delay = step === 'INTRO_1' || step === 'END_1' ? DELAY : 0;

  useEffect(() => {
    if (step && mouthMovement > 0) {
      startAnimateRef.current?.beginElement();
    }
  }, [step, mouthMovement]);

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_3)">
        <path
          d="M202.36 97.6212C202.36 121.111 215.365 193.693 201.878 210.021C185.995 229.249 137.233 223.046 111.343 223.046C85.4532 223.046 44.8777 229.249 28.9943 210.021C15.5072 193.693 28.9943 121.111 28.9943 97.6212C28.9943 46.4679 67.8035 5 115.677 5C163.551 5 202.36 46.4679 202.36 97.6212Z"
          fill="#393939"
        />
      </g>
      <path
        d="M182 224C182 252.719 190 276 115 276C40 276 48 252.719 48 224C48 195.281 77.9969 172 115 172C152.003 172 182 195.281 182 224Z"
        fill="#2868E1"
      />
      <path
        d="M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828"
        stroke="white"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828"
        stroke="white"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828"
        stroke="white"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828"
        stroke="#A3C3FF"
        strokeLinecap="round"
      />
      <path
        d="M151.5 180.5C151.5 185.671 131.5 192.5 128.5 191C126.783 190.141 118.5 179.5 114.5 179.5C110.5 179.5 101.5 190 99.1754 190.9C96 192.131 76.5 186.671 76.5 181.5C76.5 179.023 97.2599 165.5 113 165.5C128.74 165.5 151.5 178.5 151.5 180.5Z"
        fill="#002A73"
      />
      <path
        d="M132 158C132 168.283 124.985 177.253 114 177.379C103.015 177.506 96 168.283 96 158C96 158 104.059 162.381 114 162.381C123.941 162.381 132 158 132 158Z"
        fill="#FFE6BF"
      />
      <g filter="url(#filter1_d_1_3)">
        <path
          d="M183 92.5C183 133.093 156.5 168.5 115 169C73.5 169.5 47 133.093 47 92.5C47 51.9071 77.4446 19 115 19C152.555 19 183 51.9071 183 92.5Z"
          fill="#FFE6BF"
        />
      </g>
      <path
        d="M108.5 149.283C110.487 150.796 112.309 151.5 115 151.5C117.468 151.5 119.626 150.724 121.5 149.283"
        stroke="#FF8C73"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="115"
        cy="150"
        rx="8"
        ry="1"
        fill="#646464"
        stroke="#FF8C73"
        strokeWidth="2"
        opacity={0}
      >
        <animate
          id="startAnimate"
          attributeName="opacity"
          values="0;1;"
          dur={`${SMILE_DUR}s`}
          begin={`${delay}s`}
          repeatCount={1}
          ref={startAnimateRef}
          fill="freeze"
        />
        <animate
          id="initSpeakAnimate"
          attributeName="ry"
          values="1;3;"
          dur={`${SPEAK_START_END}s`}
          begin="startAnimate.end"
          repeatCount={1}
        />
        <animate
          id="speakAnimate"
          attributeName="ry"
          values="3;7;3;"
          dur={`${SPEAK_DUR}s`}
          begin="initSpeakAnimate.end"
          repeatCount={mouthMovement}
        />
        <animate
          id="endSpeakAnimate"
          attributeName="ry"
          values="3;1;"
          dur={`${SPEAK_START_END}s`}
          begin="speakAnimate.end"
          repeatCount={1}
        />
        <animate
          id="endAnimate"
          attributeName="opacity"
          values="1;0;"
          dur={`${SMILE_DUR}s`}
          begin="endSpeakAnimate.end"
          repeatCount={1}
          fill="freeze"
        />
      </ellipse>
      <g filter="url(#filter2_d_1_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M193.851 93.9395C191.317 51.0091 156.759 17 114.5 17C70.5934 17 35 53.7127 35 99C35 100.684 35.0492 102.356 35.1462 104.015C54.4132 99.9072 80.3879 78.0718 90.1119 50.9557C107.112 75.3639 146.929 92.7897 193.851 93.9395Z"
          fill="#393939"
        />
      </g>
      <circle cx="73.5" cy="136.5" r="11.5" fill="#FFAABE" fillOpacity="0.5" />
      <circle cx="157.5" cy="136.5" r="11.5" fill="#FFAABE" fillOpacity="0.5" />
      <ellipse
        cx="73.098"
        cy="109.731"
        rx="11.5"
        ry="14.5"
        transform="rotate(-6.63361 73.098 109.731)"
        fill="#333333"
      />
      <ellipse
        cx="73.098"
        cy="109.731"
        rx="11.5"
        ry="14.5"
        transform="rotate(-6.63361 73.098 109.731)"
        fill="#333333"
      />
      <ellipse
        cx="73.098"
        cy="109.731"
        rx="11.5"
        ry="14.5"
        transform="rotate(-6.63361 73.098 109.731)"
        fill="#333333"
      />
      <path
        d="M62 94C61.5 94.5 62.5 97.5 63.5 98.5C59.3333 98.5 59 94 58 94.7435C56.5 106 70.6666 106.157 72 99.5C66 98 62.5 93.5 62 94Z"
        fill="#333333"
      />
      <circle cx="68" cy="104" r="4" fill="white" />
      <ellipse
        rx="11.5"
        ry="14.5"
        transform="matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)"
        fill="#333333"
      />
      <ellipse
        rx="11.5"
        ry="14.5"
        transform="matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)"
        fill="#333333"
      />
      <ellipse
        rx="11.5"
        ry="14.5"
        transform="matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)"
        fill="#333333"
      />
      <path
        d="M168.392 94.0386C168.892 94.5386 167.892 97.5386 166.892 98.5386C171.059 98.5386 171.392 94.0386 172.392 94.7821C173.892 106.039 159.726 106.196 158.392 99.5386C164.392 98.0386 167.892 93.5386 168.392 94.0386Z"
        fill="#333333"
      />
      <circle r="4" transform="matrix(-1 0 0 1 162.392 104.039)" fill="white" />
      <path
        d="M111 130C111.359 130.75 112.992 132 114.5 132C116.008 132 117.731 130.75 118 130"
        stroke="#FAD8A3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="155.5" cy="107.5" r="26.5" stroke="#945B19" strokeWidth="4" />
      <circle cx="155.5" cy="107.5" r="26.5" stroke="#945B19" strokeWidth="4" />
      <circle cx="73.5" cy="107.5" r="26.5" stroke="#945B19" strokeWidth="4" />
      <circle cx="73.5" cy="107.5" r="26.5" stroke="#945B19" strokeWidth="4" />
      <path
        d="M100 112.5C100 112.5 107.5 108 114 108C120.5 108 128.5 112.5 128.5 112.5"
        stroke="#945B19"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_d_1_3"
          x="19"
          y="3"
          width="193"
          height="227"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_3"
          x="44"
          y="17"
          width="142"
          height="156.005"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_3"
          x="31"
          y="16"
          width="166.851"
          height="95.0145"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

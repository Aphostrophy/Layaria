import Svg, {Path, Defs, Pattern,Image,Use,SvgProps} from 'react-native-svg';
import React, { useEffect } from 'react';

const HomeIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      {...props}
    >
      <Path
        d="M26.272 11.744l-.002-.002L15.256.728A2.469 2.469 0 0013.5 0a2.47 2.47 0 00-1.758.728L.733 11.736l-.011.011a2.488 2.488 0 00.005 3.51 2.471 2.471 0 001.726.729h.439v8.105A2.912 2.912 0 005.8 27h4.309a.791.791 0 00.79-.791v-6.354c0-.732.596-1.328 1.328-1.328h2.542c.732 0 1.327.596 1.327 1.328v6.354a.79.79 0 00.79.791h4.31a2.912 2.912 0 002.909-2.909v-8.105h.407a2.47 2.47 0 001.758-.728 2.49 2.49 0 00.001-3.514z"
        fill={props.color}
      />
    </Svg>
  )
};

const OrderIcon: React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={21}
      height={27}
      viewBox="0 0 21 27"
      fill="none"
      {...props}
    >
      <Path
        d="M19.88.694a1.13 1.13 0 00-1.23.187L16.88 2.449a.127.127 0 01-.169 0L14.3.293a1.148 1.148 0 00-1.532 0L10.36 2.447a.128.128 0 01-.17 0L7.782.293a1.148 1.148 0 00-1.532 0L3.84 2.449a.128.128 0 01-.17 0L1.897.881A1.14 1.14 0 000 1.74V25.26a1.141 1.141 0 001.9.86l1.772-1.568a.127.127 0 01.168 0l2.41 2.156c.437.39 1.096.39 1.532 0l2.409-2.154a.128.128 0 01.17 0l2.408 2.154c.436.39 1.096.39 1.532 0l2.41-2.156a.128.128 0 01.17 0l1.773 1.568a1.14 1.14 0 001.896-.86V1.74a1.13 1.13 0 00-.67-1.047zM4.225 9.16h6.356a.51.51 0 010 1.021H4.225a.51.51 0 010-1.02zm12.1 8.68h-12.1a.51.51 0 010-1.021h12.1a.51.51 0 010 1.02zm0-3.83h-12.1a.51.51 0 010-1.02h12.1a.51.51 0 010 1.02z"
        fill={props.color}
      />
    </Svg>
  )
};

// const OrderIcon: React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
//   return (
//     <Svg width={21} height={21} fill="none" viewBox="0 0 21 20" {...props}>
//       <Path
//         fill={props.color}
//         d="M6.429 1l.34-.668A.75.75 0 005.68 1h.75zm1.357.692l-.341.668a.75.75 0 00.682 0l-.341-.668zM9.143 1l.341-.668a.75.75 0 00-.682 0l.34.668zm1.354.692l-.34.668a.75.75 0 00.678.002l-.338-.67zM11.87 1l.344-.667a.75.75 0 00-.681-.003l.337.67zm1.344.692l-.343.667a.75.75 0 00.686 0l-.343-.667zM14.562 1l.342-.668a.75.75 0 00-.684 0l.342.668zm1.355.692l-.342.668a.75.75 0 00.68.002l-.338-.67zM17.286 1l.34-.668a.75.75 0 00-.679-.001l.339.669zm1.357.692l-.34.668a.75.75 0 00.681 0l-.34-.668zM20 1h.75a.75.75 0 00-1.09-.668L20 1zm-3.393 18v-.75.75zm-3.393-5.539h.75a.75.75 0 00-.75-.75v.75zm-11.535 0l-.007.75h.007v-.75zM1 14.154h.75v-.007l-.75.007zm8.143-9.75a.75.75 0 100 1.5v-1.5zm8.143 1.5a.75.75 0 000-1.5v1.5zm-5.429 1.961a.75.75 0 100 1.5v-1.5zm5.429 1.5a.75.75 0 000-1.5v1.5zM7.179 13.461V1h-1.5v12.461h1.5zM6.088 1.668l1.357.692.682-1.336L6.769.332l-.681 1.336zm2.039.692l1.357-.692L8.802.332l-1.357.692.682 1.336zm.675-.692l1.354.692.683-1.336L9.484.332l-.682 1.336zm2.033.694l1.373-.692-.675-1.34-1.373.693.675 1.339zm.692-.695l1.344.692.687-1.333-1.344-.693-.687 1.334zm2.03.692l1.348-.692L14.22.333l-1.348.692.685 1.334zm.664-.691l1.354.692.683-1.335-1.354-.693-.683 1.336zm2.034.694l1.37-.693-.678-1.338-1.369.692.677 1.339zm.69-.694l1.358.692.681-1.336-1.358-.692-.681 1.336zm2.04.692l1.356-.692-.682-1.336-1.357.692.682 1.336zm.265 13.179c0 .723-.282 1.415-.78 1.922l1.072 1.05a4.247 4.247 0 001.208-2.972h-1.5zm-.78 1.922a2.609 2.609 0 01-1.863.789v1.5a4.109 4.109 0 002.935-1.239l-1.071-1.05zm-1.863.789a2.608 2.608 0 01-1.863-.789l-1.072 1.05a4.109 4.109 0 002.935 1.239v-1.5zm-1.863-.789a2.747 2.747 0 01-.78-1.922h-1.5c0 1.112.433 2.181 1.208 2.972l1.072-1.05zm-.78-1.922V13.46h-1.5v2.078h1.5zm-.75-2.828H1.68v1.5h11.535v-1.5zm-11.529 0a1.41 1.41 0 00-.556.11l.578 1.384a.088.088 0 01-.035.006l.013-1.5zm-.556.11a1.423 1.423 0 00-.468.316l1.072 1.05a.078.078 0 01-.026.018l-.578-1.385zm-.468.316a1.437 1.437 0 00-.307.472l1.392.558a.062.062 0 01-.013.02L.66 13.137zm-.307.472c-.07.175-.106.363-.104.551l1.5-.013a.051.051 0 01-.004.02l-1.392-.558zm-.104.545c0 1.36.059 2.759.619 3.813a3.09 3.09 0 001.34 1.332c.6.309 1.328.451 2.184.451v-1.5c-.698 0-1.171-.117-1.499-.285a1.592 1.592 0 01-.7-.701c-.36-.677-.444-1.701-.444-3.11H.25zm4.143 5.596h12.214v-1.5H4.393v1.5zm4.75-13.846h8.143v-1.5H9.143v1.5zm2.714 3.461h5.429v-1.5h-5.429v1.5zM19.25 1v14.539h1.5V1h-1.5z"
//       />
//     </Svg>
//   );
// };

const ChatIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      {...props}
    >
      <Path
        d="M24.297 23.159c3.981-4.592 3.492-11.516-.999-15.535 2.307 8.084-3.793 16.16-12.197 16.16-.162 0 .814.005-3.032-.019A11.06 11.06 0 0015.9 27l10.313-.053c.703-.003 1.053-.859.552-1.354l-2.467-2.434z"
        fill={props.color}
      />
      <Path
        d="M11.1 22.201c6.121 0 11.1-4.98 11.1-11.1C22.2 4.98 17.222 0 11.1 0 4.98 0 0 4.98 0 11.1c0 2.695.955 5.244 2.703 7.26L.236 20.794c-.5.494-.154 1.351.552 1.354l10.313.053zM6.382 7.171h9.492a.791.791 0 010 1.583H6.38a.791.791 0 010-1.582zm0 3.165h9.492a.791.791 0 010 1.582H6.38a.791.791 0 010-1.582zm-.79 3.955c0-.437.353-.791.79-.791h9.492a.791.791 0 010 1.582H6.38a.791.791 0 01-.79-.791z"
        fill={props.color}
      />
    </Svg>
  )
}

const ProfileIcon :React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M23.623 23.807c-.05-3.226-1.055-6.16-2.843-8.283-1.776-2.111-4.184-3.274-6.78-3.274s-5.004 1.162-6.78 3.274c-1.786 2.121-2.79 5.05-2.843 8.273 1.01.506 5.187 2.453 9.623 2.453 4.797 0 8.687-1.936 9.623-2.443zM14 11.375a4.812 4.812 0 100-9.625 4.812 4.812 0 000 9.625z"
        fill={props.color}
      />
    </Svg>
  )
}

const SearchIcon :React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.841 12.075L9.144 8.38a5.12 5.12 0 001.148-3.233A5.152 5.152 0 005.146 0 5.152 5.152 0 000 5.146a5.152 5.152 0 005.146 5.146 5.12 5.12 0 003.233-1.148l3.696 3.697a.54.54 0 00.766 0 .541.541 0 000-.766zM5.146 9.208a4.067 4.067 0 01-4.063-4.062 4.067 4.067 0 014.063-4.063 4.067 4.067 0 014.062 4.063 4.067 4.067 0 01-4.062 4.062z"
        fill={props.color}
      />
    </Svg>
  )
}
export {HomeIcon,OrderIcon,ChatIcon,ProfileIcon,SearchIcon};

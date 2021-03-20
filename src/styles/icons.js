import Svg, {Path, Defs, Pattern,Image,Use,SvgProps,G,ClipPath} from 'react-native-svg';
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
};

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
};

const ProfileCardIcon :React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.124 10.203c-.021-1.383-.452-2.64-1.218-3.55C8.145 5.748 7.113 5.25 6 5.25c-1.113 0-2.145.498-2.906 1.403-.765.91-1.196 2.165-1.218 3.546.433.216 2.223 1.051 4.124 1.051 2.056 0 3.723-.83 4.124-1.047zM6 4.875A2.062 2.062 0 106 .75a2.062 2.062 0 000 4.125z"
        fill="#2196F3"
      />
    </Svg>
  )
};

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
};

const LocationIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M7.96 1.712A3.394 3.394 0 004.924.001 3.394 3.394 0 002.04 1.712a3.481 3.481 0 00-.045 3.44l2.48 4.54A.597.597 0 005 10a.597.597 0 00.523-.304l.003-.006 2.48-4.539a3.481 3.481 0 00-.045-3.44zM5 4.532a1.408 1.408 0 010-2.813c.775 0 1.406.63 1.406 1.406 0 .775-.63 1.406-1.406 1.406z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h10v10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
};

const ActivityIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
    width={7}
    height={11}
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.886 6.984c0-.468.104-.854.312-1.157.217-.312.529-.65.936-1.014.312-.277.542-.516.689-.715a1.14 1.14 0 00.234-.702c0-.364-.147-.659-.442-.884-.295-.225-.689-.338-1.183-.338-.936 0-1.642.334-2.119 1.001L.052 2.356a3.601 3.601 0 011.443-1.17C2.085.909 2.778.77 3.575.77c.97 0 1.742.212 2.314.637.58.416.871.992.871 1.729 0 .355-.06.667-.182.936a2.558 2.558 0 01-.416.689 9.29 9.29 0 01-.65.637 5.33 5.33 0 00-.741.78 1.38 1.38 0 00-.234.806H2.886zm.832 3.107c-.303 0-.555-.095-.754-.286-.19-.2-.286-.442-.286-.728a.97.97 0 01.286-.715c.2-.19.45-.286.754-.286.295 0 .537.095.728.286.2.19.299.429.299.715a.99.99 0 01-.299.728.986.986 0 01-.728.286z"
      fill={props.color}
    />
  </Svg>
  )
};

const ParticipantIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.402 9.609H14.01c.141.388.219.808.219 1.245v5.26c0 .183-.032.358-.09.52h2.302c.86 0 1.559-.699 1.559-1.559v-2.868a2.601 2.601 0 00-2.598-2.598zM3.771 10.854c0-.437.078-.857.22-1.245H2.597A2.601 2.601 0 000 12.207v2.868c0 .86.7 1.56 1.559 1.56H3.86a1.552 1.552 0 01-.089-.52v-5.261zM10.591 8.255H7.41a2.601 2.601 0 00-2.599 2.599v5.26c0 .288.233.52.52.52h7.34a.52.52 0 00.52-.52v-5.26a2.601 2.601 0 00-2.599-2.599zM9 1.365A3.128 3.128 0 005.875 4.49a3.127 3.127 0 004.652 2.726 3.127 3.127 0 001.598-2.726A3.128 3.128 0 009 1.365z"
        fill={props.color}
      />
      <Path
        d="M3.513 4.278a2.34 2.34 0 00-2.337 2.337 2.34 2.34 0 003.258 2.148c.489-.21.892-.583 1.141-1.05a2.34 2.34 0 00-2.062-3.435zM14.487 4.278a2.34 2.34 0 00-2.062 3.435c.25.467.652.84 1.141 1.05a2.34 2.34 0 003.258-2.148 2.34 2.34 0 00-2.337-2.337z"
        fill={props.color}
      />
    </Svg>
  )
};

const CalendarIcon : React.FC<{props: SvgProps}> = ({props}: {props: SvgProps}) => {
  return(
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.172.781h.469V0h.78v.781h5.157V0h.781v.781h.47C9.473.781 10 1.307 10 1.953v6.875C10 9.474 9.474 10 8.828 10H1.172A1.173 1.173 0 010 8.828V1.953C0 1.307.526.781 1.172.781zm-.39 8.047c0 .216.174.39.39.39h7.656c.216 0 .39-.174.39-.39V3.672H.782v5.156zm0-5.937h8.437v-.938a.391.391 0 00-.39-.39h-.47v.78h-.78v-.78H2.421v.78H1.64v-.78h-.47a.391.391 0 00-.39.39v.938z"
        fill={props.color}
      />
      <Path
        d="M7.734 4.492h.782v.781h-.782v-.78zM6.172 4.492h.781v.781h-.781v-.78zM4.61 4.492h.78v.781h-.78v-.78zM3.047 4.492h.781v.781h-.781v-.78zM1.484 4.492h.782v.781h-.782v-.78zM7.734 6.055h.782v.78h-.782v-.78zM6.172 6.055h.781v.78h-.781v-.78zM4.61 6.055h.78v.78h-.78v-.78zM3.047 6.055h.781v.78h-.781v-.78zM7.734 7.617h.782v.781h-.782v-.78zM6.172 7.617h.781v.781h-.781v-.78zM4.61 7.617h.78v.781h-.78v-.78zM3.047 7.617h.781v.781h-.781v-.78zM1.484 6.055h.782v.78h-.782v-.78z"
        fill={props.color}
      />
    </Svg>
  )
};


export {HomeIcon,OrderIcon,ChatIcon,ProfileIcon,SearchIcon,ActivityIcon,LocationIcon,ParticipantIcon,CalendarIcon,ProfileCardIcon};

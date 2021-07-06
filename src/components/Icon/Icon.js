export default function Icon(props) {
  const { className = "", color = "#606060", name } = props;
  switch (name) {
    case "HOME":
      return (
        <svg
          width="24"
          height="24"
          {...className}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
          </g>
        </svg>
      );
    case "EXPLORE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"
            />
          </g>
        </svg>
      );
    case "SUBSCRIPTION":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
            />
          </g>
        </svg>
      );
    case "LIBRARY":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill={color}
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"
            />
          </g>
        </svg>
      );
    case "HISTORY":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5a6.42 6.42 0 016.42-6.42c3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"
            />
          </g>
        </svg>
      );
    case "VIDEO":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 00-1.8 1.8v12.8a1.8 1.8 0 001.8 1.9h12.8a1.8 1.8 0 001.9-1.9V5.6a1.8 1.8 0 00-1.9-1.8z"
            />
            <path fill={color} d="M10.2 9v6.5l5-3.2-5-3.2z" />
          </g>
        </svg>
      );
    case "CLOCK":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
            />
          </g>
        </svg>
      );
    case "LIKE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"
            />
          </g>
        </svg>
      );
    case "MENU_GUIDE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </g>
        </svg>
      );
    case "SEARCH":
      return (
        <svg width="20" height="20" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </g>
        </svg>
      );
    case "MICROPHONE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
            />
          </g>
        </svg>
      );
    case "CREATE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
            />
          </g>
        </svg>
      );
    case "APPS":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
            />
          </g>
        </svg>
      );
    case "NOTIFICATION_FILLED":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </g>
        </svg>
      );
    case "NOTIFICATION_1":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill={color}
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
            />
          </g>
        </svg>
      );
    case "NOTIFICATION_2":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"
            />
          </g>
        </svg>
      );
    case "NOTIFICATION_3":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill={color}
              d="M12.1 21.5c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm5.75-3H4.1v-1l2-2v-5c0-1.212.244-2.352.702-3.327L4 4.3 5.3 3l3.093 3.172c.417.416.907.928.907.928l11.8 12.1-1.3 1.3-1.95-2zM8.376 8.788A5.581 5.581 0 008.1 10.5v6h7.799L8.377 8.788zM18.1 13.7l-2-2.1v-1.1c0-2.5-1.5-4.5-4-4.5-.5 0-.9.1-1.3.2L9.3 4.7c.4-.2.8-.4 1.3-.5v-.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.7c2.9.7 4.5 3.2 4.5 6.3v3.2z"
            />
          </g>
        </svg>
      );

    case "PROFILE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 10.636c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1.773c-3.666 0-6.545 1.772-6.545 3.409A7.811 7.811 0 0012 19.363a7.811 7.811 0 006.545-3.545c0-1.637-2.879-3.41-6.545-3.41z"
            />
          </g>
        </svg>
      );
    case "CHECK_CIRCLE_THICK":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
            ></path>
          </g>
        </svg>
      );
    case "MENU":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </g>
        </svg>
      );
    case "DISLIKE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
            />
          </g>
        </svg>
      );
    case "SHARE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M14 9V3l8 9-8 9v-6c-5.56 0-9.22 2.03-12 6 1.11-5.67 4.22-10.87 12-12z"
            />
          </g>
        </svg>
      );
    case "SAVE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
            />
          </g>
        </svg>
      );
    case "REPORT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path fill={color} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
          </g>
        </svg>
      );
    case "LOGO":
      return (
        <svg viewBox="0 0 200 60">
          <g>
            <g>
              <path
                fill="red"
                d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"
              />
              <path fill="#FFF" d="M26.6 39.43L42.93 30 26.6 20.57z" />
            </g>
            <g>
              <g>
                <path d="M92.69 48.03c-1.24-.84-2.13-2.14-2.65-3.91s-.79-4.12-.79-7.06v-4c0-2.97.3-5.35.9-7.15.6-1.8 1.54-3.11 2.81-3.93 1.27-.82 2.94-1.24 5.01-1.24 2.04 0 3.67.42 4.9 1.26 1.23.84 2.13 2.15 2.7 3.93.57 1.78.85 4.16.85 7.12v4c0 2.94-.28 5.3-.83 7.08-.55 1.78-1.45 3.09-2.7 3.91-1.24.82-2.93 1.24-5.06 1.24-2.18.01-3.9-.41-5.14-1.25zm6.97-4.32c.34-.9.52-2.37.52-4.4v-8.59c0-1.98-.17-3.42-.52-4.34-.34-.91-.95-1.37-1.82-1.37-.84 0-1.43.46-1.78 1.37-.34.91-.52 2.36-.52 4.34v8.59c0 2.04.16 3.51.49 4.4.33.9.93 1.35 1.8 1.35.88 0 1.48-.45 1.83-1.35zM188.16 37.13v1.39c0 1.77.05 3.09.16 3.98.1.88.32 1.53.65 1.93.33.4.84.61 1.53.61.93 0 1.57-.36 1.91-1.08.34-.72.53-1.92.56-3.6l5.35.31c.03.24.04.57.04.99 0 2.55-.7 4.45-2.09 5.71-1.39 1.26-3.36 1.89-5.91 1.89-3.06 0-5.2-.96-6.43-2.88-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14.64-7.15 1.91-9.06 1.27-1.9 3.45-2.85 6.54-2.85 2.13 0 3.76.39 4.9 1.17 1.14.78 1.94 1.99 2.41 3.64.46 1.65.7 3.93.7 6.83v4.72h-10.39zm.79-11.6c-.31.39-.52 1.03-.63 1.91-.11.88-.16 2.23-.16 4.02v1.98h4.54v-1.98c0-1.77-.06-3.11-.18-4.02-.12-.91-.34-1.56-.65-1.93-.31-.37-.8-.56-1.46-.56-.66-.01-1.15.19-1.46.58zM77.59 36.61l-7.06-25.49h6.16l2.47 11.55c.63 2.85 1.09 5.27 1.39 7.28h.18c.21-1.44.67-3.85 1.39-7.24l2.56-11.6h6.16l-7.14 25.5v12.23h-6.11V36.61zM126.45 21.28v27.55h-4.85l-.54-3.37h-.13c-1.32 2.55-3.3 3.82-5.93 3.82-1.83 0-3.18-.6-4.05-1.8-.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0 1.23.13 2.11.4 2.63s.72.79 1.35.79c.54 0 1.06-.16 1.55-.49.49-.33.86-.75 1.1-1.26v-21.9h6.2zM158.27 21.28v27.55h-4.85l-.54-3.37h-.13c-1.32 2.55-3.3 3.82-5.93 3.82-1.83 0-3.18-.6-4.05-1.8-.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0 1.23.13 2.11.4 2.63s.72.79 1.35.79c.54 0 1.06-.16 1.55-.49.49-.33.86-.75 1.1-1.26v-21.9h6.2z" />
                <path d="M143.31 16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38v4.99zM178.8 25.69c-.38-1.74-.98-3-1.82-3.78-.84-.78-1.99-1.17-3.46-1.17-1.14 0-2.2.32-3.19.97-.99.64-1.75 1.49-2.29 2.54h-.05V9.73h-5.98v39.11h5.12l.63-2.61h.13c.48.93 1.2 1.66 2.16 2.2.96.54 2.02.81 3.19.81 2.1 0 3.64-.97 4.63-2.9.99-1.93 1.48-4.95 1.48-9.06v-4.36c.01-3.08-.18-5.49-.55-7.23zm-5.69 11.24c0 2.01-.08 3.58-.25 4.72-.16 1.14-.44 1.95-.83 2.43-.39.48-.91.72-1.57.72-.51 0-.98-.12-1.42-.36-.43-.24-.79-.6-1.06-1.08V27.71c.21-.75.57-1.36 1.08-1.84.51-.48 1.06-.72 1.66-.72.63 0 1.12.25 1.46.74.34.49.58 1.33.72 2.49.13 1.17.2 2.83.2 4.99v3.56z" />
              </g>
            </g>
          </g>
        </svg>
      );
    case "DROPDOWN_MENU":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </g>
        </svg>
      );
    case "PLAY":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path fill={color} d="M8 5v14l11-7z" />
          </g>
        </svg>
      );
    case "CHEVRON_UP":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
            />
          </g>
        </svg>
      );
    case "LOOP":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
            />
          </g>
        </svg>
      );
    case "SHUFFLE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
            />
          </g>
        </svg>
      );
    case "SAVE_PLAYLIST":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
            />
          </g>
        </svg>
      );
    case "ARROW_LEFT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </g>
        </svg>
      );
    case "ARROW_RIGHT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </g>
        </svg>
      );
    case "PLAY_ALL":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"
            />
          </g>
        </svg>
      );
    case "QUEUE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M9 10h9v2H9v-2zM6 6h12v2H6V6zm6 8h6v2h-6v-2zm-6-2v6l4-3-4-3z"
            />
          </g>
        </svg>
      );
    case "NOT_ALLOWED":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill={color}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
            />
          </g>
        </svg>
      );
    case "MINUS_CIRCLE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </g>
        </svg>
      );
    case "PLAY_PLAYLIST":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <path
            fill={color}
            d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"
          />
        </svg>
      );
    case "MIC":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
            />
          </g>
        </svg>
      );
    case "CLOSE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </g>
        </svg>
      );
    case "BACK_ARROW":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            />
          </g>
        </svg>
      );
    case "CLEAR":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </g>
        </svg>
      );
    case "PAUSE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              fill={color}
              d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
            />
          </g>
        </svg>
      );
    case "SETTING":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
            />
          </g>
        </svg>
      );
    case "PLUS":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            />
          </g>
        </svg>
      );
    case "YOUTUBE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
            />
          </g>
        </svg>
      );
    case "LIVE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="m16.94 6.91-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45A9.422 9.422 0 0 1 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45 4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"
            />
            <circle cx="12" cy="12" r="3" fill={color} />
          </g>
        </svg>
      );
    case "HELP":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
            />
          </g>
        </svg>
      );
    case "POST_COMMENTS":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill={color}
              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
            />
          </g>
        </svg>
      );
    case "APPEARANCE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M8.485 3.515 12 0l3.515 3.515h4.97v4.97L24 12l-3.515 3.515v4.97h-4.97L12 24l-3.515-3.515h-4.97v-4.97L0 12l3.515-3.515v-4.97h4.97zm3.242 14.349c3.389 0 6.137-2.613 6.137-5.835s-2.748-5.835-6.137-5.835c-.653 0-1.562.202-2.727.606 1.532 1.578 2.298 3.321 2.298 5.229s-.853 3.607-2.56 5.098c1.27.491 2.265.737 2.989.737z"
            />
          </g>
        </svg>
      );
    case "LANGUAGE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"
            />
          </g>
        </svg>
      );
    case "LOCATION":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
            />
          </g>
        </svg>
      );
    case "YOUR_DATA":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="m12 1 9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zM7.7 15.1A5.3 5.3 0 0 1 12 6.7a5.3 5.3 0 0 1 4.3 8.4c-.6-1.1-3-1.7-4.3-1.7-1.3 0-3.7.6-4.3 1.7zM12 8.3a2.2 2.2 0 0 0-2.2 2.2c0 1.2 1 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0-2.6A6.3 6.3 0 0 0 5.7 12a6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3A6.3 6.3 0 0 0 12 5.7z"
            />
          </g>
        </svg>
      );
    case "FEEDBACK":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill={color}
              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
            />
          </g>
        </svg>
      );
    case "KEYBOARD":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
            ></path>
          </g>
        </svg>
      );
    case "YT_TV":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill="red"
              d="M6 18h12v1H6v-1zM22 6.2v9.6c0 .66-.54 1.2-1.2 1.2H3.2c-.66 0-1.2-.54-1.2-1.2V6.2C2 5.54 2.54 5 3.2 5h17.6c.66 0 1.2.54 1.2 1.2z"
            />
            <path fill="#FFF" d="m15 11-5-2.65v5.3z" />
          </g>
        </svg>
      );
    case "YT_MUSIC":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <circle fill="red" cx="12" cy="12" r="10" />
            <path fill="#FFF" d="M10 14.65v-5.3L15 12z" />
            <path
              fill="#FFF"
              d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
            />
          </g>
        </svg>
      );
    case "YT_KIDS":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill="red"
              d="M21.39 13.19v-.22c-.01-.86-.5-5-.78-5.74-.32-.85-.76-1.5-1.31-1.91-.9-.67-1.66-.82-2.6-.84h-.02c-.4 0-3.01.32-5.2.62-2.2.3-4.95.7-5.6.94-.9.33-1.62.77-2.19 1.33-1.05 1.04-1.18 2.11-1.04 3.51.1 1.09.69 5.37 1.02 6.35.45 1.32 1.33 2.12 2.47 2.24.28.03.55.05.82.05 1 0 1.8-.21 2.72-.46 1.45-.39 3.25-.87 6.97-.87h.11c.91 0 3.14-.2 4.16-2.07.52-1 .49-2.21.47-2.93z"
            />
            <path d="M21.99 13.26c0-.08 0-.16-.01-.24-.01-.92-.54-5.32-.83-6.11-.34-.91-.81-1.59-1.4-2.03-.94-.71-1.76-.86-2.75-.88h-.02c-.43 0-3.21.34-5.54.66s-5.25.75-5.95 1c-.96.35-1.73.82-2.33 1.42-1.12 1.1-1.25 2.25-1.11 3.74.11 1.16.73 5.71 1.08 6.75.48 1.41 1.41 2.25 2.63 2.38.3.03.58.05.87.05 1.07 0 1.91-.23 2.89-.49 1.54-.41 3.46-.93 7.41-.93H17.05c.97 0 3.34-.21 4.42-2.2.57-1.06.54-2.35.52-3.12zm-1.4 2.65c-.82 1.51-2.75 1.68-3.56 1.68h-.1c-4.09 0-6.07.53-7.67.96-.95.25-1.7.45-2.63.45-.25 0-.5-.01-.76-.04-1.04-.11-1.54-.99-1.79-1.71-.3-.88-.91-5.21-1.04-6.53-.14-1.47.06-2.18.82-2.93.5-.5 1.15-.89 1.97-1.19.17-.06 1.1-.32 5.74-.95 2.63-.36 5.07-.64 5.42-.65.83.02 1.43.13 2.17.69.43.32.79.86 1.06 1.58.22.58.76 4.78.77 5.77l.01.25c.01.67.04 1.79-.41 2.62z" />
            <path d="M11.59 14.76c-.48.36-.8.45-1.01.45a.54.54 0 0 1-.3-.08c-.34-.18-.42-.61-.5-1.2l-.01-.1c-.04-.31-.26-2.1-.38-3.16l-.09-.73c-.04-.28-.1-.75.24-1 .32-.23.75-.09.96-.03.53.17 3.6 1.23 4.59 1.73.21.09.67.28.68.83.01.5-.38.74-.53.82l-3.65 2.47z" />
            <path
              fill="#FFF"
              d="M10.3 9.89s.5 4.08.51 4.19l3.79-2.58c-.89-.43-3.53-1.36-4.3-1.61z"
            />
          </g>
        </svg>
      );
    case "YT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <g fill="none" fillRule="evenodd">
              <path d="M1 1h21.77v22H1z" />
              <g fillRule="nonzero">
                <path
                  fill="red"
                  d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                />
                <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1" />
                <path
                  fill="#000"
                  fillOpacity=".12"
                  d="m9.68 8.88 5.13 3.48.73-.38"
                />
                <path
                  fill="#FFF"
                  fillOpacity=".2"
                  d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                />
                <path
                  fill="#3E2723"
                  fillOpacity=".2"
                  d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                />
                <path
                  fill="#FFF"
                  fillOpacity=".2"
                  d="M9.68 15.08v.1l5.84-3.08v-.12"
                />
                <path
                  fill="#3E2723"
                  fillOpacity=".2"
                  d="M9.68 8.9v-.13l5.84 3.1v.1"
                />
                <path
                  fill="url(#a)"
                  fillOpacity=".1"
                  d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                  transform="translate(1 4.208)"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case "SIGN_OUT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            />
          </g>
        </svg>
      );
    case "PROFILE_SQUARE":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </g>
        </svg>
      );
    case "DOLLAR":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </g>
        </svg>
      );
    case "YT_STUDIO":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM10 15V9l5 3-5 3z"
            />
          </g>
        </svg>
      );
    case "SWITCH_ACCOUNT":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              fill={color}
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12zm-3 5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15z"
            />
          </g>
        </svg>
      );
    case "UPLOAD_VIDEO":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path
              d="M19 4H5a2.15 2.15 0 00-2 2v12a2.15 2.15 0 002 2h14a2.15 2.15 0 002-2V6a2.15 2.15 0 00-2-2zM5 18h14V6H5z"
              fill="#6f6f6f"
              fillRule="evenodd"
            />
            <path d="M15 12l-5-4v8z" fill="#f80000" fillRule="evenodd" />
          </g>
        </svg>
      );
    case "LIVE_RED":
      return (
        <svg width="24" height="24" {...className} viewBox="0 0 24 24">
          <g>
            <path d="m16.94 6.91-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45A9.422 9.422 0 0 1 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45 4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z" />
            <circle cx="12" cy="12" r="3" fill={color} />
          </g>
        </svg>
      );
    default:
      return <div />;
  }
}

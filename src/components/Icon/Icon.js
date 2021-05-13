import React from "react";

export default function Icon(props) {
  const { className = "", color = "#606060", name } = props;
  switch (name) {
    case "HOME":
      return (
        <svg
          width="24"
          height="24"
          className={className}
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="24" height="24" className={className} viewBox="0 0 24 24">
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
        <svg width="20" height="20" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="32" height="32" viewBox="0 0 24 24" className={className}>
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
        <svg viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <g>
            <path
              fill={color}
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </g>
        </svg>
      );
    case "LIKE_VIDEO":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <g>
            <path
              fill={color}
              d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
            />
          </g>
        </svg>
      );
    case "SHARE":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <g>
            <path fill={color} d="M8 5v14l11-7z" />
          </g>
        </svg>
      );
    case "CHEVRON_UP":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
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
        <svg viewBox="0 0 24 24" className={className}>
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
        <svg viewBox="0 0 24 24" className={className}>
          <g>
            <path
              fill={color}
              d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </g>
        </svg>
      );

    default:
      return <div />;
  }
}

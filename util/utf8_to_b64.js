/* eslint-disable camelcase */
export function utf8_to_b64(str) {
  let hash;
  if (typeof window !== "undefined") {
    hash = window.btoa(unescape(encodeURIComponent(str)));
  }
  return hash;
}

//   export function b64_to_utf8(str) {
//     return decodeURIComponent(escape(window.atob(str)))
//   }

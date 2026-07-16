const paths = {
  broom: <><path d="M30 8l10 10"/><path d="M27 11l10 10"/><path d="M13 39l16-16"/><path d="M24 28l-8 8c-3 3-7 3-9 1l15-15"/><path d="M36 8l4-4"/><path d="M39 15h5"/><path d="M29 5V1"/></>,
  linen: <><rect x="9" y="12" width="30" height="24" rx="4"/><path d="M14 17h20"/><path d="M14 24h20"/><path d="M14 31h14"/></>,
  laundry: <><rect x="11" y="7" width="26" height="34" rx="5"/><path d="M17 14h10"/><circle cx="30" cy="14" r="2"/><circle cx="24" cy="29" r="8"/><path d="M18 30c4 3 9 3 13 0"/></>,
  supply: <><path d="M12 17h24l-2 23H14z"/><path d="M18 17a6 6 0 0112 0"/><path d="M18 26h12"/><path d="M18 32h8"/></>,
  tool: <><path d="M30 7a10 10 0 00-12 12L7 30l11 11 11-11A10 10 0 0030 7z"/><path d="M28 12l8 8"/><path d="M12 31l5 5"/></>,
  calendar: <><rect x="8" y="10" width="32" height="30" rx="5"/><path d="M16 6v8M32 6v8M8 20h32"/><path d="M16 27h5M27 27h5M16 34h5"/></>,
  checklist: <><rect x="10" y="7" width="28" height="34" rx="5"/><path d="M17 18l3 3 6-7"/><path d="M17 31l3 3 6-7"/><path d="M29 19h4M29 32h4"/></>,
  receipt: <><path d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path d="M18 17h12M18 24h12M18 31h7"/></>,
  alert: <><path d="M24 6l18 32H6z"/><path d="M24 17v10M24 33h.01"/></>,
  key: <><circle cx="17" cy="24" r="8"/><path d="M25 24h17M34 24v6M39 24v5"/></>,
};
export default function Icon({ name }) {
  return <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">{paths[name]}</svg>;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_EMAIL, CURRENT, LINKS, NAV_ITEMS, type NavItem } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/** Desktop item: the label is a link, the chevron beside it opens the year menu. */
function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLLIElement>(null);
  const active = isActive(pathname, item.href);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        (wrapRef.current?.querySelector(".nav__toggle") as HTMLButtonElement | null)?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <li
      className="nav__item"
      ref={wrapRef}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        className="nav__link"
        aria-current={pathname === item.href ? "page" : undefined}
        data-active={active ? "true" : undefined}
      >
        {item.label}
      </Link>
      {item.children && (
        <>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name="chevron" />
            <span className="visually-hidden">{item.label} seasons</span>
          </button>
          <ul className="nav__menu" id={menuId} hidden={!open}>
            {item.children.map((child) => (
              <li key={child.href + child.label}>
                <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined}>
                  <span>{child.label}</span>
                  {child.note && <small className={child.open ? "open" : undefined}>{child.note}</small>}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const menuRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const d = menuRef.current;
    if (!d) return;
    if (menuOpen && !d.open) d.showModal();
    if (!menuOpen && d.open) d.close();
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const register = (
    <a className="btn btn--primary btn--small" href={LINKS.campRegistration} target="_blank" rel="noopener noreferrer">
      <span>Register for {CURRENT.campYear} camp</span>
      <span className="visually-hidden"> (opens a Google Form in a new tab)</span>
    </a>
  );

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link href="/" className="brand" aria-label="BizBuzz NFP home">
          <Image src="/logo.png" alt="" width={40} height={40} priority />
          <span className="brand__word">BizBuzz</span>
          <span className="brand__nfp">NFP</span>
        </Link>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <NavEntry key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        <div className="site-header__cta site-header__cta--wide">{register}</div>
        <div className="site-header__cta site-header__cta--compact">
          <a className="btn btn--primary btn--small" href={LINKS.campRegistration} target="_blank" rel="noopener noreferrer">
            <span>Register</span>
            <span className="visually-hidden"> for the {CURRENT.campYear} camp (opens a Google Form in a new tab)</span>
          </a>
        </div>

        <button type="button" className="menu-button" aria-haspopup="dialog" onClick={() => setMenuOpen(true)}>
          <Icon name="menu" />
          <span>Menu</span>
        </button>
      </div>

      <dialog
        ref={menuRef}
        className="mobile-menu"
        aria-label="Menu"
        onClose={() => setMenuOpen(false)}
        onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
      >
        <div className="mobile-menu__bar">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <Image src="/logo.png" alt="" width={40} height={40} />
            <span className="brand__word">BizBuzz</span>
            <span className="brand__nfp">NFP</span>
          </Link>
          <button type="button" className="menu-button" onClick={() => setMenuOpen(false)} autoFocus>
            <Icon name="close" />
            <span>Close</span>
          </button>
        </div>
        <nav className="mobile-menu__body" aria-label="Main">
          <ul className="mobile-menu__list">
            <li>
              <Link href="/" className="mobile-menu__link" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-menu__link"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mobile-menu__sub">
                    {item.children
                      .filter((c) => c.href !== item.href)
                      .map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/seasons" className="mobile-menu__link" aria-current={pathname === "/seasons" ? "page" : undefined}>
                Seasons
              </Link>
            </li>
          </ul>
          <div className="mobile-menu__foot">
            <a className="btn btn--primary btn--block" href={LINKS.campRegistration} target="_blank" rel="noopener noreferrer">
              <span>Register for the {CURRENT.campYear} camp</span>
              <Icon name="external" />
              <span className="visually-hidden"> (opens a Google Form in a new tab)</span>
            </a>
            <a className="btn btn--outline btn--block" href={`mailto:${CONTACT_EMAIL}`}>
              <span>Email {CONTACT_EMAIL}</span>
            </a>
          </div>
        </nav>
      </dialog>
    </header>
  );
}

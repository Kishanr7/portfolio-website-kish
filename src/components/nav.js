import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  height: var(--header-height);
  border-bottom: 1px solid var(--border);
  background: rgba(247, 246, 242, 0.9);
  backdrop-filter: blur(18px);

  .inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: inline-grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 1px solid var(--border-strong);
    border-radius: 50%;
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 13px;
    transition: background var(--transition), color var(--transition);
  }

  .brand:hover {
    background: var(--mint-300);
    color: #fff;
  }

  .desktop-links {
    display: flex;
    align-items: center;
    gap: 28px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .desktop-links a {
    color: var(--sage-300);
    font-family: var(--font-mono);
    font-size: 12px;
    transition: color var(--transition);
  }

  .desktop-links a:hover {
    color: var(--mint-300);
  }
  .desktop-links .resume {
    color: var(--cream-100);
  }

  .desktop-links .resume::after {
    content: 'update pending';
    margin-left: 8px;
    color: var(--amber-300);
    font-size: 9px;
    text-transform: uppercase;
  }

  .menu-button {
    display: none;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: var(--ink-850);
    color: var(--cream-50);
    cursor: pointer;
  }

  .menu-button span,
  .menu-button span::before,
  .menu-button span::after {
    display: block;
    width: 18px;
    height: 1px;
    background: currentColor;
    content: '';
    transition: transform var(--transition);
  }

  .menu-button span::before {
    transform: translateY(-6px);
  }
  .menu-button span::after {
    transform: translateY(5px);
  }

  .menu-button.open span {
    background: transparent;
  }
  .menu-button.open span::before {
    transform: translateY(1px) rotate(45deg);
  }
  .menu-button.open span::after {
    transform: rotate(-45deg);
  }

  .mobile-panel {
    display: none;
  }

  @media (max-width: 860px) {
    .desktop-links {
      display: none;
    }
    .menu-button {
      display: grid;
    }

    .mobile-panel {
      position: fixed;
      inset: var(--header-height) 0 auto;
      display: grid;
      width: 100%;
      gap: 22px;
      margin: 0;
      padding: 32px 20px 38px;
      border: 0;
      border-bottom: 1px solid var(--border-strong);
      background: rgba(255, 255, 255, 0.98);
      color: inherit;
      box-shadow: var(--shadow);
      visibility: ${props => (props.open ? 'visible' : 'hidden')};
      opacity: ${props => (props.open ? 1 : 0)};
      transform: translateY(${props => (props.open ? '0' : '-12px')});
      transition: opacity var(--transition), transform var(--transition),
        visibility var(--transition);
    }

    .mobile-panel a {
      width: min(100%, 420px);
      margin-inline: auto;
      color: var(--cream-100);
      font-size: 26px;
      line-height: 1;
    }

    .mobile-panel .resume {
      color: var(--amber-300);
      font-size: 16px;
    }
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (open) {
      panelRef.current?.querySelector('a')?.focus();
    }
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      closeMenu();
      buttonRef.current?.focus();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }
    const focusable = Array.from(panelRef.current.querySelectorAll('a, button'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <Header open={open}>
      <nav className="container inner" aria-label="Primary navigation">
        <a className="brand" href="#content" aria-label="Kishan Rekhadia, home">
          KR
        </a>

        <ul className="desktop-links">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
          <li>
            <a
              className="resume"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Earlier career snapshot; current role details are on this page"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          ref={buttonRef}
          className={`menu-button${open ? ' open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(value => !value)}
        >
          <span aria-hidden="true" />
        </button>

        <dialog
          ref={panelRef}
          id="mobile-navigation"
          className="mobile-panel"
          aria-label="Mobile navigation"
          open={open}
          aria-hidden={!open}
        >
          {navLinks.map(link => (
            <a key={link.name} href={link.url} onClick={closeMenu} tabIndex={open ? 0 : -1}>
              {link.name}
            </a>
          ))}
          <a
            className="resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
          >
            Earlier résumé · update pending ↗
          </a>
        </dialog>
      </nav>
    </Header>
  );
};

export default Nav;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <main className='main-container'>
      <section className="main-header">
        <h1 className="text-center">!!!! Webpack !!!!</h1>
        <h2 className="text-center">Hello, I&apos;m learning Webpack 5</h2>
      </section>
      <section className='nav-links'>
        <NavLink to="details-images">Details & Images</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </section>
      <section className='content-section-wrapper'>
        <Outlet />
      </section>
    </main>
  );
}

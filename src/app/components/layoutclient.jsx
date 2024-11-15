"use client"
import React from 'react';
import Nav from './nav';
import { Facebook, Instagram } from 'lucide-react'
import { useRouter } from 'next/navigation';

const Layoutclient = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Nav />
      {children}
      <footer className="bg-darkprimarycolor px-4 text-brightwhite">
        <div className="container py-8">
          <div className="flex items-start justify-center gap-9 ">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer" onClick={() => {
                  router.push('/')
                }}>Home</li>
                <li className="hover:underline cursor-pointer" onClick={() => {
                  router.push('/pricing')
                }}>Pricing</li>
                <li className="hover:underline cursor-pointer" onClick={() => {
                  router.push('/book')
                }}>Get a free quote</li>
                <li onClick={() => {
                  router.push('/policies')
                }} className="hover:underline cursor-pointer">Service Policies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-foreground/80">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/charlottes_ultimate_cleaning/" className="hover:text-primary-foreground/80">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; {new Date().getFullYear()} | Designed By Soufiane Taki | Diamond Bright Cleaning Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layoutclient;

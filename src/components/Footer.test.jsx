import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders with default props', () => {
    render(<Footer />);
    expect(screen.getByText('Bright Start Tutoring')).toBeInTheDocument();
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  test('renders with custom company name', () => {
    render(<Footer companyName="Custom Academy" />);
    expect(screen.getByText('Custom Academy')).toBeInTheDocument();
  });

  test('renders custom quick links', () => {
    const customLinks = [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" }
    ];
    render(<Footer quickLinks={customLinks} />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
  });
});
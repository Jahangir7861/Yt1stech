import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | YT1s.tech',
  description:
    'Get in touch with YT1s support. Submit feedback, bug reports, feature requests, or DMCA compliance questions. 24-48 hour response guarantee.',
  alternates: {
    canonical: 'https://yt1s.tech/contact',
  },
  openGraph: {
    title: 'Contact Us | YT1s.tech',
    description: 'Reach our creator support team for assistance, inquiries, and developer feedback.',
    url: 'https://yt1s.tech/contact',
    siteName: 'YT1s.tech',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './support-page.html',
  styleUrl: './support-page.css',
})
export class SupportPage {
  faqs = signal([
    {
      question: 'How do I track my order?',
      answer:
        'You can track your order by visiting the account page and clicking on your order history.',
      open: false,
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 30 days of purchase. Items must be in their original condition.',
      open: false,
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 5-7 business days. Express shipping takes 1-2 business days.',
      open: false,
    },
    {
      question: 'How do I cancel my order?',
      answer:
        'Orders can be cancelled within 24 hours of placement. Contact us immediately if you need to cancel.',
      open: false,
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to over 50 countries worldwide. International shipping times vary by location.',
      open: false,
    },
  ]);

  toggleFaq(index: number) {
    this.faqs.update((items) =>
      items.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      })),
    );
  }
}

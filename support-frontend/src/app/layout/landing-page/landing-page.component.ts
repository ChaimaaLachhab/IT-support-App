import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {HeaderOneComponent} from "./header-one/header-one.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    HeaderOneComponent,
    NgForOf,
    FooterComponent,

  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  caseStudyTags = ['Customer Services', 'Sales', 'Marketing'];
  selectedTag = 'Customer Services';

  selectTag(tag: string) {
    this.selectedTag = tag;
  }

  constructor(private router: Router) {}

  login(){
    this.router.navigate(['/login'])
  }

  features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09e2165bcd1505dd10a962662d92508f45b8bb55fdda362fe2acbcb0a0c20c74?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "Smart Ticketing System",
      description: "No more manual sorting. We routes customer inquiries to the right agents based on their expertise.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/212a6e52fcb78be0588969b6b8ab6b264a933a160175a54db9ffd79680a40559?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "Knowledge Base",
      description: "Create a comprehensive knowledge base with FAQs, guides, and tutorials to reduce support volume.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5050c69433aa975f55582c1b61a3a9d5a8c4f1e4c65165ef9b856bce03bbb6a?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "Real-time Collaboration",
      description: "Responso enables your team to share insights, solve problems together, and deliver unified support.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe699e03204175ffdc47a64cce15a85eb7b93c11408e05b167d6205b40c2dc30?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "Performance Analytics",
      description: "Customize your own report from existing datasets. Measure only what matters.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cd23ae6c2634a6035f5cb11c0ef558b11313ec73d592ed56dcf88e7fabd0456?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "CRM Integrations",
      description: "Responso ensures a consistent experience across every touchpoint with 30+ integrations.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/feeb3528311e8a4ea69a64d3aeb4a45662140a51a52a606e528e41a0bd290559?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201",
      title: "Personalized Interactions",
      description: "Access historical interactions, preferences, and purchase history to tailor your responses.",
    }
  ];

  articles = [
    {
      date: 'Aug 11, 2021',
      title: "Data-Driven Decisions: Leveraging Responso's Analytics Suite",
      description: "Businesses that made significant improvements using data-driven insights...",
      author: {
        name: 'Sarah Jackson',
        role: 'Sr. of Operations at Respondo',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7cec25fc86236770513a370d00d5f04d46bc7529f045563c607c3b426a325410?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      },
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8888ba78db1df419de27e548e805ba1aa632c6bf68c77ccf14d6ebe4ad3810d?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
    },
    {
      date: 'Sep 20, 2022',
      title: 'How to custom a report with Respondo dashboards',
      description: 'Ut aute sit anim consectetur consectetur Lorem veniam irure ea fugiat....',
      author: {
        name: 'Elizabeth Bailey',
        role: 'Head of Customer Relations at Lorem',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cf65bce0e7d15594d26ace2fdf86eabc61b4c2e864f29cfcca9793bc24db6ca8?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      }
    },
    {
      date: 'Jan 29, 2021',
      title: 'A Guide to Building Knowledge Bases with Respondo',
      description: 'The benefits of self-service support for both customers and businesses...',
      author: {
        name: 'Michael Taylor',
        role: 'Sr. of Operations at Tech Inc.',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/45d61831babc8b86eaa7b0342d7901b19b83f09cfd62f0097343e7ab27bf4dca?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      }
    },
    {
      date: 'Mar 27, 2020',
      title: 'Tools build the workflow. Workflow shapes company culture.',
      description: 'Explore the importance of teamwork in resolving complex customer issues....',
      author: {
        name: 'John King',
        role: 'CEO & Founder',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/468f93113b9592360a52b719bf60056dc0a17b9dce35b185b97ef415a6b08a8f?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      },
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33d4ccd0d595907eeae7df8c44819084691f4bdfe787c8335c39bcbace08d822?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
    },
    {
      date: 'May 07, 2023',
      title: 'Adapting to Multi-Channel: Meeting Customers Where They Are',
      description: 'Responso enables businesses to manage inquiries from various platforms...',
      author: {
        name: 'Emily Anderson',
        role: 'COO at Lorem Commercial',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2deb9d26c858a53d7eb572ff584484fe3a724bfe4004b12daad2c97209e1a05b?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      },
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f7c6ae82820c4f907e4528f73aad81d974b42af96dac1701b835ad853b1f7c6?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
    },
    {
      date: 'Oct 01, 2022',
      title: 'Streamline Operations with Smart Ticketing System',
      description: "Responso's intelligent ticket routing can optimize response times....",
      author: {
        name: 'Ryan Young',
        role: 'Sr. of Operations at Tech Inc.',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16d90936f6bf81a53431352b13919f227fdd9e6cc710cd95c1083ffce5e44d1f?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201'
      }
    }
  ];
}

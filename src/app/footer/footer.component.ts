import { Component, OnInit } from '@angular/core';
import { Link, ContactInfo, SocialLink } from '../shared/model/models.model';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public sectionLink: Link[];
  public contactInfo: ContactInfo[];
  public socialInfo: SocialLink[];
  public linksFooter: Link[];

  constructor() {
    this.socialInfo = socials;
  }

  ngOnInit() {
    this.sectionLink = links;
    this.contactInfo = contacts;
    this.linksFooter = linksFooter;
  }
}

const links: Link[] = [
  {
    name: "About me",
    link: "#"
  },
  {
    name: "Relationships",
    link: "#"
  },
  {
    name: "Requirements",
    link: "#"
  },
  {
    name: "Users",
    link: "#"
  },
  {
    name: "Sign Up",
    link: "#"
  }
];

const contacts: ContactInfo[] = [
  {
    value: "work.of.future@gmail.com",
    key: "email"
  },
  {
    value: "+38(050) 789 24 98",
    key: "phone"
  },
  {
    value: "+38(095) 556 08 45",
    key: "phone"
  }
];

const linksFooter: Link[] = [
  { name: 'News', link: '#' },
  { name: 'Blog', link: '#' },
  { name: 'Partners', link: '#' },
  { name: 'Shop', link: '#' },
  { name: 'Overview', link: '#' },
  { name: 'Design', link: '#' },
  { name: 'Code', link: '#' },
  { name: 'Collaborate', link: '#' },
  { name: 'Tutorials', link: '#' },
  { name: 'Resources', link: '#' },
  { name: 'Guides', link: '#' },
  { name: 'Examples', link: '#' },
  { name: 'FAQ', link: '#' },
  { name: 'Terms', link: '#' },
  { name: 'Conditions', link: '#' },
  { name: 'Help', link: '#' }
]

const socials: SocialLink[] = [
  {
    name: "facebook",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <style>
      .icon__fill {
        fill: #fff;
      }
    svg:hover .icon__fill {
      fill: #ef6c00;
    }
    </style>
<!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>facebook</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g class="icon__fill" id="facebook" fill-rule="nonzero">
            <path d="M19.48,0 L6.5,0 C2.90919977,0.0164928064 0.00546111025,2.92916605 0,6.52 L0,19.52 C0.0273388392,23.0952131 2.92471965,25.9836789 6.5,26 L19.5,26 C23.0908002,25.9835072 25.9945389,23.0708339 26,19.48 L26,6.48 C25.9725685,2.89701754 23.0630834,0.00538210981 19.48,0 Z M16.48,13 L14,13 L14,21.05 L10.94,21.05 L10.94,13 L9.29,13 L9.29,9.7 L10.73,9.7 L10.73,8.3 C10.6658193,7.37030647 11.0101041,6.45882183 11.6728924,5.80371807 C12.3356806,5.1486143 13.2511181,4.81498213 14.18,4.89 L16.71,4.89 L16.71,7.63 L14.92,7.63 C14.63,7.63 14.24,7.82 14.24,8.46 L14.24,9.7 L16.78,9.7 L16.48,13 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,
    link: "#"
  },
  {
    name: "linkedin",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
      .icon__fill {
        fill: #fff;
      }
    svg:hover .icon__fill {
      fill: #ef6c00;
    }
    </style>
<!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>linkedin</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g class="icon__fill" id="linkedin" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M8.66,21 L5,21 L5,10.31 L8.66,10.31 L8.66,21 Z M6.78,8.66 C5.73065898,8.66 4.88,7.80934102 4.88,6.76 C4.88,5.71065898 5.73065898,4.86 6.78,4.86 C7.82934102,4.86 8.68,5.71065898 8.68,6.76 C8.66391582,7.80260607 7.82260607,8.64391582 6.78,8.66 Z M21.05,21 L17.94,21 L17.94,15.84 C17.94,14.58 17.77,12.97 16.06,12.97 C14.35,12.97 14.06,14.33 14.06,15.75 L14.06,21 L10.93,21 L10.93,10.31 L13.81,10.31 L13.81,11.75 L13.9,11.75 C14.6007249,10.7200391 15.8111802,10.1590027 17.05,10.29 C20.45,10.29 21.05,12.29 21.05,15.15 L21.05,21 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,
    link: "#"
  },
  {
    name: "instagram",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
      .icon__fill {
        fill: #fff;
      }
    svg:hover .icon__fill {
      fill: #ef6c00;
    }
    </style>
<!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>instagram</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g class="icon__fill" id="instagram" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M15.3,11.32 C14.7722708,10.5663332 13.9100607,10.1174981 12.99,10.1174981 C12.0699393,10.1174981 11.2077292,10.5663332 10.68,11.32 C10.3310448,11.8109066 10.1424294,12.3977102 10.14,13 C10.14,14.5740115 11.4159885,15.8499999 12.99,15.8499999 C14.5640115,15.8499999 15.84,14.5740115 15.84,13 C15.8375706,12.3977102 15.6489552,11.8109066 15.3,11.32 Z" id="Shape"></path>
            <path d="M17.09,11.34 C17.3171443,11.8634612 17.4296627,12.4294627 17.42,13 C17.42,15.4466214 15.4366214,17.43 12.99,17.43 C10.5433786,17.43 8.56,15.4466214 8.56,13 C8.54894702,12.4325683 8.66155427,11.869532 8.89,11.35 L6.39,11.35 L6.39,18 C6.43576145,18.8661414 7.13335431,19.5550685 8,19.59 L18,19.59 C18.8588477,19.5451003 19.5451003,18.8588477 19.59,18 L19.59,11.34 L17.09,11.34 Z" id="Shape"></path>
            <polygon id="Shape" points="18.84 6.76 16.45 6.76 16.45 9.51 19.18 9.51 19.18 7.11 19.18 6.74"></polygon>
            <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M21,11.32 L21,18 C21,19.6568542 19.6568542,21 18,21 L8,21 C6.34314575,21 5,19.6568542 5,18 L5,8 C5,6.34314575 6.34314575,5 8,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,11.3 L21,11.32 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,
    link: "#"
  },
  {
    name: "twitter",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
      .icon__fill {
        fill: #fff;
      }
    svg:hover .icon__fill {
      fill: #ef6c00;
    }
    </style>
<!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>twitter</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g class="icon__fill" id="twitter" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M19.46,9.73 L19.46,10.16 C19.4602817,12.6562666 18.4591612,15.048311 16.680925,16.8002308 C14.9026889,18.5521506 12.4959849,19.5174976 10,19.48 C8.19000448,19.4867595 6.41622306,18.9730224 4.89,18 C5.15,18 5.4,18 5.67,18 C7.16223419,18.0132772 8.61479321,17.5196892 9.79,16.6 C8.37561454,16.5831002 7.12725167,15.6719157 6.68,14.33 C6.88427783,14.3697436 7.09189196,14.3898353 7.3,14.39 C7.60084102,14.3921681 7.90047618,14.3517678 8.19,14.27 C6.66427306,13.9526392 5.57050009,12.6083839 5.57,11.05 C6.0217923,11.3070617 6.53033511,11.4479418 7.05,11.46 C5.59406692,10.5233733 5.13165333,8.60765978 6,7.11 C7.7046071,9.15917995 10.1880503,10.4027143 12.85,10.54 C12.7856439,10.2953301 12.7553582,10.0429497 12.76,9.79 C12.7652348,8.91217787 13.1210623,8.07285034 13.7483257,7.45873325 C14.375589,6.84461615 15.2222639,6.50664339 16.1,6.52 C17.01496,6.51037738 17.8949546,6.87103093 18.54,7.52 C19.2825303,7.37679112 19.9936288,7.1025103 20.64,6.71 C20.3847923,7.47073445 19.86727,8.11586494 19.18,8.53 C19.8393074,8.44842923 20.4829326,8.26983166 21.09,8 C20.6493718,8.67188324 20.0902844,9.25807788 19.44,9.73 L19.46,9.73 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,
    link: "#"
  },
  {
    name: "pinterest",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
      .icon__fill {
        fill: #fff;
      }
    svg:hover .icon__fill {
      fill: #ef6c00;
    }
    </style>
<!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>pinterest</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g class="icon__fill" id="pinterest" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M19.48,0 L6.5,0 C2.90919977,0.0164928064 0.00546111025,2.92916605 0,6.52 L0,19.52 C0.0273388392,23.0952131 2.92471965,25.9836789 6.5,26 L19.5,26 C23.0908002,25.9835072 25.9945389,23.0708339 26,19.48 L26,6.48 C25.9725685,2.89701754 23.0630834,0.00538210981 19.48,0 Z M14.3,16.61 C13.3922361,16.6221996 12.5348986,16.1935309 12,15.46 C12,15.46 11.44,17.6 11.32,18.01 C10.9217186,19.1231301 10.3329528,20.1585458 9.58,21.07 C9.56067003,21.1445584 9.48455844,21.18933 9.41,21.17 C9.33544156,21.15067 9.29067003,21.0745584 9.31,21 C9.11363262,19.8248132 9.11363262,18.6251868 9.31,17.45 C9.49,16.68 10.55,12.37 10.55,12.37 C10.3416799,11.9116819 10.2358855,11.413424 10.24,10.91 C10.24,9.52 11.06,8.49 12.09,8.49 C12.45579,8.47941767 12.8083672,8.62713527 13.0573736,8.89529597 C13.3063799,9.16345668 13.4276118,9.52599494 13.39,9.89 C13.2081478,11.0159435 12.9270523,12.1235937 12.55,13.2 C12.4342718,13.6566014 12.54755,14.1409651 12.8537706,14.4988852 C13.1599911,14.8568053 13.62099,15.0436746 14.09,15 C15.91,15 17.15,12.73 17.15,10.05 C17.15,8.05 15.72,6.48 13.15,6.48 C11.9200004,6.40863989 10.714718,6.84585185 9.81652758,7.68920538 C8.91833715,8.53255892 8.40616379,9.70794755 8.4,10.94 C8.36538152,11.6034004 8.57930964,12.2558812 9,12.77 C9.15667616,12.8932016 9.21364218,13.1047896 9.14,13.29 C9.14,13.45 9,13.87 8.94,14.03 C8.92057673,14.133319 8.85308778,14.2212013 8.75828084,14.2666296 C8.6634739,14.3120579 8.55269494,14.3095957 8.46,14.26 C7.11190535,13.6058248 6.31384622,12.1812892 6.46,10.69 C6.46,8.05 8.77,4.87 13.33,4.87 C17.01,4.87 19.42,7.45 19.42,10.21 C19.48,13.89 17.4,16.61 14.3,16.61 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,
    link: "#"
  }
];

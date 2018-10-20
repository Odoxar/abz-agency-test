export interface StyleGuide {
  caretClass?: string,
  selectBoxClass?: string,
  selectMenuClass?: string,
  optionsClass?: string
}

export interface Link {
  name: string;
  link: string;
}

export interface ContactInfo {
  value: string;
  key: string;
}

export interface SocialLink {
  name: string;
  content: string;
  link: string;
}

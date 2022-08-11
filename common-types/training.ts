interface OneDescPoint {
  name: string;
  furtherDesc: string[];
}

export interface Training {
  name: string;
  excerptDesc: string;
  description: OneDescPoint[];
  slug: string;
}

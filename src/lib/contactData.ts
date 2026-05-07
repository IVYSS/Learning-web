// lib/data/contactData.ts
export const reasonOptions = [
  "General Inquiry",
  "Course Related Query",
  "Technical Issue",
  "Payment & Refund",
  "Career & Jobs",
  "Partnership",
  "Other",
];

export const addressData = {
  corporate: {
    title: "Corporate Address (For Communications):",
    lines: [
      "GeeksforGeeks",
      "A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)",
      "08069289001 (Course related Queries)",
    ],
  },
  registered: {
    title: "Registered Address:",
    lines: [
      "K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautambuddha Nagar, Uttar Pradesh.201305",
    ],
  },
  other: {
    title: "Other Address:",
    entries: [
      {
        label: "Bangalore:",
        lines: [
          "Bhagyalaxmi Square, 2nd Floor, GeeksforGeeks.",
          "17/N, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
        ],
      },
    ],
  },
};

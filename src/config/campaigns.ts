export interface QuestionOption {
  label: string;
  key: string;
}

export interface QualificationQuestion {
  num: number;
  question: string;
  field: string;
  options: QuestionOption[];
}

export interface CampaignConfig {
  id: string;
  title: string;
  subtitle: string;
  questions: QualificationQuestion[];
}

export const CAMPAIGNS: Record<string, CampaignConfig> = {
  selflance: {
    id: "selflance",
    title: "Diamond Boutique • Siddiqui Coutures",
    subtitle: "Quick 30-Second Requirement Assessment (Attar Gali, Mumbai)",
    questions: [
      {
        num: 1,
        question: "Aap kis cheez ke liye dekh rahe hain? / What are you looking for? *",
        field: "requirementType",
        options: [
          { label: "B2B Wholesale / Reseller Bulk Lots (10+ Suits)", key: "A" },
          { label: "Personal Luxury Ready-Made Pakistani Suits (Retail)", key: "B" },
          { label: "Unstitched Pakistani Style Pure Cotton Lawn + In-House Custom Stitching", key: "C" },
          { label: "VIP Store Visit & Fitting Consultation in Attar Gali", key: "D" },
        ],
      },
      {
        num: 2,
        question: "Aapka business ya shopping profile kya hai? *",
        field: "customerProfile",
        options: [
          { label: "Boutique Owner / Retail Cloth Shop", key: "A" },
          { label: "Online / WhatsApp / Instagram Reseller", key: "B" },
          { label: "Festive / Wedding / Eid Shopper", key: "C" },
          { label: "Regular Daily / Summer Luxury Lawn Shopper", key: "D" },
          { label: "Other / Exploring Catalogue", key: "E" },
        ],
      },
      {
        num: 3,
        question: "Aapko order kab tak chahiye? / Requirement timeline? *",
        field: "orderTimeline",
        options: [
          { label: "Urgent (Aaj ya 1-2 din mein store visit / dispatch)", key: "A" },
          { label: "Within this week (Is hafte mein)", key: "B" },
          { label: "In 2–3 weeks (Upcoming wedding / event)", key: "C" },
          { label: "Looking for sample lot & price catalogue first", key: "D" },
        ],
      },
      {
        num: 4,
        question: "Aapka preferred location / delivery option? *",
        field: "deliveryPreference",
        options: [
          { label: "Direct Store Visit (Attar Gali, Mumbai)", key: "A" },
          { label: "Mumbai Local Express Delivery", key: "B" },
          { label: "Pan-India Courier / Parcel Service", key: "C" },
          { label: "WhatsApp Video Call Catalogue Order", key: "D" },
        ],
      },
    ],
  },
  diamond: {
    id: "diamond",
    title: "Diamond Boutique • Siddiqui Coutures",
    subtitle: "Quick 30-Second Requirement Assessment (Attar Gali, Mumbai)",
    questions: [
      {
        num: 1,
        question: "Aap kis cheez ke liye dekh rahe hain? / What are you looking for? *",
        field: "requirementType",
        options: [
          { label: "B2B Wholesale / Reseller Bulk Lots (10+ Suits)", key: "A" },
          { label: "Personal Luxury Ready-Made Pakistani Suits (Retail)", key: "B" },
          { label: "Unstitched Pakistani Style Pure Cotton Lawn + In-House Custom Stitching", key: "C" },
          { label: "VIP Store Visit & Fitting Consultation in Attar Gali", key: "D" },
        ],
      },
      {
        num: 2,
        question: "Aapka business ya shopping profile kya hai? *",
        field: "customerProfile",
        options: [
          { label: "Boutique Owner / Retail Cloth Shop", key: "A" },
          { label: "Online / WhatsApp / Instagram Reseller", key: "B" },
          { label: "Festive / Wedding / Eid Shopper", key: "C" },
          { label: "Regular Daily / Summer Luxury Lawn Shopper", key: "D" },
          { label: "Other / Exploring Catalogue", key: "E" },
        ],
      },
      {
        num: 3,
        question: "Aapko order kab tak chahiye? / Requirement timeline? *",
        field: "orderTimeline",
        options: [
          { label: "Urgent (Aaj ya 1-2 din mein store visit / dispatch)", key: "A" },
          { label: "Within this week (Is hafte mein)", key: "B" },
          { label: "In 2–3 weeks (Upcoming wedding / event)", key: "C" },
          { label: "Looking for sample lot & price catalogue first", key: "D" },
        ],
      },
      {
        num: 4,
        question: "Aapka preferred location / delivery option? *",
        field: "deliveryPreference",
        options: [
          { label: "Direct Store Visit (Attar Gali, Mumbai)", key: "A" },
          { label: "Mumbai Local Express Delivery", key: "B" },
          { label: "Pan-India Courier / Parcel Service", key: "C" },
          { label: "WhatsApp Video Call Catalogue Order", key: "D" },
        ],
      },
    ],
  },
  firstoptionagency: {
    id: "firstoptionagency",
    title: "Diamond Boutique • Siddiqui Coutures",
    subtitle: "Quick 30-Second Requirement Assessment",
    questions: [
      {
        num: 1,
        question: "Aap kis cheez ke liye dekh rahe hain? / What are you looking for? *",
        field: "requirementType",
        options: [
          { label: "B2B Wholesale / Reseller Bulk Lots (10+ Suits)", key: "A" },
          { label: "Personal Luxury Ready-Made Pakistani Suits (Retail)", key: "B" },
          { label: "Unstitched Pakistani Style Pure Cotton Lawn + In-House Custom Stitching", key: "C" },
          { label: "VIP Store Visit & Fitting Consultation in Attar Gali", key: "D" },
        ],
      },
      {
        num: 2,
        question: "Aapka business ya shopping profile kya hai? *",
        field: "customerProfile",
        options: [
          { label: "Boutique Owner / Retail Cloth Shop", key: "A" },
          { label: "Online / WhatsApp / Instagram Reseller", key: "B" },
          { label: "Festive / Wedding / Eid Shopper", key: "C" },
          { label: "Regular Daily / Summer Luxury Lawn Shopper", key: "D" },
        ],
      },
      {
        num: 3,
        question: "Aapko order kab tak chahiye? / Requirement timeline? *",
        field: "orderTimeline",
        options: [
          { label: "Urgent (Aaj ya 1-2 din mein store visit / dispatch)", key: "A" },
          { label: "Within this week (Is hafte mein)", key: "B" },
          { label: "In 2–3 weeks (Upcoming wedding / event)", key: "C" },
          { label: "Looking for sample lot & price catalogue first", key: "D" },
        ],
      },
      {
        num: 4,
        question: "Aapka preferred location / delivery option? *",
        field: "deliveryPreference",
        options: [
          { label: "Direct Store Visit (Attar Gali, Mumbai)", key: "A" },
          { label: "Mumbai Local Express Delivery", key: "B" },
          { label: "Pan-India Courier / Parcel Service", key: "C" },
          { label: "WhatsApp Video Call Catalogue Order", key: "D" },
        ],
      },
    ],
  },
  doctors_growth: {
    id: "doctors_growth",
    title: "Diamond Boutique • Siddiqui Coutures",
    subtitle: "Tailor Your Order or Visit Request",
    questions: [
      {
        num: 1,
        question: "Aap kis cheez ke liye dekh rahe hain? *",
        field: "requirementType",
        options: [
          { label: "B2B Wholesale Lots", key: "A" },
          { label: "Retail Partywear Suits", key: "B" },
          { label: "Master Tailor Stitching", key: "C" },
          { label: "Attar Gali Store Visit", key: "D" },
        ],
      },
      {
        num: 2,
        question: "Kitne suits ka requirement hai? *",
        field: "quantityRequirement",
        options: [
          { label: "1 – 3 Suits (Personal / Trial)", key: "A" },
          { label: "10 – 30 Suits (Starter Wholesale Lot)", key: "B" },
          { label: "50+ Suits (Mega Bulk / Retailer)", key: "C" },
        ],
      },
      {
        num: 3,
        question: "Kab tak order / visit plan hai? *",
        field: "orderTimeline",
        options: [
          { label: "Immediate (Within 1–2 days)", key: "A" },
          { label: "This week", key: "B" },
          { label: "Upcoming Festival / Wedding season", key: "C" },
        ],
      },
    ],
  },
};

export const DEFAULT_CAMPAIGN_ID = "selflance";

export function getCampaignConfig(campaignId?: string | null): CampaignConfig {
  if (campaignId && CAMPAIGNS[campaignId]) {
    return CAMPAIGNS[campaignId];
  }
  return CAMPAIGNS[DEFAULT_CAMPAIGN_ID];
}

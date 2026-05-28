export const SITE = {
  name: "IN8LOVE WELLNESS",
  phone: "(310) 477-3335",
  phoneHref: "tel:+13104773335",
  email: "in8love@in8lovewellness.com",
  address: "3459 Motor Ave, Los Angeles, CA 90034",
  hours: [
    ["Monday", "9:00am – 6:00pm"],
    ["Tuesday", "9:00am – 6:00pm"],
    ["Wednesday", "9:00am – 6:00pm"],
    ["Thursday", "9:00am – 6:00pm"],
    ["Friday", "9:00am – 4:00pm"],
    ["Saturday", "By appointment"],
    ["Sunday", "Closed"],
  ] as const,
};

export const SERVICES = [
  { slug: "chiropractic-care", name: "Chiropractic Care", blurb: "Structural correction for lasting alignment.", img: "chiropractic" },
  { slug: "acupuncture", name: "Acupuncture", blurb: "Ancient Eastern medicine, modern relief.", img: "acupuncture" },
  { slug: "spinal-decompression", name: "Spinal Decompression", blurb: "Non-surgical relief for discs & sciatica.", img: "decompression" },
  { slug: "ozone-therapy", name: "Ozone Therapy", blurb: "Oxygen-based healing at the cellular level.", img: "ozone" },
  { slug: "fire-cupping", name: "Fire Cupping", blurb: "Release tension and restore circulation.", img: "cupping" },
  { slug: "laser-therapy", name: "Laser Therapy", blurb: "Light-based recovery for tissue healing.", img: "laser" },
  { slug: "cranial-facial-release", name: "Cranial Facial Release", blurb: "Unwind tension from the skull outward.", img: "cranial" },
  { slug: "pediatric-chiropractic", name: "Pediatric Chiropractic", blurb: "Gentle care for growing bodies.", img: "pediatric" },
  { slug: "neuro-emotional-technique", name: "Neuro Emotional Technique", blurb: "Where mind, body, and memory meet.", img: "net" },
] as const;

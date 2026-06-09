/**
 * Pricing Utility
 * Dynamically adjusts services and packages pricing based on the client's device OS.
 * Apple iOS/macOS visitors will view premium-adjusted pricing, while Android and
 * desktop visitors will view base competitive pricing.
 */

export const getDeviceBasedPrice = (basePrice: number): number => {
  if (typeof window === "undefined") return basePrice;
  
  // Detect iOS (iPhone, iPad, iPod) and macOS (Safari/Mac)
  const isApple = /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent);
  
  if (isApple) {
    // Show a 20-25% premium price bump for iOS users
    return Math.round(basePrice * 1.25);
  }
  
  return basePrice;
};

/**
 * Formats a numeric price into Indian Rupees format (e.g., ₹35,000)
 */
export const formatPrice = (basePrice: number): string => {
  const finalPrice = getDeviceBasedPrice(basePrice);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(finalPrice);
};

import { CartItem } from "@/hooks/useCart";

export function generateWhatsAppLink(items: CartItem[]): string {
  const phoneNumber = "2348167146040"; // Replace with your client's exact number later
  
  let message = `⚡ *NEW ORDER FROM OTG-STORES* ⚡\n\n`;
  message += `Hey OTG, I just built an order bag on your platform. Here are the items I want to lock in:\n\n`;
  
  let totalPrice = 0;

  items.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    totalPrice += itemTotal;
    
    message += `*${index + 1}. ${item.product.name}*\n`;
    message += `   👟 Size: EU ${item.selectedSize}\n`;
    message += `   📦 Qty: ${item.quantity}\n`;
    message += `   💰 Price: $${item.product.price}.00\n`;
    message += `   🔗 Media link: ${item.product.primaryImage}\n\n`;
  });

  message += `---------------------------\n`;
  message += `🔥 *TOTAL ORDER VALUE:* $${totalPrice}.00\n`;
  message += `---------------------------\n\n`;
  message += `Please confirm availability so I can proceed with the transaction details! 🙏`;

  // Encode text strings safely for browser URLs
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
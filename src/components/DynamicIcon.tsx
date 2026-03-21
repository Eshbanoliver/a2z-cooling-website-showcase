import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className, size = 24, color, style }) => {
  // Map our custom names or emoji-like strings to actual Lucide component names
  const iconMap: Record<string, keyof typeof LucideIcons> = {
    // Services
    'ac-repair': 'Wrench',
    'geyser-repair': 'Waves',
    'washing-machine': 'Zap',
    'solar-ac': 'Sun',
    'cruise-ac': 'Snowflake',
    'voltas-ac': 'Wind',
    'godrej-ac': 'Home',
    'lloyd-ac': 'Fan',
    'lg-ac': 'Thermometer',
    'daikin-ac': 'RotateCw',
    'samsung-ac': 'Smartphone',
    
    // Metrics
    'trophy': 'Trophy',
    'smile': 'Smile',
    'wrench': 'Wrench',
    'star': 'Star',
    
    // Values
    'target': 'Target',
    'clock': 'Clock',
    'rupee': 'IndianRupee',
    'shield': 'ShieldCheck',
    'handshake': 'Handshake',
    'leaf': 'Leaf',
    
    // Why Choose Us
    'bolt': 'Zap',
    'gem': 'Gem',
    'shield-check': 'ShieldCheck',
    
    // Contact & Common
    'map-pin': 'MapPin',
    'phone': 'Phone',
    'mail': 'Mail',
    'clock-outline': 'Clock',
    'whatsapp': 'MessageCircle',
    'snowflake': 'Snowflake',
    'quote': 'Quote',
    'chevron-up': 'ChevronUp',
    'chevron-down': 'ChevronDown',
    'chevron-right': 'ChevronRight',
    'arrow-right': 'ArrowRight',
    'arrow-up': 'ArrowUp',
    'plus': 'Plus',
    'minus': 'Minus',
    'check': 'Check',
  };

  const lucideName = iconMap[name] || name;
  const IconComponent = (LucideIcons as any)[lucideName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" (mapped to "${lucideName}") not found in lucide-react`);
    return null;
  }

  return <IconComponent className={className} size={size} color={color} style={style} />;
};

export default DynamicIcon;

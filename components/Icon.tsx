import {
  Cable, Waypoints, Wifi, RadioTower, Globe, PhoneCall, Cctv, ServerCog, GraduationCap, HeartPulse,
  Landmark, Pickaxe, Building2, TrainFront, BadgeCheck, MapPin, Handshake, Timer, Map as MapIcon, Activity, HardHat, Truck, ShieldCheck, TrendingUp, type LucideProps,
} from 'lucide-react';

const map = {
  Cable, Waypoints, Wifi, RadioTower, Globe, PhoneCall, Cctv, ServerCog, GraduationCap, HeartPulse,
  Landmark, Pickaxe, Building2, TrainFront, BadgeCheck, MapPin, Handshake, Timer, Map: MapIcon, Activity, HardHat, Truck, ShieldCheck, TrendingUp,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Globe;
  return <C aria-hidden {...props} />;
}

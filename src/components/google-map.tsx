import { restaurantInfo } from "@/lib/restaurant-info";

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export default function GoogleMap({
  className = "",
  height = "300",
}: GoogleMapProps) {
  return (
    <div className={`w-full overflow-hidden rounded-lg ${className}`}>
      <iframe
        src={restaurantInfo.googleMapsEmbed}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mappa — ${restaurantInfo.name}`}
      />
    </div>
  );
}

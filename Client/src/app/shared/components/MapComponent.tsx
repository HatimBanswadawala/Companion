import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

type Props = {
    venue: string,
    position: [number,number]
}

export default function MapComponent({venue,position}:Props) {

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:'100%'}}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        {venue}
      </Popup>
    </Marker>
  </MapContainer>
  )
}

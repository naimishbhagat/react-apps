import React from "react";
import GoogleMapReact from "google-map-react";
import { useGlobalContext } from "../context";
const Marker = ({ text }) => <div className="marker">{text}</div>;

export default function Map() {
  const { countries } = useGlobalContext();
  // Return map bounds based on list of places
  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      console.log(place.countryInfo.lat, place.countryInfo.long);
      bounds.extend(
        new maps.LatLng(place.countryInfo.lat, place.countryInfo.long)
      );
    });
    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, "idle", () => {
      maps.event.addDomListener(window, "resize", () => {
        map.fitBounds(bounds);
      });
    });
  };
  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  return (
    <section className="main">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCa_cLWC_G_q5F3l-rVFUCcsjUCuPoNjdA",
          }}
          defaultZoom={14}
          defaultCenter={[53.847818, 23.424076]}
          onGoogleApiLoaded={({ map, maps }) =>
            apiIsLoaded(map, maps, countries)
          }
        >
          {countries.map((country, index) => {
            return (
              <Marker
                key={index}
                lat={country.countryInfo.lat}
                lng={country.countryInfo.long}
                text={country.cases}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </section>
  );
}

import { Spinner } from '@gluestack-ui/themed';
import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const LocationContext = createContext<{
  location: Location.LocationObject | null;
  setLocation: (data: Location.LocationObject) => void;
}>({
  location: null,
  setLocation: (data: Location.LocationObject) => {},
});

export const LocationProvider: FC<{
  children: ReactNode;
}> = (props) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isComponentMounted = true;

    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('error: permission not granted');
        if (!isComponentMounted) {
          return;
        }
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (!isComponentMounted) {
        return;
      }
      setLocation(location);
      console.log({ location });
      setLoading(false);
    }

    getLocation();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

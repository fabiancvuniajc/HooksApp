import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;
const nextLight: Record<TrafficLightColor, TrafficLightColor> = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
};

export const useTrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          setLight((prevLight) => nextLight[prevLight]);
          return 5;
        }

        return prevCountdown - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    countdown,
    light,
    colors,
    percentage: (countdown / 5) * 100,
    redLight: light === 'red' ? colors[light] : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
    greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
  };
};

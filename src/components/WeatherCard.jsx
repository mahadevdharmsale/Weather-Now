import React from "react";
import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  return (
    <motion.div
      className="mt-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-100 to-indigo-600 text-white cursor-pointer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-2xl font-semibold text-center">
        {weather.name}, {weather.sys.country}
      </h2>

      <div className="flex justify-center items-center mt-4">
        <motion.img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        <p className="text-4xl font-bold ml-2">
          {Math.round(weather.main.temp)}°C
        </p>
      </div>

      <p className="text-center text-gray-200 capitalize mt-2">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-gray-300">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-gray-300">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-gray-300">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-gray-300">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;

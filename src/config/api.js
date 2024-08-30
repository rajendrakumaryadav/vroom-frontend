'use strict';

module.exports = {
  tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  host: process.env.API_HOST || 'http://localhost', 
  port: process.env.API_PORT || '3000', 
  maxTaskNumber: 100,
  overpassEndpoint: 'https://overpass-api.de/api/interpreter'
};
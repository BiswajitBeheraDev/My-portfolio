import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'Weather Map',
      description:
        'Interactive tool showing real-time weather data for any location, including temperature, humidity, wind speed, and precipitation, displayed visually on a map.',
      image: '/new22.jpg',
       link: "https://github.com/BiswajitBeheraDev/Weathermap",
    },
    {
      id: 2,
      title: 'E-commerce Site',
      description:
        'User-friendly e-commerce website with product listings, cart system, secure checkout, and responsive design, including an admin dashboard for inventory management.',
      image: '/e-commerce.jpg',
      link:'https://github.com/BiswajitBeheraDev/E-commercesite'
    },
   
  ];

  return NextResponse.json(projects, { status: 200 });
}
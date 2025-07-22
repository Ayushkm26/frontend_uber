import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="h-screen pt-8 w-full flex justify-between flex-col  bg-cover bg-bottom"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')",
      }}
    >
      <img
        className="w-16 ml-9"
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
      <div className="bg-white pb-7 py-5 px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link to ='/user-login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Home;

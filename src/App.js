import React, { useEffect, useState } from "react";
import { Header } from "./Header";

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error)
    return (
      <p
        style={{
          color: "#d4af37",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Oops! Something went wrong.
      </p>
    );
  if (loading || !user)
    return (
      <p
        style={{
          color: "#d4af37",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Loading developer info...
      </p>
    );

  return (
    <>
      <style>{`
  body {
    background-color: #0b1446; /* midnight blue */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0; padding: 0; min-height: 100vh;
    display: grid; place-items: center;
  }
  .card {
    background: #1f2937;
    color:rgb(241, 192, 47); 
    width: 350px;
    border-radius: 16px;
    box-shadow: 0 0 20px 4px #ffd966aa; 
    padding: 24px;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    row-gap: 20px;
    box-sizing: border-box;
    text-align: center;
    transition: box-shadow 0.3s ease;
  }
  .card:hover {
    box-shadow: 0 0 27px 8px #ffd966ff;
  }
  .title {
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.8px;
    margin-top: 8px;
    user-select: none;
  }
  .user-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px 24px;
    text-align: left;
    font-size: 1rem;
    line-height: 1.4;
    padding: 12px 0;
    border-top: 1px solid #ffd966aa;
    border-bottom: 1px solid #ffd966aa;
  }
  .user-info div {
    word-break: break-word;
  }
  .photo-container {
    justify-self: center;
    margin-top: 16px;
  }
  .photo-container img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #ffd966; 
    box-shadow: 0 0 15px 6px #ffd966aa; 
    object-fit: cover;
    transition: box-shadow 0.3s ease;
  }
  .photo-container img:hover {
    box-shadow: 0 0 25px 12px #ffd966ff; 
  }
  button {
    margin-top: 20px;
    background: #ffd966;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    color: #1f2937;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    user-select: none;
    box-shadow: 0 4px 10px #ffd966aa;
  }
  button:hover {
    background: #e6c94a;
    color: #0b1446;
    box-shadow: 0 6px 15px #e6c94aaa;
  }

  /* Responsive */
  @media (max-width: 400px) {
    .card {
      width: 90vw;
      padding: 16px;
    }
    .user-info {
      grid-template-columns: 1fr;
    }
  }
`}</style>


      <main className="card" role="main" aria-label="Brown CodeVine Developer Information Card">
        <Header />

        <div className="title">Developers Info</div>

        <div className="user-info" aria-live="polite">
          <div>
            <strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}
          </div>
          <div>
            <strong>Gender:</strong> {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </div>
          <div>
            <strong>Age:</strong> {user.dob.age}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <div>
            <strong>Location:</strong> {user.location.city}, {user.location.country}
          </div>
        </div>

        <div className="photo-container">
          <img src={user.picture.large} alt={`Photo of ${user.name.first} ${user.name.last}`} />
        </div>

        <button onClick={fetchUser} aria-label="Fetch other developer information">
          See Other Developers Info
        </button>
      </main>
    </>
  );
}

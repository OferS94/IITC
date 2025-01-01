import React from "react";
import { users } from "../../data/users";

const Profile: React.FC = () => {
  const user = users[0]; // Simulate fetching the logged-in user

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <h2 className="mt-4 font-semibold">Playlists:</h2>
      <ul className="list-disc">
        {user.playlists.map((playlistId) => (
          <li key={playlistId}>{playlistId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

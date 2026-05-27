import React from "react";

const Profile = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="p-6 md:p-10">

      <h1 className="text-4xl font-extrabold mb-6 text-white">
        Profile Details
      </h1>

      {user ? (
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">

          <table className="w-full text-left text-white">

            <thead className="bg-white/10 border-b border-white/10">
              <tr>
                <th className="p-4 text-gray-300 font-semibold">Field</th>
                <th className="p-4 text-gray-300 font-semibold">Information</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">

              <tr className="hover:bg-white/5 transition">
                <td className="p-4 font-medium text-gray-300">Name</td>
                <td className="p-4">{user.name}</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="p-4 font-medium text-gray-300">Email</td>
                <td className="p-4">{user.email}</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="p-4 font-medium text-gray-300">User ID</td>
                <td className="p-4 break-all">{user.id}</td>
              </tr>

            </tbody>

          </table>

        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-gray-300">
          No profile information available. Please log in.
        </div>
      )}

    </div>
  );
};

export default Profile;
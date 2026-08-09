import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  function searchHandler() {

    if (!inputValue.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setError("");

    fetch(`https://api.github.com/users/${inputValue.trim()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }

        return response.json();
      })
      .then((data) => {
        setUser(data);
        // console.log(data);
        
        setInputValue("");
      })
      .catch((error) => {
        setUser(null);
        setError(error.message);
      });
  }

  return (
    <div className="h-screen bg-[#181818] text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl rounded-2xl bg-[#252525] p-5 sm:p-8 shadow-xl">
        
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            GitHub User Finder
          </h1>
         
        </div>

        {/* Search */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="min-w-0 flex-1 rounded-lg border border-gray-600 bg-[#181818] px-4 py-3 text-sm outline-none transition focus:border-blue-500"
            type="search"
            placeholder="Enter GitHub username..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchHandler();
              }
            }}
          />

          <button
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 active:scale-95"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}

        {/* User */}
        {user && (
          <div className="mt-6 rounded-xl border border-gray-700 bg-[#1d1d1d] p-5">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              
              <img
                src={user.avatar_url}
                alt={user.login}
                className="h-28 w-28 rounded-full border-4 border-gray-700 object-cover"
              />

              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h2 className="truncate text-xl font-bold">
                  {user.name || user.login}
                </h2>

                <p className="text-sm text-gray-400">
                  @{user.login}
                </p>

                {user.bio && (
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {user.bio}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[#292929] p-3">
                    <p className="text-lg font-bold">{user.followers}</p>
                    <p className="text-xs text-gray-400">Followers</p>
                  </div>

                  <div className="rounded-lg bg-[#292929] p-3">
                    <p className="text-lg font-bold">{user.following}</p>
                    <p className="text-xs text-gray-400">Following</p>
                  </div>

                  <div className="rounded-lg bg-[#292929] p-3">
                    <p className="text-lg font-bold">{user.public_repos}</p>
                    <p className="text-xs text-gray-400">Repos</p>
                  </div>
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View GitHub Profile →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
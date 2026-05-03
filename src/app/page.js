"use client";
import { useEffect, useState } from "react";
import FriendCard from "@/components/FriendCard";
export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);
  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
  return (
    <div className="container mx-auto px-4 py-10">
      <section className=" text-black py-16 px-4 rounded-3xl mb-12 text-center">
  <h1 className="text-4xl font-bold mb-2">Friends to keep close in your life</h1>
        <p className="text-gray-400 mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
        <button className="btn bg-green-900 text-white">
            Add a Friend
        </button>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
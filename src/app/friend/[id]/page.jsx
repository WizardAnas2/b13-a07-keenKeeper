"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const foundFriend = data.find(f => f.id === parseInt(id));
        setFriend(foundFriend);
      });
  }, [id]);
  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString(),
    };
    const existingTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existingTimeline]));
    toast.success(`${type} with ${friend.name} logged!`);
  };
  if (!friend) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
  return (
    <div className="container mx-auto p-4 md:p-10 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
            <img 
              src={friend.picture} 
              className="rounded-full w-28 h-28 mx-auto object-cover border-4 border-gray-50" 
              alt={friend.name} 
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">{friend.name}</h2>
            <div className="flex flex-col gap-2 mt-2 items-center">
              <span className="badge badge-error text-white font-bold text-xs px-4">Overdue</span>
              <div className="flex gap-2">
                {friend.tags?.map(tag => (
                  <span key={tag} className="badge bg-green-100 text-green-700 border-none font-bold text-[10px] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
  {friend.bio}
</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-sm font-semibold">
            <button className="w-full py-4 px-6 text-center hover:bg-gray-50 border-b border-gray-50 text-xl">Snooze 2 Weeks</button>
            <button className="w-full py-4 px-6 text-center hover:bg-gray-50 border-b border-gray-50 text-xl">Archive</button>
            <button className="w-full py-4 px-6 text-center text-red-500 hover:bg-red-50 text-xl">Delete</button>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-2">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-gray-800">30</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-2">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-2xl font-bold text-gray-800 mt-2">May 20, 2026</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-2">Next Due</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl text-gray-500 font-medium mt-2 pb-2">Relationship goal</h2>
            <p className="text-md text-gray-400 font-medium  mt-2">Connect every 30days</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-700 text-lg mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-10">
              <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center p-6 rounded-xl border bg-gray-100 hover:bg-blue-50 transition-all border-none">
                <img src="/call.png" className="w-8 h-8 mb-2 opacity-50" alt="Call icon" />
                <span className="text-2xl font-bold">Call</span>
              </button>
              <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center p-6 rounded-xl border bg-gray-100 hover:bg-green-50 transition-all border-none">
                <img src="/text.png" className="w-8 h-8 mb-2 opacity-50" alt="Text icon" />
                <span className="text-2xl font-bold">Text</span>
              </button>
              <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center p-6 rounded-xl border bg-gray-100 hover:bg-purple-50 transition-all border-none">
                <img src="/video.png" className="w-8 h-8 mb-2 opacity-50" alt="Video icon" />
                <span className="text-2xl font-bold">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
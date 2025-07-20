"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RandomPersonService } from "@/features/random-person/api/get.randomperson";
import { ISimplifiedUserResults } from "@/features/random-person/types/randomperson.interface";

export default function TeamSection() {
  const [users, setUsers] = useState<ISimplifiedUserResults[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const saulTeamRoles: string[] = [
    "Legal Assistant",
    "Private Investigator",
    "Client Liaison",
    "Paralegal",
    "Office Manager",
    "Security Consultant",
  ];

  useEffect(() => {
    const fetchRandomPeople = async () => {
      try {
        const response = await RandomPersonService(6);
        setUsers(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRandomPeople();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading team members...
      </div>
    );
  }

  if (error) {
    return (
      <p className="w-screen h-screen font-bold text-8xl text-red-600 flex justify-center items-center">
        Connection error
      </p>
    );
  }

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110 z-0"
        style={{ backgroundImage: `url('/bcs-bg2.jpg')` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center drop-shadow-md">
          Saul’s Trusted Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <Card
              key={user.email}
              className="p-6 bg-yellow-50/90 border border-yellow-400/40 shadow-md flex flex-col gap-4"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={user.picture}
                    alt={user.fullname}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {user.fullname
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-[#4B3B00]">
                    {user.fullname}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {saulTeamRoles[index] || "Support Staff"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

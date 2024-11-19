import { User } from "@/state/api";
import Image from "next/image";
import React from "react";
import image1 from "../../../public/i1.jpg";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={image1}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;

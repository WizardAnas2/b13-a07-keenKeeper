import Link from 'next/link';
const FriendCard = ({ friend }) => {
const getStatusColor = (days) => {
    if (days <= 7) return "badge-success";
    if (days <= 20) return "badge-warning";
    return "badge-error";
  };
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <figure className="px-6 pt-6">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="rounded-full w-24 h-24 object-cover border-2 border-primary/10" 
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-lg font-bold">{friend.name}</h2>
        <div className={`badge ${getStatusColor(friend.days_since_contact)} gap-2 text-xs`}>
          {friend.days_since_contact} days ago
        </div>
        <p className="text-sm text-gray-500 line-clamp-1 mt-2">{friend.bio}</p>
        <div className="card-actions mt-4 w-full">
          <Link href={`/friend/${friend.id}`} className="btn btn-primary btn-sm btn-block">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FriendCard;
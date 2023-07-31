import NotficationCard from "@components/notification/notficationCard";

export default function Notification() {
  const notifications = [
    {
      title: "New Message",
      body: "You have received a new message from John Doe.",
      date: "20/4/2321",
    },
    {
      title: "Reminder",
      body: "numquam harum excepturi culpa repudiandae ipsum enim similique adipisci minima voluptate earum quasi, odit eius a sint doloremque nobis perferendis,numquam harum excepturi culpa repudiandae numquam harum excepturi culpa repudiandae unde repellat ad! Reiciendis minima omnis ipsa",
      date: "23/3/2013",
    },
    {
      title: "Discount Offer",
      body: "Get 20% off on all purchases with the code 'SUMMER20'.",
      date: "10/21/2032",
    },
  ];
  
  return (
    <>
      <div className="w-full min-h-[70vh] mt-3">
        <div className="max-w-[1150px] mx-auto mt-5">
          <div className="font-bold text-white bg-[#912c2c] p-2 pl-4 mb-3 m-2 capitalize ">
            Notifications
          </div>
          {notifications.map((notification) => (
            <NotficationCard notification={notification} />
          ))}
        </div>
      </div>
    </>
  );
}

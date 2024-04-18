const VideoCard = () => {
  return (
    <div>
      <video className="w-full" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;

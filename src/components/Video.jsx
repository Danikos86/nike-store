import video from '../assets/video/Only_Basketbal_Nike.mp4'

const Video = () => {
  return (
    <>
      <div className='mt-20 nike-container'>
        <div>
            <h2 className='text-center my-10 text-6xl font-bold'>ONLY BASKETBALL</h2>
            <p className='text-center text-2xl mb-5 font-medium'>No matter who you are, this game gives you a feeling that no other can. <br />
            Shop the best of Performance and Lifestyle product.</p>
        </div>
        <video className='w-full h-full' 
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true} src={video}></video>
      </div>
    </>
  )
}

export default Video

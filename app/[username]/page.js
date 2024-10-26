import React from 'react'

const username = ({ params }) => {
  return (
    <>
      {params.username}
      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1730678400&token-hash=VJkmzSQ9tPGlncD0GhafkfgHXnNeH0hm81eCcu1iuS0%3D"
          alt=""
        />
        <div className="absolute -bottom-14 right-[45%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ5O9_4cyiRtqN7dkyfITvPhtgeLm-2DH9Q&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ5O9_4cyiRtqN7dkyfITvPhtgeLm-2DH9Q&s"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default username

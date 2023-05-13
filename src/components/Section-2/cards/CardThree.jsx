import Image3 from "./card_images/Image3"

const CardThree = () => {
  return (
    <div className="md:w-[80%] m-auto rounded-lg p-4 bg-[#101010] rounded-2xl animate-in slide-in-from-bottom-48 zoom-in-75 duration-500 ease-in-out">
        <Image3/>
<div className="text-center my-10 mx-auto md:w-[75%]">
  <h2 className="text-4xl font-[600]">
   <p>A powerful assistant</p>
   <p>just a click away</p>
  </h2>
  <p className="text-xl text-gray-300 my-4">
  Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard
  </p>
</div>
</div>
  )
}

export default CardThree
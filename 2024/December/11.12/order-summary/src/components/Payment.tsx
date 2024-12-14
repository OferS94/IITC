function Payment() {
  return (
    <div className="bg-primary-Pale-blue rounded-lg flex items-center justify-between p-4">
      <img src="../../public/images/icon-music.svg" alt="" />
      <div className="">
        <p>Annual Plan</p>
        <p>$59.99/year</p>
      </div>
      <button className="text-primary-Bright-blue font-bold cursor-pointer underline">Change</button>
    </div>
  )
}

export default Payment
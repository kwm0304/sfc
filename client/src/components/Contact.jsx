const Contact = () => {
return(
  <div className="flex gap-8 justify-center  bg-sky-600 pb-8">
    <div className=" text-white flex flex-col items-center">
     <h4 className="font-semibold text-2xl">Email</h4>
     <a href="mailto:solesforchrist@outlook.com"><h5 className="text-xl mt-4 italic">solesforchrist@outlook.com</h5></a>
  </div>
  <div className=" text-white flex flex-col items-center">
     <h4 className="font-semibold text-2xl">Phone</h4>
     <a href="tel:704-796-9267"><h5 className="text-xl mt-4 italic">704-796-9267</h5></a>
  </div>
  
  </div>
)
}
export default Contact
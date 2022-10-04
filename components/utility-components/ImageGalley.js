import Image from "next/image";


export default function ImageGalley({images}) {
    
  return (
    <div className="row">
      <div className="col-12 col-md-7">
        <div className="rounded-4 overflow-hidden">
          <Image src={images.imageOne} layout="responsive" alt="..." priority />
        </div>
        <div className="rounded-4 overflow-hidden mt-3">
          <Image src={images.imageTwo} layout="responsive" alt="..." priority />
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="rounded-4 mt-3 mt-md-0 overflow-hidden">
          <Image src={images.imageThree} layout="responsive" alt="..." priority />
        </div>
        <div className="rounded-4 overflow-hidden mt-3">
          <Image src={images.imageFour} layout="responsive" alt="..." priority />
        </div>
      </div>
    </div>
  );
}

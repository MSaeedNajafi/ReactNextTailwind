/* eslint-disable @next/next/no-img-element */
type Props = {
  src: string;
  title: string;
  buttonText: string;
  imageOnLeft: boolean;
};

export default function ImageWithText({
  src,
  title,
  buttonText,
  imageOnLeft,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      {imageOnLeft ? (
        <div className="md:w-1/2">
          <img src={src} alt="Image" className="w-full h-auto" />
        </div>
      ) : null}
      <div className="md:w-1/2 bg-gray-100 py-8 px-6 md:px-12 bg-transparent flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          leo vitae vestibulum. Mauris eu lacinia metus. Donec id risus et
          tellus rutrum dignissim.
        </p>
        <div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded ">
            {buttonText}
          </button>
        </div>
      </div>
      {!imageOnLeft ? (
        <div className="md:w-1/2">
          <img src={src} alt="Image" className="w-full h-auto " />
        </div>
      ) : null}
    </div>
  );
}

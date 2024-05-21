import { useState } from "react";
import { Image } from "image-js";

function Converter() {
  const [image, setImage] = useState("");

  const upload = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      if (reader.result) {
        const result = await Image.load(reader.result);
        const resized = result.resize({ height: 240 });
        setImage(`data:image/png;base64,${resized.toBase64()}`);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex justify-center items-center mt-40">
      <div>
        <h3 className="text-xl mb-2">Image Converter</h3>
        {image ? (
          <>
            <img
              src={image}
              className="rounded-3xl bg-cover h-32 w-32 inline-block bg-[#111]"
            />
            <div className="flex gap-2 flex-row mt-2">
              <button
                className="text-sm bg-red-500 hover:bg-red-400 px-3 py-2 rounded"
                onClick={() => {
                  setImage("");
                }}
              >
                Cancel
              </button>
              <a
                href={image}
                download="image.png"
                className="text-sm text-white bg-[#222] hover:bg-[#333] px-3 py-2 rounded"
              >
                Download
              </a>
            </div>
          </>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="inline-block px-6 py-3 border-[3px] border-dashed rounded-lg cursor-pointer bg-[#333] border-[#555] hover:border-[#666] hover:bg-[#444]"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-8 h-8 mb-4 fill-[#bbb]"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <p className="mb-2 text-sm text-[#bbb] font-semibold">
                Click to upload
              </p>
            </div>
            <input
              id="dropzone-file"
              onChange={upload}
              accept="image/*"
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>
    </main>
  );
}

export default Converter;

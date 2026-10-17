import { MyTitle } from "./ui/MyTitle";
import { useCallback, useState } from "react";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {

  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleMyAPI = useCallback(() => {
    console.log("Llamando a mi API");
  }, []);


  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoHook</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPI} />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Cambiar titulo
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Cambiar subtitulo
      </button>
    </div>
  );
};

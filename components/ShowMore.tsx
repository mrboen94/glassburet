import { MdExpandLess } from "react-icons/md";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const ShowMore = ({ show, setShow }: Props): JSX.Element => (
  <div className="relative mt-8 max-w-md">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center">
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        <MdExpandLess
          className={`-ml-1.5 mr-1 h-5 w-5 text-gray-400 ${
            show ? "rotate-180" : ""
          } duration-200`}
          aria-hidden="true"
        />
        <span>Previously...</span>
      </button>
    </div>
  </div>
);

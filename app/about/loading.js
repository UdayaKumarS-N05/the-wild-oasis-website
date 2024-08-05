import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid place-items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading about data...</p>
    </div>
  );
}

export default Loading;

import FormComponent from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 rounded-lg flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl mb-4">Form</h1>
      <FormComponent />
    </div>
  );
}

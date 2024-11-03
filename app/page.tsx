import Avatar from "@/components/avatar";

export default function Home() {
  return (
    <div>
      <div className="h-[100vh] w-full p-10">
        <div className=" bg-background h-full rounded-2xl flex items-center justify-center border-4 border-stone-900">
          <div className="text-center">
            <Avatar />
            <div className="mt-12">
              <div className="text-3xl">背影如正面</div>
              <div className="text-xl my-4">一个喜欢画画的前端工程师</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

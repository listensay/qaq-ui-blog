import Avatar from '@/components/avatar';

export default function Home() {
  return (
    <div>
      <section className="h-[100vh] w-full">
        <div className=" h-full flex items-center justify-center">
          <div className="text-center">
            <Avatar size={150} className="mx-auto" />
            <div className="mt-6">
              <div className="text-3xl">背影如正面</div>
              <div className="text-xl my-4">一个喜欢画画的前端工程师</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

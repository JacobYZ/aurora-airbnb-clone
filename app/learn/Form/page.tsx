import ClientOnly from "@/app/components/ClientOnly";
import YouTubeForm from "@/app/components/YouTubeForm";

const Page = () => {
  return (
    <ClientOnly>
      <YouTubeForm />
    </ClientOnly>
  );
};

export default Page;

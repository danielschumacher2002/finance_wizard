import ContentContainer from "./ContentContainer";

export default function SocialMedia() {
  return (
    <ContentContainer title={"Social Media"}>
      <div
        className="space-y-2
            pl-4 py-2"
      >
        <p className="text-primary text-xl font-[Inter] font-bold sm:text-2xl">
          Coming Soon
        </p>
        <p className="text-white/40 text-md font-[Inter] font-semibold sm:text-lg">
          In Development
        </p>
      </div>
    </ContentContainer>
  );
}

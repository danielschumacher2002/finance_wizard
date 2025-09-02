import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import useSideMenu from "../hooks/SideMenuHook";
import { aboutQuestionPath } from "../assets/data/iconPath";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  return (
    <MainLayout>
      {/* Fixed elements */}
      <Header toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={menuOpen} />
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu} />

      {/* Main content */}
      <MainLayoutInner>
        <PageBanner path={aboutQuestionPath} />


        <AboutSection className="bg-secondary rounded-md p-6 sm:p-10 flex flex-col gap-4 shadow-lg">
          <h1 className="text-primary text-3xl sm:text-4xl font-[Inter] font-extrabold">
            About Me
          </h1>
          <p className="text-white/80 leading-relaxed text-lg">
            Hi, I’m Daniel, a very passionate fullstack developer. I try to build clean,
            modern and intuitive digital experiences.
          </p>
        </AboutSection>

        <AboutSection title="Skills &amp; Tools" id="skills">
          <p className="text-white/70 leading-relaxed">
            I work with modern web technologies and always strive to improve my
            skill set. My main stack includes:
          </p>
          <ul className="list-disc list-inside text-white/80 leading-relaxed">
            <li>React &amp; JavaScript</li>
            <li>TailwindCSS</li>
            <li>Node.js &amp; Next.js</li>
            <li>Git &amp; GitHub</li>
            <li>AWS &amp; Vercel</li>
          </ul>
        </AboutSection>

        <AboutSection title="My Philosophy" id="philosophy">
          <p className="text-white/70 leading-relaxed">
            For me, programming is not just about writing code, it’s about
            creating meaningful products.
          </p>
        </AboutSection>

        <AboutSection title="Outside of Code" id="personal">
          <p className="text-white/70 leading-relaxed">
            When I’m not coding, I enjoy exploring new ideas, learning about
            innovation and entrepreneurship and staying active. I believe a
            healthy balance between mind and body is key to creativity and
            productivity.
          </p>
        </AboutSection>

        <AboutSection title="Let’s Connect" id="contact">
          <p className="text-white/70 leading-relaxed">
            I’m always open to new opportunities, collaborations and
            conversations. Whether it’s about coding, design, or just sharing
            ideas.
          </p>
          <p className="text-white/80">
            <a
              href="mailto:danielschumacher2025@proton.me"
              className="text-primary font-semibold hover:underline"
            >
              danielschumacher2025@proton.me
            </a>
          </p>
        </AboutSection>

        <Footer />
      </MainLayoutInner>

      
    </MainLayout>
  );
}


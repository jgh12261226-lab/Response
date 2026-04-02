import imgBackground from "./8a64a84ca204cd4bc4f075371baa76192838cc82.png";
import imgDeviceFrame from "./cb539a879451a5eaca6ab6323fd7d52c1d9326af.png";
import imgImage1 from "./a5bb04c6e51fb144f4a45175d6a40a4d57122eb0.png";
import imgImage2 from "./34824412ee030057b26013f4987a47f91c1638ea.png";
import imgImage3 from "./5df41fc0f915f3e9049eb5c49b269edb1ef4ab76.png";
import imgImage4 from "./f98ac66209e6ec4bf25b18555c89ea6aa800fc64.png";
import imgImage from "./6480a52b4ccf55f226f31501e403af0ce0530229.png";
import imgImage5 from "./3c8413f5b8f065f5e119be497bd42be5d5fa1dfe.png";
import imgImage6 from "./ec9ece07e59d387940a98bfe1f094d83aab63bc3.png";

function PrimaryButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Your main offer</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Optional second</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-end flex flex-wrap gap-[16px] items-end justify-center relative shrink-0" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-1.6px] w-[min-content]">
        <h1 className="block leading-[1.1]">Landing page</h1>
      </div>
      <Buttons />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden="true" className="h-[750px] relative shrink-0 w-full" data-name="Background" role="presentation">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-center pb-[96px] pt-[120px] px-[120px] relative size-full">
          <Text />
          <div className="aspect-[922/599] pointer-events-none relative rounded-[32px] shrink-0 w-full" data-name="Device frame">
            <img alt="Product detail" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgDeviceFrame} />
            <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 rounded-[32px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h2 className="block leading-[1.2]">A really compelling headline</h2>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Call to action</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pb-[80px] relative shrink-0 w-full" data-name="Content">
      <Text1 />
      <Button />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column 1">
      <div className="h-[390px] relative rounded-[16px] shrink-0 w-full" data-name="Image 1">
        <img
          alt="Gallery image
"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgImage1}
        />
      </div>
      <div className="h-[390px] relative rounded-[16px] shrink-0 w-full" data-name="Image 2">
        <img
          alt="Gallery image
"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgImage2}
        />
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px pt-[96px] relative" data-name="Column 2">
      <div className="h-[390px] relative rounded-[16px] shrink-0 w-full" data-name="Image 1">
        <img
          alt="Gallery image
"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgImage3}
        />
      </div>
      <div className="h-[390px] relative rounded-[16px] shrink-0 w-full" data-name="Image 2">
        <img
          alt="Gallery image
"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgImage4}
        />
      </div>
    </div>
  );
}

function ImageGallery() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Image gallery">
      <Column />
      <Column1 />
    </div>
  );
}

function ImageAndText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Image and text">
      <Content />
      <ImageGallery />
    </div>
  );
}

function FeatureGallery() {
  return (
    <section className="relative shrink-0 w-full" data-name="Feature gallery">
      <div className="content-stretch flex flex-col items-start px-[120px] py-[80px] relative w-full">
        <ImageAndText />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h2 className="block leading-[1.2]">Testimonials</h2>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45]">A little line about what’s being said and who’s saying it.</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Carl Caterpillar</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
        <p className="leading-[1.4]">{`Growth at Cocoon & Co.`}</p>
      </div>
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="Author">
      <Image />
      <Text2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Author />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Card 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <Header1 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full">
            <h2 className="block leading-[1.45]">{`Using this product felt like it transformed me completely. `}</h2>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Image1() {
  return (
    <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage5} />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Wanda Wingleton</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
        <p className="leading-[1.4]">Lepidopterist at Butterflai</p>
      </div>
    </div>
  );
}

function Author1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="Author">
      <Image1 />
      <Text3 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Author1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Card 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <Header2 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full">
            <h2 className="block leading-[1.45]">Your expectations will fly sky high. I felt like I was soaring.</h2>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Cards">
      <Card />
      <Card1 />
    </div>
  );
}

function Testimonial() {
  return (
    <section className="relative shrink-0 w-full" data-name="Testimonial">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[120px] pt-[80px] px-[120px] relative w-full">
          <Header />
          <Cards />
        </div>
      </div>
    </section>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Platform</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Individuals</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.4]">Teams</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Admins</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Developers</p>
      </div>
    </nav>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Features</p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 2">
      <Header4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Core features</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Pro experience</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Integrations</p>
      </div>
    </nav>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Learn more</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 3">
      <Header5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Blog</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Case studies</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Customer stories</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Best practices</p>
      </div>
    </nav>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Support</p>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 4">
      <Header6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Contact</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Support</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Legal</p>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[96px] items-start relative shrink-0" data-name="Nav">
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px py-[80px] relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.15)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.2]">Namedly</p>
      </div>
      <Nav />
    </div>
  );
}

function Image2() {
  return (
    <div aria-hidden="true" className="relative shrink-0 w-full" data-name="Image" role="presentation">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[120px] px-[120px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <main className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" tabIndex="-1">
      <Background />
      <FeatureGallery />
      <Testimonial />
      <Image2 />
    </main>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop">
      <Container />
    </div>
  );
}
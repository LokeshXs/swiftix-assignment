import ContactForm from "@/components/ContactForm";
import { Reveal, SideAnimation } from "@/components/RevealAnimate";
// import SocialMediaButtons from '@/components/ui/SocialMediaButtons';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleDotDashed, Instagram } from "lucide-react";
import Link from "next/link";

const NEXT_STEPS = [
  {
    title: "We will contact you",
    description:
      "We will review your submission promptly and one of our experts will reach out to you shortly to discuss your needs in detail",
  },
  {
    title: "We'll prepare a proposal",
    description:
      "After reviewing your inquiry, we will diligently work on crafting a customized proposal tailored to your specific needs and objectives",
  },
  {
    title: "Let's start building",
    description:
      "Once we've aligned on the proposal and details, it's time to kick off the exciting journey of bringing your project to life!",
  },
];

export const metadata = {
  title: "Web Development for Businesses in Europe | Webta Contact",
  description:
    "Contact Webta, your website development partner in Europe. Let's discuss your specific needs and how Webta can help. Fill out our form to get started.",
};

export default function ContactPage() {
  return (
    <main className="   min-h-screen w-full  ">
      <section className="pt-24 pb-8 max-sm:pb-14 h-[480px] max-sm:h-[400px] bg-custom-contact text-secondary-foreground ">
        <div className=" max-container flex flex-col justify-between items-start h-full px-4 ">
          <div>
            <h1 className="text-5xl text-primary-foreground max-lg:text-4xl max-[420px]:text-3xl font-bold  w-full">
              <SideAnimation>Contact Us</SideAnimation>
            </h1>
            <Reveal>
              <p className=" text-lg mt-4 max-sm:text-base text-primary-foreground ">
                Connect with us
              </p>
            </Reveal>
          </div>
          {/* <div>
            <SocialMediaButtons href="https://www.instagram.com/webtaweb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram className=' text-primary h-12 w-12' />
            </SocialMediaButtons>
          </div> */}
        </div>
      </section>

      <section className=" max-w-[1400px] mx-auto flex max-lg:flex-col-reverse max-lg:gap-24 max-sm:gap-12   py-12 px-4 text-secondary-foreground">
        <div className=" w-[500px] max-lg:w-full max-lg:h-[520px] flex flex-col items-start ">
          <iframe
            width="100%"
            height="100%"
            className="border-none"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Surat,%20India+(Swiftix)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
           
          </iframe>
        </div>
        <div className=" flex-1  ">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}



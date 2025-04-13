"use client"

import { MainHeader } from "@/components/main-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { Footer } from "@/components/footer"
import { CTAButton } from "@/components/cta-button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        @font-face {
          font-family: 'Boldonse';
          src: url('/fonts/boldonse.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-boldonse {
          font-family: 'Boldonse', sans-serif;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
          color: #06010D;
        }
      `}</style>

      <MainHeader activePage="Kontakt" />

      <main className="flex-1">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h1 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="max-w-3xl mx-auto text-[#06010D]/80 md:text-lg">
              Masz pytania? Jesteśmy tutaj, aby pomóc. Skontaktuj się z nami w dowolny sposób.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-[#06010D]/70">kontakt@turniejekoszykarskie.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-[#06010D]/70">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adres</h3>
                  <p className="text-[#06010D]/70">
                    ul. Koszykarska 42
                    <br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#06010D] mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-12 px-3 py-2 border border-[#F27507]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F27507]"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#06010D] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 px-3 py-2 border border-[#F27507]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F27507]"
                    placeholder="Twój adres email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#06010D] mb-1">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-[#F27507]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F27507]"
                    placeholder="Twoja wiadomość"
                  ></textarea>
                </div>

                <CTAButton type="button" className="w-full" onClick={() => alert("Wiadomość wysłana!")}>
                  <Send className="mr-2 h-4 w-4" />
                  Wyślij wiadomość
                </CTAButton>
              </form>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}

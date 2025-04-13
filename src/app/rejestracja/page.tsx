"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RippleButton } from "@/components/ripple-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Upload, User } from "lucide-react"

export default function RegistrationPage() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Formularz rejestracyjny wysłany!")
  }

  const cities = [
    "Warszawa",
    "Kraków",
    "Łódź",
    "Wrocław",
    "Poznań",
    "Gdańsk",
    "Szczecin",
    "Bydgoszcz",
    "Lublin",
    "Białystok",
  ]

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

      <Header />

      <main className="flex-1 bg-[#D9A78B]/30 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative overflow-hidden">
              {/* Basketball pattern in background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-4 border-dashed border-[#F27507]/10 opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border-4 border-dashed border-[#BF3111]/10 opacity-50"></div>

              <div className="relative">
                <h1 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-2">
                  Załóż konto zawodnika
                </h1>
                <p className="text-[#06010D]/70 mb-8">Dołącz do platformy i bierz udział w turniejach w całej Polsce</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Photo upload section */}
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative w-32 h-32 rounded-full bg-[#D9A78B]/20 flex items-center justify-center overflow-hidden border-2 border-dashed border-[#F27507]/30 mb-4">
                      {avatarPreview ? (
                        <Image
                          src={avatarPreview || "/placeholder.svg"}
                          alt="Avatar preview"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <User className="h-16 w-16 text-[#F27507]/50" />
                      )}
                    </div>
                    <label
                      htmlFor="avatar"
                      className="flex items-center gap-2 h-10 px-4 rounded-lg border border-[#F27507]/20 bg-white hover:bg-[#F27507]/5 transition-colors cursor-pointer text-[#06010D]"
                    >
                      <Upload className="h-4 w-4 text-[#F27507]" />
                      <span>Dodaj zdjęcie</span>
                    </label>
                    <input id="avatar" type="file" accept="image/*" className="sr-only" onChange={handleAvatarChange} />
                    <p className="text-xs text-[#06010D]/50 mt-1">Maksymalny rozmiar: 2MB. Formaty: JPG, PNG</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#06010D] font-medium">
                        Imię
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Twoje imię"
                        required
                        className="h-12 rounded-lg border-[#F27507]/20 focus-visible:ring-[#F27507] text-[#06010D]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#06010D] font-medium">
                        Nazwisko
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Twoje nazwisko"
                        required
                        className="h-12 rounded-lg border-[#F27507]/20 focus-visible:ring-[#F27507] text-[#06010D]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-[#06010D] font-medium">
                        Wiek
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        min="10"
                        max="99"
                        placeholder="Twój wiek"
                        required
                        className="h-12 rounded-lg border-[#F27507]/20 focus-visible:ring-[#F27507] text-[#06010D]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-[#06010D] font-medium">
                        Miasto, z którego pochodzisz
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 rounded-lg border-[#F27507]/20 focus:ring-[#F27507] text-[#06010D]">
                          <SelectValue placeholder="Wybierz miasto" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Inne</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#06010D] font-medium">
                        Numer telefonu
                      </Label>
                      <div className="flex">
                        <div className="flex items-center justify-center px-3 h-12 bg-[#D9A78B]/10 border border-r-0 border-[#F27507]/20 rounded-l-lg text-[#06010D]">
                          +48
                        </div>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="123 456 789"
                          required
                          className="h-12 rounded-none rounded-r-lg border-[#F27507]/20 focus-visible:ring-[#F27507] text-[#06010D]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#06010D] font-medium">
                        Adres e-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="twoj@email.pl"
                        required
                        className="h-12 rounded-lg border-[#F27507]/20 focus-visible:ring-[#F27507] text-[#06010D]"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <RippleButton
                      type="submit"
                      className="w-full h-14 bg-[#F27507] hover:bg-[#F27507]/90 text-white font-bold text-lg rounded-lg"
                    >
                      Zarejestruj się
                    </RippleButton>

                    <div className="mt-4 text-center">
                      <Link href="/logowanie" className="text-[#BF3111] hover:text-[#BF3111]/80 font-medium">
                        Masz już konto? Zaloguj się
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#06010D]/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white px-2 text-[#06010D]/50">lub</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <RippleButton
                      type="button"
                      variant="outline"
                      className="h-12 border-[#F27507]/20 bg-white hover:bg-[#F27507]/20 text-[#06010D] hover:text-[#06010D] font-medium"
                      onClick={() => alert("Logowanie przez Google")}
                    >
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                      Google
                    </RippleButton>

                    <RippleButton
                      type="button"
                      variant="outline"
                      className="h-12 border-[#F27507]/20 bg-white hover:bg-[#F27507]/20 text-[#06010D] hover:text-[#06010D] font-medium"
                      onClick={() => alert("Logowanie przez Facebook")}
                    >
                      <Facebook className="mr-2 h-5 w-5 text-[#1877F2]" />
                      Facebook
                    </RippleButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

import { RippleButton } from "./ripple-button";
import { SectionWrapper } from "./section-wrapper";

export function PlayerProfile() {
  return (
    <SectionWrapper background="medium">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">
              Twój profil zawodnika
            </h2>
            <p className="text-[#06010D]/80 md:text-lg mb-6">
              Twoje koszykarskie CV. Twórz profil, zbieraj statystyki, pokazuj
              się drużynom i organizatorom. Im więcej grasz, tym bardziej jesteś
              widoczny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-center mb-2 text-2xl">🏅</div>
              <h3 className="font-bold text-center mb-1">Ranking graczy</h3>
              <p className="text-sm text-center text-[#06010D]/70">
                Rywalizuj o miejsce w rankingu najlepszych graczy
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-center mb-2 text-2xl">📊</div>
              <h3 className="font-bold text-center mb-1">Historia meczów</h3>
              <p className="text-sm text-center text-[#06010D]/70">
                Śledź swoje statystyki i postępy
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-center mb-2 text-2xl">🎥</div>
              <h3 className="font-bold text-center mb-1">Highlighty</h3>
              <p className="text-sm text-center text-[#06010D]/70">
                Dodawaj najlepsze akcje z Twoich meczów
              </p>
            </div>
          </div>

          <div className="mt-4">
            <RippleButton
              onClick={() => alert("Przejście do profilu zawodnika")}
            >
              Stwórz swój profil
            </RippleButton>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F27507]/20 mr-4 flex items-center justify-center">
                <span className="font-bold text-xl text-[#F27507]">MK</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Michał Kowalski</h3>
                <div className="text-sm text-[#06010D]/70">
                  Warszawa • Rozgrywający
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs px-2 py-0.5 bg-[#F27507]/10 text-[#F27507] rounded-full mr-1">
                    3x3
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-[#BF3111]/10 text-[#BF3111] rounded-full">
                    5x5
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                <div className="font-bold text-lg text-[#F27507]">24</div>
                <div className="text-xs text-[#06010D]/70">Turnieje</div>
              </div>
              <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                <div className="font-bold text-lg text-[#F27507]">156</div>
                <div className="text-xs text-[#06010D]/70">Mecze</div>
              </div>
              <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                <div className="font-bold text-lg text-[#F27507]">12.4</div>
                <div className="text-xs text-[#06010D]/70">Śr. pkt</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Ranking 3x3</span>
                <span className="font-bold">#42 w Polsce</span>
              </div>
              <div className="w-full bg-[#F27507]/10 rounded-full h-2">
                <div
                  className="bg-[#F27507] h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center text-sm mt-3">
                <span>Ranking 5x5</span>
                <span className="font-bold">#78 w Polsce</span>
              </div>
              <div className="w-full bg-[#BF3111]/10 rounded-full h-2">
                <div
                  className="bg-[#BF3111] h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

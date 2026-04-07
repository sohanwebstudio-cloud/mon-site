export default function APropos() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 bg-black">
            <img 
              src="https://framerusercontent.com/images/RcyjasnSSlm3qvyt0HKzg9XCXzE.jpeg" 
              alt="Portrait de Sohan, Founder" 
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-notable text-5xl md:text-6xl font-bold text-white mb-6">À propos</h1>
            <h2 className="text-xl md:text-2xl text-white mb-8 font-medium">Du plan au pixel.</h2>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                Sohan, Designer & Expert Framer. 
              </p>
              <p>
                Mon background en architecture dicte mon approche : éliminer le superflu pour ne garder que l&apos;essentiel.
              </p>
              <p>
                Je construis des expériences web immersives et performantes. Depuis mon studio en Bretagne, j&apos;accompagne une clientèle internationale.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <img src="https://framerusercontent.com/images/H3NRBTz83RfXze3U95FeD1aepY.jpg" alt="Detail" className="w-24 h-24 rounded-full object-cover border border-white/10" />
              <img src="https://framerusercontent.com/images/Z1GUrf9btmNCEkZdsMOi58oOVg.jpg" alt="Detail" className="w-24 h-24 rounded-full object-cover border border-white/10" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

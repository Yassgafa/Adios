"use client"

import { useState, useRef, type TouchEvent } from "react"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { text } from "stream/consumers"

const audioTexts = [
  {
    title: "16 de diciembre de 2025",
      text: `
Mi Kelly...

Hoy 16 de diciembre, primer día de novenas de Navidad, quise empezar a escribirte estas cartas.
No sé si siquiera te las vaya a mostrar, todo depende de ti jaja, quiero escribirte mis sentimientos diarios desde hoy hasta que se acabe el año, entonces serán alrededor de 16 cartas (no sé como saldrá esto), creo que serán muchos sentimientos encontrados, muchas emociones diarias que trataré de plasmar aquí.

Hoy solo puedo decirte que me sigue doliendo mucho todo esto.
Me duele tanto que no estés aquí conmigo para el primer día de novenas, cómo quisiera poder cantarle al niño Jesús contigo a mi lado, contigo dándome la mano, tantas veces que me imaginé contigo prendiendo velitas, pasando todos estos días juntos, es muy feo ese sentimiento.

Trato de entenderte tanto, pero muchas veces me nublo por cómo pienso y te pido perdón por eso, intentaré mejorar mucho eso.
  `,
    audioUrl: "/Adios/audio/ohnana.mp3",
    bgColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "17 de diciembre de 2025",
    text: ` Kelly 
No puedo en serio, no entiendo nada.
Tú me dices que yo no sé cómo estás tú, que no sé qué es lo que pasa dentro de tu mente, pero es que con solo verte se me hace tan difícil creer eso.
Dios mío, yo no soy capaz de respirar cerca de ti y tú como si nada, hoy entrené más temprano y pues tú también estabas a esa hora y hubo un momento que estabas en una máquina a mi lado… y no entiendo, no creo eso en serio, no sé cómo haces, yo ni pude seguir entrenando, no pude seguir ahí porque inmediatamente me dio un ataque de ansiedad, ya no podía respirar, se me aceleró el corazón y tuve que irme de una vez y tú seguías ahí entrenando como si nada, como si nunca hubiera pasado nada, dimeeeee como haces esoo, no entiendo nada, me duele tanto el corazón, el verte tan tranquila y tan capaz de seguir como si nada estando al lado mío cuando yo no puedo ni estar a unos metros de tii, dimeee por favor, le rezo tanto a Dios que me de tus fuerzas, que me de un poco de tu pensamiento porque en serio que todo esto me quema el alma, no sé cómo haces para no llamar, para no buscarme, en serio que no entiendo nada 😭
 `,
    audioUrl: "/Adios/audio/lunazoe.mp3",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "18 de de diciembre de 2025",
    text: `Después de casi no dormir, y después de mi respectiva terapia con mi psicóloga hoy pienso mucho lo que tratamos en la sesión. 
Cada persona es un mundo distinto, cada persona tiene un comportamiento y una personalidad distinta, y ese siempre ha sido mi consuelo, de que tú tomas las cosas distintas, que así como hay personas que el dolor lo sacan gritando, hay otras que ni siquiera se les nota que les duele, entonces después de sobrepensar tanto eso me da un poquito de consuelo que aunque se me nuble la vista y yo vea que no te duele nada, tal vez por dentro llevas otra lucha…discúlpame por pensar esas cosas, discúlpame por todo lo que alguna vez hice mi reina`,
    audioUrl: "/Adios/audio/tequierotanto.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "19 de diciembre de 2025",
    text: `Hoy no pude ir a entrenar, por lo tanto no pude verte en persona, pero no hay día en el que no mire tus fotos, no hay día en el que no recuerde tus besos, no hay día en el que no quiera amanecer junto a ti, abrazándote, dándonos calor, amanecer pegados, otro día más en el que sueño contigo, en el que sueño despierto, en el que deseo ver esa carita hermosa.

Trato de hacer cosas que antes hacía, trato de distraerme con cosas que me gustaban hacer, me lo recomienda mucho la psicóloga pero es tan complicado todo, no me dan ganas de hacer nada, no me siento bien con nada, intento hacerlo, intento hacerlo por ti, porque creo que ese ha sido tu secreto pero conmigo como que no funciona eso, tú tienes mucha más capacidad que yo y además de eso tú tienes a tu mamá, a tus hermanos, a tus amigas y creo que eso te ayuda a liberarte, pero yo no tengo a nadie, te tenía a ti, y puedes decir que tengo a mis papás, a mis hermanos tambien pero sabes que yo no funciono así, mi mamá me pregunta tanto, me ve tan enfermo, tan decaído todo el tiempo, yo solo puedo decirle que  estoy bien, aunque en realidad no es nada así, pero bueno, otro día más de cartas, aunque no te haya visto, sé que estuviste preciosa y fuerte como siempre, te amo mi kelly `,
    audioUrl: "/Adios/audio/ellaesmitodo.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },

   {
    title: "20 de diciembre de 2025",
    text: `Cómo quisiera poder escribirte o gritar fuerte lo preciosa que eres, lo increíble que eres, hoy subiste una historia y cómo siempre estás radiante, irradias alegría, irradias amor, irradias luz, irradias paz.

Es muy bonito verte así, nunca quisiera verte mal, nunca quisiera que estés como yo, me encanta verte brillar, me encanta verte, te mando mil besos, te mando mil “te amo” eres inigualable mi mona hermosa, mi niña divina, mi flaca preciosa, te amo mi kelly`,
    audioUrl: "/Adios/audio/uwaie.mp3",
    bgColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "21 de diciembre de 2025",
    text: `El día de hoy fui a misa, es algo que he estado volviendo a retomar, porque esto sí me excede mucho, tanto que ya no me queda de otra de pedir ayuda a Dios, todos los días oro, y en todas mis oraciones estás, todos los días le pido a Dios por ti, para que te vaya bien, para que te ayude a aclarar tu mente y puedas ver todo lo que te amo, todo lo que muero por ti, y que me de fuerzas para seguir, porque esto me excede tanto, esto me supera en cualquier aspecto, y le ruego tanto a Dios, le pido todos los días por nosotros, porque él es el único testigo de todo lo que siento, de todo lo que lloro, de todo lo que sufro, de todo lo que te extraño mi niña, te extraño tanto, te necesito tanto conmigo.
    
    Recuerdo esa primera vez que fuimos a misa con tu familia, eres la única persona a la que le he contado eso de mí, el hecho de que quería ir acompañado a misa de la mujer de mi vida, era algo que pensaba desde pequeño, que yo quería ir a la iglesia con la mujer que amara, y así fue, sin forzarlo, llegaste tú y de inmediato supe que eras esa mujer, te amo tanto mi reina, ojalá me pienses tanto como yo, ojalá me tengas en tu mente todavía…`,
    audioUrl: "/Adios/audio/eresmisueño.mp3",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "22 de de diciembre de 2025",
    text: `Hoy te vi de nuevo 
Una vez más con un brillo hermoso, con paz

Tú siempre tan tierna, tan cuidada, me duele mucho salir del gimnasio y ver que no volteas a verme, al menos antes lo hacías, al menos antes cruzábamos miradas y la quitabas de una vez, pero ya hace mucho no me miras, hace mucho no volteas, es triste eso cuando casi todo mi entrenamiento me la paso viéndote…

El día de hoy busca una excusa, por favor, cualquiera y ven hacia a mí, corre a mis brazos diciéndome que quieres pasar conmigo tu navidad, que me quieres besar a media noche busca cualquier excusa, que mañana es el último día para hacer eso, me dolerá en el alma pero yo no lo haré, no te escribiré, aunque muera por hacerlo no lo haré…estoy muy agotado mi kelly, estoy muy cansado, yo te busco tanto y tú no me buscas, en mi mente está la idea de siempre buscarte, de siempre escribirte pero no puedo hacerlo si tú no quieres que lo haga, si tú ni lo haces, me estoy agotando poco a poco mi reina, te necesito, donde estás? Donde nos encontramos? Me haces tanta falta
`,
    audioUrl: "/Adios/audio/sinomefallaelcorazon.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "23 de diciembre de 2025",
    text: `Hoy soñé contigo 

Soñé que me llamabas en la madrugada preguntándome dónde estaba, que me querías ver, de sintió tan real que me desperté de una vez mirando al celular para ver si era verdad que me habías llamado, pero no fue así, fui muy ingenuo, porque quería verte inmediatamente, quería contarte tantas cosas, que me llamaron para iniciar el otro año en otro trabajo, quería hablarte de todo lo que ha pasado en mi vida, quería mostrarte que me corté el pelo, quería que tú me contaras todo lo que ha pasado contigo, el cómo vas con el curso de gerencia, quiero saber cómo está tu familia, quiero saber todo de ti, aprender todo de ti…pero no estás, no estás aquí, no te tengo aquí

Si me buscas yo sé que correré y caeré rendido a tus pies, eres todo lo que deseo, eres lo único que quiero, pero quiero que seas tú la que tome la decisión, quiero que tú seas la que esté segura de todo, quiero amarte tanto, quitarte todos esos miedos, todas esas inseguridades, que veas que muero por ti, como lo he hecho desde el día 1, te amo tanto pero buscarte tanto y nunca encontrarte me cansa tanto, insistirte tanto y que siempre sea un no de tu parte, me mata, por favor no me mates, no mates este amor que tengo por ti, es lo más valioso que existirá 
`,
    audioUrl: "/Adios/audio/orion.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },
   {
    title: "24 de de diciembre de 2025",
    text: `He ido entendiendo poco a poco tu querer, aunque me duele aceptarlo voy entendiendo que no quieres estar conmigo y es totalmente válido, me mortifica tanto que no me quieras, que no me elijas, que no me desees como yo te deseo, pero debo entender que es normal, que es normal que alguien no me elija, me quema tanto porque yo sí te quiero, yo sí te deseo tanto, yo si quería que fueras mi navidad, abrazarte y besarte hoy a media noche, pero estoy entendiendo que tú no quieres lo mismo, que tú no quieres que sea yo esa persona, y está bien, no puedo obligarte a elegirme, no puedo obligarte a quererme, me duele tanto que en serio no me elijas, yo iba tan genuinamente enamorado de ti, tan perdido por tu sonrisa, tan derretido de amor, que siempre te elijo a pesar de todo, pero tú conmigo no sientes eso y es normal mi kelly, creo que por tu nobleza, por lo buena persona que eres, por la increíble mujer que eres te cuesta un poco aceptarlo, pero es normal no sentir lo mismo, me duele aceptarlo pero debo, me duele que no me quieras ver como yo a ti, que no quieras morirte por mí así como lo hago yo, pero debo aceptar que es normal que las personas no siempre quieren lo mismo que yo.
 
Ojalá tengas una hermosa navidad mi niña hermosa, disfruta mucho con tu familia, que yo desde lejos seguiré orando por ti, seguiré pidiéndole a Dios que te cuide a ti, a toda tu familia y a esa bella niña que viene en camino, hoy a medianoche miraré al cielo y le agradeceré al cielo por permitirme amarte, porque fuiste el mejor regalo que me pudo dar Dios, lo mejor que pudo llegar a mi vida, y así no estés conmigo esta noche, vas a ser siempre lo mejor que me pudo pasar, te amo mil millones mi niña, feliz navidad`,
    audioUrl: "/Adios/audio/mevaacostar.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "25 de diciembre de 2025",
    text: `Me equivoqué 

Cuando creí que no podía estar más roto, más decepcionado, llegó la navidad y me di cuenta de que sí podía dolerme más.

Es increíble todo esto, ya ni sé qué decir, guardaba la esperanza recibir al menos un mensaje ya que no quisiste ni pensaste pasar la navidad conmigo, un mensaje por Dios que solo dijera feliz navidad me bastaba para saber que en serio te importé, un mensaje así como lo hice a media noche el día de tu cumpleaños, así como lo hice el primero de diciembre, así como lo hice el día de velitas… creo que ese es mi principal error…creer que todo el mundo va a actuar como yo, va a sentir como yo, va a luchar como yo, va a amar como yo…

En fin… disfruta mucho donde sea que estés, aunque no haya presionado enviar, mi mensaje de navidad trataba de que tu fuiste mi mejor regalo, mi mejor bendición, que le agradezco tanto a Dios por ti, por cada una de las cosas que me brindaste y que te mereces el mundo entero, haber estado contigo fue lo mejor que me pudo pasar, feliz navidad mi kelly`,
    audioUrl: "/Adios/audio/enelproximobigbang.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },
   {
    title: "26 de de diciembre de 2025",
    text: `ya no sé qué más decir, ya no sé que más expresar, esto me vence, esto me gana y poco a poco voy perdiendo más y más

Hoy subiste una historia, te ves preciosa mi reina, te ves resplandeciente como siempre, que bonito verte así, es bonito verte llena de alegría, de paz, de amor, Dios te bendiga mi niña `,
    audioUrl: "/Adios/audio/amorviejo.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "27 de diciembre de 2025",
    text: `Hoy te vi, que bonita estás siempre, que hermosa presencia, que Perfecto tu ser, donde sea que estés destacas, se nota tu diferencia, eso también fue una de las cosas que también me enamoró de ti, tu diferencia frente a todas las demás personas, que bonito eso, lo que no se encuentra en cualquier persona, lo única que eres, que lindo todo tu ser.

Estoy trabajando en mi amor, en amarte desde lejitos, en amarte sin que sepas nada de mí, duele no poder mostrarte ese amor, pero no tengo de otra, es un amor muy lindo, es un amor muy tierno, es un amor lleno de respeto y cariño, en fin… ojalá te esté yendo excelente en toda tu vida mi amor, mereces el cielo entero `,
    audioUrl: "/Adios/audio/cumbiana.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },
   {
    title: "28 de de diciembre de 2025",
    text: `Hoy volví a ver tu perfil de Instagram, que hermosa eres, que sana, que paz transmites mi flaca hermosa, veo esas fotos y quiero regresar tanto el tiempo y volver a ese momento en el que te puedo besar toda la cara, en el que me miras toda la noche, en el que me cuentas todo y te cuento todo, veo esas fotos tuyas en la playa y recuerdo cuando dijiste que ojalá la próxima vez tuya en playa fuera junto a mí… en tu cumpleaños ese era mi regalo para ti, quería regalarte un viaje, aunque yo no hubiese ido contigo quería verte feliz por allá, al final mucha gente me dijo que no lo hiciera y pues terminé dándote otras cosas, pero sólo me imagino tu cara viendo un atardecer en la playa, quedándonos despiertos toda la noche hablando para ver el amanecer… 
    
    Hoy aún después de tanto tiempo todavía sueño contigo, todavía siento que toco tu piel, que tengo tu aroma, son solo recuerdos en mi mente pero te recuerdo tanto que siento a veces como si en realidad estuvieras aquí, el cómo te sobaba la espalda, el cómo te tocaba la carita…Dios qué difícil aceptar que no eres mi mujer, que no eres mi novia… cuando me imaginé mil maneras de pedirte matrimonio, cuando planeé tanto mi vida contigo, cuando imaginé tantos viajes juntos, tantas fechas especiales, una niña contigo…cuando quise vivir mi vida entera contigo…`,
    audioUrl: "/Adios/audio/vueltaalmundo.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "29 de diciembre de 2025",
    text: `Aunque duela, aunque me hierva la sangre, debo ir aceptando que no me quieres en tu vida, y es válido, pero me duele tanto el corazón… pero sé que te debo soltar… debo dejarte ir, debo dejarte libre, debo dejarte ser feliz aunque no sea conmigo, debo aprender a amarte desde lejos, debo aprender a amarte en silencio, debo aprender a amarte sin que tú lo sepas, debo aprender a amarte sin esperanzas de nada, debo aprender a amarte en la distancia, debo aprender a amarte en el olvido…`,
    audioUrl: "/Adios/audio/colapso.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },
   {
    title: "30 de de diciembre de 2025",
    text: `Desde lejitos

    Tuve que aprender que aunque no estés conmigo, verte feliz me hace feliz también. Hoy te mandé un almuerzo, ojalá lo hayas disfrutado bastante, vi que habías puesto que se te rompió la coca y aunque ya no estemos  juntos, desde lejitos puedo asegurarme que sigas bien, que sigas feliz. Sé muy bien que ese es tu restaurante favorito, cuanto te gusta la comida de allá y pues que mejor manera de alegrarte un poco que con tu comida favorita con tu bowl de yogur griego que te haces todos los días, con un cafecito frío jajaja… en fin mi kelly, ojalá hayas tenido un gran día, que te haya gustado mucho ese almuerzo y que te haya ido excelente en el trabajo, te amo mi niña hermosa `,
    audioUrl: "/Adios/audio/megustamegusta.mp3",
    bgColor: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "31 de diciembre de 2025",
    text: `Ganaste

No creí que en serio llegara este día y yo siguiera siendo un “extraño” más.

Después del 24 empecé a asimilar las cosas pero quería seguir con la esperanza de que volvieras a mí que al menos hoy pudiera recibir un mensaje tuyo que dijera que quieres empezar un nuevo año conmigo, que quieres parar lo caótico que fue este año y empezar de cero conmigo de nuevo, pero ya veo que no, por eso ganaste, ganaste por mucho, me ganaste, ya me tocó comprender que tú no quieres verme, que no quieres hablar conmigo, que no quieres estar conmigo, ya pude comprender que tú ya no me quieres… que tú ya me sacaste de tu mente, de tus pensamientos, que no me quieres en tu vida, ganaste… entendí que lo de nosotros fue hermoso, fue único, fui bendecido contigo, con tu presencia, con tu familia y le agradezco mucho a Dios por eso... 

En mi oración del día de hoy a la medianoche seguirás estando tú, porque te seguiré deseando lo mejor, seguiré agradeciendo por todo lo que vivimos y todo lo que me brindaste, pero también estará una petición… pediré por primera vez a Dios, que me quite ya este amor… que te saque de mi mente, que me dejes de afectar tanto, que pueda respirar bien al verte, que pueda ir de nuevo al gimnasio sin sentir ansiedad, que pueda sacarme este dolor, que pueda dejarte de amar… porque te busqué tanto, te insistí tanto y lo único que encontré fue que tú no quieres estar conmigo, recogí tantas veces mi amor, recogí tantas veces mis lágrimas del piso para entregártelos pero una y otra y otra vez lo único que quedaba eran cenizas de ese amor. 

Me voy sabiendo que morí en vida por ti mi kelly, que insistí tanto que mi mente no resistió, que luché hasta que mi cuerpo no dio para más, por eso ganaste, en este juego del amor tú ganaste, te seguiste con tu vida y me dejaste a un lado y perdí, no me importaba perder con tal de que fuera por ti, pero mi kelly, ya no doy más, ya no tengo más energía, ya no tengo más esperanza, ya no tengo más fe…

Te pido perdón por todo lo malo que hice en tu vida, siempre busqué darte paz, darte tranquilidad, darte amor y creo que lo logré porque estoy seguro de que ningún otro hombre te amará así como yo te amé, pero por ese amor que te tengo, me voy…

Recuerdo las primeras veces que salimos que nos estábamos conociendo y nos quedábamos en tu carro hasta la madrugada sonó una canción que nos encantaba a los dos… es irreal que una canción con la que se empezaron a dar los mejores y más bonitos días de mi vida, con esa misma canción me vaya a alejar de la persona que más amé, duele tanto todo esto, pero en algún momento dejará de hacerlo, en algún momento dejaré de buscarte, en algún momento dejaré de mirarte, de mirar tus fotos de recordarte tanto y dejaré de vivir en ese pasado, en ese “pudo ser”, dejaré de depender de esa mirada, en algún momento dejaré de amarte… ganaste mi kelly, ya me iré de tu vida, ya te dejaré seguir estando tranquila que sé que eso es lo que más quieres, ya no me volverás a ver porque… fuiste lo mejor que ha habido, lo más hermoso que llegó a mi vida, la persona que me enseñó que yo podía amar de verdad, que me llevó de nuevo por el camino de Dios, fuiste el amor de mi vida pero…

Hasta aquí llegué
 `,
    audioUrl:   "/Adios/audio/hasta-aqui-llegue.mp3",
    bgColor: "from-green-500/10 to-teal-500/10",
  },
]

export function AudioTextPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentItem = audioTexts[currentIndex]

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextItem = () => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setCurrentIndex((prev) => (prev + 1) % audioTexts.length)
  }

  const prevItem = () => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setCurrentIndex((prev) => (prev - 1 + audioTexts.length) % audioTexts.length)
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextItem()
    }
    if (touchStart - touchEnd < -75) {
      prevItem()
    }
  }

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-16">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative"
      >
        <Card
          className={`overflow-hidden border-2 shadow-2xl bg-gradient-to-br ${currentItem.bgColor} backdrop-blur-sm`}
        >
          <CardContent className="p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-4xl text-transparent md:text-5xl">
                {currentItem.title}
              </h2>
            </div>

            <div className="mx-auto mb-10 max-w-2xl">
              <p className="text-balance text-center font-medium leading-relaxed text-foreground/90 text-lg md:text-xl  whitespace-pre-line">
                {currentItem.text}
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={togglePlay}
                className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-xl transition-transform hover:scale-110"
              >
                {isPlaying ? <Pause className="h-7 w-7" /> : <Play className="ml-1 h-7 w-7" />}
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="font-mono font-semibold text-primary text-sm">
                {currentIndex + 1} / {audioTexts.length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          size="icon"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-0 h-12 w-12 rounded-full border-2 border-primary bg-card shadow-xl transition-all hover:scale-110 hover:border-secondary"
          onClick={prevItem}
          aria-label="Texto anterior"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -translate-y-1/2 top-1/2 right-0 h-12 w-12 translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-xl transition-all hover:scale-110 hover:border-secondary"
          onClick={nextItem}
          aria-label="Siguiente texto"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </Button>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {audioTexts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPlaying(false)
              if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
              }
              setCurrentIndex(index)
            }}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? "w-12 bg-gradient-to-r from-primary to-secondary shadow-lg"
                : "w-3 bg-primary/30 hover:bg-primary/60"
            }`}
            aria-label={`Ir al texto ${index + 1}`}
          />
        ))}
      </div>

      <audio ref={audioRef} src={currentItem.audioUrl} onEnded={() => setIsPlaying(false)} />
    </div>
  )
}

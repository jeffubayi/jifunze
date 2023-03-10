import { useNavigate } from "react-router-dom"
import { MdArrowBackIosNew } from "react-icons/md"

const PhaseThree = () => {
    const navigate = useNavigate()
    const sounds = [
        {
            letter: "j",
            sound: "j"
        },
        {
            letter: "v",
            sound: "v"
        },
        {
            letter: "w",
            sound: "w"
        },
        {
            letter: "x",
            sound: "x"
        },
        {
            letter: "y",
            sound: "y"
        },
        {
            letter: "z",
            sound: "z"
        },
        {
            letter: "zz",
            sound: "z"
        },
        {
            letter: "qu",
            sound: "qu"
        },
        {
            letter: "ch",
            sound: "ch"
        },
        {
            letter: "sh",
            sound: "sh"
        },
        {
            letter: "th",
            sound: "th"
        },
        {
            letter: "ng",
            sound: "ng"
        },
        {
            letter: "ai",
            sound: "ai"
        },
        {
            letter: "ee",
            sound: "ee"
        },
        {
            letter: "igh",
            sound: "igh"
        },
        {
            letter: "oa",
            sound: "oa"
        },
        {
            letter: "oo",
            sound: "oo"
        },
        {
            letter: "oo",
            sound: "ooo"
        },
        {
            letter: "ar",
            sound: "ar"
        },
        {
            letter: "or",
            sound: "or"
        },
        {
            letter: "ur",
            sound: "ur"
        },
        {
            letter: "ow",
            sound: "ow"
        },
        {
            letter: "oi",
            sound: "oi"
        },
        {
            letter: "ear",
            sound: "ear"
        },
        {
            letter: "air",
            sound: "air"
        },
        {
            letter: "ure",
            sound: "ure"
        },
        {
            letter: "er",
            sound: "er"
        }
    ]

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <header>    
            <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
            <h1>Double Letters</h1>
            </header>
            <div className="sound-container">
            {
                sounds.map((sound, index) => {
                    let audio = new Audio(`/sounds/${sound.sound}.m4a`)

                    const start = () => {
                        audio.play()
                      }
                    // get random item from alternatingColor
                    const randomElement = {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
                    // apply to below as style...   
                    return (<div className="sound" style={randomElement} onClick={start}><p>{sound.letter}</p></div>);
                })
            }
            </div>
        </section>
     );
}
 
export default PhaseThree;
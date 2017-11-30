import React, { Component } from 'react'
import '../Styles/Razzer.css'
import Kubica from '../Images/kubica.jpg'
import Kubica14 from '../Images/kubica2014.jpg'
import kubicaBarNone2 from '../Images/kubicaBarNone2.png'

class Razzer extends Component {
  render() {
    return (
      <div className="razzerTop">
        <div className="razzerOne">
          <p className="razzerTwoHeading">Point here for Kubica&#39;s wreck</p>
          <p>
            On 6 February 2011, Kubica was seriously injured in a crash at the Ronde di Andora rally, in which his right
            forearm was partially severed.[1] He was taking part in the rally for personal enjoyment.[2] Kubica told
            Italian newspaper La Gazzetta dello Sport in a bedside interview that he could feel the fingers in his right
            hand and was determined to make a swift return to Formula One in 2011.[3][4] Since his return to good
            health, however, he initially stated that a return to Formula One would be "nearly impossible" because of
            his injury.[1][5] Since then, he has taken part in two tests with his former team Renault, admitting that a
            Formula One return in the near future was not an impossibility, with Renault team boss Cyril Abiteboul
            labelling Kubica as an 'option' for 2018.
          </p>
          <img src={Kubica14} className="Kubica14-image" alt="kub" />
        </div>
        <div className="razzerTwo">
          <p className="razzerTwoHeading">Point here for Kubicatasticism</p>
          <p className="razzerTwoBody">
            Robert Kubica set the fastest time by a Williams driver at this week&#39;s Abu Dhabi test, as the team try
            to establish whether to sign him for 2018. Kubica is aiming to return to Formula 1 seven years after
            suffering life-changing injuries in a rally accident. The 32-year-old Pole set a best time 0.5 seconds
            quicker than Renault reserve driver Sergey Sirotkin, who is also being assessed by Williams. Kubica was
            0.1secs faster than race driver Lance Stroll on Tuesday. Former BMW Sauber and Renault driver Kubica, who
            has only partial movement in his right arm, set his fastest time during the final two hours of running on
            Wednesday, after Sirotkin took the wheel for the morning and half the afternoon session. Kubica completed
            100 laps - nearly two race distances - during half a day&#39;s running on Tuesday, his first in the 2017
            Williams car, before handing over to Stroll for the afternoon. On Wednesday, his deficit to Ferrari&#39;s
            Sebastian Vettel, who set the fastest time of the day at the end-of-season test aimed at trying out
            Pirelli&#39;s 2018 range of tyres, was within 0.1secs of that of the fastest Williams driver Felipe Massa in
            qualifying at the Abu Dhabi Grand Prix last weekend. Kubica, like Vettel, was using the fastest 'hyper-soft'
            tyre when he set his time, while Sirotkin set his best time on the 'soft', which is three grades harder.
          </p>
          <img src={Kubica} className="Kubica-image" alt="kub" />
        </div>
        <div className="razzerThree">
          <p>Point here for Truth</p>
          <img src={kubicaBarNone2} className="KubicaBarNone-image" alt="kub" />
        </div>
      </div>
    )
  }
}

export default Razzer
